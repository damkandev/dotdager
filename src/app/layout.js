import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Dot Dager Landing",
  description: "Puto el que lee",
};

export default function RootLayout({ children }) {
  console.log('%c🥒', 'font-weight: bold; font-size: 400px;')
  console.log('%c🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒', 'font-weight: bold; color: #80ff59; text-shadow: 2px 4px 0px rgba(0,0,0,1);')
  console.log('%cPUTO EL QUE LEE', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
  console.log('%c🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒🥒', 'font-weight: bold; color: #80ff59; text-shadow: 2px 4px 0px rgba(0,0,0,1);')
  return (
    <html lang="es">
      <body
        className={`p-0`}
      >
      <Navbar />

        {children}
      </body>
    </html>
  );
}
