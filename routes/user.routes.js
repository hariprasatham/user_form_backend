const express = require("express")
const router = express.Router()
const { addUser, updateUser, getUsers, getUser, deleteUser } = require("../controllers/user.controller")


router.route("/").post(addUser).get(getUsers)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)

module.exports = router