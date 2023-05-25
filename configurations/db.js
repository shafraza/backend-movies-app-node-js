const { MongoClient } = require('mongodb');

const _uri = "mongodb+srv://username:pass@moviesapp1.wfog0le.mongodb.net/";
const client = new MongoClient(_uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbCon = (coll, cb) => {
  client.connect()
    .then(() => {
      const db = client.db('sample_mflix').collection(coll);
      cb(db);
    })
    .catch((error) => {
      console.error(error);
    });
};

dbCon('movies', async (db) => {
  try {
    const movie = await db.findOne();
    // console.log(movie);
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
});

module.exports = dbCon;
