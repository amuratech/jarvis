<template>
  <div id="app" class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://www.hsdtaxlaw.com/wp-content/uploads/2016/05/logo_placeholder-150x150.png">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Dashboard' }">Home</router-link>
          <router-link class="navbar-item" :to="{ name: 'About' }">About</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <!-- <a class="navbar-link">
              More
            </a> -->
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                Welcome to Chatkit
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <Bot></Bot>
  </div>
</template>

<script>
import Bot from './components/Bot'
export default {
  name: 'app',
  components: {
    Bot
  },
}
</script>
<style lang="sass">
  @charset "utf-8"
  @import "node_modules/bulma/sass/utilities/_all.sass";
  @import "node_modules/bulma/sass/base/_all.sass";
  @import "node_modules/bulma/sass/layout/section.sass";
  @import "node_modules/bulma/sass/grid/columns.sass";
  @import "node_modules/bulma/sass/components/navbar.sass";
  @import "node_modules/bulma/sass/elements/container.sass";
  @import "node_modules/bulma/sass/elements/title.sass";
</style>

