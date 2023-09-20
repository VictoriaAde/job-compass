import Image from "next/image";
import { Alternative } from "./_sections/_alternativeNow";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text text-lg font-semibold">Home</h1>
      <Alternative />
    </main>
  );
}
