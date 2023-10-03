"use client";

import {Amplify} from "aws-amplify";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
  },
  ssr: true,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
