const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user1:OV3OVmsukbo6720i@cluster0.ctsk3oc.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}