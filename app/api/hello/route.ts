import { NextResponse } from "next/server"

export async function GET() {
    const data = {
        message: "Hello, next.js!"
    }

    return NextResponse.json(data)
}