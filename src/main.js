import { createApp } from 'vue'
import App from './App.vue'
import components from './components/Ui'
import router from "@/components/router/router";
import directives from "@/directives";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .mount('#app')
