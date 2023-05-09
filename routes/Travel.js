const express = require('express')
const travelapi = require("../Api/Travel")

const travel = express.Router()
travel.route("/travel").get(travelapi.apicontroller);

module.exports = travel;