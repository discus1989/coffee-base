<template>
  <div class="back">
    <div class="register">
      <h2>Coffee Register</h2>
      <input type="text" placeholder="CoffeeName" v-model="coffeeName">
      <input type="text" placeholder="ShopName" v-model="shopName">
      <input type="file" v-on:change="onFileChange" id="coffee-image" accept="image/jpeg,image/png,image/gif">
      <button v-on:click="record" class="recordbtn">Record</button>
      <button v-on:click="toIndex" class="returnbtn">Return</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'CoffeeRegister',
  data: function(){
    return {
      coffeeName: '',
      shopName: '',
      file: null,
      coffeeImageLocation: null,
    };
  },
  methods: {
    toIndex: function() {
      this.$emit('return-click-register', (false));
    },
    onFileChange: function(e) {
      const image = e.target.files; //選択された画像ファイルを選択
      console.log(image);
      this.file = image[0]; //画像ファイルを1つだけ選択
      console.error('選択されてる',this.file);
      this.coffeeImageLocation = `coffee-images/${this.coffeeName}`;
      console.log(this.coffeeImageLocation);
    },
    record: function() {
      //画像をfirebase storageに保存
      firebase
        .storage()
        .ref(this.coffeeImageLocation)
        .put(this.file)
        .then(() => {
          //保存した画像ファイルの場所とともにfirebase databaseに保存
          const coffeeData = {
            name: this.coffeeName,
            shop: this.shopName,
            coffeeImageLocation: this.coffeeImageLocation,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
          };
          firebase
            .database()
            .ref('beans')
            .push(coffeeData)
            .then(() => {
              console.log('saved coffee data.');
              alert('data is registration.');
              this.$emit('success-coffee-registration', false);
            })
            .catch((error) => {
              console.error('cannnot saved.', error);
            });
        })
        .catch((error) => {
          console.error('image uproad error.', error);
        });
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
.register {
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
.recordbtn {
  display: flex;
  margin: 0;
}
.returnbtn {
  display: flex;
  margin: 0;
}
</style>