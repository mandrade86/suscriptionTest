import { NextRequest, NextResponse } from "next/server";
import { ApiRequestHandler } from "../../../lib/ApiRequestHandler";

export async function GET(req: NextRequest) {
  try {
    const page = new URL(req.url).searchParams.get("page")
    const query = page ? `?page=${page}` : "";
    const data = await ApiRequestHandler({ path: `tasks${query}` });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error fetching tasks" }, { status: err.status || 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = await ApiRequestHandler({
      method: "POST",
      path: "tasks",
      body,
    });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error creating task" }, { status: err.status || 500 });
  }
}
