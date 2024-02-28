export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (formData) => ({
  type: ADD_EVENT,
  payload: formData,
});

export const setOrganiserInfo = (organiserInfo) => ({
  type: 'SET_ORGANISER_INFO',
  payload: organiserInfo,
});
