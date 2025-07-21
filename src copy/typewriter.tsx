import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;  // Optional: Geschwindigkeit für die Typing-Animation
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);  // Cleanup Interval
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;