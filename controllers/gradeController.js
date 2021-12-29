const Grade = require("../models/gradeModel");

exports.demoFunction = (req, res) => {
  res.send("This is accessed from controllers");
};

//to post grade

exports.postGrade = async (req, res) => {
  let grade = new Grade({
    grade_name: req.body.grade_name,
  });
  grade = await grade.save();
  if (!grade) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
  res.send(grade);
};

//to show all grades
exports.gradeList = async (req, res) => {
  let grade = await Grade.find();
  if (!grade) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
  res.send(grade);
};

//to show single grade

exports.gradeDetails = async (req, res) => {
  const grade = await Grade.findById(req.params.id);
  if (!grade) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
  res.send(grade);
};

//to update grade
exports.updateGrade = async (req, res) => {
  const grade = await Grade.findByIdAndUpdate(
    req.params.id,
    { grade_name: req.params.grade_name },
    { new: true }
  );
  if (!grade) {
    return res.status(400).json({ error: "Something went wrong..." });
  }
  res.send(grade);
};

//to delete grade
exports.deleteGrade = (req, res) => {
  Grade.findByIdAndDelete(req.params.id)
    .then((grade) => {
      if (!grade) {
        return res.status(400).json({ error: "Grade not found" });
      } else {
        return res.status(200).json({ message: "Grade deleted" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};
