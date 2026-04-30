import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
