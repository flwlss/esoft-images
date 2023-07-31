import { photosUrl } from "../../common/constants";

export const getPhotosRequest = async () => {
  return await fetch(`${photosUrl}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    console.log('getPhotosRequest result', res.status);
    if (res.status === 200) {
      return res.json();
    }
    return null;
  });
};