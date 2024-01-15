import './globals.css';
import { Josefin_Sans } from '@next/font/google' 

export const metadata = {
  title: 'Product',
  description: 'Generated by create next app',
};

const josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (  
    <html lang="en">
      <body className={josef.className}>{children}</body>
    </html>
  );
}
