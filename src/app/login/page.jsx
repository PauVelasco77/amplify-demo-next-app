"use client";

import {Suspense, useEffect, useState} from "react";
import AWSAuthenticator from "../components/AWSAuthenticator";
import {useRouter} from "next/navigation";
import {Auth} from "aws-amplify";

export default function Login() {
  const [isLogged, setIsLogged] = useState(false);

  const route = useRouter();
  async function isUserAuthenticated() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log("User is authenticated");
      route.push("/");
    } catch (error) {
      setIsLogged(false);
    }
  }

  useEffect(() => {
    console.log("HOLA");
    isUserAuthenticated();
  }, [isUserAuthenticated, setIsLogged]);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Suspense fallback={<h1>LOADING!!!!</h1>}>
        {!isLogged && (
          <div>
            <h1>LOGIN</h1>
            <AWSAuthenticator />
          </div>
        )}
      </Suspense>
    </main>
  );
}
