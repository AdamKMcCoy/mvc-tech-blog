const User = require('./User').default;
const Post = require("./Post").default;
const Comment = require("./Comment").default

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
    
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks: true
    
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
});

User.hasMany(Comment, {
foreignKey: 'user_id',
onDelete: 'cascade',
hooks:true
});
 
Post.hasMany(Comment, {
foreignKey: 'post_id',
onDelete: 'cascade',
hooks:true
});
module.exports = { User, Post , Comment};