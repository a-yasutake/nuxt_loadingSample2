<template>
  <div id="samplePage2">
    <ViewLoading />
    <div class="main">
      <h1>サンプルページ2</h1>
      <button @click="back">戻る</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ViewLoading from "~/components/ViewLoading.vue";

@Component({
  components: { ViewLoading }
})
export default class Sample2 extends Vue {
  public mounted(): void {
    // マウント3秒後にローディング解除
    setTimeout(
      () => this.$store.commit("Loading/CHANGE_IS_LOADING", false),
      3000
    );
  }

  // 戻るボタン押下処理
  public back(): void {
    // ローでイング表示
    this.$store.commit("Loading/CHANGE_IS_LOADING", true);

    // 画面2へ遷移
    this.$router.replace("Sample1");
  }
}
</script>
<style>
.main {
  margin-left: 10%;
}
</style>
