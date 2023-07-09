import config from '../config.js';

export default async function getDataProduct() {
  const url = `http://${config.host}:${config.port}/api/products`;
  const response = await fetch(url);
  const json = await response.json();

  return json;
}
