import store from "./store";
import { logIn, logOut } from "./actions";

window.store = store;
window.logIn = logIn;
window.logOut = logOut;