import "@/style/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webshank",
  description: "Webshank - is your future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider>
          <div className="flex flex-col min-h-full">
            <Header />
            <Main>{children}</Main>
            <Footer />
          </div>
          <div id="modal-root" />
        </Provider>
      </body>
    </html>
  );
}
