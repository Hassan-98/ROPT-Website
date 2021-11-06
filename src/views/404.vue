<template>
    <div class="not-found">
        <AltHeader Header="الصفحة المطلوبة غير موجودة"></AltHeader>
        <section class="not">
            <img src="../assets/images/404.svg">
            <h1>حدث خطأ</h1>
            <h2>الصفحة المطلوبة غير متوفرة حالياً</h2>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.not{
    padding: 100px 0 140px;
    text-align: center;
    img{
        width: 350px;
        height: 350px;
        margin-bottom: 20px;
    }
    h1, h2{
        font-weight: bold;
        color: $mc;
        font-family: 'changa';
    }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
    name: "404",
    components: {
        AltHeader
    },
    created(){
        window.scrollTo(0, 0);
        document.title = "ROPT | NOT FOUND";
        $(".preloader").show();
        auth.onAuth(() => {
            setTimeout(() => {
                $(".preloader").addClass("hide");
            }, 2000);
        });
    }
}
</script>