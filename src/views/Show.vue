<template>
  
  <!-- wrapper start-->
  <div class="wrapper">
    <!-- main area start -->
    <div class="main">
      <!--header area start-->
      <Header></Header>
      <!--header area end-->
      
      <!-- content area start -->
      <div class="content-area">
        <!-- coffee area start -->
        <div class="coffee-area">
          <div class="coffee-item">
            <div class="coffee-image-wrapper">
              <img class="coffee-item-image" alt="" src="../assets/demo2.jpg">
            </div>
            <div class="coffee-detail">
              <div class="coffee-item-name">アマゾンコーヒー</div>
              <div class="coffee-item-delete-wrapper">
                <button class="btn btn-danger coffee-item-delete">削除</button>
              </div>
            </div>
          </div>
        </div>
        <!-- coffee area end -->
        
        <!-- graph area start -->
        <div class="graph-area">
          graph area<br>chart.jsを利用してrader chartを作成する？
          <div class="graph">
            
          </div>
        </div>
        <!-- graph area end -->
      
      </div>
      <!-- content area end -->
      
      <!-- comment area start -->
      <div class="comment-area">
        コメントエリア
      </div>
      <!-- comment area end -->
      <!-- data area start -->
      <div class="data-area">
        <div class="buying">
          <p>前に買った日：</p>
        </div>
        <div class="buy-time">
          <p>買った回数：</p>
        </div>
        <div class="shop-address">
          <p>ショップ住所：</p>
        </div>
      </div>
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

/* コンテンツエリア*/
.content-area {
  display: flex;
}

.coffee-area {
  width: 50%;
  height: 400px;
  background-color: orange;
  position: relative;
}

.graph-area {
  width: 50%;
  height: 400px;
  background-color: gray;
}

.graph {
  width: 300px;
  height: 300px;
  left: 25%;
  position: relative;
  background-color: orange;
}

/* コメントエリア*/
.comment-area {
  width: 100%;
  height: 150px;
  background-color: yellow;
}

/* サイドバー*/

.coffee-item {
  width: 220px;
  margin: 15px;
  float: left;
  left: 25%;
  background-color: white;
  border: solid 1px #ddd;
  position: absolute;
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