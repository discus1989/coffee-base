<!--header area start-->
<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="navtop">
      <router-link to="/index" class="navbar-bland"><i class="fas fa-mug-hot"></i>Coffee Base</router-link>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-bar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav-bar">
        <ul class="navbar-nav">
          <div class="visible-on-logout" v-if="!currentState">
            <li class="nav-item"><a href="#" class="nav-link" id="login-button" v-on:click="loginView"><i class="fas fa-user"></i>Log In</a></li>
          </div>
          <div class="visible-on-logout" v-if="!currentState">
            <li class="nav-item"><a href="#" class="nav-link" id="signup-button" v-on:click="signupView"><i class="fas fa-user"></i>Sign up</a></li>
          </div>
          <div class="visible-on-login" v-if="currentState">
            <li class="nav-item"><a href="#" class="nav-link" id="logout-button" v-on:click="logOut"><i class="fas fa-briefcase"></i>Log Out</a></li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
<!--header area end-->

<script>
export default {
  name: 'Header',
  props: ['currentState'],
  methods: {
    logOut: function() {
      firebase.auth()
              .signOut()
              .then(() => {
                alert('Log Out. Bye.');
                this.$emit('success-logout', false);
              })
              .catch((error) => {
                alert('Sign Out error');
                console.log('Sign Out error');
              })
    },
    loginView: function() {
      this.$emit('on-login-view-header', (true));
    },
    signupView: function() {
      this.$emit('on-signup-view-header', (true));
    }
  }
}
</script>