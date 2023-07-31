/* eslint-disable no-case-declarations */
/* eslint-disable no-case-declarations */
import {
  GET_USERS,
  GET_INVENTORY,
  SET_LOADING,
  CREATE_USER,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
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
} from '../actions-types/action-types';

const initialState = {
  users: [],
  inventory: [],
  category: [],
  marcas: [],
  sports: [],
  displayInventory: [],
  product: {},
  isLoading: false,
};

export default function appReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_USERS:
      return {...state, users: payload};
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
    case FILTER_USERS_BY_ROLE_AND_STATUS:
      return {...state, users: payload};
    case UPDATE_USERS_STATUS:
      return {...state, users: payload};
    default:
      return {...state};
  }
}
