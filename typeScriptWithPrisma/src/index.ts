import { number } from "zod";
import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();
app.use(express.json());

app.get("/",async(req,res)=>{
	console.log("get call came");
	const users =await prisma.user.findMany()
	console.log("found :"+users);
	res.json(users);
});
app.post("/", async (req, res) => {
    try {
        console.log("Post call received");        
        const id: number = req.body.id;
        const name: string = req.body.name;
        const email: string = req.body.email;

        // Validate the request body here if necessary
        
        const user = await prisma.user.create({
            data: {
                id,
                name,
                email
            }
        });

        console.log("User added:", user);

        if (user) {
            res.status(201).json(user); // Send back the created user
        } else {
            res.status(500).json({ error: "Failed to create user" });
        }
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "An error occurred while creating user" });
    }
});

app.listen(3000,()=>
{console.log("asa")});