const mongoose = require('mongoose');

const url = "mongodb+srv://vanimishra22:Vani2911@cluster0.q04sghl.mongodb.net/newbackend?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;