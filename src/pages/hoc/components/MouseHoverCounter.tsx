import React, { useState } from 'react';

function MouseHoverCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((count) => count + 1);
    };

    return (
        <div>
            <h2>MouseHoverCounter</h2>
            <div onMouseOver={incrementCount}>clicked {count} times</div>
        </div>
    );
}

export default MouseHoverCounter;
