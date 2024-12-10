// src/actions/notificationActionCreators.js
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './actionTypes';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: notifications,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false));
      });
  };
};

