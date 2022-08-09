const router = require("express").Router();
const CommentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");

router.use("./comment", CommentRoutes);
router.use("./post", postRoutes);
router.use("./user", userRoutes);

module.exports = router;