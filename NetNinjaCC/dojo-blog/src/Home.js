import { useState } from 'react';

const Home = () => {

    // Define State
    const [name, setName] =
        useState('Mario');
    const [age, setAge] =
        useState(25);

    // Define a function
    const handleClick = (e) => {
        setName('Luigi')
        setAge(34)
    }
    return (
        <div>
            <p>This is the home page of the blog</p>
            <p>Author: {name} is {age} {age === 1 ? ' year ' : ' years '} old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>

    );
}

export default Home;