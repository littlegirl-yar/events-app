<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Admin</b>LTE</a>
    </div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form @submit.prevent="JWTLogin">
          <div class="input-group mb-3">
            <input v-model="email" class="form-control" type="text" placeholder="Email address">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="password" class="form-control" id="psw-input" type="password" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
        <p class="mb-0">Нет аккаунта? <NuxtLink to="/register">Зарегистрироваться</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      'email': '',
      'password': '',
    }
  },
  methods: {
    async JWTLogin() {
      try {
        await this.$auth.loginWith('auth_jwt', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push({ path: '/' })
      }
      catch (e) {
        console.log(e)
        this.$toast.error(e.response.data.message);
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'hold-transition login-page'
      }
    }
  },
}
</script>
