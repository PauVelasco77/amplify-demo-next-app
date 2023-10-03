"use client";

import {Amplify} from "aws-amplify";

const region = process.env.NEXT_PUBLIC_AWS_REGION ?? "";
const userPoolId = process.env.NEXT_PUBLIC_AWS_USER_POOL_ID ?? "";
const userPoolWebClientId =
  process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID ?? "";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region,
    userPoolId,
    userPoolWebClientId,
  },
  ssr: true,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
