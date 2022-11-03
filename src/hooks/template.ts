/*
  description: Hooks 模板
*/

import { ref } from 'vue'

export default function useUser(initValue = false) {
  const loading = ref(initValue)

  const toggle = () => {
    loading.value = !loading.value
  }

  return {
    loading,
    toggle,
  }
}
