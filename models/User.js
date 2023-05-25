const { MongoClient } = require('mongodb');

const _uri = "mongodb+srv://<username>:<pass>@moviesapp1.wfog0le.mongodb.net/";
const client = new MongoClient(_uri, { useNewUrlParser: true, useUnifiedTopology: true });

class User {
  constructor(userData) {
    this.userData = { ...userData };
  }

  async save() {
    try {
      await client.connect();
      const db = client.db('sample_mflix').collection('users');
      await db.insertOne(this.userData);
      // Additional operations or error handling can be done here
    } catch (error) {
      console.error('Error saving user:', error);
    } finally {
      client.close(); // Close the connection after the operation completes
    }
  }
}

const user = new User({
  username: 'raza',
  email: 'shafaqat@gmail.com',
  password: 'Raza1234',
  first_name: 'shaf',
  last_name: 'raza'
});

user.save();
