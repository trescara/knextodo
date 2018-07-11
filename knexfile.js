module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/galvanizetodo'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}