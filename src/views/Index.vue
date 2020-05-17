<template>
  <!-- wrapper start-->
  <div class="wrapper">
    <!-- main area start -->
    <div class="main">
      <!--header area start-->
      <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="navtop">
          <a href="#" class="navbar-bland"><i class="fas fa-mug-hot"></i>Coffee Base</a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-bar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nav-bar">
            <ul class="navbar-nav">
              <div class="visible-on-logout">
                <li class="nav-item"><a href="#" class="nav-link" id="login-button"><i class="fas fa-user"></i>Log In</a></li>
              </div>
              <div class="visible-on-logout">
                <li class="nav-item"><a href="#" class="nav-link" id="signup-button"><i class="fas fa-user"></i>Sign up</a></li>
              </div>
              <div class="visible-on-login">
                <li class="nav-item"><a href="#" class="nav-link" id="logout-button"><i class="fas fa-briefcase"></i>Log Out</a></li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
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
            <img class="coffee-item-image" alt="" src="../assets/demo1.jpg">
          </div>
          <div class="coffee-detail">
            <div class="coffee-item-name">アマゾンコーヒー</div>
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
    <div class="sidebar">
      <div class="menu">
        <h2 class="menu-text">Menu</h2>
        <ul>
          <li><a href="#">コーヒー登録</a></li>
          <li><a href="#">道具登録</a></li>
          <li><a href="#">コーヒー豆一覧</a></li>
          <li><a href="#">道具一覧</a></li>
          <li><a href="#">ショップ一覧</a></li>
        </ul>
      </div>
      <div class="logout">
        <button type="button">Log Out</button>
      </div>
    </div>
    <!--side area end-->
    
  </div>
  <!-- wrapper end -->
</template>


<script>

</script>

<style scoped>

/* 全体の設定 */
.wrapper {
  display: flex;
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