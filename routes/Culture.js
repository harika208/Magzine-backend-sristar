const express = require('express')
const cultureapi = require("../Api/Culture")

const culture = express.Router()
culture.route("/culture").get(cultureapi.apicontroller);

module.exports = culture;