<template>
  <div class="Tournaments">
    <AltHeader Header="الكؤوس والبطولات"></AltHeader>
    
    <section class="club-tours">
      <h2>بطولات الاندية</h2>
      <div class="container">
        <div class="row justify-content-center">

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup pl">
              <img src="https://d33wubrfki0l68.cloudfront.net/e4c4d84e17f1c3a71acec4ba4f092b2030b68202/3df06/imgs/pll.png">
              <hr>
              <a href="tournaments/pl">الدوري الانجليزي</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup FA">
              <img src="https://d33wubrfki0l68.cloudfront.net/b6b2bf4fe2fa3f68d06790cabfd4659aa718e99b/d28f1/imgs/emfa.png">
              <hr>
              <a href="tournaments/fa">كأس الاتحاد الانجليزي</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup cs">
              <img src="https://d33wubrfki0l68.cloudfront.net/6699cef871088b03dc3a6f6ac5e9227b51785158/2c17b/imgs/facom.png">
              <hr>
              <a href="tournaments/cs">الدرع الخيرية</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup ucl">
              <img src="https://d33wubrfki0l68.cloudfront.net/5acdeaa1d1161330761a606e002abb7f9bac1ebf/e3f97/imgs/ucl.svg">
              <hr>
              <a href="tournaments/ucl">دوري أبطال أوروبا</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup uel">
              <img src="https://d33wubrfki0l68.cloudfront.net/6210efbe34ccfd4467bc718625f8b4ac8d797c14/31a3e/imgs/uel.svg">
              <hr>
              <a href="tournaments/uel">الدوري الاوروبي</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup usc">
              <img src="https://d33wubrfki0l68.cloudfront.net/a3cfa0f3d38012d1d2794ca6fc31b316542b98d8/8fe98/imgs/uscc.png">
              <hr>
              <a href="tournaments/usc">كأس السوبر الاوروبي</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup fcwc">
              <img src="https://d33wubrfki0l68.cloudfront.net/80d7ad23ab1030d61b7aa6bcd74cb385f758044b/29982/imgs/fcwcc.png">
              <hr>
              <a href="tournaments/fcwc">كأس العالم للاندية</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="nat-tours">
      <h2>بطولات المنتخبات</h2>
      <div class="container">
        <div class="row justify-content-center">

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup caf">
              <img src="https://d33wubrfki0l68.cloudfront.net/0b84841d209ed86aaa5163273af126a29b75346c/d27c0/imgs/caff.png">
              <hr>
              <a href="tournaments/afcon">كأس الامم الافريقية</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup wcq">
              <img src="https://d33wubrfki0l68.cloudfront.net/e24357d43a55d7c311eb57f9daa5520d10b81ab6/852eb/imgs/wcqq.png">
              <hr>
              <a href="tournaments/wcq">تصفيات كأس العالم</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-5">
            <div class="cup fwc">
              <img src="https://d33wubrfki0l68.cloudfront.net/2fa54b86e22ebeb753d8fc589ebdd1adb4682aca/3dccf/imgs/wcc.png">
              <hr>
              <a href="tournaments/fwc">كأس العالم</a>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.club-tours{
  padding: 75px 0;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 10px auto 60px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }

  .cup{
    box-shadow: 0 6px 10px rgba($color: $mc, $alpha: 0.1);
    padding: 25px 0 0;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    &:hover{
      background: #f6f6f6;
      transform: translateY(-7px);
      box-shadow: 0 8px 10px rgba($color: $mc, $alpha: 0.4);
    }
    hr{
      margin-bottom: 0;
    }
    a{
      display: block;
      text-decoration: none;
      padding: 25px 0;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      font-family: 'changa';
      cursor: pointer;
      @include xs {
        font-size: 20px;
      }
    }
    img{
      width: 70%;
      height: 250px;
      padding: 10px 0;
    }
    &.pl{
      border: 2px solid $pl;
      a{
        background: $pl;
        color: #fff;
      }
    }
    &.FA{
      border: 2px solid $fa;
      a{
        background: $fa;
        color: #fff;
      }
    }
    &.cs{
      border: 2px solid $cs;
      a{
        background: $cs;
        color: #fff;
      }
    }
    &.ucl{
      border: 2px solid $ucl;
      a{
        background: $ucl;
        color: #fff;
      }
    }
    &.uel{
      border: 2px solid $uel;
      a{
        background: $uel;
        color: #fff;
      }
    }
    &.usc{
      border: 2px solid $usc;
      a{
        background: $usc;
        color: #fff;
      }
    }
    &.fcwc{
      border: 2px solid $fcwc;
      a{
        background: $fcwc;
        color: #fff;
      }
    }
  }

}

.nat-tours{
  padding: 75px 0;
  background: #F6F6F6;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 10px auto 60px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }
  
  .cup{
    box-shadow: 0 6px 10px rgba($color: #000, $alpha: 0.1);
    padding: 25px 0 0;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    &:hover{
      background: #f6f6f6;
      transform: translateY(-7px);
      box-shadow: 0 8px 10px rgba($color: $mc, $alpha: 0.4);
    }
    hr{
      margin-bottom: 0;
    }
    a{
      display: block;
      text-decoration: none;
      padding: 25px 0;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      font-family: 'changa';
      cursor: pointer;
    }
    img{
      width: 70%;
      height: 250px;
      padding: 10px 0;
    }
    &.caf{
      border: 2px solid $afcon;
      a{
        background: $afcon;
        color: #fff;
      }
    }
    &.wcq{
      border: 2px solid $wcq;
      a{
        background: $wcq;
        color: #fff;
      }
    }
    &.fwc{
      border: 2px solid $fwc;
      a{
        background: $fwc;
        color: #fff;
      }
    }
  }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "Tournaments",
  components: {
    AltHeader
  },
  mounted(){
    window.scrollTo(0, 0);
    document.title = "ROPT | TOURNAMENTS";
    $(".preloader").show();
    auth.onAuth(() => {
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
