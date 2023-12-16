import { showToast } from '../components/toast/Toast';



export const fetchLogin = async (data) => {
  return fetch(`http://localhost:8000/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    },
    credentials: 'include',
    body: data,
  })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        const body = res.json();
        showToast('Login Success!');
        sessionStorage.setItem('accountId', body.userNo);
        sessionStorage.setItem('userEmail', body.email);
      }
      else {
        showToast('Wrong Email or Password', 'danger');
        
      }
      return res;
    })
    .catch((err) => {
      console.error(err.message);
    });
};

// 로그인한 Account 조회
export const fetchUserInfo = async () => {
  return fetch(`http://localhost:8000/v1/user/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    },
    credentials: 'include'
  })
    .then((res) => {
      if (!res.ok) {
        // error coming back from server
        // throw Error('could not fetch the data for that resource');
        return false;
      }

      return res.json();
    })
    .catch((err) => {
      console.error(err.message);
    });
};

export const checkIfLogined = async () => {
  return await fetchUserInfo().then((data) => {
    if (!data) {
      setTimeout(() => {
        window.location.href = '/login';
      }, 200);
      showToast('Please log in.', 'danger');
      
      return false;
    }

    return true;
  });
};

export const getLoginStatus = async () => {
  const data = await fetchUserInfo();
  if (!data) {
    return false;
  }

  console.log(sessionStorage.getItem('accountId'))
  if (!sessionStorage.getItem('accountId')) {
    return false;
  }

  return true;
  
}

// 로그인한 Account 조회
export const fetchLogout = async () => {
  return fetch(`http://localhost:8000/v1/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json',
    },
    credentials: 'include'
  })
    .then((res) => {
      if (!res.ok) {
        
        return false;
      }

      return true;
    })
    .catch((err) => {
      console.error(err.message);
    });
};