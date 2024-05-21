"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    console.log("get call came");
    const users = await prisma.user.findMany();
    console.log("found :" + users);
    res.json(users);
});
app.post("/", async (req, res) => {
    try {
        console.log("Post call received");
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const user = await prisma.user.create({
            data: {
                id,
                name,
                email
            }
        });
        console.log("User added:", user);
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(500).json({ error: "Failed to create user" });
        }
    }
    catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "An error occurred while creating user" });
    }
});
app.listen(3000, () => { console.log("asa"); });
