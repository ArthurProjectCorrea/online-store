// import "./assets/main.css";
import "./assets/tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGear,
  faTowerCell,
  faCity,
  faQrcode,
  faWallet,
  faBook,
  faHeadset,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

library.add(faGear, faTowerCell, faCity, faQrcode, faWallet, faBook, faHeadset, faRightFromBracket);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
