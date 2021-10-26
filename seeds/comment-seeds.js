import { Comment } from '../models';
const commentData = [{
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "consectetur adipiscing elit",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "sed do eiusmod tempor incididunt",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Lorem ipsum dolor sit amet consectetur",
        user_id: 4,
        post_id: 4        
    },
    {
        comment_text: "molestiae quas vel sint commodi repudiandae",
        user_id: 5,
        post_id: 5
    }
];
const seedComments = () => Comment.bulkCreate(commentData);
export default seedComments;