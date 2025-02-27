require('dotenv').config()

const config = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    uri: process.env.URI
}

module.exports = config