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
        <title>resipies</title>
        <meta title="description" content="give up"></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="20*20"
          href="images/paper.png"
        ></link>
      </head>
      <body suppressHydrationWarning={true}>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
