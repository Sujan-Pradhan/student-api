const multer = require("multer");
const fs = require("fs"); //to which folder
const path = require("path"); //to read extension

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fileDestination = "public/uploads/";
    //check if directory existss
    if (!fs.existsSync(fileDestination)) {
      fs.mkdirSync(fileDestination, { recursive: true });
      cb(null, fileDestination);
    } else {
      cb(null, fileDestination);
    }
  },

  filename: (req, file, cb) => {
    let filename = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    let ext = path.extname(file.originalname);
    cb(null, filename + "_" + Date.now() + ext);
  },
});

let imageFilter = (req, file, cb) => {
  if (
    !file.originalname.match(/\.(jpg|png|jpeg|svg|jfif|JPG|PNG|JPEG|SVG|JFIF)$/)
  ) {
    return cb(new Error("Upload image file only"), false);
  } else {
    cb(null, true);
  }
};

let upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 2000000, //in kb
  },
});

module.exports = upload;
