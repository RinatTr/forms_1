import React from 'react';

export const displaySubmission = (props) => {
  let {name,
        bdate,
        country,
        diet,
        wannabe,
        breath,
        marital,
        stress,
        claus} = props;

  return (
    <li>Name: {name}</li>
    <li>Birth Date: {bdate}</li>
    <li>Country: {country}</li>
    <li>Dietary Preferences: {diet}</li>
    <li>Do you want to be a Mars Explorer: {wannabe}</li>
    <li>Can you hold your breath under water longer than 1 minute? {breath}</li>
  )
}
