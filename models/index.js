const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

Post.belongsTo(User, {
    foreginKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreginKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreginKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post };