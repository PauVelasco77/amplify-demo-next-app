import {runWithAmplifyServerContext} from "@aws-amplify/adapter-nextjs";
import {getCurrentUser} from "aws-amplify/auth/server";
import {cookies} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
  const user = await runWithAmplifyServerContext({
    nextServerContext: {cookies},
    operation: (contextSpec) => getCurrentUser(contextSpec),
  });
  console.log("ENDPOINT!!!", user);
  return NextResponse.json({user});
}
