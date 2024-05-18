"use client";
import "./globals.css";
import { rubik } from "../../public/assets/fonts";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Quiz App</title>
        </head>
        <body className={rubik.variable}>{children}</body>
      </html>
    </Provider>
  );
}
