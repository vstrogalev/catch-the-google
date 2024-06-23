import { subscribe } from "./data/data.js";
import { App } from "./ui/App.js";

const root = document.getElementById('root');


function renderApp() {
  root.innerHTML = '';
  const app = App();
  root.append(app);
}

renderApp();

subscribe(renderApp);