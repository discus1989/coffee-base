<template>
  <!-- wrapper start-->
  <div class="wrapper">
    
   　<!--ログインコンポーネント-->
    <Login v-on:return-click-login='noEmitEventIn'
           v-on:move-to-signup="moveSignup"
           v-on:success-login="changeState"
           v-if="clicked" />
           
    <!-- Sign Upコンポーネント -->
    <Signup v-on:return-click-signup='noEmitEventUp'
            v-on:move-to-login="moveLogin"
            v-on:success-signup="changeState"
            v-if="signupClicked"/>
    
    <!-- main area start -->
    <div class="main">
      <!--header area start-->
      <Header v-bind:current-state='currentState'
              v-on:on-login-view-header="emitEventIn"
              v-on:on-signup-view-header="emitEventUp"
              v-on:success-logout="changeState"></Header>
      <!--<button type="button" @click="clicked = !clicked">ボタンクリック</button>-->
      <!--header area end-->
      
      <!-- top area start -->
      <div class="top">
        <div class="title">
          <div class="title-intro">
            <h1 class="title-name">Coffee Base</h1>
            <h2 class="title-intro">コーヒー好きのためのストックアプリ</h2>
          </div>
        </div>
        
        <h4>最近買ったもの</h4>
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <router-link to="/show"><img class="coffee-item-image" alt="" src="../assets/demo1.jpg"></router-link>
          </div>
          <div class="coffee-detail">
            <router-link to="/show"><div class="coffee-item-name">アマゾンコーヒー</div></router-link>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
        
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <img class="coffee-item-image" alt="" src="photos/demo.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">アメリカコーヒー</div>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
        
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <img class="coffee-item-image" alt="" src="photos/demo.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">ブラジルコーヒー</div>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
        
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <img class="coffee-item-image" alt="" src="photos/demo.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">メキシココーヒー</div>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
        
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <img class="coffee-item-image" alt="" src="photos/demo.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">エチオピアコーヒー</div>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
        
        <div class="coffee-item">
          <div class="coffee-image-wrapper">
            <img class="coffee-item-image" alt="" src="photos/demo.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">コナコーヒー</div>
            <div class="coffee-item-delete-wrapper">
              <button class="btn btn-danger coffee-item-delete">削除</button>
            </div>
          </div>
        </div>
      </div>
      <!-- top area end -->
    </div>
    <!--main area end-->

    <!--side area start-->
    <SideBar v-on:on-login-view-side="emitEventIn"
             v-on:success-logout="changeState"></SideBar>
    <!--side area end-->
    
  </div>
  <!-- wrapper end -->
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue'

export default {
  name: 'Index',
  components: {
    SideBar,
    Header,
    Login,
    Signup
  },
  data: function () {
    return {
      clicked: false, //loginボタン状態
      signupClicked: false, //signupボタン状態
      currentState: false, //ログイン状態
    };
  },
  created: function() {
    //ログイン状態を表示
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log('Login now.');
        this.currentState = true
      } else {
        console.log('Logout now.');
      }
    });
  },
  methods: {
    // loginコンポーネントでreturnボタンを押した時に画面を閉じる
    noEmitEventIn: function(e){
      this.clicked = e; //子コンポーネントをeで受け取り、clickedを変更する
    },
    // loginコンポーネントを表示させる
    emitEventIn: function(e){
      this.clicked = e;
    },
    // signupコンポーネントでreturnボタンを押した時に画面を閉じる
    noEmitEventUp: function(e){
      this.signupClicked = e;
    },
    // signupコンポーネントを表示させる
    emitEventUp: function(e){
      this.signupClicked = e;
    },
    // login画面からsignup画面に移動
    moveSignup: function(e) {
      this.clicked = e;
      this.signupClicked = !e;
    },
    // signup画面からlogin画面に移動
    moveLogin: function(e) {
      this.clicked = !e;
      this.signupClicked = e;
    },
    // login, signup, logoutに成功したら状態currentStateをtrueに変更
    changeState: function(e){
      this.currentState = e;
      this.clicked = false;
      this.signupClicked = false;
      console.log('currentState is ' + this.currentState);
    }
  }
};
</script>


<style scoped>

/* 全体の設定 */
.wrapper {
  display: flex;
  position: relative;
}

.main {
  width: 75%;
}

/* トップ */
.title {
  height: 250px;
  background-image: url(../assets/top.jpg);
  background-size: cover;
  background-position: center;
}

.title-intro {
  text-align: center;
  vertical-align: middle;
  color: white;
  font-family: "Comic Sans MS";
  text-shadow: 2px 3px 4px #62592C;
}

/* サイドバー*/
.sidebar {
  width: 25%;
  border: solid 1px #000;
  background-color: #DAC9A6;
}
.coffee-item {
  width: 220px;
  margin: 15px;
  float: left;
  background-color: white;
  border: solid 1px #ddd;
}

.coffee-image-wrapper {
  width: 220px;
  height: 240px;
  padding: 5px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.coffee-item-image {
  max-height: 220px;
  max-width: 200px;
  vertical-align: middle;
  object-fit: contain;
}

.coffee-detail {
  padding: 10px;
  background-color: #fafafa;
  border-top: solid 1px #ddd;
}

.coffee-item-name {
  margin: 0 auto;
  height: 36px;
  text-align: center;
  overflow: hidden;
}

.coffee-item-delete-wrapper {
  margin-top: 5px;
  text-align: right;
}

.coffee-item-delete {
  color: #dc3545;
  background-color: transparent;
  border-color: #dc3545;
}
.coffee-item-delete:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.coffee-item-delete:focus {
  outline-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
  
</style>