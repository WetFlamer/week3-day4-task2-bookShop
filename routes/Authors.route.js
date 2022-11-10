const { Router } = require("express");
const { authorsController } = require("../controllers/Authors.controller");

const router = Router();
router.post('authors/admin/add', authorsController.addAuthor)
module.exports = router