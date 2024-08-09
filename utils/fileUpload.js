const multer = require("multer");

const File_Type = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValidFormat = File_Type[file.mimetype];
    let uploadError = new Error("Format image is not valid!");

    if (isValidFormat) {
      uploadError = null;
    }

    cb(uploadError, "public/images");
  },

  filename: (req, file, cb) => {
    const extention = File_Type[file.mimetype];
    const uniqueName = `${file.fieldname}-${Date.now()}.${extention}`;

    cb(null, uniqueName);
  },
});

exports.uploadOption = multer({ storage: storageFile });
