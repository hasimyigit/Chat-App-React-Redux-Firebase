import * as types from "./types";
import { database } from "../../firebase/firebase";
import { ref, push, get, child } from "firebase/database";

const addChannel = (channel = {}) => ({
  type: types.CREATE_CHANNEL,
  payload: channel,
});

export const dbAddChannel = async (channel = {}) => {
  try {
    let res = await push(ref(database, "channels"), channel);
    channel.key = res.key;
    return addChannel(channel);
  } catch (err) {
    console.log(err);
  }
};

const setChannels = (channels = []) => ({
  type: types.SET_CHANNELS,
  payload: channels,
});

export const getDbChannels = async () => {
  try {
    const data = (await get(child(ref(database), `channels`))).val();
    const channels = Object.entries(data).map((c) => {
      return {
        key: c[0],
        ...c[1],
      };
    });

    return setChannels(channels);
  } catch (err) {
    console.log(err);
    return {type:"Default"}
  }
};

export const setCurrentChannel = (channel) => {
  return {
    type: types.SET_CURRENT_CHANNEL,
    payload: channel,
  };
};
