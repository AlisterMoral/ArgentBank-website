
export const loginUser = (email, password) => {
    return async (dispatch) => {
      dispatch({ type: 'LOGIN_USER' });
  
      try {
        const response = await fetch('/user/login', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password }) 
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de la connexion');
        }
  
        const user = await response.json();
        dispatch(loginSuccess(user));
      } catch (error) {
        dispatch(loginFailure(error.message));
      }
    };
  };
  
  export const loginSuccess = (user) => ({
      type: 'LOGIN_SUCCESS',
      payload: user
  });
  
  export const loginFailure = (error) => ({
      type: 'LOGIN_FAILURE',
      payload: error
  });
