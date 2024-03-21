import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component,Session, ...pageProps }) {
  return (
    <SessionProvider session={Session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
