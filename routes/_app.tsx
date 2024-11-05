import { type ComponentType } from "react";
export default function App({ Component }: { Component: ComponentType<Record<string | number | symbol, never>> }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>portfolio-deno</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
