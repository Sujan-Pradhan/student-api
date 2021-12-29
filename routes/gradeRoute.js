const express = require("express");

const {
  postGrade,
  gradeList,
  gradeDetails,
  updateGrade,
  deleteGrade,
} = require("../controllers/gradeController");

const router = express.Router();

router.post("/postgrade", postGrade);
router.get("/gradelist", gradeList);
router.get("/gradedetails/:id", gradeDetails);
router.put("updategrade/:id", updateGrade);
router.delete("/deletegrade/:id", deleteGrade);

module.exports = router;
