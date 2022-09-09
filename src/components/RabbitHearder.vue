<script setup></script>
<template>
  <header>
    <router-link to="/" class="logo"
      ><img src="../assets/images/logo.png" alt="logo"
    /></router-link>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">美食</a></li>
      <li><a href="#">餐厨</a></li>
      <li><a href="#">艺术</a></li>
      <li><a href="#">电器</a></li>
      <li><a href="#">居家</a></li>
      <li><a href="#">洗护</a></li>
      <li><a href="#">孕婴</a></li>
      <li><a href="#">服装</a></li>
      <li><a href="#">杂货</a></li>
    </ul>
    <div class="search">
      <button class="btn"><i class="iconfont icon-search"></i></button>
      <input type="text" placeholder="搜一搜" />
    </div>
    <div class="cart">
      <button class="btn curr">
        <i class="iconfont icon-cart"></i><em>2</em>
      </button>
    </div>
  </header>
</template>

<style scoped lang="less">
header {
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    width: 200px;
    height: 132px;
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    margin-left: 40px;
    li {
      margin-right: 40px;
      font-size: 16px;

      &:hover {
        a {
          color: @xtxColor;
        }
      }
    }
  }
}

.btn {
  border: 0;
  background: transparent;
  cursor: pointer;
}

.search {
  padding: 5px;
  border-bottom: 1px solid #e7e7e7;
  i {
    font-size: 20px;
  }
  input {
    padding-left: 5px;
  }
}

.cart {
  position: relative;
  i {
    font-size: 22px;
  }
  em {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background: @helpColor;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 6px;
    font-size: 12px;
    font-style: normal;
    font-family: 'Arial sans-serif ';
    border-radius: 10px;
  }
}
</style>
