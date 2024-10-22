<template>
  <div class="navbar">
    <my-button @click="$router.push('/')" style="cursor:pointer;">Главная</my-button>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px;">О сайте</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/Ui/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style scoped>
.navbar{
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns{
  margin-left: auto;
}
</style>