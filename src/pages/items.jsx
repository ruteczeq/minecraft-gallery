import RandomMinecraftViewer from "../components/randomMinecraftViewer";

export default function ItemsPage() {
  return (
    <RandomMinecraftViewer
      endpoint="https://minecraft-api.vercel.app/api/items"
      title="Drawn item"
    />
  );
}
