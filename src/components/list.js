import React, { useState } from "react";

export default function List(props) {
    const urlImg = React.createRef();
    const title = React.createRef();
    const description = React.createRef();
    const genre = React.createRef();
    const author = React.createRef();
    const year = React.createRef();

    const [paintings, set] = useState(props.paintings);
    const clear = () => { set([]); };

    const add = (e) => {
        e.preventDefault();

        const newCanvas = {
            URL: urlImg.current.value,
            title: title.current.value,
            description: description.current.value,
            genre: genre.current.value,
            author: author.current.value,
            year: year.current.value
        };
        set([...paintings, newCanvas]);
    };

    return (
        <>
            <h1>List</h1>
            <ul className="list">
                {paintings.map((p, index) =>
                    <li key={index}> {p.author} </li>
                )}
            </ul>

            <input type="text" placeholder="URL to imagen" ref={urlImg} />
            <input type="text" placeholder="Title" ref={title} />
            <input type="text" placeholder="Description" ref={description} />
            <input type="text" placeholder="Genre" ref={genre} />
            <input type="text" placeholder="Author" ref={author} />
            <input type="number" min="0" placeholder="Year" ref={year} />

            <button onClick={add}>Add new Canva</button>
            <button onClick={clear}>Clear</button>
        </>
    );
}