<template>
  <!-- wrapper start-->
  <div class="wrapper">
    <!-- main area start -->
    <div class="main">
      <!--header area start-->
      <Header></Header>
      <!--header area end-->
      
      <!-- top area start -->
      <div class="top">
        <div class="title">
          <div class="title-intro">
            <h1 class="title-name">Coffee Base</h1>
            <h2 class="title-intro">コーヒー好きのためのストックアプリ</h2>
          </div>
        </div>
        
        <h4>ショップ一覧</h4>
        <table class="table table-striped shop-list">
          <tr>
            <th>ショップ名</th>
            <th>住所</th>
            <th>HP</th>
          </tr>
          <tr>
            <td>コーヒーロースト　ダイチ</td>
            <td>奈良県橿原市中曽司町132−５</td>
            <td>https://coffeedaichi.shop/</td>
          </tr>
          <tr>
            <td>珈琲亭</td>
            <td>奈良県橿原市新賀町445−５</td>
            <td>http://coffee-tei.jp/coffee-tei_web/Welcome.html</td>
          </tr>
        </table>
      </div>
      <!-- top area end -->
    </div>
    <!--main area end-->

    <!--side area start-->
    <SideBar></SideBar>
    <!--side area end-->
    
  </div>
  <!-- wrapper end -->
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
export default {
  name: 'Index',
  components: {
    SideBar,
    Header
  }
};
</script>

<style scoped>
  
/* 全体の設定 */
.wrapper {
  display: flex;
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

/* サイドバー*/

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