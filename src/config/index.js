var configValues = require('./config');

module.exports = {
  getDbConnectionString: function () {
    return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@todolist.okf9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }
}