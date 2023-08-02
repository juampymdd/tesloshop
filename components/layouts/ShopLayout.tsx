import Head from "next/head"
import { FC } from "react";
import { SideMenu, Navbar } from "../ui";
interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://tesloshop.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Teslo-Shop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@juampymdd" />
        <meta name="twitter:creator" content="@juampymdd" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={pageDescription} />
        {
          imageFullUrl &&
          (
            <meta property="og:image" content={imageFullUrl} />
          )
        }
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <nav>
        {/* TODO: Navbar */}
        <Navbar />
      </nav>

      {/* TODO: Sidebar */}
        <SideMenu />
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0 30px',
      }}>
        {children}
      </main>

      <footer>
        {/* TODO: footer */}
      </footer>
    </>
  )
}
