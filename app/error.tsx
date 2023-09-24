"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-medium mb-4">Something went wrong! 🥲</h2>
      <div className="my-6 flex gap-12">
        <button
          onClick={() => reset()}
          className="border border-black py-2 px-4 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 text-white font-medium rounded-md hover:from-gray-600 hover:via-gray-900 hover:to-gray-400"
        >
          Try again
        </button>
        <Link
          href={"/"}
          className="border border-black py-2 px-4 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 text-white font-medium rounded-md over:from-gray-600 hover:via-gray-900 hover:to-gray-400"
        >
          Go back home 👍
        </Link>
      </div>
    </div>
  );
};

export default Error;
