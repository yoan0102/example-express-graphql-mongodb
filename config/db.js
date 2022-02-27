const { connect } = require('mongoose')

const dbConnect = async () => {
  try {
    await connect(process.env.MONGODB_URI)
    console.log('DB online')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { dbConnect }
