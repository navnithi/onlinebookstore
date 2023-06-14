 const mongoose = require("mongoose")
 mongoose.connect(
   "mongodb+srv://onlinebookstore:onlinebookstore@cluster0.htdgblv.mongodb.net/crudop?retryWrites=true&w=majority"
 ).then((res) => console.log("Connected"))