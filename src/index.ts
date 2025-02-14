import type { App } from "vue";
import Button from "./components/Button";

export { Button };

export default {
  install: (app: App) => {
    app.component("MyButton", Button);
  },
};
