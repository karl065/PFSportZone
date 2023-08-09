import {useState} from 'react';
import m from './ChatBot.module.css';
import axios from 'axios';
import server from '../../Connections/Server';

const ChatBot = () => {
  const [change, setChange] = useState(false);
  const [myResponse, setMyResponse] = useState([]);
  const [botResponse, setBotResponse] = useState([]);
  const [checkSend, setCheckSend] = useState(false);

  async function callResponse(event) {
    const {name} = event.target;
    setCheckSend(false);

    const myResponse1 = [
      'Informacion de inventario',
      'Con respecto a las categorias',
      'Acerca de los deportes incluidos',
      'Sobre nuestas marcas',
    ];

    const myResponse2 = ['Acerca de los métodos de pago', 'Acerca de nosotros'];

    const myResponse3 = ['Deja tu feedback'];

    if (myResponse1.includes(name)) {
      const {path, filter} = JSON.parse(event.target.value);
      const {data} = await axios(`${server.api.baseURL}${path}`);
      const resBot = data.map((val1) => val1[filter]);
      myResponse[0] = name;
      botResponse[0] = resBot;
      setMyResponse(myResponse.slice(0, 1));
      setBotResponse(botResponse.slice(0, 1));
      setChange(!change);
    }
    if (myResponse2.includes(name)) {
      const resBot = {
        res1: 'Siéntase seguro de efectuar cualquier pago, puesto que está respaldado por Mercado Pago',
        res2: 'Somos un grupo de 8 personas los creadores de esta página, como proyecto final del bootcamp Henry',
      };

      myResponse[1] = name;
      if (name === 'Acerca de los métodos de pago') {
        botResponse[1] = resBot.res1;
      }
      if (name === 'Acerca de nosotros') {
        botResponse[1] = resBot.res2;
      }
      setMyResponse(myResponse.slice(0, 2));
      setBotResponse(botResponse.slice(0, 2));
      setChange(!change);
    }
    if (myResponse3.includes(name)) {
      const resBot = {
        res1: 'feedback',
      };

      myResponse[2] = name;
      if (name === 'Deja tu feedback') {
        botResponse[2] = resBot.res1;
      }

      setMyResponse(myResponse.slice(0, 3));
      setBotResponse(botResponse.slice(0, 3));
      setChange(!change);
    }
  }

  return (
    <div className={m.main}>
      <h1>Chat-Bot</h1>
      <div className={m.left}>
        <button
          name="Informacion de inventario"
          value={JSON.stringify({path: 'inventory', filter: 'article_name'})}
          onClick={callResponse}
          className={m.button}
        >
          Informacion de inventario
        </button>
        <button
          name="Con respecto a las categorias"
          value={JSON.stringify({path: 'category', filter: 'categoryName'})}
          onClick={callResponse}
          className={m.button}
        >
          Con respecto a las categorias
        </button>
        <button
          name="Acerca de los deportes incluidos"
          value={JSON.stringify({path: 'deporte', filter: 'deporteName'})}
          onClick={callResponse}
          className={m.button}
        >
          Acerca de los deportes incluidos
        </button>
        <button
          name="Sobre nuestras marcas"
          value={JSON.stringify({path: 'marca', filter: 'name'})}
          onClick={callResponse}
          className={m.button}
        >
          Sobre nuestras marcas
        </button>
      </div>

      {myResponse[0] ? <div className={m.right}>{myResponse[0]}</div> : null}
      {myResponse[0] ? (
        <div className={m.left}>
          {botResponse[0]?.map((val) => {
            return <li key={val}>{val}</li>;
          })}
        </div>
      ) : null}
      {myResponse[0] ? (
        <div className={m.left}>
          <button
            name="Acerca de los métodos de pago"
            onClick={callResponse}
            className={m.button}
          >
            Acerca de los métodos de pago
          </button>

          <button
            name="Acerca de nosotros"
            onClick={callResponse}
            className={m.button}
          >
            Acerca de nosotros
          </button>
        </div>
      ) : null}

      {myResponse[1] ? <div className={m.right}>{myResponse[1]}</div> : null}
      {myResponse[1] ? <div className={m.left}>{botResponse[1]}</div> : null}
      {myResponse[1] ? (
        <div className={m.left}>
          <div name="">
            Si necesitas información en específico te recomendamos navegar por
            nuestra página
          </div>
          <button
            name="Deja tu feedback"
            onClick={callResponse}
            className={m.button}
          >
            Deja tu feedback
          </button>
        </div>
      ) : null}

      {myResponse[2] ? <div className={m.right}>{myResponse[2]}</div> : null}
      {myResponse[2] ? (
        <div className={m.right}>
          <textarea className={m.textArea1} />
          {!checkSend ? (
            <button
              className={m.textArea1}
              name="Enviar"
              onClick={() => {
                setCheckSend(true);
              }}
            >
              Enviar
            </button>
          ) : (
            <div className={m.send}>Enviado</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ChatBot;
