exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ 
            title: 'First Post',
            content: 'This is the first post.'
        }]
    });
};

exports.postPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log(title, content);
    //create post in database
    res.status(201).json({
        message: 'Your post was created successfully!',
        post: {
            id: new Date().toISOString(), 
            title: title,
            content: content
        }
    });
};