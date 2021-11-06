<template>
  <div>
    <AltHeader Header="التصنيفات" :child="pageDis"></AltHeader>
    <component :is="pageComp"></component>
  </div>
</template>

<script>
import AltHeader from "../../components/AltHeader.vue";
import CR from "./CR.vue";
import NR from "./NR.vue";
import Rules from "./Rules.vue";

export default {
  name: "Ranking",
  components: {
    AltHeader,
    CR, NR, Rules
  },
  data(){
    return {
      page: this.$route.params.ranking,
      pageDis: null,
      pageComp: null
    }
  },
  watch: {
    '$route.params.ranking': function (page) {
      if(page == "clubs"){
        this.pageDis = "تصنيف الاندية";
        this.pageComp = "CR";
      } else if (page == "nationals"){
        this.pageDis = "تصنيف المنتخبات";
        this.pageComp = "NR";
      } else if (page == "rules"){
        this.pageDis = "قواعد التصنيف";
        this.pageComp = "Rules";
      } else {
        this.pageComp = "CR";
      }
    }
  },
  created(){
    var page = this.page;
    if(page == "clubs"){
      this.pageDis = "تصنيف الاندية";
      this.pageComp = "CR";
    } else if (page == "nationals"){
      this.pageDis = "تصنيف المنتخبات";
      this.pageComp = "NR";
    } else if (page == "rules"){
      this.pageDis = "قواعد التصنيف";
      this.pageComp = "Rules";
    } else {
      this.pageComp = "CR";
    }
  }
};
</script>
