import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import { useTodoStore } from './modules/todo'
import { useMainStore } from './modules/main'

export { useTodoStore, useMainStore }
export default pinia
