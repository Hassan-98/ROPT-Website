<template>
    <div class="Player">
        <AltHeader Header="إحصائيات اللاعبين" :child="'إحصائيات ' + person"></AltHeader>
        
        <section class="player">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6 col-12 mb-4">
                        <div class="info">
                            <img :src="personalImg">
                            <h2>{{ person }}</h2>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-12">

                        <div class="choosen">
                            <h3>الفريق المختار</h3>
                            <h4>{{ choosedClub }}</h4>
                        </div>
                        
                        <div class="choosen">
                            <h3>المنتخب المختار</h3>
                            <h4>{{ choosedNat }}</h4>
                        </div>

                    </div>
                </div>
            </div>
            
            <div class="container">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="tours-stats-tab" data-toggle="tab" href="#tours-stats" role="tab" aria-controls="tours-stats" aria-selected="true">إحصائيات البطولات</a>
                    <a class="nav-item nav-link" id="matches-stats-tab" data-toggle="tab" href="#matches-stats" role="tab" aria-controls="matches-stats" aria-selected="false">إحصائيات المباريات و الاهداف</a>
                    <a class="nav-item nav-link" id="clubVS-stats-tab" data-toggle="tab" href="#clubVS-stats" role="tab" aria-controls="clubVS-stats" aria-selected="false">مواجهات النادي الغريم</a>
                    <a class="nav-item nav-link" id="natVS-stats-tab" data-toggle="tab" href="#natVS-stats" role="tab" aria-controls="natVS-stats" aria-selected="false">مواجهات المنتخب الغريم</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active" id="tours-stats" role="tabpanel" aria-labelledby="tours-stats-tab">
                        <h2>إحصائيات البطولات</h2>
                        <div class="tournaments-statistics">
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="../../assets/images/tournamentW.svg">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    البطولة
                                </div>
                                <div class="col-lg-1 col-3">م</div>
                                <div class="col-lg-1 col-3">ف</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/e4c4d84e17f1c3a71acec4ba4f092b2030b68202/3df06/imgs/pll.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    الدوري الانجليزي
                                </div>
                                <div class="col-lg-1 col-3 pl-p">{{playerData.plp}}</div>
                                <div class="col-lg-1 col-3 pl-w">{{playerData.plw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/b6b2bf4fe2fa3f68d06790cabfd4659aa718e99b/d28f1/imgs/emfa.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس الاتحاد الانجليزي
                                </div>
                                <div class="col-lg-1 col-3 fa-p">{{playerData.fap}}</div>
                                <div class="col-lg-1 col-3 fa-w">{{playerData.faw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/6699cef871088b03dc3a6f6ac5e9227b51785158/2c17b/imgs/facom.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس الدرع الخيرية
                                </div>
                                <div class="col-lg-1 col-3 cs-p">{{playerData.csp}}</div>
                                <div class="col-lg-1 col-3 cs-w">{{playerData.csw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/5acdeaa1d1161330761a606e002abb7f9bac1ebf/e3f97/imgs/ucl.svg">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    دوري أبطال أوروبا
                                </div>
                                <div class="col-lg-1 col-3 ucl-p">{{playerData.uclp}}</div>
                                <div class="col-lg-1 col-3 ucl-w">{{playerData.uclw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/6210efbe34ccfd4467bc718625f8b4ac8d797c14/31a3e/imgs/uel.svg">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    الدوري الاوروبي
                                </div>
                                <div class="col-lg-1 col-3 uel-p">{{playerData.uelp}}</div>
                                <div class="col-lg-1 col-3 uel-w">{{playerData.uelw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/a3cfa0f3d38012d1d2794ca6fc31b316542b98d8/8fe98/imgs/uscc.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس السوبر الاوروبي
                                </div>
                                <div class="col-lg-1 col-3 usc-p">{{playerData.uscp}}</div>
                                <div class="col-lg-1 col-3 usc-w">{{playerData.uscw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/80d7ad23ab1030d61b7aa6bcd74cb385f758044b/29982/imgs/fcwcc.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس العالم للاندية
                                </div>
                                <div class="col-lg-1 col-3 fcwc-p">{{playerData.fcwcp}}</div>
                                <div class="col-lg-1 col-3 fcwc-w">{{playerData.fcwcw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/0b84841d209ed86aaa5163273af126a29b75346c/d27c0/imgs/caff.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس الامم الافريقية
                                </div>
                                <div class="col-lg-1 col-3 afcon-p">{{playerData.afconp}}</div>
                                <div class="col-lg-1 col-3 afcon-w">{{playerData.afconw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/e24357d43a55d7c311eb57f9daa5520d10b81ab6/852eb/imgs/wcqq.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    تصفيات كأس العالم
                                </div>
                                <div class="col-lg-1 col-3 wcq-p">{{playerData.wcqp}}</div>
                                <div class="col-lg-1 col-3 wcq-w">{{playerData.wcqw}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-1 col-md-2 col-5 d-none d-md-block">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/2fa54b86e22ebeb753d8fc589ebdd1adb4682aca/3dccf/imgs/wcc.png">
                                </div>
                                <div class="col-lg-4 col-md-5 col-10">
                                    كأس العالم
                                </div>
                                <div class="col-lg-1 col-3 fwc-p">{{playerData.fwcp}}</div>
                                <div class="col-lg-1 col-3 fwc-w">{{playerData.fwcw}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="matches-stats" role="tabpanel" aria-labelledby="matches-stats-tab">
                        <h2>إحصائيات المباريات</h2>
                        <div class="matches-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي المباريات
                                </div>
                                <div class="col-lg-4 col-8 matches-total">{{playerData.totalMatches}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الانتصارات
                                </div>
                                <div class="col-lg-2 col-4 matches-wins">{{playerData.winMatches}}</div>
                                <div class="col-lg-2 col-4 matches-wins-percent">{{playerData.winMatchesPercent ? playerData.winMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    التعادلات
                                </div>
                                <div class="col-lg-2 col-4 matches-draw">{{playerData.drawMatches}}</div>
                                <div class="col-lg-2 col-4 matches-draw-percent">{{playerData.drawMatchesPercent ? playerData.drawMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الهزائم
                                </div>
                                <div class="col-lg-2 col-4 matches-lose">{{playerData.loseMatches}}</div>
                                <div class="col-lg-2 col-4 matches-lose-percent">{{playerData.loseMatchesPercent ? playerData.loseMatchesPercent:"0"}} %</div>
                            </div>
                        </div>
                        <br>
                        <h2>إحصائيات الاهداف</h2>
                        <div class="goals-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي الاهداف
                                </div>
                                <div class="col-lg-4 col-8 goals-total">{{playerData.totalGoals}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المسجلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scored">{{playerData.goalsScored}}</div>
                                <div class="col-lg-2 col-4 goals-scored-percent">{{playerData.goalsScoredPercent ? playerData.goalsScoredPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المستقبلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scoredIn">{{playerData.goalsScoredIn}}</div>
                                <div class="col-lg-2 col-4 goals-scoredIn-percent">{{playerData.goalsScoredInPercent ? playerData.goalsScoredInPercent:"0"}} %</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="clubVS-stats" role="tabpanel" aria-labelledby="clubVS-stats-tab">
                        <h2>مواجهات النادي الغريم</h2>

                        <h2>إحصائيات المباريات</h2>
                        <div class="matches-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي المباريات
                                </div>
                                <div class="col-lg-4 col-8 matches-total">{{playerData.ctotalMatches}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الانتصارات
                                </div>
                                <div class="col-lg-2 col-4 matches-wins">{{playerData.cwinMatches}}</div>
                                <div class="col-lg-2 col-4 matches-wins-percent">{{playerData.cwinMatchesPercent ? playerData.cwinMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    التعادلات
                                </div>
                                <div class="col-lg-2 col-4 matches-draw">{{playerData.cdrawMatches}}</div>
                                <div class="col-lg-2 col-4 matches-draw-percent">{{playerData.cdrawMatchesPercent ? playerData.cdrawMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الهزائم
                                </div>
                                <div class="col-lg-2 col-4 matches-lose">{{playerData.closeMatches}}</div>
                                <div class="col-lg-2 col-4 matches-lose-percent">{{playerData.closeMatchesPercent ? playerData.closeMatchesPercent:"0"}} %</div>
                            </div>
                        </div>

                        <h2>إحصائيات الاهداف</h2>
                        <div class="goals-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي الاهداف
                                </div>
                                <div class="col-lg-4 col-8 goals-total">{{playerData.ctotalGoals}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المسجلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scored">{{playerData.cgoalsScored}}</div>
                                <div class="col-lg-2 col-4 goals-scored-percent">{{playerData.cgoalsScoredPercent ? playerData.cgoalsScoredPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المستقبلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scoredIn">{{playerData.cgoalsScoredIn}}</div>
                                <div class="col-lg-2 col-4 goals-scoredIn-percent">{{playerData.cgoalsScoredInPercent ? playerData.cgoalsScoredInPercent:"0"}} %</div>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="natVS-stats" role="tabpanel" aria-labelledby="natVS-stats-tab">
                        <h2>مواجهات المنتخب الغريم</h2>

                        <h2>إحصائيات المباريات</h2>
                        <div class="matches-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي المباريات
                                </div>
                                <div class="col-lg-4 col-8 matches-total">{{playerData.ntotalMatches}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الانتصارات
                                </div>
                                <div class="col-lg-2 col-4 matches-wins">{{playerData.nwinMatches}}</div>
                                <div class="col-lg-2 col-4 matches-wins-percent">{{playerData.nwinMatchesPercent ? playerData.nwinMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    التعادلات
                                </div>
                                <div class="col-lg-2 col-4 matches-draw">{{playerData.ndrawMatches}}</div>
                                <div class="col-lg-2 col-4 matches-draw-percent">{{playerData.ndrawMatchesPercent ? playerData.ndrawMatchesPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    الهزائم
                                </div>
                                <div class="col-lg-2 col-4 matches-lose">{{playerData.nloseMatches}}</div>
                                <div class="col-lg-2 col-4 matches-lose-percent">{{playerData.nloseMatchesPercent ? playerData.nloseMatchesPercent:"0"}} %</div>
                            </div>
                        </div>

                        <h2>إحصائيات الاهداف</h2>
                        <div class="goals-statistics">
                            
                            <div class="row justify-content-center mb-4">
                                <div class="col-lg-5 col-md-6 col-10">
                                    إجمالي الاهداف
                                </div>
                                <div class="col-lg-4 col-8 goals-total">{{playerData.ntotalGoals}}</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المسجلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scored">{{playerData.ngoalsScored}}</div>
                                <div class="col-lg-2 col-4 goals-scored-percent">{{playerData.ngoalsScoredPercent ? playerData.ngoalsScoredPercent:"0"}} %</div>
                            </div>
                            <div class="row justify-content-center mb-2">
                                <div class="col-lg-5 col-md-6 col-10">
                                    المستقبلة
                                </div>
                                <div class="col-lg-2 col-4 goals-scoredIn">{{playerData.ngoalsScoredIn}}</div>
                                <div class="col-lg-2 col-4 goals-scoredIn-percent">{{playerData.ngoalsScoredInPercent ? playerData.ngoalsScoredInPercent:"0"}} %</div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.player{
    padding: 100px 0;
    .info {
        text-align: center;
        background: #f6f6f6;
        box-shadow: 0 2px 8px rgba($color: $mc, $alpha: 0.2);
        border-radius: 8px;
        overflow: hidden;
        img {
            width: 100%;
            height: 320px;
        }
        h2{
            background: $mc;
            padding: 15px 0 20px;
            margin: 0;
            color: #fff;
            font-family: 'changa';
        }
    }
    .choosen{
        padding: 0;
        margin: 0 0 20px;
        background: #f6f6f6;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        box-shadow: 0 2px 8px rgba($color: $mc, $alpha: 0.15);
        h3{
            padding: 20px;
            background: $mc;
            color: #fff;
            font-family: 'changa';
            font-weight: bold;
        }
        h4{
            padding: 8px 0 15px;
            font-family: 'changa';
            font-weight: bold;
        }
    }
    .nav-tabs{
        margin: 25px 0;
        .nav-item.nav-link{
            color: $mc;
            font-family: 'changa';
            text-align: right;
            &:hover, &.active {
                background: $mc;
                color: #fff;
            }
            @include xs {
                width: 100%;
                text-align: center;
                border-radius: 5px;
            }
        }
    }
    .tab-pane{
        h2{
            text-align: center;
            color: $mc;
            font-weight: bold;
            padding-top: 25px;
            &::after{
                content: "";
                display: block;
                width: 25%;
                height: 2px;
                margin: 20px auto 35px;
                background: $mc;
                border-radius: 50%;
                @include sm {
                width: 50%;
                }
            }
        }
    }
    .tournaments-statistics{
        .row{
            text-align: center;
            div{
                font-family: 'changa';
                border: 1px solid $mc;
                padding: 15px 20px;
                background: #f6f6f6;
                box-shadow: 0 5px 7px rgba($color: $mc, $alpha: 0.15);
                font-size: 20px;
                font-weight: bold;
                &:first-child, &:last-child{
                    background: $mc;
                    color: #fff;
                }
                @include xs {
                    font-size: 18px;
                }
            }
            img{
                width: 40px;
                height: 40px;
                background: #fff;
                border-radius: 50%;
                padding: 4px;
                box-shadow: 0 5px 5px rgba(0,0,0,0.3);
            }
        }
    }
    
    .matches-statistics, .goals-statistics{
        .row{
            text-align: center;
            &:first-child{
                div:last-child{
                    background: #f6f6f6;
                    color: $mc;
                }
            }
            div{
                font-family: 'changa';
                border: 1px solid $mc;
                padding: 15px 20px;
                background: #f6f6f6;
                box-shadow: 0 5px 7px rgba($color: $mc, $alpha: 0.15);
                font-size: 20px;
                font-weight: bold;
                &:first-child, &:last-child{
                    background: $mc;
                    color: #fff;
                }
            }
            img{
                width: 35px;
                height: 35px;
            }
        }
    }
}
</style>

<script>
import AltHeader from "../../components/AltHeader.vue";

export default {
    name: "player",
    data(){
        return {
            personalImg: "",
            choosedClub: "",
            choosedNat: "",
            playerName: "",
            playerData: {

            }
        }
    },
    components: {
        AltHeader
    },
    computed: {
        person(){
            if(this.$route.params.player == "hassan"){
                this.personalImg = 'https://i.imgur.com/KVFe9oc.jpg';
                this.choosedClub = 'ليستر سيتي';
                this.choosedNat = 'غانا';
                this.playerName = 'hassan';
                return "جوست";
            } else if(this.$route.params.player == "monaser") {
                this.personalImg = 'https://i.imgur.com/VQAAUC6.jpg';
                this.choosedClub = 'مانشيستر سيتي';
                this.choosedNat = 'السنغال';
                this.playerName = 'mo';
                return "مو ناصر";
            } else {
                return "";
            }
        }
    },
    mounted(){
        window.scrollTo(0, 0);
        document.title = "ROPT | PLAYER DATA";
        $(".preloader").show();
        var person = this.playerName;
        db.get(`playersData/${person}`).then(response => {
            if(response == undefined) return location.href = '/404';
            // Tournaments
            var plp = response.data[2].pl.part;
            var plw = response.data[2].pl.win;
            var fap = response.data[2].fa.part;
            var faw = response.data[2].fa.win;
            var csp = response.data[2].cs.part;
            var csw = response.data[2].cs.win;
            var uclp = response.data[2].ucl.part;
            var uclw = response.data[2].ucl.win;
            var uelp = response.data[2].uel.part;
            var uelw = response.data[2].uel.win;
            var uscp = response.data[2].usc.part;
            var uscw = response.data[2].usc.win;
            var fcwcp = response.data[2].fcwc.part;
            var fcwcw = response.data[2].fcwc.win;
            var afconp = response.data[2].afcon.part;
            var afconw = response.data[2].afcon.win;
            var wcqp = response.data[2].wcq.part;
            var wcqw = response.data[2].wcq.win;
            var fwcp = response.data[2].fwc.part;
            var fwcw = response.data[2].fwc.win;

            // Goals
            var goalsScored = response.data[0].scored;
            var goalsScoredIn = response.data[0].scoredIn;
            var totalGoals = goalsScored + goalsScoredIn;
            var goalsScoredPercent = ((goalsScored * 100) / totalGoals).toFixed(1);
            var goalsScoredInPercent = ((goalsScoredIn * 100) / totalGoals).toFixed(1);

            // Matches
            var winMatches = response.data[1].win;
            var loseMatches = response.data[1].lose;
            var drawMatches = response.data[1].draw;
            var totalMatches = winMatches + loseMatches + drawMatches;
            var winMatchesPercent = ((winMatches * 100) / totalMatches).toFixed(1);
            var loseMatchesPercent = ((loseMatches * 100) / totalMatches).toFixed(1);
            var drawMatchesPercent = ((drawMatches * 100) / totalMatches).toFixed(1);

            // vsClub Goals
            var cgoalsScored = response.data[3].goalsStats.scored;
            var cgoalsScoredIn = response.data[3].goalsStats.scoredIn;
            var ctotalGoals = cgoalsScored + cgoalsScoredIn;
            var cgoalsScoredPercent = ((cgoalsScored * 100) / ctotalGoals).toFixed(1);
            var cgoalsScoredInPercent = ((cgoalsScoredIn * 100) / ctotalGoals).toFixed(1);
            // vsClub Matches
            var cwinMatches = response.data[3].matchesStats.win;
            var closeMatches = response.data[3].matchesStats.lose;
            var cdrawMatches = response.data[3].matchesStats.draw;
            var ctotalMatches = cwinMatches + closeMatches + cdrawMatches;
            var cwinMatchesPercent = ((cwinMatches * 100) / ctotalMatches).toFixed(1);
            var closeMatchesPercent = ((closeMatches * 100) / ctotalMatches).toFixed(1);
            var cdrawMatchesPercent = ((cdrawMatches * 100) / ctotalMatches).toFixed(1);


            // vsNational Goals
            var ngoalsScored = response.data[4].goalsStats.scored;
            var ngoalsScoredIn = response.data[4].goalsStats.scoredIn;
            var ntotalGoals = ngoalsScored + ngoalsScoredIn;
            var ngoalsScoredPercent = ((ngoalsScored * 100) / ntotalGoals).toFixed(1);
            var ngoalsScoredInPercent = ((ngoalsScoredIn * 100) / ntotalGoals).toFixed(1);
            // vsNational Matches
            var nwinMatches = response.data[4].matchesStats.win;
            var nloseMatches = response.data[4].matchesStats.lose;
            var ndrawMatches = response.data[4].matchesStats.draw;
            var ntotalMatches = nwinMatches + nloseMatches + ndrawMatches;
            var nwinMatchesPercent = ((nwinMatches * 100) / ntotalMatches).toFixed(1);
            var nloseMatchesPercent = ((nloseMatches * 100) / ntotalMatches).toFixed(1);
            var ndrawMatchesPercent = ((ndrawMatches * 100) / ntotalMatches).toFixed(1);

            this.playerData = {
                goalsScored,
                goalsScoredIn,
                totalGoals,
                goalsScoredPercent,
                goalsScoredInPercent,
                winMatches,
                loseMatches,
                drawMatches,
                totalMatches,
                winMatchesPercent,
                loseMatchesPercent,
                drawMatchesPercent,
                
                cgoalsScored,
                cgoalsScoredIn,
                ctotalGoals,
                cgoalsScoredPercent,
                cgoalsScoredInPercent,
                cwinMatches,
                closeMatches,
                cdrawMatches,
                ctotalMatches,
                cwinMatchesPercent,
                closeMatchesPercent,
                cdrawMatchesPercent,
                
                ngoalsScored,
                ngoalsScoredIn,
                ntotalGoals,
                ngoalsScoredPercent,
                ngoalsScoredInPercent,
                nwinMatches,
                nloseMatches,
                ndrawMatches,
                ntotalMatches,
                nwinMatchesPercent,
                nloseMatchesPercent,
                ndrawMatchesPercent,

                plp, plw,
                fap, faw,
                csp, csw,
                uclp, uclw,
                uelp, uelw,
                uscp, uscw,
                fcwcp, fcwcw,
                afconp, afconw,
                wcqp, wcqw,
                fwcp, fwcw,
                
            };
            
            setTimeout(() => {
            $(".preloader").addClass("hide");
            }, 2000);
        })
    }
}
</script>