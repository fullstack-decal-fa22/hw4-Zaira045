import React from 'react';
import Color from './Color';
// import Feed from './Feed';
/* Add any imports you think you might need here! */

const Menu = (props) => {
  // const [posts, setPosts] = React.useState([]); // TODO: edit this variable
  // let posts = [];
    return (
      <div className="colorOptions">
          {/* TODO */}
          <Color color="red" handleClick = {props.handleClick}></Color>
          <Color color="pink" handleClick = {props.handleClick}></Color>
          <Color color="blue" handleClick = {props.handleClick}></Color>
          <Color color="green" handleClick = {props.handleClick}></Color>




      </div>
    );
}

export default Menu;