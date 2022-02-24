const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const breadSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String,
    default: 'http://placehold.it/500x500.png'
  },
  baker: {
    type: String,
    enum: ['Shiv', 'Roman', 'Logan', 'Greg', 'Tom', 'Kendall', 'Conner', 'Willa']
  }
})

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread