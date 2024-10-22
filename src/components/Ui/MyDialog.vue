<template>
  <div class="dialog"  v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixsins/toggleMixin";

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content{
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-height: 58px;
  min-width: 388px;
  padding: 24px;
}
</style>