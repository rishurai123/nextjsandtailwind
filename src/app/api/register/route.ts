import { NextResponse } from 'next/server';
import dbConnect from '../../../../mongodb/dbConnect';
import user from '../../../../models/user';
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();
    const { name, email, password } = body;

    try {
        const User = await new user({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        }).save();
        console.log("User created:", User);
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}