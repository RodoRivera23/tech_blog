const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Protecting children online is one of the most important challenges facing the technology industry today. At Meta, we want young people to have safe, positive experiences online and we’ve spent a decade developing tools and policies designed to protect them',
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: 'Today at Meta Connect, in partnership with EssilorLuxottica, we announced our next-generation Ray-Ban Meta smart glasses collection',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'This is an example of a comment inside a post',
        user_id: 3,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;