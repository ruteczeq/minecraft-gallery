import { useEffect, useState } from "react";
import styles from "../styles/randomMinecraftViewer.module.css";

export default function RandomMinecraftViewer({ endpoint, title }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("HTTP error: " + res.status);
      const list = await res.json();
      const random = list[Math.floor(Math.random() * list.length)];
      setData(random);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomData();
  }, [endpoint]);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{error}</p>
        <button className={styles.button} onClick={fetchRandomData}>
          Try again
        </button>
      </div>
    );
  }

  if (!data) return <p>Failed to fetch data.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <img src={data.image} alt={data.name} className={styles.image} />
      <h2 className={styles.subtitle}>{data.name}</h2>
      <p className={styles.description}>{data.description || "No data."}</p>
      <button className={styles.button} onClick={fetchRandomData}>
        Pick another
      </button>
    </div>
  );
}
