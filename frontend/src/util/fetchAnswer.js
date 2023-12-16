export const fetchAnswerList = async (id) => {
    return fetch(`http://localhost:8000/v1/solutions/${id}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw Error('유효하지 않은 요청입니다.');
        }
        return response.json();
      })
      .catch((error) => {
        throw Error(error.message);
      });
  };

  export const fetchUpVote = async (solutionId) => {
    return fetch(`http://localhost:8000/v1/solutions/${solutionId}/upVote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('access_token'),
      },
      credentials: 'include',
    })
  }

  export const fetchDownVote = async (solutionId) => {
    return fetch(`http://localhost:8000/v1/solutions/${solutionId}/downVote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('access_token'),
      },
      credentials: 'include',
    })
  }
  
  export const fetchCreateAnswer = async (solutionId, fetchData) => {
    return fetch(`http://localhost:8000/v1/solutions/${solutionId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('access_token'),
      },
      credentials: 'include',
      body: JSON.stringify(fetchData),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('유효하지 않은 요청입니다.');
        }
        return response.json();
      })
      .catch((error) => {
        throw Error(error.message);
      });
  };
