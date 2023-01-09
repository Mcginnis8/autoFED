import React, { useState } from 'react';

const ButtonToggle = () => {
  const [isParagraph, setIsParagraph] = useState(false);

  const handleClick = () => {
    setIsParagraph(!isParagraph);
  };

  return (
    <div>
      {isParagraph ? (
        <p>This is a paragraph.</p>
      ) : (
        <button onClick={handleClick}>Click me</button>
      )}
    </div>
  );
};

export default ButtonToggle;
