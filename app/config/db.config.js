module.exports = {
 
   HOST: "ep-wispy-cake-a4flimu8.us-east-1.aws.neon.tech:5432",
  USER: "default",
  PASSWORD: "HQyD6kMEYq4K",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
