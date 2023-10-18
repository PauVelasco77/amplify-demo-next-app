import {headers} from "next/headers";
import {withSSRContext} from "aws-amplify";
import {redirect} from "next/navigation";

export default async function Dashboard() {
  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };

  const {Auth} = withSSRContext({req});

  try {
    const user = await Auth.currentAuthenticatedUser();
    return (
      <main>
        <h1>DASHBOARD</h1>
        <h2>This is your email:{user.attributes.email}</h2>
      </main>
    );
  } catch (error) {
    redirect("/auth/login");
  }
}
