const express = require('express')
const app = express()

const ParcelBundler = require('parcel-bundler')

const bundler = new ParcelBundler('./index.html')

app.use(bundler.middleware())

app.listen(5555, () => {
  console.log("STARTED!")
})
