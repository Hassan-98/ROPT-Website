<template>
    <div class="Live">
        <AltHeader Header="البث المباشر"></AltHeader>
        <section class="live-section">
            <h2>البث المباشر</h2>
            <p>البث المباشر للقاءات الهامة و المثيرة ونهائيات البطولات</p>
            <img id="remoteVideo" src="../assets/images/header.png" />
        </section>
    </div>
</template>

<style lang="scss" scoped>
.live-section{
    img {
        width: 1280px;
        height: 720px;
        display: block;
        margin: 50px auto;
    }
    padding: 100px 0;
    h2{
        color: $mc;
        margin: 30px 0 0;
        text-align: center;
        padding: 15px 0 20px;
        margin: 0;
        color: #fff;
        font-family: 'changa';
    }
    p{
        text-align: center;
        font-family: 'changa';
    }
    button {
        display: block;
        background: $mc;
        border-radius: 10px;
        margin: 0 auto;
    }
    video {
        display: block;
        width: 85%;
        height: 720px;
        padding: 5px;
        background: #f6f6f6;
        margin: 30px auto;
    }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
    name: "Live",
    components: {
        AltHeader
    },
    data () {
        return {
            admin: false
        }
    },
    sockets: {
        stream (stream) {
            document.getElementById("remoteVideo").src = stream
        }
    },
    async created(){
        window.scrollTo(0, 0);
        document.title = "ROPT | Live Stream";
        $(".preloader").show();
        auth.onAuth(() => {
            setTimeout(() => {
                $(".preloader").addClass("hide");
            }, 2000);
        });
        
        auth.onAuth(async (user) => {
        if (user) {
            const {data} = await db.get(`users/${auth.user().uid}`)
            if (typeof data[0] == "boolean") {
                this.admin = data[0];
            }
        }
        });
    }
}
</script>