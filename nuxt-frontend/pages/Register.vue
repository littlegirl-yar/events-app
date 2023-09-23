<template>
  <div class="register-box">
    <div class="register-logo">
      <a href=""><b>Admin</b>LTE</a>
    </div>

    <div class="card">
      <div class="card-body register-card-body">
        <p class="login-box-msg">Register a new membership</p>

        <form @submit.prevent="register">
          <div class="input-group mb-3">
            <input v-model="first_name" type="text" class="form-control" placeholder="First name">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="last_name" type="text" class="form-control" placeholder="Last name">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="Email">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input v-model="password_confirmation" type="password" class="form-control" placeholder="Retype password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
          </div>
        </form>
        <p class="mt-3 mb-0">Уже есть аккаунт? <NuxtLink to="/login">Войти</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'password_confirmation': '',
      'birth_date': '05.05.1999'
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('auth/register', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          birth_date: this.birth_date
        })
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
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: 'hold-transition register-page'
      }
    }
  },
}
</script>
