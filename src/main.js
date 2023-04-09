import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'vant/lib/index.less';
import '#/styles/reset.css';
import { Button, Icon, Popup, Field, Steps, Step, Search, Grid, GridItem, Image, ImagePreview, List, Cell} from 'vant';

Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Search)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(List)
Vue.use(Cell)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
