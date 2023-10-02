"use client";

import {Authenticator} from "@aws-amplify/ui-react";
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

export default function AWSAuthenticator() {
  return (
    <Authenticator>
      {({signOut, user}) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
