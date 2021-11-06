<template>
    <div class="Live">
        <AltHeader Header="البث المباشر"></AltHeader>
        <section class="live-section">
            <h2>البث المباشر</h2>
            <p>البث المباشر للقاءات الهامة و المثيرة ونهائيات البطولات</p>
            <button v-if="admin" @click="startLive">Start Live Stream</button>
            <button v-if="admin" @click="stopLive">Stop Live Stream</button>
            <video
                id="live-stream"
                class="video-js"
                controls
                width="1024"
                height="720"
                poster="https://ak.picdn.net/shutterstock/videos/1011406034/thumb/1.jpg"
            >
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                    >
                </p>
            </video>
            <canvas style="display:none;" id="preview"></canvas>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.live-section{
    img {
        width: 50%;
        height: 400px;
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
    methods: {
        async startLive () {
            const VIDEO = document.querySelector("#live-stream")
            const stream = await navigator.mediaDevices.getDisplayMedia()
            VIDEO.srcObject = stream
            VIDEO.play()
            window.LIVE_VIDEO_STREAM = stream

            var canvas = document.getElementById("preview");
            var context = canvas.getContext('2d');
            canvas.width = 2560;
            canvas.height = 1440;
            
            window.INTERVAL = setInterval(() => {
                context.drawImage(VIDEO, 0, 0, canvas.width, canvas.height);
                this.$socket.emit('stream', canvas.toDataURL('image/jpeg'))
            }, 0.1);
        },
        async stopLive () {
            if (window.LIVE_VIDEO_STREAM && window.INTERVAL) {
                LIVE_VIDEO_STREAM.getVideoTracks()[0].stop()
                clearInterval(window.INTERVAL)
            }
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
                if (!data[0]) {
                    this.$router.push('/live')
                }
            }
        }
        });
    }
}
</script>