const mongoose = require("mongoose");

mongoose.connect(<need to databes details>);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
