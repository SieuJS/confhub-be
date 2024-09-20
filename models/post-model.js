const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database');

const Post = sequelize.define('Post', {
    tid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    post_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    timestamps: false,
    tableName: 'posts'
});

Post.sync({alter: 'true'}).then(() => {console.log('Post table created')});

module.exports = Post;