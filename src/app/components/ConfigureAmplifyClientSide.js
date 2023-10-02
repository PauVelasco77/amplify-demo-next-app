"use client";

import {Amplify} from "aws-amplify";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: "eu-west-3",
    userPoolId: "eu-west-3_2rn7vUqE6",
    userPoolWebClientId: "5q6fu1vdu9amke658k9p4ijgc7",
  },
  ssr: true,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
