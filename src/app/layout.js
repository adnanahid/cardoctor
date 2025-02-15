import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>home</nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
