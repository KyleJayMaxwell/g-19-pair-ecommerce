module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cwatches'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};