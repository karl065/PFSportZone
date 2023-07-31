/* eslint-disable react/prop-types */
import Styles from './Pagination.module.css';

export default function Pagination(props) {
  const nextPage = () => {
    props.setPage(parseInt(props.page) + 1);
  };
  const PreviousPage = () => {
    props.setPage(parseInt(props.page) - 1);
  };
  return (
    <div className={Styles.container}>
      <button disabled={props.page <= 1} onClick={PreviousPage}>
        Anterior
      </button>
      <p>{`Pagina ${props.page} de ${Math.ceil(props.pageCount)}`}</p>
      <button
        disabled={props.page === Math.ceil(props.pageCount) || props.page === 0}
        onClick={nextPage}
      >
        Siguiente
      </button>
    </div>
  );
}
