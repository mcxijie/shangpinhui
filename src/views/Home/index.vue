<script>
import ListContainer from "@/views/Home/ListContainer/index.vue";
import Recommend from "@/views/Home/Recommend/index.vue";
import Rank from "@/views/Home/Rank/index.vue";
import Like from "@/views/Home/Like/index.vue";
import Floor from "@/views/Home/Floor/index.vue";
import Brand from "@/views/Home/Brand/index.vue";

export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<style lang="less" scoped>

</style>