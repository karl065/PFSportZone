import React from 'react';

export default function Pagination(props) {
    const nextPage = () => {
        props.setPage(parseInt(props.page) + 1 )
    };
    const PreviousPage = () => {
        props.setPage(parseInt(props.page) - 1 )
    };
  return (
    <div>
        <button disabled={props.page <= 1 } onClick={PreviousPage}>previous</button>
        <button disabled={props.page === Math.ceil(props.pageCount) } onClick={nextPage}>next</button>
    </div>
  )
}
