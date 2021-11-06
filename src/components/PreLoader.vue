<template>
  <div class="preloader" id="particles-js">
    <h1>ROPT</h1>
    <div class="loader">
      Loading
      <div class="loadBox"><div class="circle"></div></div>
    </div>
    <img src="../assets/images/football.svg" />
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all 1.2s ease-in-out;
  box-shadow: 0 5px 5px rgba($color: $mc, $alpha: 0.3);
  &.hide {
    transform: translateX(500%);
    overflow: hidden;
    h1,
    img,
    .loader {
      opacity: 0;
    }
  }
  h1 {
    transition: all 0.5s ease;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    color: $mc;
    font-family: "Shojumaru", cursive;
    text-shadow: 4px 4px 6px #ddd;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: $mc;
      display: block;
      border-radius: 50%;
    }
    @include xs {
      font-size: 75px;
    }
  }
  img {
    position: absolute;
    top: 18%;
    left: 48%;
    width: 90px;
    height: 90px;
    @include xs {
      top: 16%;
      left: 43%;
    }
  }
  .loader {
    direction: ltr;
    width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Caveat Brush", cursive;
    text-shadow: 3px 3px 5px #ddd;
    text-transform: uppercase;
    font-weight: 900;
    color: $mc;
    letter-spacing: 0.2em;
    font-size: 32px;
    .loadBox {
      border: 7px solid #f3f3f3;
      border-radius: 50%;
      border-top: 7px solid $mc;
      width: 70px;
      height: 70px;
      -webkit-animation: spin 0.7s linear infinite; /* Safari */
      animation: spin 0.7s linear infinite;
      position: absolute;
      left: 80px;
      top: 70px;
    }
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

<script>
export default {
  name: "PreLoader"
  //    mounted(){
  //     require('particles.js');
  //     particlesJS("particles-js", {
  //         "particles": {
  //             "number": {
  //                 "value": 100,
  //                 "density": {
  //                     "enable": true,
  //                     "value_area": 800
  //                 }
  //             },
  //             "color": {
  //                 "value": "#09182D"
  //             },
  //             "shape": {
  //                 "type": "circle",
  //                 "stroke": {
  //                     "width": 0,
  //                     "color": "#000000"
  //                 },
  //                 "polygon": {
  //                     "nb_sides": 5
  //                 },
  //                 "image": {
  //                     "src": "img/github.svg",
  //                     "width": 100,
  //                     "height": 100
  //                 }
  //             },
  //             "opacity": {
  //                 "value": 1,
  //                 "random": false,
  //                 "anim": {
  //                     "enable": false,
  //                     "speed": 1,
  //                     "opacity_min": 0.1,
  //                     "sync": false
  //                 }
  //             },
  //             "size": {
  //                 "value": 4,
  //                 "random": true,
  //                 "anim": {
  //                     "enable": false,
  //                     "speed": 100,
  //                     "size_min": 0.1,
  //                     "sync": false
  //                 }
  //             },
  //             "line_linked": {
  //                 "enable": false,
  //                 "distance": 150,
  //                 "color": "#09182D",
  //                 "opacity": 0.4,
  //                 "width": 1
  //             },
  //             "move": {
  //                 "enable": true,
  //                 "speed": 3,
  //                 "direction": "none",
  //                 "random": false,
  //                 "straight": false,
  //                 "out_mode": "out",
  //                 "bounce": false,
  //                 "attract": {
  //                     "enable": false,
  //                     "rotateX": 600,
  //                     "rotateY": 1200
  //                 }
  //             }
  //         },
  //         "retina_detect": true
  //     });
  //    }
};
</script>
