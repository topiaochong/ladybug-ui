<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <my-demo></my-demo>
    <m-card imgSrc="images/java.png" summary="测试说明1测试说明1测试说明1测试说明1测试说明1"></m-card>
    <m-card imgSrc="images/login_mainbg.jpg" summary="测试说明1测试说明1测试说明1测试说明1测试说明1">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">11111</div>
          <div class="price">22.00</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color:#9199AA;
  margin-bottom: 8px;
}
.price{
  color:#f01414;
}
</style>
