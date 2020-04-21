const {validationResult} = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    Post.find()
    .then(posts => {
        res.status(200).json(
            {message: 'Posts fetched successfully', 
            posts: posts
        });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed!');
        error.statusCode = 422;
        throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    //console.log(title, content);
    //create post in database
    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'images/poppies.png',
        creator: { name: 'Akanksha' }
    });
    post.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Your post was created successfully!',
            post: result
        });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
    .then(post => {
        if (!post) {
            const error = new Error('The post was not found.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Post incoming', post: post });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};