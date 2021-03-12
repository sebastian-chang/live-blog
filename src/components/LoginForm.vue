<template>
  <form @submit.prevent="onSubmit">
    <input type="email" required placeholder="Email Address" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
  setup (props, context) {
    const { error, login } = useLogin()
    const email = ref('')
    const password = ref('')

    const onSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, onSubmit, error }
  },
}
</script>

<style>
</style>
