"use client";

import {Auth} from "aws-amplify";
import AWSAuthenticator from "../components/AWSAuthenticator";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default async function Login() {
  const route = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        console.log("LOGGED IN");
        route.push("/");
        return true;
      })
      .catch((err) => {
        console.log("NOT LOGGED IN", err);
        return false;
      });
  }, []);

  return <AWSAuthenticator />;
}
