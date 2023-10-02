import {headers} from "next/headers";
import {withSSRContext} from "aws-amplify";
import {redirect} from "next/navigation";
import AWSAuthenticator from "../components/AWSAuthenticator";

export default async function Login() {
  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };

  const {Auth} = withSSRContext({req});

  try {
    const user = await Auth.currentAuthenticatedUser();
    redirect("/");
  } catch (error) {
    return (
      <main className="flex flex-col items-center justify-center w-full h-full">
        <h1>LOGIN</h1>
        <AWSAuthenticator />
      </main>
    );
  }
}
