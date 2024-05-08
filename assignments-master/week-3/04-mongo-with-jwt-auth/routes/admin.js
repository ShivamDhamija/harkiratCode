const { Router } = require("express");
const jwt =require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin");
const { User } = require("../db");
const router = Router();
const {JWT_Secret}=  require("../config")
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

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const found = await User.findOne({username,password});
    if(!found)
        res.status(403).json({"mgs":"username or pass is in correct"})
    const token= jwt.sign({username,password},JWT_Secret);
    res.json({token})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;