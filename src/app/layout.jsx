import Header from "@/components/Header";
import React from "react";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
