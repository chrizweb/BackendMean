const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/users_db',{
  useUnifiedTopology:true,
  useNewUrlParser:true
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err))
