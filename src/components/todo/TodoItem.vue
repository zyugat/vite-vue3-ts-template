<script setup lang="ts">
import { PropType, ref } from 'vue'
import { ITodo } from '@/store/modules/todo/types'

const props = defineProps({
  item: {
    type: Object as PropType<ITodo>,
    required: true,
  },
})

// 移除,设置状态
const emit = defineEmits(['removeTodo', 'setStatus', 'setDoing', 'changeTodoItem'])

const removeTodo = (id: number): void => {
  emit('removeTodo', id)
}
const setStatus = (id: number): void => {
  emit('setStatus', id)
}
const setDoing = (id: number): void => {
  emit('setDoing', id)
}

// 修改数据
const changeStatus = ref<boolean>(false)
const changeItemContent = ref<string>('')
const changeContent = (id: number, content: string) => {
  if (changeItemContent.value !== content) {
    emit('changeTodoItem', { id, content: changeItemContent.value })
  }
  changeStatus.value = false
}
</script>

<template>
  <div class="todo-item">
    <div class="status-input">
      <input type="checkbox" :checked="item.status === 'finished'" @click="setStatus(item.id)" />
    </div>
    <div
      v-if="changeStatus === false"
      class="text-connect"
      @click=";(changeStatus = true), (changeItemContent = item.content)"
    >
      <span :class="item.status === 'finished' ? 'line-through' : ''">
        {{ item.content }}
      </span>
    </div>
    <div v-else class="change-status">
      <input v-model="changeItemContent" type="text" />
      <button @click="changeContent(item.id, item.content)">修改</button>
    </div>
    <div class="status-action">
      <button @click="removeTodo(item.id)">删除</button>
      <button
        v-if="item.status !== 'finished'"
        :class="item.status === 'doing' ? 'doing' : 'will'"
        @click="setDoing(item.id)"
      >
        {{ item.status === 'doing' ? '正在做...' : '马上做' }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.todo-item {
  width: 100%;
  height: 30px;
  line-height: 30px;
  span,
  button {
    margin-left: 5px;
  }
  .status-input {
    display: inline-block;
    float: left;
    input {
      width: 15px;
      height: 15px;
    }
  }
  .text-connect {
    display: inline-block;
    width: 150px;
  }
  .change-status {
    display: inline-block;
    margin-left: 5px;
    input {
      width: 120px;
      height: 15px;
    }
  }
  .status-action {
    display: inline-block;
    float: right;
    margin-right: 10px;
    height: 30px;
  }

  .line-through {
    text-decoration: line-through;
  }

  .doing {
    background-color: #ededed;
    color: #999;
  }

  .willdo {
    background-color: orange;
    color: #fff;
  }
}
</style>
