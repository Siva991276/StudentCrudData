const express = require("express");
const router = express.Router();

const StudentController = require("../Controller/StudentController");

router.post("/adddata", StudentController.CreateStudent);
router.get("/showdata", StudentController.getAllStudentData);
router.get("/singledata/:id", StudentController.getSingleData);
router.put("/update/:id", StudentController.updateData);
router.delete("/delete/:id", StudentController.deleteStudent);

module.exports = router;
