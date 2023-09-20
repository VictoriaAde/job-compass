import Image from "next/image";
import Alternative from "./_sections/alternativeNow";
import Compass from "./_sections/compass";
import PossibleFuture from "./_sections/possibleFuture";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between px-10 py-5">
      <h1 className="text text-lg font-semibold mb-3">Job Compass</h1>
      <div className="w-full grid grid-cols-[25%_50%_25%] gap-5 place-content-center">
        <Alternative />
        <Compass />
        <PossibleFuture />
      </div>
    </main>
  );
};

export default Home;
