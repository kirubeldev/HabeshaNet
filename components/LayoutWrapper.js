"use client"; // This is the only part that will be client-side

import { usePathname } from "next/navigation";
import Nav from "./nav";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
console.log(pathname);
  // Define the routes where you don't want the layout (Nav and Footer)
  const hideLayoutRoutes = ["/signin", "/signup"];

  // Check if the current path matches any in hideLayoutRoutes
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Nav />}  {/* Only show Nav if not on specified routes */}
      {children}
      {!shouldHideLayout && <Footer />} {/* Only show Footer if not on specified routes */}
    </>
  );
}
