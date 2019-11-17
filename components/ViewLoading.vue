<template lang="html">
  <div class="loading-page" v-if="loading">
    <img src="~/assets/loading.gif" />
    <!-- https://www.benricho.org/loading_images/transparent01.html -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class ViewLoading extends Vue {
  protected loading: boolean = this.$store.getters["Loading/isLoading"];

  private get isLoadingFlag(): boolean {
    return this.$store.getters["Loading/isLoading"];
  }

  @Watch("isLoadingFlag")
  onChangeLoadingStatus(isLoadingFlag: boolean) {
    // ローディング状態が切り替わったときの処理
    this.loading = isLoadingFlag;
  }
}
</script>

<style>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
