"use client";

import {Auth} from "aws-amplify";

export default function LogoutButton({...props}) {
  return (
    <button
      onClick={async () => {
        await Auth.signOut();
        window.location.reload();
      }}
      {...props}>
      LOGOUT
    </button>
  );
}
