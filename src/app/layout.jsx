import Link from "next/link";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";
import "@aws-amplify/ui-react/styles.css";
import "./globals.css";
import LogoutButton from "./components/LogoutButton";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="container pb-6">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <br />
              <Link href="/login">Login</Link>
              <br />
              <LogoutButton />
            </li>
          </ul>
        </nav>
        <>
          <ConfigureAmplifyClientSide />
          {children}
        </>
      </body>
    </html>
  );
}