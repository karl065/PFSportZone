import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {getInventory} from '../../redux/actions/actions';

library.add(fas);
const AdminEditProd = () => {

  const initialData = [
    {
      "id_inventory": '',
      "article_name": '',
      "selling_price": '',
      "purchase_price": '',
      "stock": '',
      "description": '',
      "image": '',
      "status": ''
    }
  ];
  
  const dispatch = useDispatch();
  const displayInventory = useSelector((state) => state.displayInventory);
  useEffect(() => {
    dispatch(getInventory());
  }, []);

//solo se usa para el cambio de pestaña
  const [activeTab, setActiveTab] = useState('tab-1');
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
 

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(displayInventory);
  const [selectedItem, setSelectedItem] = useState(initialData);
 

  const handleSearch = (event) => {
    //const searchTerm = event.target.value;
    setSearchTerm(event.target.value);

    const filteredData = displayInventory.filter(item =>
      item.article_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    
  };

  useEffect(() => {
    setData(displayInventory);
  }, [displayInventory]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    //setData([item]);
    console.log(item);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (data.length > 0) {
        setSelectedItem(data[0]);
        setData([data[0]]);
        
      }
    }
  };
 
  return (
    <div>
      <div id="wrapper" style={{display: 'flex'}}>
        
        <div className="d-flex flex-column" id="content-wrapper" style={{flex: '1', flexGrow: '1'}}>
        <div className="card shadow mb-5" style={{height: "500px"}}>
    <div className="card-header py-3">
       
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"> <h4 className="text-dark mb-4">Editar Producto</h4></div>
                    <div className="col-md-4 col-xl-4" >
                        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"  style={{fontSize: "16px","fontFamily": "Assistant, sans-serif"}}>
                            <div className="input-group">
                              <input className="bg-light form-control border-1 small" 
                              type="text"  
                              value={searchTerm}
                              onChange={handleSearch}
                              //defaultValue=""
                              //onKeyDown={handleKeyPress}
                              list="search-results"
                              placeholder="Search for ..." />
                              
                              <button className="btn btn-primary py-0" type="button"  style={{"background": "rgb(116,153,0)"}}>
                              <FontAwesomeIcon icon="fa-search" />
                              </button>
                             
                              </div>
                              <datalist id="search-results">
        {data.map(item => (
          <option key={item.id_inventory} value={item.article_name} />
        ))}
      </datalist>
      <ul className="list-group">
        {data.map(item => (
          <li
            className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
            key={item.id_inventory}
            onClick={() => handleItemClick(item)}
            style={{"background": "rgb(116,153,0)"}}
          >
            {item.article_name}
          </li>
        ))}
      </ul> 
                        </form>
                    </div>
                </div>
            </div>
      </div>
    </div>
   
    <div style={{height: "50px"}}>
        <div className="row">
            <div className="col" style={{textAlign: "center"}}>
                <div></div>
            </div>
            <div className="col">
                <div></div>
            </div>
            <div className="col">
                <div><button className="btn btn-success btn-sm" type="submit" style={{textAlign: "center",fontSize: "18px",color: "var(--bs-body-bg)",background: "rgb(116,153,0)"}}>Actualizar</button></div>
            </div>
            <div className="col-md-6" style={{textAlign: "center",width: "200px"}}><button className="btn btn-success btn-sm" type="submit" style={{color: "var(--bs-body-bg)",fontSize: "18px",textAlign: "center",background: "rgb(116,153,0)"}}>Guardar</button></div>
        </div>
    </div>
</div>
          
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};

export default AdminEditProd;
