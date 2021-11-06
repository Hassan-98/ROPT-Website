<template>
    <div class="main-header">
        <div class="overlay">
            <h1>Results OF PES Trophies</h1>
            <p>موقع خاص للرياضة مصمم لمراجعة وتسجيل جميع نتائج الكؤوس والبطولات والمواسم في لعبة بيس 2019</p>
            <a href="/tournaments">أذهب للبطولات</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-header{
    background: url("../assets/images/header.png") fixed no-repeat;
    background-size: 100% 100%;
    background-color: $mc;
    color: #fff;
    clip-path: polygon(0 0, 100% 0, 100% 93%, 50% 100%, 0 93%);
    box-shadow: 0 3px 8px rgba($color: $mc, $alpha: 0.8);
    .overlay{
        padding: 170px 0 220px;
        text-align: center;
        @include sm {
            padding: 120px 0;
        }
        @include overlay(#000, 0.7);
        h1{
            font-family: 'Shojumaru', cursive;
            @include sm {
                font-size: 30px;
            }
        }
        p{
            color: #fff;
            font-size: 20px;
            margin: 20px auto 25px;
            font-family: 'changa';
            width: 50%;
            @include sm {
                font-size: 15px;
                width: 90%;
            }
        }
        a{
            text-decoration: none;
            color: #fff;
            padding: 8px 30px;
            font-family: 'changa';
            border: 1px solid #fff;
            border-radius: 25px;
            background: rgba($color: #000, $alpha: 0.7);
            outline: none;
            &:hover{
                transform: none;
                background: #fff;
                color: $mc;
            }
        }
    }
}
</style>


<script>
export default {
    name: "MainHeader"
};
</script>
