<template>
  <div class="Rules">
    <h2>قواعد تصنيف الاندية</h2>
    <div class="container">
      <ul>
        <li><img src="../../assets/images/rule.svg"> يقتصر التصنيف على أندية الدوري الانجليزي فقط</li>
        <li><img src="../../assets/images/rule.svg"> يتم تحديث التصنيف بعد كل مباراة أوتوماتيكياً حسب نتيجة المباراة</li>
        <li><img src="../../assets/images/rule.svg"> يعتمد التصنيف على مجموع النقاط التى يحصدها كل فريق في الدوري الانجليزي عن طريق النظام الاتي</li>
        <li><img src="../../assets/images/rule.svg"> النقاط التى يحصدها الفريق كل مباراة = نقاط المباراة × أهمية المباراة</li>
        <li><img src="../../assets/images/rule.svg"> نقاط المباراة :: الفوز = 3 | التعادل = 1 | الهزيمة = -1</li>
        <li><img src="../../assets/images/rule.svg"> أهمية المباراة :: الدوري الانجليزي , كأس الاتحاد , كأس السوبر = 1 </li>
        <li><img src="../../assets/images/rule.svg">  الدوري الاوروبي , كأس العالم للاندية = 1.5</li>
        <li><img src="../../assets/images/rule.svg">  دوري أبطال أوروبا =  2</li>
      </ul>
    </div>
    <br><br><br>
    <h2>قواعد تصنيف المنتخبات</h2>
    <div class="container">
      <ul>
        <li><img src="../../assets/images/rule.svg"> يقتصر التصنيف على منتخبات قارة إفريقيا فقط</li>
        <li><img src="../../assets/images/rule.svg"> يتم تحديث التصنيف بعد كل مباراة أوتوماتيكياً حسب نتيجة المباراة</li>
        <li><img src="../../assets/images/rule.svg"> يعتمد التصنيف على مجموع النقاط التى يحصدها كل منتخب عن طريق النظام الاتي</li>
        <li><img src="../../assets/images/rule.svg"> النقاط التى يحصدها الفريق كل مباراة = نقاط المباراة × أهمية المباراة</li>
        <li><img src="../../assets/images/rule.svg"> نقاط المباراة :: الفوز = 3 | التعادل = 1 | الهزيمة = -1</li>
        <li><img src="../../assets/images/rule.svg"> أهمية المباراة :: كأس الامم , تصفيات كأس العالم = 1</li>
        <li><img src="../../assets/images/rule.svg">  كأس العالم = 3</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Rules{
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
  ul{
    li{
      font-family: 'changa';
      text-align: right;
      color: $mc;
      font-weight: bold;
      padding: 18px 15px;
      box-shadow: 0 2px 3px rgba($color: $mc, $alpha: 0.2);
      margin-bottom: 5px;
      img{
        width: 35px;
        height: 35px;
        margin-left: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Rules",
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | RANKINGS";
    $(".preloader").show();
    setTimeout(() => {
      $(".preloader").addClass("hide");
    }, 2000);
  }
};
</script>
