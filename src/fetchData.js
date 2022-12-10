export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7551bd998fmshcd2c2220e76f8e9p1add01jsne453ce90f67f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  }