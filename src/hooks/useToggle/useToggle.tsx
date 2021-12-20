import { useState } from "react";

/**
 * useToggle
 * @param {boolean} initialValue
 */
const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);

  return [value, toggleValue] as const;
};

export default useToggle;
