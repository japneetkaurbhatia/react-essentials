import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>FocusInput</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
