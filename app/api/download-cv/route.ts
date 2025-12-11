import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CV_FILE_NAME = "Auliani_Puteri_CV.pdf";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "cv.pdf");
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${CV_FILE_NAME}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Failed to load CV file", error);

    return NextResponse.json({ message: "CV file not found" }, { status: 404 });
  }
}
