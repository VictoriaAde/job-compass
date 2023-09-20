import React from "react";

interface ToggleSwitchProps {
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="relative inline-block align-middle">
      <input
        type="checkbox"
        className="hidden"
        name={name}
        id={id}
        checked={checked}
        onChange={handleToggle}
        disabled={disabled}
      />
      <div className="flex gap-2 items-center my-2">
        <span className="text-xs font-medium">No</span>
        <label
          className={`${
            disabled
              ? "bg-gray-500 cursor-not-allowed"
              : checked
              ? "bg-white border-2 border-green-400"
              : "bg-white border-2 border-gray-400"
          } toggle-switch-label relative inline-block w-10 h-5 rounded-full transition-all duration-300 ease-in-out border-2 border-gray-400`}
          htmlFor={id}
        >
          <span
            className={`${
              checked
                ? "transform translate-x-[1px] translate-y-[0px]"
                : "transform translate-x-[-17px] translate-y-[0px]"
            } toggle-switch-inner absolute w-4 h-4 rounded-full shadow-lg ${
              checked ? "bg-[#03862b]" : "bg-gray-400"
            } transition-transform duration-300 ease-in-out shadow-lg`}
          ></span>
        </label>
        <span className="text-xs font-medium">Yes</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
