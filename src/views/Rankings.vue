<template>
  <div class="Rankings">
    <AltHeader Header="التصنيفات"></AltHeader>

    <section class="ranking">
      <h2>أقسام التصنيفات</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <a href="/rankings/clubs" class="inside">
              <img src="../assets/images/rank.svg">
              <h1>تصنيف الاندية</h1>
            </a>
          </div>
          <div class="col-md-6 col-12">
            <a href="/rankings/nationals" class="inside">
              <img src="../assets/images/rank2.svg">
              <h1>تصنيف المنتخبات</h1>
            </a>
          </div>
          <div class="col-12">
            <a href="/rankings/rules" class="inside">
              <img src="../assets/images/rules.svg">
              <h1>قواعد التصنيفات</h1>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.ranking{
  padding: 100px 0;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 50px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }
  .inside{
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 25px 15px;
    background: $mc;
    color: #fff;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 25px;
    &:hover{
      box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.3);
      transform: translateY(-6px);
    }
    img{
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
      @include xs {
        width: 70px;
        height: 70px;
      }
    }
    h1{
      font-family: 'changa';
      @include xs {
        font-size: 24px;
      }
    }
  }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "Rankings",
  components: {
    AltHeader
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | RANKINGS";
    $(".preloader").show();
    auth.onAuth(() => {
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
