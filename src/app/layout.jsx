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
  title: "From nothing courses",
  description: "A form to sign up for a course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${retroFloral.variable} ${simplifica.variable} ${rubik.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
