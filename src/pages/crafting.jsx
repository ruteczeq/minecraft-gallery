import { useEffect, useState } from "react";
import styles from "../styles/crafting.module.css";

export default function CraftingPage() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsList, setItemsList] = useState([]);
  const [blocksList, setBlocksList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const [itemsRes, blocksRes] = await Promise.all([
          fetch("https://minecraft-api.vercel.app/api/items"),
          fetch("https://minecraft-api.vercel.app/api/blocks"),
        ]);
        const [itemsData, blocksData] = await Promise.all([
          itemsRes.json(),
          blocksRes.json(),
        ]);
        setItemsList(itemsData);
        setBlocksList(blocksData);
        fetchRecipe(itemsData, blocksData);
      } catch (err) {
        console.error("Błąd ładowania danych:", err);
        setError("Nie udało się załadować listy bloków lub przedmiotów.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchRecipe = async (items, blocks) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://minecraft-api.vercel.app/api/crafting-recipes");
      const data = await res.json();
      const random = data[Math.floor(Math.random() * data.length)];
      setRecipe(random);
    } catch (err) {
      console.error("Błąd pobierania craftingu:", err);
      setError("Nie udało się pobrać craftingu.");
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  const getImageForName = (name) => {
    const item = itemsList.find((i) => i.name.toLowerCase() === name?.toLowerCase());
    if (item) return item.image;
    const block = blocksList.find((b) => b.name.toLowerCase() === name?.toLowerCase());
    if (block) return block.image;
    return null;
  };

  const renderIngredient = (item, index) => {
    if (!item) {
      return <div key={index} className={`${styles.slot} ${styles.empty}`}></div>;
    }

    const name = Array.isArray(item) ? item[0] : item;
    const imageUrl = getImageForName(name); 

    return (
      <div key={index} className={styles.slot}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} title={name} />
        ) : (
          <span>{name}</span>
        )}
        <div className={styles.caption} title={name}>{name}</div>
      </div>
    );
  };


  if (loading) return <p className={styles.message}>Ładowanie...</p>;

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Wystąpił błąd</h1>
        <p className={styles.message}>{error}</p>
        <button
          className={styles.button}
          onClick={() => fetchRecipe(itemsList, blocksList)}
        >
          Spróbuj ponownie
        </button>
      </div>
    );
  }
  
  if (!recipe) return <p className={styles.message}>Nie udało się pobrać craftingu.</p>;

  const resultImage = getImageForName(recipe.item);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Losowy crafting</h1>

      <div className={styles.resultRow}>
        <div className={styles.craftingGrid}>
          {Array.from({ length: 9 }).map((_, i) => renderIngredient(recipe.recipe[i], i))}
        </div>

        <div className={styles.arrow} />

        <div className={styles.resultSlot}>
          {resultImage ? (
            <img src={resultImage} alt={recipe.item} title={recipe.item} />
          ) : (
            <span>{recipe.item}</span>
          )}
          <div className={styles.caption} title={recipe.item}>
            {recipe.item} x{recipe.quantity}
          </div>
        </div>
      </div>

      <button className={styles.button} onClick={() => fetchRecipe(itemsList, blocksList)}>
        Losuj inny
      </button>
    </div>
  );
}
