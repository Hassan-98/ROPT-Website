<template>
  <div class="tournament">
    <AltHeader Header="الكؤوس والبطولات" :child="tourChild"></AltHeader>
    <component :is="tour"></component>
  </div>
</template>

<script>
import AltHeader from "../../components/AltHeader.vue";
import PL from "./PL.vue";
import FA from "./FA.vue";
import CS from "./CS.vue";
import UCL from "./UCL.vue";
import UEL from "./UEL.vue";
import USC from "./USC.vue";
import FCWC from "./FCWC.vue";
import AFCON from "./AFCON.vue";
import WCQ from "./WCQ.vue";
import FWC from "./FWC.vue";

export default {
  name: "tournament",
  components: {
    AltHeader,
    PL, FA, CS, UCL, UEL, USC, FCWC,
    AFCON, WCQ, FWC
  },
  data(){
    return {
      tournament: this.$route.params.tour,
      tourChild: null,
      tour: null
    }
  },
  watch: {
    '$route.params.tour': function (tour) {
      if(tour == "pl"){
        this.tourChild = "الدوري الانجليزي";
      } else if (tour == "fa"){
        this.tourChild = "كأس الاتحاد الانجليزي";
      } else if (tour == "cs"){
        this.tourChild = "الدرع الخيرية";
      } else if (tour == "ucl"){
        this.tourChild = "دوري أبطال أوروبا";
      } else if (tour == "uel"){
        this.tourChild = "الدوري الاوروبي";
      } else if (tour == "usc"){
        this.tourChild = "كأس السوبر الاوروبي";
      } else if (tour == "fcwc"){
        this.tourChild = "كأس العالم للاندية";
      } else if (tour == "afcon"){
        this.tourChild = "كأس الامم الافريقية";
      } else if (tour == "wcq"){
        this.tourChild = "تصفيات كأس العالم";
      } else if (tour == "fwc"){
        this.tourChild = "كأس العالم";
      } else {
        location.href = '/404';
      }
      this.tour = tour.toUpperCase();
    }
  },
  created(){
      if(this.tournament == "pl"){
        this.tourChild = "الدوري الانجليزي";
      } else if (this.tournament == "fa"){
        this.tourChild = "كأس الاتحاد الانجليزي";
      } else if (this.tournament == "cs"){
        this.tourChild = "الدرع الخيرية";
      } else if (this.tournament == "ucl"){
        this.tourChild = "دوري أبطال أوروبا";
      } else if (this.tournament == "uel"){
        this.tourChild = "الدوري الاوروبي";
      } else if (this.tournament == "usc"){
        this.tourChild = "كأس السوبر الاوروبي";
      } else if (this.tournament == "fcwc"){
        this.tourChild = "كأس العالم للاندية";
      } else if (this.tournament == "afcon"){
        this.tourChild = "كأس الامم الافريقية";
      } else if (this.tournament == "wcq"){
        this.tourChild = "تصفيات كأس العالم";
      } else if (this.tournament == "fwc"){
        this.tourChild = "كأس العالم";
      } else {
        location.href = '/404';
      }

      this.tour = this.tournament.toUpperCase();

  }
};
</script>
