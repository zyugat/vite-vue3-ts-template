import { createPinia } from 'pinia'
import { useTodoStore } from './modules/todo'

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

export { useTodoStore }
export default pinia
