const { Post } = require('../models');

const postData = [
    {
        title: 'This is the first example post',
        content: 'Wellcome to the test blog',
        user_id: 1,
    },
    {
        title: 'What you can find here?',
        content: 'Here you can found the newest tech related posts',
        user_id: 2,
    },
    {
        title: 'What is another use of the site?',
        content: 'You can share tech experiences good and the bad ones',
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;