// import connectMongoDB from "@/libs/mongodb";
// import Topic from "@/models/topic";
// import { NextResponse } from "next/server";

// export async function PUT(request, { params }) {
//   const { id } = params;
//   const { newTitle: title, newDescription: description } = await request.json();
//   await connectMongoDB();
//   await Topic.findByIdAndUpdate(id, { title, description });
//   return NextResponse.json({ message: "Topic updated" }, { status: 200 });
// }

// export async function GET(request, { params }) {
//   const { id } = params;
//   await connectMongoDB();
//   const topic = await Topic.findOne({ _id: id });
//   return NextResponse.json({ topic }, { status: 200 });
// }

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { id, title, description } = await request.json();
    await connectMongoDB();
    const topic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Topic updated", topic }, { status: 200 });
  } catch (error) {
    console.error("Error updating topic:", error);
    return NextResponse.json({ error: "Failed to update topic" }, { status: 500 });
  }
}

export async function GET(request) {
  await connectMongoDB();
  const id = request.nextUrl.searchParams.get("id");
  const topic = await Topic.findById(id);
  if (!topic) {
    return NextResponse.json({ error: "Topic not found" }, { status: 404 });
  }
  return NextResponse.json(topic);
}

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
