const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allownull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;