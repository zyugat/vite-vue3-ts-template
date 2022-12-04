<template>
  <div>
    <div>元信息: {{ $route.meta }}</div>

    <router-link to="/RouterTemplate" class="link-a">RouterTemplate</router-link>
    <router-link to="/RouterTemplate/children1" class="link-a"
      >点击切换子路由 children1</router-link
    >
    <router-link to="/RouterTemplate/children2" class="link-a"
      >点击切换子路由 children2</router-link
    >

    <br />
    <router-view></router-view>

    <br />

    <h3>1. 路由传参</h3>
    <router-link to="/RouterTemplate/myParamsData">
      路由传参 params：{{ $route.params.abc }}
      <!--input: myParamsData-->
    </router-link>
    <router-link :to="{ path: '/RouterTemplate', query: { name: 'myQueryData' } }">
      路由传参 query：{{ $route.query.name }}
      <!--input: myQueryData-->
    </router-link>
    <br />
    <h3>2. 正则匹配</h3>
    <router-link to="/RouterTemplate/reg/正则匹配所有内容">
      1) 匹配所有内容: {{ $route.params.pathMatch }}
      <!--input: 正则匹配所有内容-->
    </router-link>
    <router-link to="/RouterTemplate/reg/abc-defg">
      2) 匹配 abc 之后的内容: {{ $route.params.afterUser }}
      <!--input: defg-->
    </router-link>
    <router-link to="/RouterTemplate/reg/cba-defg/123">
      3) 匹配 abc 之后的内容, 以 / 隔断: {{ $route.params.afterAll }}
      <!--input: [ "defg", "123" ]-->
    </router-link>
    <br />
    <h3>3. 命名路由</h3>
    <router-link :to="{ name: 'RouterTemplate' }">命名路由测试</router-link>
    <button @click="parmRouterTemplate">按钮测试</button>
    <br />
    <h3>3.5 命名视图</h3>
    <router-link to="/RouterTemplate/nameLeft"> 显示 Left 和 Main </router-link>
    <router-link to="/RouterTemplate/nameRight"> 显示 Right 和 Main </router-link>
    <router-view />
    <router-view name="main" />
    <!-- <router-view name="change" /> -->
    <br />
    <h3>5. 重定向</h3>
    <router-link :to="{ path: '/RouterTemplate/redirect', query: { searchText: 'redirect!' } }">
      路由传参 query：{{ $route.query.searchText }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let parmRouterTemplate = () => {
  router.push({ name: 'RouterTemplate', params: { abc: '123' } })
}
</script>

<style lang="scss" scoped></style>
