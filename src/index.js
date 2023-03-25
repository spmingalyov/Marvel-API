import App from './components/App/App';
import Comics from './components/Comics/Comics';


(async() => {
  await App.render();
  Comics.eventListener();
})();