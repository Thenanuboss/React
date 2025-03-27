import { useState } from "react";

export default function EventHandlerExample() {
  const [text, setText] = useState("Hello, click the button!");

  const handleClick = () => {
    setText("Button Clicked!");
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
