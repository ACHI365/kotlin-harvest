package utils

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

import java.io.File
import java.net.Socket
import java.net.UnknownHostException
import java.util.UUID

import kotlin.io.path.Path

class DomainResearcher {


    suspend fun handleHome(call: ApplicationCall, isBusy: BusyManager, dockerManager: DockerManager) {

        val startTimer = System.currentTimeMillis()

        val domain = call.request.queryParameters["domain"]

        if (domain == null || !isValidDomain(domain)) {

            call.response.status(HttpStatusCode.BadRequest)
            call.respondText("Invalid domain", ContentType.Text.Html)

            return
        }

        if (!checkDomainExists(domain)) {
            call.response.status(HttpStatusCode.BadRequest)
            call.respondText("Domain not exist", ContentType.Text.Html)
            return
        }

        if (isBusy.checkIsBusy()) {

            return withContext(Dispatchers.IO) {
                Socket().close()
            }

        } else {

            isBusy.setBusyStatus(true)

            println("Start working in docker")

            dockerManager.setImageName("theharvester")

            if (!dockerManager.isActiveContainerExists()) {
                dockerManager.setContainerID(dockerManager.runImage())
            }

            val myUuid = UUID.randomUUID()
            val researchID = "$myUuid-$domain"
            val fileName = "$researchID.json"

            val renderDataCommand = "theharvester -d $domain -l 500 -b duckduckgo -f $fileName"
            dockerManager.executeCommandInContainer(renderDataCommand)

            val path = Path(System.getProperty("user.dir"))
                .resolve("src")
                .resolve("main")
                .resolve("kotlin")
                .resolve("data")
                .resolve(fileName)

            dockerManager.copyFileFromContainer(fileName, path.toString())

            println("End working in docker")

            val domainData: List<String> = File(path.toString()).useLines { it.toList() }

            DatabaseManager.connection()

            val stopTimer = System.currentTimeMillis()
            val milsSecLeft = stopTimer - startTimer

            DatabaseManager.insertHistory(
                researchID, domain, domainData.toString(), milsSecLeft
            )

            isBusy.setBusyStatus(false)

            // Prepare the response JSON
            val response = "{\"executeTime\": $milsSecLeft, \"items\": ${domainData}}"

            call.respond(response)

            try {
                val fileToDelete = File(path.toString())
                if (fileToDelete.exists() && fileToDelete.delete()) {
                    println("File $fileName successfully deleted.")
                } else {
                    println("Failed to delete file $fileName.")
                }
            } catch (e: Exception) {
                println("Error occurred while deleting the file: ${e.message}")
            }
        }
    }


    private fun isValidDomain(domain: String?): Boolean {

        val regex = "^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$"
        return domain != null && Regex(regex).containsMatchIn(domain.toString())
    }


    private fun checkDomainExists(domain: String): Boolean {

        return try {

            val ipAddresses = java.net.InetAddress.getAllByName(domain)
            ipAddresses.isNotEmpty()

        } catch (e: UnknownHostException) {

            e.printStackTrace()
            false
        }
    }
}
