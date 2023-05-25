const multer = require('multer');
const path = require('path');
const router = require('express').Router();
const {createNewPost, deletePost, getPost, getAllPost} = require('../controllers/video');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/videos');
    },
    filename: function (req, file, cb) {
      cb(null, 'video' + Date.now() + path.extname(file.originalname));
    }
});
  
const upload = multer({ storage: storage });

router.post("/", upload.single('video'), createNewPost);
router.delete("/:id", deletePost);
router.get("/", getAllPost);
router.get("/:id", getPost);

module.exports = router;