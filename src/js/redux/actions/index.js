import { LOG_IN, LOG_OUT } from "../constants";

export function logIn(payload) {
  return { type: LOG_IN, payload }
};

export function logOut() {
  return { type: LOG_OUT }
};