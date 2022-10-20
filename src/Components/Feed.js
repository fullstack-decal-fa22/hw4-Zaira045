import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
import { render } from '@testing-library/react';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, setPosts] = useState([]); // TODO: edit this variable
    const [p, setP] = useState(null);
    function handleClick(color){
        posts.push(color)
        setPosts(posts)
        setP(posts.slice(0).reverse().map((color) => { return (
            <Block color = {color}></Block>);
        }))
    }

    return (
        <div>
            <Menu handleClick = {handleClick}></Menu>
            {p}
        </div>
    );
}

export default Feed;