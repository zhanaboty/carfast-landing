import Vue from 'vue'
import App from './App.vue'
import Headerr from './components/Headerr.vue'
import LeftSide from './components/LeftSide.vue'
import CenterSide from './components/CenterSide.vue'
import RightSide from './components/RightSide.vue'


Vue.component('headerr', Headerr)
Vue.component('left-side', LeftSide)
Vue.component('center-side', CenterSide)
Vue.component('right-side', RightSide)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
