import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};
