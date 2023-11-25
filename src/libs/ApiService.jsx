import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

export const loginUser = async data => {
  try {
    const response = await fetch (
      'https://medical-adherence.onrender.com/api/v1/auth/login-health-provider',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (data),
      }
    );

    const result = await response.json ();

    if (response.ok) {
      const {token, user} = result;
      // Store the token in a cookie
      Cookies.set ('authToken', token, {expires: 7}); // Set the expiration time as needed
      return {success: true, token, user};
    } else {
      console.error ('Login Error:', result);
      if (result.error === 'Email or password is incorrect') {
        toast.error ('Email or password is incorrect.');
        return;
      } else {
        toast.error ('Failed to log in. Please check your credentials.');
        return;
      }
    }
  } catch (error) {
    console.error ('Error:', error);
    toast.error ('An error occurred while trying to log in.');
    return {success: false, error: 'An error occurred while trying to log in.'};
  }
};
