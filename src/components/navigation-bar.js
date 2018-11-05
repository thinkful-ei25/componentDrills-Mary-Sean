import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) { 
  const formattedLinks = props.links.map(link => (
    <a href={props.links.href}> {props.links.title}</a>
  )); 

  console.log('props:', props.links);
  return (
    <div>
      <p><strong>{props.title}</strong>  
      <a href={props.links.href}> {props.links.title}</a>
      </p> 
      
    </div>);  
}
