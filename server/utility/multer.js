const multer = require("multer");
const path = require("path");

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext != ".jpg" && ext != ".png" && ext != ".jpeg") {
//       cb(new Error("File type is not supported"));
//       return;
//     }
//     cb(null, true);
//   },
// });

//specify storage engine

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../upload/");
//   },
// });
