import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
import { render } from '@testing-library/react';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    // const [exper, setExper] = React.useState(null);
    const [posts, setPosts] = React.useState([]); // TODO: edit this variable
    const [p, setP] = React.useState(null)
    // let posts = [];
    function handleClick(color){
        posts.push(color)
        setPosts(posts)
        setP(posts.slice(0).reverse().map((color) => { return (
            <Block color = {color}></Block>
        );
    }))
        console.log(posts)
    }


    return (
        <div>
            <Menu handleClick = {handleClick}></Menu>
            {p}
        </div>
    );
}

export default Feed;