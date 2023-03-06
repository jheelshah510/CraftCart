const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
require("dotenv").config();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../upload/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// exports.upload = multer({ storage });

// export const uploadS3 = () =>
//   multer({
//     storage: multerS3({
//       s3: s3,
//       bucket: "craftcart21",
//       acl: "public-read",
//       metadata: function (req, file, cb) {
//         cb(null, { fieldName: file.fieldname });
//       },
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString());
//       },
//     }),
//   });

const s3 = new aws.S3({
  accessKeyId: process.env.S3Access_Key,
  secretAccessKey: process.env.S3Secret_Access_Key,
  region: process.env.S3Bucket_Region,
});

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "craftcart21",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
  limits: { fieldSize: 25 * 1024 * 1024 },
});

// exports.uploadImage = (req, res, next) => {
//   console.log(req.files);
//   uploadS3().single("image");
// };
