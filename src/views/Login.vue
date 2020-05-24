<template>
  <div class="back">
    <div class="login">
      <h2>Log in</h2>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button v-on:click="logIn" class="loginbtn">Log In</button>
      <button v-on:click="toIndex" class="returnbtn">Return</button>
      <p>You don't have an account? 
        <a href="#" v-on:click="newUser">create account now!!</a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  // props: ['clicked'], //そもそも必要ない？
  data: function(){
    return {
      username: '',
      password: '',
      //current: this.clicked, //データをcurrentに移行 必要ない？
    };
  },
  methods: {
    logIn: function() {
      firebase.auth()
              .signInWithEmailAndPassword(this.username, this.password)
              .then(user => {
                alert('Sign In is success.');
                console.log('Sign In is success.');
                this.$emit('success-login', true);
              })
              .catch(error => {
                alert(error.message)
              });
    },
    toIndex: function() {
      this.$emit('return-click-login', (false)); //親コンポーネントにfalseを引き渡す
    },
    newUser: function() {
      this.$emit('move-to-signup', (false));
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.back {
  background: rgba(100, 100, 100, .5);
  height: 1000px;
  width: 100vw;
  position: absolute;
  z-index: 99;
}
.login {
  width: 50%;
  margin: 100px auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: #fff;
  z-index: 100;
}
input {
  margin: 10px 0;
  padding: 10px;
}
.loginbtn {
  display: flex;
  margin: 0;
}
.returnbtn {
  display: flex;
  margin: 0;
}
</style>