const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const found = await User.findOne({
        username,
        password
    });
    if(found)
        res.status(403).json({"msg":"User already exist"});
    await User.create({
        username,
        password
    });
    res.json({message: 'User created successfully'});
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({courses:courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    await User.updateOne({
        username : req.headers.username
    },{
        "$push":{
            purchasedCourses : courseId
        }
    });
    res.json("course purchased");
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    })    
    const course = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });
    res.json({course:course});
});

module.exports = router