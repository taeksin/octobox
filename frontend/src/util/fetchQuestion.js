export const fetchQuestionDetail = async (id) => {
    return fetch(`http://localhost:8000/v1/solutions/${id}`)
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
  const searchTemp = '';
  
  export const fetchQuestionList = async (page, filter, searchText) => {
    console.log('Question 리스트가 조회됩니다.');
    console.log('page: ' + page);
    console.log('filter: ' + filter);
    console.log(searchText);
    let url = null;
    if (filter === 'unanswered') {
      if (searchText !== searchTemp && searchText !== null) {
        url = `/questions?page=${page}&size=10&sort=-questionNo&content[like]=${searchText}&answerCount=0`;
      } else if (searchText === null) {
        url = `/questions?page=${page}&size=10&sort=-questionNo&answerCount=0`;
        console.log('url: ' + url);
      }
    } else if (filter === 'newest') {
      if (searchText !== searchTemp && searchText !== null) {
        url = `/questions?page=${page}&size=10&sort=-questionNo&content[like]=${searchText}`;
      } else {
        url = `/questions?page=${page}&size=10&sort=-questionNo`;
        console.log('url: ' + url);
      }
    } else if (filter === 'vote') {
      if (searchText !== searchTemp && searchText !== null) {
        url = `/questions?page=${page}&size=10&content[like]=${searchText}&totalVote[gte]=1`;
        console.log('stringvoteurl:' + url);
      } else {
        url = `/questions?page=${page}&size=10&totalVote[gte]=1`;
        console.log('url: ' + url);
      }
    }
    return fetch('http://localhost:8000/v1' + url)
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
  
  export const fetchCreateQuestion = async (fetchData) => {
    return fetch(`http://localhost:8000/v1/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(fetchData),
      credentials: 'include'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('유효하지 않은 요청입니다.');
        }
        return response.json();
      })
      .then((data) => {
        return data.questionNo;
      })
      .catch((error) => {
        throw Error(error.message);
      });
  };

  export const fetchCreateSolution = async (questionNo, fetchData) => {
    return fetch(`http://localhost:8000/v1/questions/${questionNo}/solutions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(fetchData),
      credentials: 'include'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('유효하지 않은 요청입니다.');
        }
        return response.json();
      })
      .then((data) => {
        return data.solutionNo;
      })
      .catch((error) => {
        throw Error(error.message);
      });
  };
  

  export const fetchSolutionList = async (questionNo, page, filter, searchText, language) => {
    console.log('Question 리스트가 조회됩니다.');
    console.log('page: ' + page);
    console.log('filter: ' + filter);
    
    console.log(searchText);

    if(Array.isArray(language) && language.length >= 1) {
      language = language.reduce((accum, lang) => {
        return accum += `&language[]=${lang}`
      })
      language = '&language[]=' + language
    } else {
      language = '';
    }

    console.log('language', language)

    
    let url = null;
    if (filter === 'unanswered') {
      url = `/questions/${questionNo}/solutions?page=${page}&size=10&sort=-solutionNo&answerCount=0` + language;
      console.log('url: ' + url);
    } else if (filter === 'newest') {
      url = `/questions/${questionNo}/solutions?page=${page}&size=10&sort=-solutionNo` + language;
      console.log('url: ' + url);
    } else if (filter === 'vote') {
      url = `/questions/${questionNo}/solutions?page=${page}&size=10&totalVote[gte]=1` + language;
      console.log('url: ' + url);
    }
    return fetch('http://localhost:8000/v1' + url)
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