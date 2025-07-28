import RandomMinecraftViewer from "../components/RandomMinecraftViewer";

export default function ItemsPage() {
  return (
    <RandomMinecraftViewer
      endpoint="https://minecraft-api.vercel.app/api/items"
      title="Wylosowany przedmiot"
    />
  );
}
