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



export const startUpdateUserProfile = () => ({
  type: 'START_UPDATE_USER_PROFILE',
});


export const updateUserProfileSuccess = (user) => ({
  type: 'UPDATE_USER_PROFILE_SUCCESS',
  payload: user,
});


export const updateUserProfileFailure = (error) => ({
  type: 'UPDATE_USER_PROFILE_FAILURE',
  payload: error,
});

export const updateUserProfile = (userData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
       
        body: JSON.stringify({ userName: userData.userName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const updatedUser = await response.json();
      dispatch(updateUserProfileSuccess(updatedUser));
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil', error);
    }
  };
};
