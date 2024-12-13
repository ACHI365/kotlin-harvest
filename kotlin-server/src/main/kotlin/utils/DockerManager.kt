package utils

import java.nio.charset.StandardCharsets.UTF_8
import java.nio.file.Files
import java.nio.file.Path
import kotlin.io.path.Path


class DockerManager(imgName: String, containerId: String = "") {

    private var imageName: String
    private lateinit var containerID: String

    init {

        if (imgName.isBlank()) {

            throw IllegalArgumentException("Docker image name is required.")
        }

        imageName = imgName.trim()

        if (containerId.isNotBlank()) {

            containerID = containerId.trim()
        }
    }


    fun setContainerID(containerID: String) {

        this.containerID = containerID.trim()
    }


    fun setImageName(imageName: String) {

        this.imageName = imageName.trim()
    }


    private fun execute(command: String): Process {

        return Runtime.getRuntime().exec(command)
    }


    private fun executeAndGetResult(command: String): String {

        val executedCommand = execute(command)
        val executionResult = String(executedCommand.inputStream.readBytes(), UTF_8)

        if (executedCommand.waitFor() == 1) {

            val errTxt = String(executedCommand.errorStream.readBytes(), UTF_8)
            System.err.println("Error with docker: $errTxt")
        }

        return executionResult
    }


    fun isImageExists(): Boolean {

        val executeResult = executeAndGetResult("docker images -aq ${this.imageName}")
        return executeResult.isNotBlank()
    }

    fun isActiveContainerExists(): Boolean {

        if (this.containerID == null || this.containerID.isBlank()) {

            return false
        }

        val executeResult = executeAndGetResult("docker ps -aqf id=${this.containerID}")
        return executeResult.isNotBlank()
    }

    fun isActiveContainerExists(containerID: String): Boolean {

        if (containerID.isBlank()) {

            return false
        }

        val executeResult = executeAndGetResult("docker ps -aqf id=${this.containerID}")
        return executeResult.isNotBlank()
    }


    fun buildNewImage(imagePath: Path) {

        // Validate image directory existence
        if (!Files.isDirectory(imagePath)) {

            throw IllegalArgumentException("Image directory not exists: $imagePath")
        }

        // Build the Docker image
        val commandTxt = "docker build -t ${this.imageName} $imagePath"
        val executeResult = execute(commandTxt)

        if (executeResult.waitFor() == 1) {

            val errTxt = String(executeResult.errorStream.readBytes(), UTF_8)
            System.err.println("Error docker image has not built: $errTxt")

        } else {

            println("Docker image [$imageName] successfully created.")
        }
    }


    fun runImage(): String {

        // Check if the Docker image exists
        if (!isImageExists()) {

            throw RuntimeException("Docker image not exists.")
        }

        // Run the Docker image
        val commandTxt = "docker run --detach ${this.imageName}"
        val executeResult = execute(commandTxt)

        val dockerContainerID = String(executeResult.inputStream.readBytes(), UTF_8)

        if (executeResult.waitFor() == 1) {

            val errTxt = String(executeResult.errorStream.readBytes(), UTF_8)
            System.err.println("Error docker image has not run: $errTxt")
        }

        return dockerContainerID
    }


    fun executeCommandInContainer(command4Container: String): String {

        // Check if the Docker container exists
        if (!this.isActiveContainerExists()) {

            throw RuntimeException("Docker container not exists.")
        }

        // Execute the command within the Docker container
        val commandTxt = "docker exec -i ${this.containerID} $command4Container" // add winpty for docker desktop

        val executeResult = execute(commandTxt)
        val executeResultTxt = String(executeResult.inputStream.readBytes(), UTF_8)

        if (executeResult.waitFor() == 1) {

            val errTxt = String(executeResult.errorStream.readBytes(), UTF_8)
            System.err.println("Failure result: $errTxt")

        } else {

            println("Command successfully executed.")
        }

        return executeResultTxt
    }

    fun copyFileFromContainer(virtualPath: String, localPath: String) {

        if (!this.isActiveContainerExists()) {

            throw RuntimeException("Docker container not exists.")
        }

        println("Copying file from docker container command:")

        val commandTxt = "docker cp $containerID:$virtualPath $localPath"
        val executeResult = execute(commandTxt)

        if (executeResult.waitFor() == 1) {

            val errTxt = String(executeResult.errorStream.readBytes(), UTF_8)
            System.err.println("Error at copying: $errTxt")

        } else {

            println("File created: ${Path(localPath).fileName}")
            println("File successfully copied.")
        }
    }


    override fun toString(): String {

        return "DockerManager(imageName='$imageName', containerID='$containerID')"
    }
}
