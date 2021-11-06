<template>
    <footer>
        <p>&copy; 2019 BroCoders. All Rights Reserved.</p>
        <div class="social">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-whatsapp-square"></i>
            <i class="fab fa-linkedin"></i>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer{
    direction: ltr;
    background: $mc;
    padding: 15px;
    display: flex;
    color: #fff;
    @include sm {
        flex-direction: column;
    }
    p{
        font-family: 'Poppins', sans-serif;
        direction: ltr;
        color: #fff;
        width: 85%;
        margin: 0;
        @include sm {
            width: 100%;
            margin-bottom: 10px;
            text-align: center;
        }
    }
    div{
        width: 15%;
        text-align: center;
        @include sm {
            width: 100%;
        }
        i{
            cursor: pointer;
            font-size: 25px;
            margin: 0 5px;
        }
    }
}
</style>


<script>
export default {
    name: "Footer"
}
</script>
