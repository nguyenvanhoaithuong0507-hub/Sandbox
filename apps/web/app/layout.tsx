import "./globals.css";
import type { Metadata } from "next";

import AuthProvider from "@/components/auth/AuthProvider";
import { MenuProvider } from "@/components/navigation/MenuContext";

export const metadata: Metadata = {
  title: "SandboxCodeX IDE Docs",
  description: "Mobile-first AI sandbox IDE documentation workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        style={{
          margin: 0,
          background: "#08090d",
          color: "#f8fafc",
          fontFamily: "IBM Plex Sans, sans-serif",
        }}
      >
        <AuthProvider>
          <MenuProvider>
            {children}
          </MenuProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
