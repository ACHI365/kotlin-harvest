import utils.BusyManager

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.CORS
import io.ktor.server.response.*
import io.ktor.server.routing.*

import org.apache.log4j.BasicConfigurator
import utils.DatabaseManager
import utils.DockerManager
import utils.DomainResearcher
import java.lang.RuntimeException
import kotlin.io.path.Path


fun main(args: Array<String>) {
    BasicConfigurator.configure()

    val handleDockerID = "36454b213aea" // Enter docker container here
    val containerID = if (args.isEmpty() || args[0].isBlank()) handleDockerID else args[0]


    val dockerManager = DockerManager("theharvester", containerID)

    if (!dockerManager.isImageExists()) {

        val imagePath = Path(System.getProperty("user.dir"))
            .resolve("..")
            .resolve("..")
            .resolve("docker")
            .resolve("theHarvester")

        dockerManager.buildNewImage(imagePath)
        dockerManager.setContainerID(dockerManager.runImage())
    }

    //# ---------------------------------------------------------------------------- #

    // Throw an exception if the Docker container ID is not provided
    if (containerID.isBlank()) throw RuntimeException("Docker container has not been selected.")

    val busyManager = BusyManager()

    embeddedServer(Netty, 8080) {

        install(CORS) {

            allowHost("localhost:3000")
            allowHeader(HttpHeaders.ContentType)
        }

        routing {

            get("/domain-data") {
                val domain = call.request.queryParameters["domain"]

                if (domain.isNullOrEmpty()) {
                    println("Error: Missing or empty 'domain' query parameter")
                    call.respond(HttpStatusCode.BadRequest, "Missing or invalid domain parameter")
                }
                DomainResearcher().handleHome(call, busyManager, dockerManager)
            }

            get("/history") {

                DatabaseManager.connection()
                call.respond(DatabaseManager.getHistory().toString())
            }
        }

    }.start(wait = true)
}
