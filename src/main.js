import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './plugins/translatePlugin'


const app = createApp(App)

app.use(translatePlugin, {test: 1})
// .directive(
//   'focus', {
//     mounted(el) {
//       el.focus()
//     }
//   }
// )
.mount('#app')
