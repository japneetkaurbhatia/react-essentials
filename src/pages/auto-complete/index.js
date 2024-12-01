import React, { useEffect, useState } from 'react'

export default function index() {

    const [userSearch, setUserSearch] = useState("");
    const [result, setResult] = useState([]);

    const callAPI = () => {
        console.log(userSearch);
        // https://jsonplaceholder.typicode.com/todos?q=de&_limit=10

        fetch(`https://jsonplaceholder.typicode.com/todos?q=${userSearch}&_limit=10`).then()



    }

    useEffect(() => {
        callAPI();

    }, [userSearch]);

    return (
        <div>
            <h1>Auto Complete</h1>

            {/* searchBox */}
            <input placeholder='enter your search' value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />


            {result.map((value) => (
                <li>{value.title}</li>
            ))}

            





        </div>
    )
}
