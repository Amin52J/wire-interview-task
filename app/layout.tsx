import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import CssReset from "@/lib/cssReset";
import Layout from "@Components/modules/Layout";

export const metadata: Metadata = {
  title: "Bower Search · Bower",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssReset />
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
