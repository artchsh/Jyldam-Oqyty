import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import router from './router'
//import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

loadFonts()

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
