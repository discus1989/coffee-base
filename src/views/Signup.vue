<template>
  <div class="back">
    <div class="signup">
      <h2>Sign up</h2>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button v-on:click='signUp'>Register</button>
      <button v-on:click="toIndex" class="returnbtn">Return</button>
      <p>Do you have an account? 
        <a href="#" v-on:click="moveLogin">Log In now!!</a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      currentState: false,
    };
  },
  methods: {
    signUp: function () {
      firebase.auth()
              .createUserWithEmailAndPassword(this.username, this.password)
              .then(user => {
                alert('Create Account: ', user.email);
                this.currentState = true;
                console.log('Sign Up and Log In!!');
                this.$emit('success-signup', true);
              })
              .catch(error => {
                alert(error.message)
              });
    },
    // indexのみ表示させる（モーダルを閉じる）
    toIndex: function() {
      this.$emit('return-click-signup', (false));
    },
    // loginモーダルに移動する
    moveLogin: function() {
      this.$emit('move-to-login', (false));
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
.signup {
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
</style>