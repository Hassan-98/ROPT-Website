<template>
  <div>
    <AltHeader Header="سوق الانتقالات" :child="pageDis"></AltHeader>
    <component :is="pageComp"></component>
  </div>
</template>

<script>
import AltHeader from "../../components/AltHeader.vue";
import Rules from "./Rules.vue";
import Last from "./Last.vue";
import Club from "./Club.vue";

export default {
  name: "Ranking",
  components: {
    AltHeader,
    Rules, Last, Club
  },
  data(){
    return {
      page: this.$route.params.page,
      pageDis: null,
      pageComp: null
    }
  },
  watch: {
    '$route.params.page': function (page) {
      if (page == "last"){
        this.pageComp = "Last";
        this.pageDis = "أخر الانتقالات";
      } else if (page == "rules"){
        this.pageComp = "Rules";
        this.pageDis = "قوانين الانتقالات";
      } else if (page == "lei") {
        this.pageComp = "Club";
        this.pageDis = "ليستر سيتي";
      } else if (page == "mci") {
        this.pageComp = "Club";
        this.pageDis = "مانشيستر سيتي";
      } else if (page == "tot") {
        this.pageComp = "Club";
        this.pageDis = "توتنهام هوتسبير";
      } else if (page == "che") {
        this.pageComp = "Club";
        this.pageDis = "تشيلسي";
      } else if (page == "ars") {
        this.pageComp = "Club";
        this.pageDis = "أرسنال";
      } else if (page == "utd") {
        this.pageComp = "Club";
        this.pageDis = "مانشيستر يونايتد";
      } else if (page == "liv") {
        this.pageComp = "Club";
        this.pageDis = "ليفربول";
      } else if (page == "whu") {
        this.pageComp = "Club";
        this.pageDis = "ويست هام";
      } else if (page == "eve") {
        this.pageComp = "Club";
        this.pageDis = "إيفيرتون";
      } else if (page == "sth") {
        this.pageComp = "Club";
        this.pageDis = "ساوثهامبتون";
      } else if (page == "cry") {
        this.pageComp = "Club";
        this.pageDis = "كريستال بالاس";
      } else if (page == "wat") {
        this.pageComp = "Club";
        this.pageDis = "واتفورد";
      } else if (page == "bri") {
        this.pageComp = "Club";
        this.pageDis = "برايتون هوف ألبيون";
      } else if (page == "brn") {
        this.pageComp = "Club";
        this.pageDis = "بيرنلي";
      } else if (page == "hud") {
        this.pageComp = "Club";
        this.pageDis = "هدرسفيلد تاون";
      } else if (page == "ful") {
        this.pageComp = "Club";
        this.pageDis = "فولهام";
      } else if (page == "car") {
        this.pageComp = "Club";
        this.pageDis = "كارديف سيتي";
      } else if (page == "wol") {
        this.pageComp = "Club";
        this.pageDis = "ولفرهامبتون وينديريرز";
      } else {
        this.pageComp = "Club";
      }
    }
  },
  created(){
    var page = this.page;
    if (page == "last"){
        this.pageComp = "Last";
        this.pageDis = "أخر الانتقالات";
      } else if (page == "rules"){
        this.pageComp = "Rules";
        this.pageDis = "قوانين الانتقالات";
      } else if (page == "lei") {
        this.pageComp = "Club";
        this.pageDis = "ليستر سيتي";
      } else if (page == "mci") {
        this.pageComp = "Club";
        this.pageDis = "مانشيستر سيتي";
      } else if (page == "tot") {
        this.pageComp = "Club";
        this.pageDis = "توتنهام هوتسبير";
      } else if (page == "che") {
        this.pageComp = "Club";
        this.pageDis = "تشيلسي";
      } else if (page == "ars") {
        this.pageComp = "Club";
        this.pageDis = "أرسنال";
      } else if (page == "utd") {
        this.pageComp = "Club";
        this.pageDis = "مانشيستر يونايتد";
      } else if (page == "liv") {
        this.pageComp = "Club";
        this.pageDis = "ليفربول";
      } else if (page == "whu") {
        this.pageComp = "Club";
        this.pageDis = "ويست هام";
      } else if (page == "eve") {
        this.pageComp = "Club";
        this.pageDis = "إيفيرتون";
      } else if (page == "sth") {
        this.pageComp = "Club";
        this.pageDis = "ساوثهامبتون";
      } else if (page == "cry") {
        this.pageComp = "Club";
        this.pageDis = "كريستال بالاس";
      } else if (page == "wat") {
        this.pageComp = "Club";
        this.pageDis = "واتفورد";
      } else if (page == "bri") {
        this.pageComp = "Club";
        this.pageDis = "برايتون هوف ألبيون";
      } else if (page == "brn") {
        this.pageComp = "Club";
        this.pageDis = "بيرنلي";
      } else if (page == "hud") {
        this.pageComp = "Club";
        this.pageDis = "هدرسفيلد تاون";
      } else if (page == "ful") {
        this.pageComp = "Club";
        this.pageDis = "فولهام";
      } else if (page == "car") {
        this.pageComp = "Club";
        this.pageDis = "كارديف سيتي";
      } else if (page == "wol") {
        this.pageComp = "Club";
        this.pageDis = "ولفرهامبتون وينديريرز";
      } else {
        this.pageComp = "Club";
      }
  }
};
</script>
