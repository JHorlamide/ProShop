import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
   destination(req, file, cb) {
      cb(null, './uploads')
   },

   filename(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
   }
});


function checkFileType(file, cb) {
   const fileTypes = /jpg|jpeg|png/
   const fileExtName = fileTypes.test(path.extname(file.originalname).toLowerCase());
   const mimetype = fileTypes.test(file.mimetype);

   if (fileExtName && mimetype) {
      return cb(null, true);
   } else {
      cb("Only images are allowed!")
   }
};

const upload = multer({
   storage,
   fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
   }
});

router.post('/', upload.single('image'), (req, res) => {
   console.log(req.file.path)
   res.send(`/${req.file.path}`)
});


export default router;