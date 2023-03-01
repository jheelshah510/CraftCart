const multer = require("multer");
// const path = require("path");

// module.exports = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../upload/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, new Date().toISOString() + "-" + file.originalname);
//     },
//   }),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext != ".jpg" && ext != ".png" && ext != ".jpeg") {
//       cb(new Error("File type is not supported"));
//       return;
//     }
//     cb(null, true);
//   },
// }).array("uploadedImages", 5);

//specify storage engine

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../upload/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(
      {
        errmsg: "Unsupported file formate",
      },
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
