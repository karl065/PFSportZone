import React from 'react';
import {useSelector} from 'react-redux';
import Styles from './Favorites.module.css';

export default function Favorites() {
  const user = useSelector(state => state.app.user);
  console.log(user);
  return (
    <>
    <div>
        <h1>Mi lista de Favoritos</h1>
        <h4>n° articulos</h4>
    </div>
    </>
  )
}
