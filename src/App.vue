<template>
  <div class="app">
    <div class="router">
      <div class="content">
        <div class="router-list">
          <router-link v-for="item in routerList" :key="item.url" :to="item.url" class="link-a">
            {{ item.name }}
          </router-link>
        </div>

        <div class="router-content">
          <router-view v-slot="{ Component }">
            <transition :name="routerTransition">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

let router = useRouter()
let route = useRoute()

let routerTransition = ref('fade_router-default')

const routerList = reactive([
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/todolist',
    name: 'TodoList',
  },
  {
    url: '/demo',
    name: 'Demo',
  },
])

router.beforeEach((to, from, next) => {
  let toIndex = routerList.findIndex(item => item.url === to.path)
  let fromIndex = routerList.findIndex(item => item.url === from.path)

  // 在下面 css 那有相关解释. 想看自行跳转.
  if (toIndex > fromIndex) {
    routerTransition.value = 'fade_router-right'
  } else {
    routerTransition.value = 'fade_router-left'
  }

  next()
})
</script>

<style lang="scss">
.app {
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  select,
  input,
  label,
  button {
    vertical-align: middle;
  }

  .router {
    position: relative;
    width: 40rem;
    height: max-content;
    margin: 0 auto;
    margin-top: 2rem;

    border-radius: 2rem;
    overflow: hidden;

    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #c5c6b620;

      z-index: 5;
    }

    > .content {
      position: relative;
      z-index: 20;
      padding: 2rem;
    }

    .router-list {
      display: flex;
      justify-content: center;
      flex-wrap: warp;
      column-gap: 20px;

      .link-a {
        color: #ee7785;
        font-size: 1.5rem;

        opacity: 0.4;

        transition: all 0.3s;

        &.router-link-active {
          opacity: 1;
        }
      }
    }

    .router-content {
      width: 100%;
      margin-top: 2rem;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      // 默认
      .fade_router-default-enter-active,
      .fade_router-default-leave-active {
        transition: all 0;
      }
      .fade_router-default-enter {
        opacity: 0;
      }
      .fade_router-default-enter {
        opacity: 0;
      }

      // 简单说两句
      // 我们拿 fade_router-right 过来举例子
      // 1. 新元素需要从 "右边" 进来, 故 v-enter-from 使元素在 "右边出现" .
      // 2. 旧元素需要移动到 "左边" , 故 v-leave-to 使元素的 "目的地" 是左边.
      .fade_router-right-enter-from,
      .fade_router-left-leave-to {
        transform: translate(100%, 0);
      }

      .fade_router-right-leave-to,
      .fade_router-left-enter-from {
        transform: translate(-100%, 0);
      }

      .fade_router-left-leave-active,
      .fade_router-right-leave-active,
      .fade_router-left-enter-active,
      .fade_router-right-enter-active {
        transition: all 0.5s ease-out;
      }
    }
  }
}
</style>
