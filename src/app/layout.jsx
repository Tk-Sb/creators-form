import "./globals.css";
import { Rubik } from "next/font/google";
import localFont from 'next/font/local'

const retroFloral = localFont({
  src: '../../public/fonts/retro-floral.woff2',
  display: 'swap',
  variable: '--font-retro'
})

const simplifica = localFont({
  src: '../../public/fonts/simplifica.woff2',
  display: 'swap',
  variable: '--font-simplifica'
})

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "arabic"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${retroFloral.variable} ${simplifica.variable} ${rubik.variable} antialiased`} >
        {/* <h1 className="font-retro text-[48px] ">
          From <br /> nothing <br /> courses
        </h1> */}
        {children}
      </body>
    </html>
  );
}
