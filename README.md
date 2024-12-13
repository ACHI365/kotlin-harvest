# Usage
 - npm ([Node.js](https://nodejs.org/en)) (version ^10.2.3);
 - [Kotlin](https://kotlinlang.org/) (version ^1.9.255-SNAPSHOT (JRE ^17.0.9+8)), using JetBrains - IntelliJ;
 - MySQL, using [XAMPP](https://www.apachefriends.org/);
 - [docker](https://www.docker.com/) (version 24.0.7, build afdd53b4e3);
    [docker-desktop](https://www.docker.com/products/docker-desktop/)
 - [theHarvester](https://github.com/laramies/theHarvester) cloned;

# Installation
## Pulling Docker Images

### Step 1: Authenticate with Docker Hub
Run the following command to log in to Docker Hub:

```bash
docker login -u yourusername -p yourpassword
```

After that pull each project
```bash
docker pull yourusername/react-server:latest
```
```bash
docker pull yourusername/kotlin-server:latest
```
```bash
docker pull yourusername/theharvester:latest
```

Just using docker-compose-build followed by docker-compose-up should work, but just in case I suggest following installation as well

## Docker

 - Launch `docker-dekstop`. Sometimes, without it, Docker methods do not work well.


 - To handle the created Docker container ID to work with theHarvester in the Kotlin server in two ways:

1) Enter the container ID and paste it into a file:
`/kotlin-server/kotlin-server/src/main/kotlin/Main.kt`

or

 - Set it as an argument in the project running command. In my case: InteliJ -> Run/Debug Configurations -> Program arguments.

 - In order to run the docker files on harvester, use following commands
```bash
docker build -t theharvester-cli .
```

```bash
docker run -d --name theharvester-container theharvester-cli
```

## MySQL - Database

 - Create a user and set username and password copied from the environment file:
`/kotlin-server/kotlin-server/.env`;

 - Create database `domain_researches`;

 - Import/Create a table using .sql file:
`/Database/domain_researches.sql`

# Run servers

## Koltin (ktor)
 - Run InteliJ (in my case) File -> Open -> "/kotlin-server/kotlin-server";
 - Run project (Launcher - Main.kt);
 - It starts building the required Docker image(s); 
 - Now server listening on `localhost:8080`;

## React
 - Change directory to `/react-server` folder;
 - install dependencies -- npm install
 - To launch the React server
```bash
npm start
```
 - Now server listening on `localhost:3000`;

