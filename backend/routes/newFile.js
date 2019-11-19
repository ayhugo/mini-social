const PostController = require('../controllers/post');
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/multer");
const { router } = require("./posts");
router.put("/:id", checkAuth, extractFile, PostController.updatePost);
