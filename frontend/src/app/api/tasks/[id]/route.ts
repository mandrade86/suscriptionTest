import { NextRequest, NextResponse } from "next/server";
import { ApiRequestHandler } from "../../../../lib/ApiRequestHandler";

export async function GET(_: NextRequest, params: { id: string }) {
  try {
    const data = await ApiRequestHandler({
      method: "GET",
      path: `tasks/${params.id}`,
    });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error fetching task" }, { status: err.status || 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();

    const data = await ApiRequestHandler({
      method: "PUT",
      path: `tasks/${params.id}`,
      body,
    });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error updating task" }, { status: err.status || 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await ApiRequestHandler({
      method: "DELETE",
      path: `tasks/${params.id}`,
    });

    return NextResponse.json({ message: "Task deleted" });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error updating task" }, { status: err.status || 500 });
  }
}
