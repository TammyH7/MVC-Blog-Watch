const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "So awesome to see more women in tech Girl Power!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "WOW! OK. We'll see what happens :)",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Tech doing good in the world!",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Groundbreaking stuff, going to follow this post closely.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Groundbreaking stuff, going to follow this post closely.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "Hmmm, I'm a bit skeptical.",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Right, you're entitled to your own opinion.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "Awesome, I'd like to know more.",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;