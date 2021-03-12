<template>
  <form @submit.prevent="onSubmit">
    <input
      type="email"
      required
      placeholder="Email Address"
      v-model="email"
    />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
    />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const email = ref('')
    const password = ref('')

    const onSubmit = () => {
      console.log(email.value)
      console.log(password.value)
    }

    return { email, password, onSubmit }
  },
}
</script>

<style>
</style>
