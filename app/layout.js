export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Awesome Todo App</h1>
        {children}
      </body>
    </html>
  );
}
