import END_POINT_API from '../constants/constantAPI';

function postAPI(request) {
  return fetch(END_POINT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': '',
    },
    body: JSON.stringify(request),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export default postAPI;
