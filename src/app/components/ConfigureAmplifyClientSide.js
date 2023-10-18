"use client";

import {Amplify} from "aws-amplify";
import {awsExports} from "../../../awsExports";

Amplify.configure({
  ...awsExports,
  ssr: true,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
