const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} =  require("../db/index")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const found = await Admin.findOne({
        username,
        password
    })
    if(found)
        res.status(403).json({message : "Admin already exist"})
    await Admin.create({
        username,
        password
    });
    res.json({message: 'Admin created successfully'});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const couser = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    res.json({message: 'Course created successfully', courseId : couser._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses= await Course.find({});
    res.json(courses);
});

module.exports = router;