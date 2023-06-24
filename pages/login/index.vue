<template>
    <div>
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import CryptoJS from 'crypto-js';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://159.223.57.121:8090/auth/login', {
            username: this.username,
            password: this.password,
          });
          const { token, username, profileName } = response.data;
  
          const encryptedToken = CryptoJS.AES.encrypt(token, 'secret').toString();
  
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('token', encryptedToken);
            localStorage.setItem('username', username);
            localStorage.setItem('profileName', profileName);
  
            this.$router.push('/dashboard');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    },
  };
  </script>
  
  