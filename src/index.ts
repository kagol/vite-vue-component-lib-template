import type { App } from 'vue'
import MyComponent from './my-component/index.vue'

export { MyComponent }

export default {
  install(app: App) {
    app.component('my-component', MyComponent)
    // more components can be registered here
  }
}
