exports.studentValidation = (req, res, next) => {
  //student_name from  what we write after req.body.
  req.check("student_name", "Student name is required").notEmpty();
  req.check("email", "Student email is required").notEmpty();
  req
    .check("phone", "Phone number required")
    .notEmpty()
    .isNumeric()
    .isLength({
      min: 10,
      max: 10,
    })
    .withMessage("Phone only contains numeric value and must be 10 digits");
  req.check("address", "Address is required").notEmpty();
  req
    .check("student_description", "Description required")
    .notEmpty()
    .isLength({
      min: 30,
    })
    .withMessage("Description must be minimum of 30 characters");
  req.check("grade", "Grade is required").notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    const showError = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: showError });
  }
  next();
};
