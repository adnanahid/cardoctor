import { Source_Code_Pro } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

// Load Source Code Pro font
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceCodePro.className}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
