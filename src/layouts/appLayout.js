// "use client";

// import { usePathname } from "next/navigation";

// // import Footer from '@/components/ui/partials/footers/footer.js';
// import TopNavbar from "@/components/ui/partials/topNavbar/topNavBar.js";

// export default function AppLayout({ children }) {
//   const pathname = usePathname();

//   const authRouteRegex = new RegExp(
//     "^(/login|/signup|/verify-otp|/reset-password)"
//   );

//   if (
//     authRouteRegex.test(pathname) ||
//     pathname.startsWith("/dashboard") ||
//     pathname.startsWith("/profile")
//   ) {
//     return <>{children}</>;
//   }

//   return (
//     <>
//       <TopNavbar />
//       {children}
//       {/* <Footer /> */}
//     </>
//   );
// }
