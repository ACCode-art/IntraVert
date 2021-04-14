const express = require('express');
const mongoose = require('Mongoose');

require('dotenv').config();

const pw = process.env.PASSWORD;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

mongoose.connect(
  `mongodb+srv://blahem:${pw}@intravert.fmhhz.mongodb.net/Messages`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const messageSchema = {
  name: String,
  message: String,
};

const Message = mongoose.model('Message', messageSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let newMessage = new Message({
    name: req.body.inputName,
    message: req.body.inputMessage,
  });

  newMessage.save();
  res.redirect('/');
});

app.listen(9999, () => {
  console.log('server running at port 9999');
});
