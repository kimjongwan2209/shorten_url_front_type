import React, {useState, useEffect} from 'react'

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const useRandomBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  const updateBackgroundColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  useEffect(() => {
    updateBackgroundColor();
  }, []);

  return backgroundColor;
};