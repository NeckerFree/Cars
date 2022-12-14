import axios from 'axios';
import accessToken from '../cars/accessToken';

const APPOINTMENTS = 'appointment/appointment/APPOINTMENTS';
const CREATE_APPOINTMENT = 'appointment/appointment/CREATE_APPOINTMENT';

const api = 'https://cars-api-bk.herokuapp.com/users/';

const initialState = [];

export function getAppointmentAPI(appointments) {
  return {
    type: APPOINTMENTS,
    payload: appointments,
  };
}

export const postAppointment = (userId, carId, sellerId, cityId,
  dateFor, duration, branch) => async (dispatch) => {
  const appointmentUrl = `${api}${userId}/appointments`;
  try {
    const appointmentInfo = {
      user_id: userId,
      car_id: carId,
      seller_id: sellerId,
      city_id: cityId,
      duration,
      branch,
      date_for: dateFor,
    };
    const response = await fetch(appointmentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken()}`,
      },
      body: JSON.stringify(appointmentInfo),
    });
    dispatch({
      type: CREATE_APPOINTMENT,
      payload: await response.json(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const allAppointments = (userId) => async (dispatch) => {
  const response = await axios.get(`${api}${userId}/appointments`, { headers: { Authorization: accessToken() } });
  dispatch(getAppointmentAPI(response.data));
};

const allAppointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENTS:
      return action.payload;
    case CREATE_APPOINTMENT:
      return state;
    default:
      return state;
  }
};

export default allAppointmentsReducer;
