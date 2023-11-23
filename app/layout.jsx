import { Roboto } from 'next/font/google';
import './globals.css';
import PropTypes from "prop-types";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: 'AREL Elektrik & Enerji Otomasyon',
  description: "AREL Elektrik & Enerji Otomasyon. Elektrik ve enerji dağıtımı alanlarında mühendislik, entegrasyon ve saha destek hizmetleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.any,
};