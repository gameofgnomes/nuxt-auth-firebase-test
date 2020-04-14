<template>
  <div class="container">
    <div class="p-6 w-1/5 mx-auto shadow-md">
      <form @submit.prevent="userSignUp">
        <h2 class="mb-2 text-xl text-green-500">Sign Up</h2>

        <div class="mb-4">
          <label
            class="block mb-2 text-gray-500"
            for="email">Email</label>
          <input
            class="border w-full px-2 py-1"
            type="text"
            id="email"
            v-model="email"/>
        </div>

        <div class="mb-4">
          <label
            class="block mb-2 text-gray-500"
            for="password">Password</label>
          <input
            class="border w-full px-2 py-1"
            type="password"
            id="password"
            v-model="password"/>
        </div>

        <button
          type="submit"
          class="w-full bg-green-300 py-3 px-6">Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      userSignUp: function (err) {
        this.$store
          .dispatch('auth/signUp', {
            email: this.email,
            password: this.password,
          })
        .then(() => {
          this.email = '';
          this.password = '';
        })
        .catch(err => {
          alert(err.message);
        });
      },
    }
  };
</script>

<style scoped>
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
