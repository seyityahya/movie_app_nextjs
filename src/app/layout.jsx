import React from "react";
import "./globals.css";
import Provider from "./Provider";

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
