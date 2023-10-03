"use client";

import {Authenticator} from "@aws-amplify/ui-react";
import {Amplify} from "aws-amplify";

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
