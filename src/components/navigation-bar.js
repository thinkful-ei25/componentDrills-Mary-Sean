import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) { 
  console.log(props.links[0].text);
  const formattedLinks = props.links.map((link, index) => (
    <li key={index} >
      <a href={link.href}> {link.text}</a>
    </li>
  )); 

  console.log('links', formattedLinks);
  return (
    <div className="navigation-bar">
      <h1 ><strong>{props.title}</strong></h1>
      <nav className="navigation-bar-nav ">
       
        <ul>{formattedLinks}</ul>
      </nav>
    </div>);  
}
