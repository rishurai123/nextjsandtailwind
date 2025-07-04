import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Hello, World!", })
}


// mongodb+srv://rishurai:Rishurai@123@cluster0.um5pzzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0