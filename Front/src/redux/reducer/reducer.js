/* eslint-disable no-case-declarations */
import {
  GET_USER,
  SET_USER,
  GET_USERS,
  EDIT_USER,
  GET_INVENTORY,
  SET_LOADING,
  CREATE_USER,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
  CLEAR_PRODUCT,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
  RESET_DISPLAYED_USERS,
  GET_CATEGORY,
  CREATE_CATEGORY,
  GET_SPORTS,
  ORDER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_STATUS,
  PRODUCTS_FILTERED,
  ORDER_PRODUCTS_BY_ABC,
  FILTER_USERS_BY_ROLE_AND_STATUS,
  CREATE_MARCA,
  CREATE_DEPORTE,
  GET_MARCA,
  EDIT_PRODUCT,
  UPDATE_USERS_STATUS,
  GET_VENTAS,
  CLEAR_USER,
  CLEAR_USERED,
  GET_SALES,
  UPDATE_SALES_STATUS,
  GET_FAVORITES,
  ADD_FAVORITOS,
  GET_FAVORITOS,
} from '../actions-types/action-types';

const initialState = {
  users: [],
  sales: [],
  inventory: [],
  category: [],
  marcas: [],
  sports: [],
  ventas: [],
  comprasUsuario: [],
  displayInventory: [],
  user: {},
  favorites: [],
  favoritos: [],
  userEd: {},
  product: {},
  isLoading: false,
};

export default function appReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_USER:
    case GET_USER:
      return {...state, user: payload, comprasUsuario: payload.ventas};
    case GET_FAVORITOS:
      return {...state, favoritos: payload};
    case CLEAR_USER:
      return {...state, user: {}};
    case CLEAR_USERED:
      return {...state, userEd: {}};
    case GET_USERS:
      return {...state, users: payload};
    case GET_SALES:
      return {...state, sales: payload};
    case EDIT_USER:
      const indexUser = state.users.findIndex(
        (p) => p.idUser === payload.idUser
      );
      const updatedUser = [...state.users];

      updatedUser[indexUser] = payload;

      return {
        ...state,
        users: updatedUser,
        userEd: payload,
      };
    case GET_INVENTORY:
      return {...state, inventory: payload, displayInventory: payload};
    case GET_CATEGORY:
      return {...state, category: payload};
    case GET_SPORTS:
      return {...state, sports: payload};
    case GET_MARCA:
      return {...state, marcas: payload};
    case CREATE_USER:
      return {...state, users: [...state.users, payload]};
    case CREATE_PRODUCT:
      return {
        ...state,
        inventory: [...state.inventory, payload],
        displayInventory: [...state.displayInventory, payload],
      };
    case CREATE_CATEGORY:
      return {...state, category: [...state.category, payload]};
    case CREATE_MARCA:
      return {...state, marcas: [...state.marcas, payload]};
    case CREATE_DEPORTE:
      return {...state, sports: [...state.sports, payload]};
    case GET_PRODUCT_ID:
      return {...state, product: payload};
    case CLEAR_PRODUCT:
      return {...state, product: {}};
    case ADD_FAVORITOS:
      return {...state, favoritos: [...state.favoritos, payload]};
    case EDIT_PRODUCT:
      const indexProduct = state.inventory.findIndex(
        (p) => p.id_inventory === payload.id_inventory
      );
      const updatedInventory = [...state.inventory];
      updatedInventory[indexProduct] = payload;
      return {
        ...state,
        inventory: updatedInventory,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };
    case FILTER_PRODUCTS_BY_NAME:
      const filteredInventory = state.inventory.filter((product) =>
        product.article_name.toLowerCase().includes(payload.toLowerCase())
      );
      return {...state, displayInventory: filteredInventory};
    case ORDER_PRODUCTS_BY_PRICE:
      let inventoryOrdered = [];
      inventoryOrdered =
        payload === 'PA'
          ? [...state.displayInventory].sort(
              (a, b) => a.selling_price - b.selling_price
            )
          : [...state.displayInventory].sort(
              (a, b) => b.selling_price - a.selling_price
            );
      return {
        ...state,
        displayInventory: inventoryOrdered,
      };
    case ORDER_PRODUCTS_BY_ABC:
      let orderedGamesAbc = []; //el metodo sort no modifica el array original, lo ordena y devuelve una nueva referencia del array pero ordenado
      orderedGamesAbc =
        payload === 'ABCA'
          ? [...state.displayInventory].sort((a, b) =>
              a.article_name.localeCompare(b.article_name)
            )
          : [...state.displayInventory].sort((a, b) =>
              b.article_name.localeCompare(a.article_name)
            );

      return {
        ...state,
        displayInventory: orderedGamesAbc,
      };
    case FILTER_PRODUCTS_BY_STATUS:
      return {
        ...state,
        inventory: payload,
      };
    case PRODUCTS_FILTERED:
      return {
        ...state,
        displayInventory: payload,
      };
    case SET_LOADING:
      return {...state, isLoading: payload};
    case RESET_DISPLAYED_PRODUCTS:
      return {...state, displayInventory: [...state.inventory]};
    case RESET_DISPLAYED_USERS:
      return {...state, displayUsers: [...state.users]};
    case FILTER_USERS_BY_ROLE_AND_STATUS:
      return {...state, users: payload};
    case UPDATE_USERS_STATUS:
      return {...state, users: payload};
    case GET_VENTAS:
      return {...state, ventas: payload};
    case UPDATE_SALES_STATUS:
      const indexSale = state.sales.findIndex(
        (p) => p.id_sale === payload.id_sale
      );
      const updatedSale = [...state.sales];

      updatedSale[indexSale] = payload;

      return {
        ...state,
        sales: updatedSale,
      };

    default:
      return {...state};
  }
}
