import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Script id="auth-redirect" strategy="afterInteractive">
        {`
            if (document.cookie && document.cookie.includes('authed')) {
              window.location.href = "/dashboard"
            }
          `}
      </Script>
      <Link href="login">
        <a>Login</a>
      </Link>
    </>
  );
}
