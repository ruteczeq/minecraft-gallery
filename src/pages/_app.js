import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "64px" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
