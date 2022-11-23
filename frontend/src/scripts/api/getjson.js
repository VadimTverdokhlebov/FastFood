import pubSub from '../PubSub.js';
import { mainJson } from '../storage/store.js';

getJson();

async function getJson() {

    const url = 'http://localhost:3000/api';
    const response = await fetch(url);
    const json = await response.json();
    mainJson.menu = json.menu;
    pubSub.publish("getJson", json.menu);
}
