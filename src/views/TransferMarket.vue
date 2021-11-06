<template>
  <div class="Market">
    <AltHeader Header="سوق الانتقالات و الاندية"></AltHeader>

    <section class="market">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5 col-10">
            <div class="rules">
              <i class="fas fa-gavel"></i>
              <a href="/market/rules">قوانين الانتقالات</a>
            </div>
          </div>
          <div class="col-md-5 col-10">
            <div class="rules">
              <i class="fas fa-exchange-alt"></i>
              <a href="/market/last">أخر الانتقالات</a>
            </div>
          </div>
        </div>
      </div>
      
      <h2>الميزانيات واللاعبين</h2>
      <div class="balancesNplayers">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/lei" class="club">
                <img src="../assets/images/lei.svg">
                <h6>ليستر سيتي</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/tot" class="club">
                <img src="../assets/images/tot.svg">
                <h6>توتنهام هوتسبير</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/mci" class="club">
                <img src="../assets/images/mancity.svg">
                <h6>مانشيستر سيتي</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/che" class="club">
                <img src="../assets/images/che.svg">
                <h6>تشيلسي</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/ars" class="club">
                <img src="../assets/images/ars.svg">
                <h6>أرسنال</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/utd" class="club">
                <img src="../assets/images/manutd.svg">
                <h6>مانشيستر يونايتد</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/liv" class="club">
                <img src="../assets/images/liv.svg">
                <h6>ليفربول</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/whu" class="club">
                <img src="../assets/images/west.svg">
                <h6>ويست هام</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/eve" class="club">
                <img src="../assets/images/eve.svg">
                <h6>إيفيرتون</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/sth" class="club">
                <img src="../assets/images/south.svg">
                <h6>ساوثهامبتون</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/cry" class="club">
                <img src="../assets/images/cry.svg">
                <h6>كريستال بالاس</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/wat" class="club">
                <img src="../assets/images/wat.svg">
                <h6>واتفورد</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/bri" class="club">
                <img src="../assets/images/brighton.svg">
                <h6>برايتون هوف</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/brn" class="club">
                <img src="../assets/images/burn.svg">
                <h6>بيرنلي</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/hud" class="club">
                <img src="../assets/images/hudder.svg">
                <h6>هدرسفيلد تاون</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/ful" class="club">
                <img src="../assets/images/ful.svg">
                <h6>فولهام</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/car" class="club">
                <img src="../assets/images/car.png">
                <h6>كارديف سيتي</h6>
              </a>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-12">
              <a href="/market/wol" class="club">
                <img src="../assets/images/wol.svg">
                <h6>ولفرهامبتون</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.market{
  padding: 100px 0;
  .rules{
    background: $mc;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 0 8px rgba($color: $mc, $alpha: 0.4);
    margin-bottom: 25px;
    &:hover{
      transform: translateY(-5px);
      box-shadow: 0 6px 8px rgba($color: $mc, $alpha: 0.4);
    }
    i{
      font-size: 36px;
      width: 25%;
      background: #fff;
      color: $mc;
      padding: 15px;
      @include xs {
        font-size: 30px;
      }
    }
    a{
      display: block;
      text-decoration: none;
      color: #fff;
      padding: 15px;
      margin: 0;
      display: inline-block;
      width: 75%;
      font-size: 22px;
      cursor: pointer;
      font-family: 'changa';
      @include xs {
        font-size: 18px;
      }
    }
  }
  
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    margin-top: 40px;
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

  .balancesNplayers{
    padding: 30px 0;
    color: #fff;
    .club{
      display: block;
      text-decoration: none;
      color: #fff;
      padding: 20px 0 0;
      box-shadow: 0 0 8px rgba($color: $mc, $alpha: 0.4);
      margin-bottom: 25px;
      text-align: center;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      &:hover{
        transform: translateY(-5px);
        box-shadow: 0 6px 8px rgba($color: $mc, $alpha: 0.4);
      }
      img{
        width: 110px;
        height: 110px;
        margin-bottom: 20px;
      }
      h6{
        margin-bottom: 0;
        padding: 10px 0 14px;
        background: $mc;
        font-family: 'changa';
      }
    }
  }
}

</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "Market",
  components: {
    AltHeader
  },
  mounted(){
    window.scrollTo(0, 0);
    document.title = "ROPT | MARKET";
    $(".preloader").show();
    auth.onAuth(() => {
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
