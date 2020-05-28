<template>
  <!-- wrapper start-->
  <div class="wrapper">
    
    <!--コーヒー登録コンポーネント-->
    <CoffeeRegister v-if="registState"
                    v-on:return-click-register='registerHide'
                    v-on:success-coffee-registration='registerHide'></CoffeeRegister>
    
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
            <h1 class="title-name" v-on:click="loadCoffeeView">Coffee Base</h1>
            <h2 class="title-intro" v-on:click="downloadCoffeeImages(lca)">コーヒー好きのためのストックアプリ</h2>
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
            <img class="coffee-item-image" alt="" v-bind:src="image">
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
    <SideBar v-bind:current-state='currentState'
             v-on:on-login-view-side="emitEventIn"
             v-on:on-signin-view-side="emitEventUp"
             v-on:success-logout="changeState"
             v-on:on-register-view-side='registerView'></SideBar>
    <!--side area end-->
    
  </div>
  <!-- wrapper end -->
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import CoffeeRegister from '@/components/CoffeeRegister.vue';

export default {
  name: 'Index',
  components: {
    SideBar,
    Header,
    Login,
    Signup,
    CoffeeRegister,
  },
  data: function () {
    return {
      clicked: false, //loginボタン状態
      signupClicked: false, //signupボタン状態
      currentState: false, //ログイン状態
      registState: false, //コーヒー登録ボタンの状態
      image: '',
    };
  },
  created: function() {
    //ログイン状態を表示
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log('Login now.');
        this.currentState = true;
      } else {
        console.log('Logout now.');
      }
    });
    this.loadCoffeeView();
    console.log('mounted,',typeof image);
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
    // login, signup, logoutに成功したら状態currentStateを変更
    changeState: function(e){
      this.currentState = e;
      this.clicked = false;
      this.signupClicked = false;
      console.log('currentState is ' + this.currentState);
    },
    // サイドバーのコーヒー登録ボタンを押したら状態変化
    registerView: function(e) {
      console.log('登録が押されました', e);
      this.registState = e;
    },
    // コーヒー登録ボタンを隠す
    registerHide: function(e) {
      this.registState = e;
    },
    // firebase databaseからコーヒーデータをダウンロード
    loadCoffeeView: function() {
      const coffeeRef = firebase
        .database()
        .ref('beans')
        .orderByChild('createdAt');
      // 過去に登録したイベントハンドラを削除
      coffeeRef.off('child_added');
      
      coffeeRef.on('child_added',(coffeeSnapshot) => {
        const coffeeId = coffeeSnapshot.key;
        const coffeeData = coffeeSnapshot.val();
        console.log(coffeeData);
        const location = coffeeData.coffeeImageLocation;
        console.log('coffee data is:', typeof location);
        console.log(location);
      
        //firebase storageからコーヒーの画像データをダウンロード
        firebase
          .storage()
          .ref(location)
          .getDownloadURL()
          .then((data) => {
            console.log('data is: ', data);
            this.image = data;
          })
          .catch((error) => {
            console.error('cannot download coffee images.', error);
          });
      });
    },
    //firebase storageからコーヒーの画像データをダウンロード(未使用)
    downloadCoffeeImages: function(coffeeImageLocation) {
      firebase
        .storage()
        .ref(coffeeImageLocation)
        .getDownloadURL()
        .then((data) => {
          console.log(data);
          this.image = data;
        })
        .catch((error) => {
          console.error('cannot download coffee images.', error);
        });
    },
    
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
  width: 100%;
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

/* サイドバー*/

</style>