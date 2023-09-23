<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars" /></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <button type="button" class="btn btn-block btn-default" @click="logout()">Выйти</button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async logout() {
      await this.$axios.$post('auth/logout')
      this.$auth.logout()
      this.$router.push('/login');
    }
  }
}
</script>

<style></style>