module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'a0ed4e75-a14f-444c-9128-ca35ce697e72',
  DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/bookmarks',
}