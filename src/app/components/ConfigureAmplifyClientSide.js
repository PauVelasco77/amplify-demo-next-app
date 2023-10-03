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
    /// without env
    // region: "eu-west-3",
    // userPoolId: "eu-west-3_2rn7vUqE6",
    // userPoolWebClientId: "5q6fu1vdu9amke658k9p4ijgc7",
  },
  ssr: true,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
