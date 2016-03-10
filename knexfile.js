module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cwatches',
    seeds: {
      directory: './seeds/'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};