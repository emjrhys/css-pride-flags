import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

import { createVCodeBlock } from '@wdns/vue-code-block'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

const codeBlock = createVCodeBlock({
  // options
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(codeBlock)

app.mount('#app')
