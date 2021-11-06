<template>
  <div class="PlayersData">
    <AltHeader Header="إحصائيات اللاعبين"></AltHeader>

    <section class="players">
      <h2>اللاعبين المشاركين</h2>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6 col-12 mb-4">
            <a href="/players/hassan" class="player">
              <img src="../assets/images/myPhoto.jpg">
              <h1>Hassan Ali</h1>
              <div class="social">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-facebook-messenger"></i>
                <i class="fab fa-whatsapp-square"></i>
              </div>
            </a>
          </div>
          <div class="col-lg-5 col-md-6 col-12">
            <a href="/players/monaser" class="player">
              <img src="../assets/images/naser.jpg">
              <h1>Moustafa Naser</h1>
              <div class="social">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-facebook-messenger"></i>
                <i class="fab fa-whatsapp-square"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.players{
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
  .player{
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 25px;
    height: 450px;
    box-shadow: 0 0 8px rgba($color: $mc, $alpha: 0.3);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    cursor: pointer;
    @include xs {
      height: 400px;
    }
    @include em {
      height: 370px;
    }
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    h1{
      font-family: 'Poppins', sans-serif;
      position: absolute;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      font-weight: bold;
      @include xs {
        font-size: 35px;
      }
      @include em {
        font-size: 32px;
      }
    }
    .social{
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      
      i{
        margin: 10px;
        cursor: pointer;
        border-radius: 50%;
        font-size: 28px;
        color: #fff;
      }
    }
  }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "PlayersData",
  components: {
    AltHeader
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | PLAYERS";
    $(".preloader").show();
    auth.onAuth(() => {
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
