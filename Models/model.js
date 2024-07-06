// interacts with the mongo db using mongoose

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongoData'); // always localhost num but the /mongoData is the name of the db 
}

main().catch(err => console.log(err));

const dataSchema = new mongoose.Schema({ // defining the struc for the db document 
  content: String,
  authorId: Boolean,
  timestamp: Date,
})

const dataItem = mongoose.model('data', dataSchema) // dataItem is a document instance to use as JS obj, data is the name of the collection in the db

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const userItem = mongoose.model('user', userSchema) // ueser is the name of the collection in the db

module.exports = {dataItem , userItem}

