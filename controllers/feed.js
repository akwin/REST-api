exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ 
            _id: '1',
            title: 'First Post',
            content: 'This is the first post.',
            imageUrl: 'images/poppies.png',
            creator: {
                name: 'Akanksha'
            },
            createdAt: new Date()
        }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //console.log(title, content);
    //create post in database
    res.status(201).json({
        message: 'Your post was created successfully!',
        post: {
            _id: new Date().toISOString(), 
            title: title,
            content: content,
            creator: {
                name: 'Akanksha'
            },
            createdAt: new Date()
        }
    });
};

