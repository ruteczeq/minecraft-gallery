import RandomMinecraftViewer from "../components/randomMinecraftViewer";

export default function BlocksPage() {
  return (
    <RandomMinecraftViewer
      endpoint="https://minecraft-api.vercel.app/api/blocks"
      title="Random block"
    />
  );
}
