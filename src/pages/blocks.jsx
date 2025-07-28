import RandomMinecraftViewer from "../components/RandomMinecraftViewer";

export default function BlocksPage() {
  return (
    <RandomMinecraftViewer
      endpoint="https://minecraft-api.vercel.app/api/blocks"
      title="Wylosowany blok"
    />
  );
}
