const router = require('express').Router();
const {createNewPost, deletePost, getPost, getAllPost} = require('../controllers/video');

router.post("/", createNewPost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getAllPost);

module.exports = router;