"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Tabs />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
