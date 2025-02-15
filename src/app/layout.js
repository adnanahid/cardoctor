import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
