import React from 'react';
import Styles from './Pagination.module.css';

export default function Pagination(props) {
    const nextPage = () => {
        props.setPage(parseInt(props.page) + 1 )
    };
    const PreviousPage = () => {
        props.setPage(parseInt(props.page) - 1 )
    };
  return (
    <div className={Styles.container}>
        <button disabled={props.page <= 1 } onClick={PreviousPage}>previous</button>
        <p>{`pagina ${props.page} de ${Math.ceil(props.pageCount)}`}</p>
        <button disabled={props.page === Math.ceil(props.pageCount) } onClick={nextPage}>next</button>
    </div>
  )
}
