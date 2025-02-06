import { useState, useEffect } from "react";

export function useAnimatedText(words, interval = 2000) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500); // Czas trwania efektu zanikania
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return { text: words[index], fade };
}
