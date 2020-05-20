<!--side area start-->
<template>
  <div class="sidebar">
    <div class="menu">
      <h2 class="menu-text">Menu</h2>
      <ul>
        <li><a href="#">コーヒー登録</a></li>
        <li><a href="#">道具登録</a></li>
        <li><router-link to="/beans">コーヒー豆一覧</router-link></li>
        <li><router-link to="/tools">道具一覧</router-link></li>
        <li><router-link to="/shops">ショップ一覧</router-link></li>
        <li><a href="#">ショップ詳細</a></li>
        <li><router-link to="/show">show</router-link></li>
      </ul>
    </div>
    <div class="logout">
      <button type="button">Log Out</button>
    </div>
  </div>
</template>
<!--side area end-->