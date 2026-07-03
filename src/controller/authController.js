
import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    const {name, email, password} = req.body;
    
    // check if user exist
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }

    // Hash password before storing it (for security)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword, // In a real application, make sure to hash the password before storing it
        },
    });

    res.status(201).json({
      status: "success",
      data: {
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
      },
    });

}

export { register}