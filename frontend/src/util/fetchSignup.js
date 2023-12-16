import { showToast } from '../components/toast/Toast';

export const fetchSignup = async (data) => {
  return fetch(`http://localhost:8000/v1/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    },
    body: data,
  })
    .then((res) => {
      console.log()
      if (res.status === 200) {
        showToast(
          'Congratulations! Your account has been successfully created!'
        );
      } else {
        showToast('Email already exists', 'danger');
      }
        
      return res;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
