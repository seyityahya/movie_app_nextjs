import React from "react";
import "./globals.css";
import Provider from "./Provider";
import dotenv from "dotenv";

dotenv.config();

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default Layout;
