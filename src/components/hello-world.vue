<template>
  <div class="hello-world">
    <img src="@/assets/vue.svg" class="logo" alt="Vue logo" />
    <h3 class="title">{{ msg }}</h3>
    <el-button type="primary" @click="sayHello">sayHello</el-button>
    <el-button @click="changeMsg">changeMsg</el-button>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

const msg = ref('')

onBeforeMount(() => {
  axios.get('/api/mfsu/info').then(res => {
    msg.value = res.data.data
  })
})

const sayHello = () => {
  msg.value = 'hello kai!'
  console.log(msg.value)
}

const changeMsg = () => (msg.value = 'hello kai!')
</script>
<style lang="scss" scoped>
.hello-world {
  .logo {
    width: 100px;
    height: 100px;
  }

  .title {
    color: #000;
    font-size: 40px;
  }
}
</style>
