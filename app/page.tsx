import Image from "next/image";
import Alternative from "./_sections/_alternativeNow";
import Compass from "./_sections/_compass";
import PossibleFuture from "./_sections/_possibleFuture";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text text-lg font-semibold mb-10">Home</h1>
      <div className="w-full grid grid-cols-3 gap-5 place-content-center">
        <Alternative />
        <Compass />
        <PossibleFuture />
      </div>
    </main>
  );
};

export default Home;
