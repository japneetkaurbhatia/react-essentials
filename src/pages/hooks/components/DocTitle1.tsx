import React, { useEffect, useState } from "react";
import useDocumentTitle from "./custom/useDocumentTitle";

export default function DocTitle1() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h2>DocTitle1</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count: {count}
      </button>
    </div>
  );
}
