<template>
  <div id="samplePage1">
    <ViewLoading />
    <div class="main">
      <h1>サンプルページ1</h1>
      <button @click="next">次へ</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ViewLoading from "~/components/ViewLoading.vue";
@Component({
  components: { ViewLoading }
})
export default class Sample1 extends Vue {
  public mounted(): void {
    // マウント3秒後にローディング解除
    setTimeout(
      () => this.$store.commit("Loading/CHANGE_IS_LOADING", false),
      3000
    );
  }

  // 次へボタン押下処理
  private next() {
    // ローでイング表示
    this.$store.commit("Loading/CHANGE_IS_LOADING", true);

    // 画面2へ遷移
    this.$router.replace("Sample2");
  }
}
</script>
<style>
.main {
  margin-left: 10%;
}
</style>
