import { NextResponse } from "next/server";
import { exec } from "child_process";
import fs from "fs";

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const code = body.code;

  fs.writeFileSync("/tmp/Main.hs", code);

  return new Promise<Response>((resolve) => {
    exec("runhaskell /tmp/Main.hs", (err, stdout, stderr) => {
      resolve(
        NextResponse.json({
          output: err ? stderr : stdout,
        }),
      );
    });
  });
}
