const Student = require("../models/studentModel");

//insert student
exports.postStudent = async (req, res) => {
  let student = new Student({
    student_name: req.body.student_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    student_description: req.body.student_description,
    student_image: req.file.path,
    grade: req.body.grade,
  });
  student = await student.save();
  if (!student) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(student);
};

//show student
exports.studentList = async (req, res) => {
  const student = await Student.find();
  if (!student) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(student);
};

//show single student

exports.studentDetails = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(student);
};

//update student
exports.studentUpdate = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      student_name: req.body.student_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      student_description: req.body.student_description,
      student_image: req.body.student_image,
      grade: req.body.grade,
    },
    { new: true }
  );
  if (!student) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(student);
};

//delete student
exports.studentDelete = (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((student) => {
      if (!student) {
        return res.status(400).json({ error: "Student not found" });
      } else {
        return res.status(200).json({ message: "Student Deleted:" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};
