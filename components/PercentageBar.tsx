// PercentageBar.tsx
import React, { useState } from "react";

const PercentageBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(80);

  const handlePercentageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newPercentage = parseFloat(e.currentTarget.value);
    if (!isNaN(newPercentage)) {
      setPercentage(Math.max(0, Math.min(100, newPercentage))); // Clamp between 0 and 100
    }
  };

  return (
    <div className="my-3">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        defaultValue={percentage.toString()}
        onInput={handlePercentageChange}
        className="w-full transition-all duration-300 ease-in-out bg-dark_custom_blue"
      />
      <div className="text-center">
        <span className="font-medium text-xs">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

export default PercentageBar;
