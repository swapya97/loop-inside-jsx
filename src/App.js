import './App.css';
import React from 'react';

function MyComponent(props) {
  const items = props.items; // assume this is an array of items

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;