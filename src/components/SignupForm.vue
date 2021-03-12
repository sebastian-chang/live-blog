<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
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
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const onSubmit = () => {
      console.log(displayName.value)
      console.log(email.value)
      console.log(password.value)
    }

    return { displayName, email, password, onSubmit }
  },
}
</script>

<style>
</style>
