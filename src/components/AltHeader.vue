<template>
    <div class="main-header">
        <div class="overlay">
            <h1 v-if="child">{{child}}</h1>
            <h1 v-else>{{Header}}</h1>
            <p><a href="/" class="main">الرئيسية</a> - {{Header}} <span v-if="child"> - {{child}}</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-header{
    text-align: right;
    background: url("../assets/images/header.png") fixed no-repeat;
    background-size: 100% 100%;
    background-color: $mc;
    box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.5);
    color: #fff;
    .overlay{
        padding: 120px 50px 100px;
        @include sm {
            padding: 80px 50px 60px;
        }
        @include overlay(#000, 0.7);
        h1{
            font-size: 32px;
            font-family: 'changa';
            @include sm {
                font-size: 26px;
            }
            @include xs {
                font-size: 24px;
            }
            @include em {
                font-size: 20px;
            }
        }
        p{
            color: #fff;
            margin: 20px auto 25px;
            font-family: 'changa';
            @include sm {
                font-size: 13px;
            }
            a.main{
                text-decoration: none;
                font-family: 'changa';
                color: #ddd;
                cursor: pointer;
                &:hover{
                    color: #555;
                }
            }
            span{
                font-family: 'changa';
            }
        }
    }
}
</style>


<script>
export default {
    name: "AltHeader",
    props: ["Header", "child"]
};
</script>
