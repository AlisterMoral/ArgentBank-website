export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || 'Email ou mot de passe incorrect');
      }

      const data = await response.json();
      const token = data.body.token;
      dispatch(loginSuccess(token));
      localStorage.setItem('userToken', token);
    } catch (error) {
      dispatch(loginFailure(error.message));
      throw error; 
    }
  };
};

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});
