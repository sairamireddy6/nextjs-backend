import ConnectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title, description} = await request.json()
    await ConnectMongoDB()
    await Topic.create({title, description})
    return NextResponse.json({message:"Topic created successfully"},{status:200})
}

export async function GET(request){
    let id = request.nextUrl.searchParams.get("id");
    await ConnectMongoDB()
    let topic
    if(id){
        topic = await Topic.findOne({_id:id})
    }else{
        topic = await Topic.find()
    }
    return NextResponse.json({topic})
}

export async function DELETE(request){
    let id = request.nextUrl.searchParams.get("id");
    await ConnectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Delete topic successfully"},{status:200})
}

export async function PUT(request,{params}){
    let id = request.nextUrl.searchParams.get("id")
    const {title, description} = await request.json()
    await ConnectMongoDB()
    await Topic.findByIdAndUpdate(id,{title, description})
    return NextResponse.json({message:"Updated topic successfully"},{status:200})

}