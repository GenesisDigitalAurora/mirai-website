import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  const handleCookieAccept = () => {
    console.log('Cookies aceptadas');
    // Aquí puedes agregar lógica adicional como inicializar Google Analytics, etc.
  };

  const handleCookieReject = () => {
    console.log('Cookies rechazadas');
    // Aquí puedes agregar lógica para desactivar cookies no esenciales
  };

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent 
        onAccept={handleCookieAccept}
        onReject={handleCookieReject}
      />
    </>
  );
}
