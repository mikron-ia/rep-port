<template>
  <div id="app">
    <div id="header">
      <h1>RepPort</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./../node_modules/bootstrap/scss/bootstrap";
@import "./../node_modules/bootstrap-vue/src/index.scss";
@import "assets/app";
</style>
