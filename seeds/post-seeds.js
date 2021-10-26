import { Post } from '../models';

const postData = [
    {
        title: "Taskmaster goes public!",
        post_text: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_text: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_text: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "'Handlebars Template Engine'",
        post_text: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.',
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_text: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    },
    {
        title: 'Express.js',
        post_text: 'Express.js is an easy way to set up a server with JavaScript. With a few lines of code, you can be on your way to hosting a dynamic webpage.',
        user_id: 5,
    },
]
const seedPosts = () => Post.bulkCreate(postData);
export default seedPosts;