<!--side area start-->
<template>
  <Slide right
         width="250"
         :closeOnNavigation="true"
         noOverlay>
  <div class="sidebar">
    <div class="menu">
      <h2 class="menu-text">Menu</h2>
      <ul>
        <li><a href="#" v-on:click="registButton" class="side-menu-link">コーヒー登録</a></li>
        <li><a href="#"class="side-menu-link">道具登録</a></li>
        <li><a href="#" v-on:click="moveBeans" class="side-menu-link">コーヒー豆一覧</a></li>
        <!--<li><router-link to="/beans" class="side-menu-link">コーヒー豆一覧</router-link></li>-->
        <li><router-link to="/tools" class="side-menu-link">道具一覧</router-link></li>
        <li><router-link to="/shops" class="side-menu-link">ショップ一覧</router-link></li>
        <li><a href="#" class="side-menu-link">ショップ詳細</a></li>
        <li><router-link to="/show" class="side-menu-link">show</router-link></li>
        <li><a href="#" v-on:click="loginView" class="side-menu-link">Log In</a></li>
        <li><a href="#" v-on:click="logOut" class="side-menu-link">Log Out</a></li>
      </ul>
      <h4 v-if="!currentState">First-visit?<br> Create your account!!</h4>
      <a href="#" class="side-menu-link"
                  v-if="!currentState"
                  v-on:click="signupView">Sign Up</a>
    </div>
  </div>
  </Slide>
</template>
<!--side area end-->

<script>
import { Slide } from 'vue-burger-menu';
export default {
  name: 'SideBar',
  props: ['currentState'],
  components: {
    Slide
  },
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
      this.$emit('on-login-view-side', (true));
    },
    signupView: function() {
      this.$emit('on-signin-view-side', (true));
    },
    registButton: function() {
      this.$emit('on-register-view-side', (true));
    },
    moveBeans: function() {
      this.$router.push({name: 'Beans', params: { currentState: this.currentState}});
    }
  }
  
};
</script>

<style>
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
}
.bm-burger-bars {
  background-color: #D0104C;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
  color: #D0104C;
}
.bm-cross {
  background: #D0104C;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
  color: #D0104C;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgba(149, 74, 69, .95); /* スライドメニューの背景色*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.4s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: white;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

.side-menu-link {
  color: #86C166;
  text-decoration: none;
}
.side-menu-link:hover {
  color: white;
  text-decoration: none;
}
</style>