<template>
  <div class="login-form-wrapper">
    <a-form
      @submit="handleSubmit"
      id="components-form-demo-normal-login"
      class="login-form"
    >
      <a-form-item>
        <a-input
          v-model="form.username"
          placeholder="Username"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model="form.password"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="form-button"
        >
          Log in
        </a-button>
        Or <a href=""> register now! </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { LoginFormInput } from 'types/inputs/LoginFormInput'

@Component
export default class LoginView extends Vue {
  form: LoginFormInput = new LoginFormInput()

  handleSubmit(e) {
    e.preventDefault()

  }
}
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.login-form {
  width: 300px;
  height: fit-content;

  .form-button {
    width: 100%;
  }
}
</style>