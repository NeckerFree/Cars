import axios from 'axios';
import accessToken from '../cars/accessToken';

const SELLERS = 'seller/seller/SELLERS';

const api = 'https://cars-api-bk.herokuapp.com/sellers/';

const initialState = [];
let Loading = false;

export function getSellersAPI(sellers) {
  const APICityData = sellers.map((seller) => ({
    id: seller.id,
    name: seller.name,
    phone: seller.phone,
  }));
  return {
    type: SELLERS,
    payload: APICityData,
  };
}

export const allSellers = () => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(api, { headers: { Authorization: accessToken() } });
    dispatch(getSellersAPI(response.data));
  }, 1000);
  Loading = true;
};

const allSellersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLERS:
      return action.payload;
    default:
      return state;
  }
};

export default allSellersReducer;
