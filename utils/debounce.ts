import { useEffect } from "react";

type CallbackFunction = (value: string) => void;

const useDebouncedEventHandler = (
  callback: CallbackFunction,
  delay: number
) => {
  let debounceTimer: NodeJS.Timeout | null = null;

  const debouncedEventHandler = (value: string) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      callback(value);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);
  return debouncedEventHandler;
};

export default useDebouncedEventHandler;
