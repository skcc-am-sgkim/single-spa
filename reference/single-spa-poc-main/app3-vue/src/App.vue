<template>
  <h1>Hello Vue3 App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <ul>
        <li><router-link to="/">Go to Home(Vue route)</router-link></li>
        <li><router-link to="/about">Go to About(Vue route)</router-link></li>
        <li><a href="/" onclick="singleSpaNavigate(event)">Go to Home(SingleSPA route)</a></li>
        <li><a href="/about" onclick="singleSpaNavigate(event)">Go to About(SingleSPA route)</a></li>
      </ul>
  </p>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
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
</style>
