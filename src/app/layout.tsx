"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>respies</title>
        <meta title="description" content="new respie"></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="32*32"
          href="images/paper.png"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
