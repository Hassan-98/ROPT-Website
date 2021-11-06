<template>
  <div class="WCQ">

    <div class="container">
      <div class="row">
        <div class="col-12 newSeason">
          <button v-if="admin" @click="CreateNewSeason"><i class="fas fa-plus-circle"></i> إنشاء موسم جديد</button>
          <button v-if="admin && seasonOpen" @click="EndThisSeason"><i class="fas fa-times-circle"></i> إنهاء الموسم الحالي</button>
          </div>
        <div class="col-lg-4 col-12">
          <div class="imageTitle">
            <img src="https://d33wubrfki0l68.cloudfront.net/e24357d43a55d7c311eb57f9daa5520d10b81ab6/852eb/imgs/wcqq.png">
            <h3>تصفيات كأس العالم</h3>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="info">
            <h4>معلومات البطولة :</h4>
            <p>تصفيات كأس العالم للمنتخبات الافريقية , تقام على مرحلتين, تبدأ المرحلة الاولى بـ3 مجموعات من 12 منتخب أفريقي يستثني منهم الاول و الثاني على التصنيف , يتأهل الاول والثاني من كل مجموعة للمرحلة الثانية و هي مرحلة بنظام مجموعة واحدة من 8 منتخبات الـ6 المتأهلين من المرحلة الاولى بالاضافة للأول والثاني على التصنيف يتأهل منهم 5 منتخبات لكأس العالم.</p>
            <hr>
            <h4>القوانين العامة</h4>
            <ul>
              <li>تقام مبارياتها على نظام صعوبة لاعب ممتاز</li>
              <li>مدة كل مباراة 10 دقائق على نظام اللعبة</li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="select">
            <label>أختيار الموسم</label>
            <select @change="selectSeason"></select>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="first-table-tab" data-toggle="tab" href="#first-table" role="tab" aria-controls="first-table" aria-selected="true">المرحلة التمهيدية</a>
          <a class="nav-item nav-link" id="final-matches-table-tab" data-toggle="tab" href="#first-matches-table" role="tab" aria-controls="first-matches-table" aria-selected="false">مباريات المرحلة التمهيدية</a>
          <a class="nav-item nav-link" id="final-table-tab" data-toggle="tab" href="#final-table" role="tab" aria-controls="final-table" aria-selected="false">المرحلة النهائية</a>
          <a class="nav-item nav-link" id="final-matches-table-tab" data-toggle="tab" href="#final-matches-table" role="tab" aria-controls="final-matches-table" aria-selected="false">مباريات المرحلة النهائية</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">

        <div class="tab-pane fade show active" id="first-table" role="tabpanel" aria-labelledby="first-table-tab">
          <h2>المرحلة التمهيدية</h2>
          <div class="league">
            <h4>المجموعة الاولى</h4>
            <table class="g1">
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </table>
            <h4>المجموعة الثانية</h4>
            <table class="g2">
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </table>
            <h4>المجموعة الثالثة</h4>
            <table class="g3">
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </table>
          </div>
        </div>

        <div class="tab-pane fade" id="first-matches-table" role="tabpanel" aria-labelledby="first-matches-table-tab">
          <h2>جدول مباريات المرحلة التمهيدية</h2>
          <div class="AllMatches"></div>
        </div>

        <div class="tab-pane fade" id="final-table" role="tabpanel" aria-labelledby="final-table-tab">
          <h2>المرحلة النهائية</h2>
          <button style="background: #A51814;width: 100%;" v-if="showFinalBTN && admin" @click="createLeague">بدأ المرحلة النهائية</button>
          <div class="finalStage">
            <table class="final-stage">
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </table>
          </div>
        </div>

        <div class="tab-pane fade" id="final-matches-table" role="tabpanel" aria-labelledby="final-matches-table-tab">
          <h2>جدول مباريات المرحلة النهائية</h2>
          <div class="AllMatches"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.WCQ{
  padding: 100px 0;
  .newSeason{
    text-align: right;
    margin-bottom: 20px;
    @include xs {
      text-align: center;
    }
    button{
      font-family: 'changa';
      background: $wcq;
      padding: 0 0 0 35px;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      margin: 5px;
      text-align: right;
      i{
        margin-left: 15px;
        padding: 15px 25px;
        color: $wcq;
        background: #fff;
        font-size: 20px;
      }
      &:hover{
        transform: translateY(-5px);
        border: none;
      }
      @include xs {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  .imageTitle{
    padding: 32px 0 0;
    text-align: center;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba($color: $wcq, $alpha: 0.15);
    margin-bottom: 25px;
    img{
      width: 220px;
      height: 220px;
      margin-bottom: 30px;
    }
    h3{
      background: $wcq;
      
      padding: 20px 0 25px;
      margin: 0;
      color: #fff;
      font-family: 'changa';
    }
  }
  .info{
    padding: 25px;
    text-align: right;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba($color: $wcq, $alpha: 0.15);
    h4{
      color: $wcq;
      font-family: one;
      font-weight: bold;
      
      &::after{
        content: "";
        display: block;
        width: 25%;
        height: 2px;
        margin: 10px 0;
        background: $mc;
        border-radius: 50%;
        @include sm {
          width: 50%;
        }
      }
    }
    p{
      font-size: 15px;
      font-family: one;
      color: #262626;
      font-weight: bold;
    }
    ul{
      li{
        list-style-type: square;
        padding-right: 0;
        margin-right: 10px; 
        font-size: 15px;
        font-family: one;
        color: #262626;
        font-weight: bold;
        background: none;
      }
    }
  }

  .select{
    text-align: right;
    margin: 15px 0;
    select{
      width: 90%;
      margin-right: 10px;
      padding: 5px 15px;
      font-family: 'changa';
      font-weight: bold;
      color: $wcq;
      background: #f6f6f6;
      option{
        font-family: 'changa';
        font-weight: bold;
        color: $wcq;
        background: #f6f6f6;
      }
      &:focus{
        border-color: $wcq;
      }
      @include lg {
        width: 87%;
      }
      @include md {
        width: 100%;
        margin-right: 0;
      }
    }
    label{
      @include md {
        width: 100%;
        text-align: center;
      }
    }
  }

  .nav-tabs{
    margin: 25px 0;
    .nav-item.nav-link{
      color: $wcq;
      text-align: right;
      font-family: 'changa';
      font-weight: bold;
      &:hover, &.active {
        background: $wcq;
        color: #fff;
      }
      @include xs {
        width: 100%;
        text-align: center;
      }
    }
  }
    h2{
    text-align: center;
    color: $wcq;
    font-weight: bold;
    padding-top: 25px;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 35px;
      background: $wcq;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }

  #first-table{
    .league{
      @include sm {
        overflow-x: scroll;
      }
      h4{
        text-align: center;
        margin: 50px 0 0;
        padding: 15px 0 20px;
        color: $wcq;
        font-weight: bold;
        background: #f6f6f6;
        @include xs {
          font-size: 20px;
        }
      }
      table{
        width: 100%;
        margin: auto;
        tr{
          &:first-child{
            background: $wcq;
            color: #fff;
          }
          &:nth-child(even){
            background: #f6f6f6;
          }
          td, th{
            font-family: 'Changa', sans-serif;
            font-weight: bold;
            border: 0;
            text-align: center;
            padding: 12px;
            @include sm {
              font-size: 13px;
              &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9){
                display: none;
              }
            }
          }
          td{
            color: $wcq;
          }
          td:not(:nth-child(2)){
            font-weight: bold;
          }
        }
      }
    }
  }
  .finalStage{
    text-align: center;
    table{
      width: 100%;
      margin: auto;
      tr{
        &:first-child{
          background: $wcq;
          color: #fff;
        }
        &:nth-child(even){
          background: #f6f6f6;
        }
        &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6){
          td:first-child{
            &::after{
              content: "\f0d8";
              font-family: "Font Awesome 5 Pro"; 
              font-weight: 900;
              margin-left: 5px;
              color: red;
            }
          }
        }
        &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9){
          td:first-child{
            &::after{
              content: "\f068";
              font-family: "Font Awesome 5 Pro"; 
              font-weight: 900;
              margin-left: 5px;
              color: blue;
            }
          }
        }
        td, th{
          font-family: 'Changa', sans-serif;
          font-weight: bold;
          border: 0;
          text-align: center;
          padding: 12px;
          @include sm {
            font-size: 13px;
            &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9){
              display: none;
            }
          }
        }
        td{
          color: $wcq;
        }
        td:not(:nth-child(2)){
          font-weight: bold;
        }
      }
    }
  }

  .AllMatches{
    text-align: center;
    h4{
      padding: 15px;
      background: $wcq;
      color: #fff;
      font-weight: bold;
      @include xs {
        font-size: 18px;
      }
    }
    .match{
      position: relative;
      &:nth-child(odd){
        background: #f6f6f6;
      }
      span{
        font-family: 'Changa', sans-serif;
        font-weight: bold;
        font-size: 20px;
        color: $wcq;
        padding: 15px;
        &:first-child, &:nth-child(3) {
          width: 40%;
        }
        &:nth-child(2){
          font-weight: bold;
          font-size: 24px;
        }
        @include xs {
          padding: 15px 5px;
          font-size: 13px;
          &:nth-child(2){
            font-size: 13px;
          }
        }
      }
      i{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        cursor: pointer;
        @include xs {
          font-size: 12.5px
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "WCQ",
  data(){
    return {
      showFinalBTN: true,
      seasonOpen: true,
      admin: false
    }
  },
  methods: {
    selectSeason(){
      var seNum = $(".select select").val();
          
      // Get Season State
      db.get(`Seasons/${seNum}/WCQ`).then(respon => {
        this.seasonOpen = !respon.data[4];
      });
      
      db.get(`Seasons/${seNum}`).then(res => {
        
        // GET GROUPS RANKING
        db.getting(`Seasons/${seNum}/WCQ/groubs/groub1`, response => {
          $(".league .g1 tr:not(:first-child)").remove();
          var num = 1;
          response.data.forEach(club => {
            var tr = `
                      <tr>
                        <td>${num}</td>
                        <td id="${club._id}">${club.club}</td>
                        <td>${club.p}</td>
                        <td>${club.w}</td>
                        <td>${club.d}</td>
                        <td>${club.l}</td>
                        <td>${club.gf}</td>
                        <td>${club.ga}</td>
                        <td>${club.gd}</td>
                        <td>${club.pts}</td>
                      </tr>
                      `;
              $(".league .g1").append(tr);
            num++;
          });
        }, {sort: ["pts", "gd", "gf", "-ga"]});
        db.getting(`Seasons/${seNum}/WCQ/groubs/groub2`, response => {
          $(".league .g2 tr:not(:first-child)").remove();
          var num = 1;
          response.data.forEach(club => {
            var tr = `
                      <tr>
                        <td>${num}</td>
                        <td id="${club._id}">${club.club}</td>
                        <td>${club.p}</td>
                        <td>${club.w}</td>
                        <td>${club.d}</td>
                        <td>${club.l}</td>
                        <td>${club.gf}</td>
                        <td>${club.ga}</td>
                        <td>${club.gd}</td>
                        <td>${club.pts}</td>
                      </tr>
                      `;
              $(".league .g2").append(tr);
            num++;
          });
        }, {sort: ["pts", "gd", "gf", "-ga"]});
        db.getting(`Seasons/${seNum}/WCQ/groubs/groub3`, response => {
          $(".league .g3 tr:not(:first-child)").remove();
          var num = 1;
          response.data.forEach(club => {
            var tr = `
                      <tr>
                        <td>${num}</td>
                        <td id="${club._id}">${club.club}</td>
                        <td>${club.p}</td>
                        <td>${club.w}</td>
                        <td>${club.d}</td>
                        <td>${club.l}</td>
                        <td>${club.gf}</td>
                        <td>${club.ga}</td>
                        <td>${club.gd}</td>
                        <td>${club.pts}</td>
                      </tr>
                      `;
              $(".league .g3").append(tr);
            num++;
          });
        }, {sort: ["pts", "gd", "gf", "-ga"]});
        
        // GET GROUPS MATCHES
        db.getting(`Seasons/${seNum}/WCQ/Gmatches`, response => {
          $("#first-matches-table .AllMatches .round").remove();
          $("#first-matches-table .AllMatches .match").remove();
          var numer = 1;
          response.data.forEach(round => {
              var ROUND = ` <div class="round" id="R${numer}">
                              <h4>الجولة ${numer}</h4>
                            </div>
                            `;
              $("#first-matches-table .AllMatches").append(ROUND);
              numer++;
          });
          db.get(`Seasons/${seNum}/WCQ/Gmatches/round1`, {sort:["id"]}).then(res => {
            res.data.forEach(match => {
                if(typeof match == "object"){
                  if(match.state){
                    var Match = `<div class="match" id="round1/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${match.awayScore}</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round1/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#first-matches-table .AllMatches #R1").after(Match);
                }
            });
          });
          db.get(`Seasons/${seNum}/WCQ/Gmatches/round2`, {sort:["id"]}).then(res => {
            res.data.forEach(match => {
                if(typeof match == "object"){
                  if(match.state){
                    var Match = `<div class="match" id="round2/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${match.awayScore}</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round2/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#first-matches-table .AllMatches #R2").after(Match);
                }
            });
          });
          db.get(`Seasons/${seNum}/WCQ/Gmatches/round3`, {sort:["id"]}).then(res => {
            res.data.forEach(match => {
                if(typeof match == "object"){
                  if(match.state){
                    var Match = `<div class="match" id="round3/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${match.awayScore}</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round3/match${match.id}">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#first-matches-table .AllMatches #R3").after(Match);
                }
            });
          });
          const admin = this.admin;
          if (admin == false){
            $(".AllMatches .match i").remove();
          }
        }, {sort:["-num"]});

        // GET SEASONS RANKING
        db.getting(`Seasons/${seNum}/WCQ/clubs`, response => {
          $("table.final-stage tr:not(:first-child)").remove();
          var num = 1;
          response.data.forEach(club => {
            var tr = `
                      <tr>
                        <td>${num}</td>
                        <td id="${club._id}">${club.club}</td>
                        <td>${club.p}</td>
                        <td>${club.w}</td>
                        <td>${club.d}</td>
                        <td>${club.l}</td>
                        <td>${club.gf}</td>
                        <td>${club.ga}</td>
                        <td>${club.gd}</td>
                        <td>${club.pts}</td>
                      </tr>
                      `;
            $("table.final-stage").append(tr);
            num++;
          });
          // Check if Final Stage is Started
          var checker = 0;
          Object.values($("table.final-stage tr td:nth-of-type(2)")).forEach(td => {
            if(td.textContent == "لم يتأهل بعد") {
              checker++;
            }
          });
          if(checker == 0) this.showFinalBTN = false;
          else this.showFinalBTN = true;
        }, {sort: ["pts", "gd", "gf", "-ga"]});
        
        // GET SEASONS MATCHES
        db.getting(`Seasons/${seNum}/WCQ/matches`, response => {
          $("#final-matches-table .AllMatches .round").remove();
          $("#final-matches-table .AllMatches .match").remove();
          var numer = 1;
          response.data.forEach(round => {
              var ROUND = ` <div class="round">
                              <h4>الجولة ${numer}</h4>
                            </div>
                            `;
              $("#final-matches-table .AllMatches").append(ROUND);
              var arrRounds = Object.values(round);
              var Mnumer = 1;
              arrRounds.forEach(match => {
                if(typeof match == "object"){
                  if(match.state){
                    var Match = `<div class="match" id="round${numer}/match${Mnumer}">
                                    <span>${match.home}</span>
                                    <span>${match.homeScore} - ${match.awayScore}</span>
                                    <span>${match.away}</span>
                                  </div>`;
                  } else {
                    var Match = `<div class="match" id="round${numer}/match${Mnumer}">
                                    <span>${match.home}</span>
                                    <span>VS</span>
                                    <span>${match.away}</span>
                                    <i class="far fa-edit"></i>
                                  </div>`;
                  }
                  $("#final-matches-table .AllMatches .round:last-of-type").append(Match);
                  Mnumer++;
                }
              });
              numer++;
          });
        }, {sort:["-num"]});
        

      });
    },
    CreateNewSeason(){
      Swal.fire({
        title: 'هل تريد إنشاء موسم جديد ؟',
        type: 'question',
        customClass: {
          icon: 'swal2-arabic-question-mark'
        },
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
        if(res.value){
          let Rank1 = [];
          let Rank2 = [];
          let Rank3 = [];
          let Rank4 = [];
          db.get(`rankings/nationals`, {sort: ["pts", "-prev"]}).then(resp => {
            let rank = 1;
            resp.data.forEach(club => {
              if(rank > 2 && rank <= 5){
                Rank1.push(club.club);
              } else if (rank > 5 && rank <= 8){
                Rank2.push(club.club);
              } else if (rank > 8 && rank <= 11){
                Rank3.push(club.club);
              } else if (rank > 11 && rank <= 14){
                Rank4.push(club.club);
              }
              rank++;
            });
            function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;
              while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }
              return array;
            }
            Rank1 = shuffle(Rank1);
            Rank2 = shuffle(Rank2);
            Rank3 = shuffle(Rank3);
            Rank4 = shuffle(Rank4);
            
            if(Rank1.includes("غانا") || Rank2.includes("غانا") || Rank3.includes("غانا") || Rank4.includes("غانا")){
              db.get(`playersData/hassan/toursStats/wcq`).then(pd => {
                var part = pd.data[0] + 1;
                db.update(`playersData/hassan/toursStats/wcq`, {
                  part
                });
              });
            }
            
            if(Rank1.includes("السنغال") || Rank2.includes("السنغال") || Rank3.includes("السنغال") || Rank4.includes("السنغال")){
              db.get(`playersData/mo/toursStats/wcq`).then(pd => {
                var part = pd.data[0] + 1;
                db.update(`playersData/mo/toursStats/wcq`, {
                  part
                });
              });
            }
            
            db.get('Seasons', {order:{type: "key"}, filter:{type: "last", value: 1}}).then(res => {
              if(res){
                if (res.data[0].WCQ){
                  var SeNum = res.data[0].num + 1;
                } else {
                  var SeNum = res.data[0].num;
                }
              } else {
                var SeNum = 1;
              }
            
              db.update(`Seasons/${SeNum}`, {
                num: SeNum 
              });

              db.update(`Seasons/${SeNum}/WCQ`, {
                state: false 
              });

              // 1ST ROUND
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1`, {
                num: 1
              });

              // 1ST ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match1`, {
                home: Rank1[0],
                homeScore: 0,
                away: Rank3[0],
                awayScore: 0,
                state: false,
                id: 1
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match2`, {
                home: Rank2[0],
                homeScore: 0,
                away: Rank4[0],
                awayScore: 0,
                state: false,
                id: 2
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match3`, {
                home: Rank1[1],
                homeScore: 0,
                away: Rank3[1],
                awayScore: 0,
                state: false,
                id: 3
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match4`, {
                home: Rank2[1],
                homeScore: 0,
                away: Rank4[1],
                awayScore: 0,
                state: false,
                id: 4
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match5`, {
                home: Rank1[2],
                homeScore: 0,
                away: Rank3[2],
                awayScore: 0,
                state: false,
                id: 5
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round1/match6`, {
                home: Rank2[2],
                homeScore: 0,
                away: Rank4[2],
                awayScore: 0,
                state: false,
                id: 6
              });

              // 2ND ROUND
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2`, {
                num: 2
              });

              // 2ND ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match1`, {
                home: Rank1[0],
                homeScore: 0,
                away: Rank2[0],
                awayScore: 0,
                state: false,
                id: 1
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match2`, {
                home: Rank3[0],
                homeScore: 0,
                away: Rank4[0],
                awayScore: 0,
                state: false,
                id: 2
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match3`, {
                home: Rank1[1],
                homeScore: 0,
                away: Rank2[1],
                awayScore: 0,
                state: false,
                id: 3
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match4`, {
                home: Rank3[1],
                homeScore: 0,
                away: Rank4[1],
                awayScore: 0,
                state: false,
                id: 4
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match5`, {
                home: Rank1[2],
                homeScore: 0,
                away: Rank2[2],
                awayScore: 0,
                state: false,
                id: 5
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round2/match6`, {
                home: Rank3[2],
                homeScore: 0,
                away: Rank4[2],
                awayScore: 0,
                state: false,
                id: 6
              });

              // 3RD ROUND
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3`, {
                num: 3
              });

              // 3RD ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match1`, {
                home: Rank1[0],
                homeScore: 0,
                away: Rank4[0],
                awayScore: 0,
                state: false,
                id: 1
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match2`, {
                home: Rank2[0],
                homeScore: 0,
                away: Rank3[0],
                awayScore: 0,
                state: false,
                id: 2
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match3`, {
                home: Rank1[1],
                homeScore: 0,
                away: Rank4[1],
                awayScore: 0,
                state: false,
                id: 3
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match4`, {
                home: Rank2[1],
                homeScore: 0,
                away: Rank3[1],
                awayScore: 0,
                state: false,
                id: 4
              });

              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match5`, {
                home: Rank1[2],
                homeScore: 0,
                away: Rank4[2],
                awayScore: 0,
                state: false,
                id: 5
              });
              db.update(`Seasons/${SeNum}/WCQ/Gmatches/round3/match6`, {
                home: Rank2[2],
                homeScore: 0,
                away: Rank3[2],
                awayScore: 0,
                state: false,
                id: 6
              });

              // ADD GROUBS CLUBS
              var cnum1 = 1;
              var cnum2 = 1;
              var cnum3 = 1;
              var cnum4 = 1;
              Rank1.forEach(club => {
                if(cnum1 == 1){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub1/1`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 1
                  });
                } else if (cnum1 == 2){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub2/1`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 1
                  });
                } else if (cnum1 == 3){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub3/1`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 1
                  });
                }
                cnum1++;
              });
              Rank2.forEach(club => {
                if(cnum2 == 1){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub1/2`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 2
                  });
                } else if (cnum2 == 2){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub2/2`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 2
                  });
                } else if (cnum2 == 3){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub3/2`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 2
                  });
                }
                cnum2++;
              });
              Rank3.forEach(club => {
                if(cnum3 == 1){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub1/3`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 3
                  });
                } else if (cnum3 == 2){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub2/3`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 3
                  });
                } else if (cnum3 == 3){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub3/3`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 3
                  });
                }
                cnum3++;
              });
              Rank4.forEach(club => {
                if(cnum4 == 1){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub1/4`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 4
                  });
                } else if (cnum4 == 2){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub2/4`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 4
                  });
                } else if (cnum4 == 3){
                  db.add(`Seasons/${SeNum}/WCQ/groubs/groub3/4`, {
                    club,
                    pts: 0,
                    p: 0,
                    w: 0,
                    d: 0,
                    l: 0,
                    gf: 0,
                    ga: 0,
                    gd: 0,
                    _id: 4
                  });
                }
                cnum4++;
              });
              

              let Clubs = ["لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد","لم يتأهل بعد"];

              // 1ST ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round1`, {
                num: 1
              });

              // 1ST ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round1/match1`, {
                home: Clubs[0],
                homeScore: 0,
                away: Clubs[4],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round1/match2`, {
                home: Clubs[1],
                homeScore: 0,
                away: Clubs[5],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round1/match3`, {
                home: Clubs[2],
                homeScore: 0,
                away: Clubs[6],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round1/match4`, {
                home: Clubs[3],
                homeScore: 0,
                away: Clubs[7],
                awayScore: 0,
                state: false
              });

              // 2ND ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round2`, {
                num: 2
              });

              // 2ND ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round2/match1`, {
                home: Clubs[0],
                homeScore: 0,
                away: Clubs[1],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round2/match2`, {
                home: Clubs[2],
                homeScore: 0,
                away: Clubs[4],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round2/match3`, {
                home: Clubs[3],
                homeScore: 0,
                away: Clubs[5],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round2/match4`, {
                home: Clubs[7],
                homeScore: 0,
                away: Clubs[6],
                awayScore: 0,
                state: false
              });

              // 3RD ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round3`, {
                num: 3
              });

              // 3RD ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round3/match1`, {
                home: Clubs[1],
                homeScore: 0,
                away: Clubs[3],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round3/match2`, {
                home: Clubs[2],
                homeScore: 0,
                away: Clubs[0],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round3/match3`, {
                home: Clubs[4],
                homeScore: 0,
                away: Clubs[7],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round3/match4`, {
                home: Clubs[5],
                homeScore: 0,
                away: Clubs[6],
                awayScore: 0,
                state: false
              });

              // 4TH ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round4`, {
                num: 4
              });

              // 4TH ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round4/match1`, {
                home: Clubs[0],
                homeScore: 0,
                away: Clubs[3],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round4/match2`, {
                home: Clubs[5],
                homeScore: 0,
                away: Clubs[4],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round4/match3`, {
                home: Clubs[6],
                homeScore: 0,
                away: Clubs[1],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round4/match4`, {
                home: Clubs[7],
                homeScore: 0,
                away: Clubs[2],
                awayScore: 0,
                state: false
              });

              // 5TH ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round5`, {
                num: 5
              });

              // 5TH ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round5/match1`, {
                home: Clubs[0],
                homeScore: 0,
                away: Clubs[7],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round5/match2`, {
                home: Clubs[4],
                homeScore: 0,
                away: Clubs[1],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round5/match3`, {
                home: Clubs[5],
                homeScore: 0,
                away: Clubs[2],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round5/match4`, {
                home: Clubs[6],
                homeScore: 0,
                away: Clubs[3],
                awayScore: 0,
                state: false
              });

              // 6TH ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round6`, {
                num: 6
              });

              // 6TH ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round6/match1`, {
                home: Clubs[2],
                homeScore: 0,
                away: Clubs[1],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round6/match2`, {
                home: Clubs[3],
                homeScore: 0,
                away: Clubs[4],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round6/match3`, {
                home: Clubs[6],
                homeScore: 0,
                away: Clubs[0],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round6/match4`, {
                home: Clubs[7],
                homeScore: 0,
                away: Clubs[5],
                awayScore: 0,
                state: false
              });

              // 7TH ROUND
              db.update(`Seasons/${SeNum}/WCQ/matches/round7`, {
                num: 7
              });

              // 7TH ROUND MATCHES
              db.update(`Seasons/${SeNum}/WCQ/matches/round7/match1`, {
                home: Clubs[3],
                homeScore: 0,
                away: Clubs[2],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round7/match2`, {
                home: Clubs[5],
                homeScore: 0,
                away: Clubs[0],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round7/match3`, {
                home: Clubs[6],
                homeScore: 0,
                away: Clubs[4],
                awayScore: 0,
                state: false
              });
              db.update(`Seasons/${SeNum}/WCQ/matches/round7/match4`, {
                home: Clubs[7],
                homeScore: 0,
                away: Clubs[1],
                awayScore: 0,
                state: false
              });

              // ADD LEAGUE CLUBS
              db.get(`rankings/nationals`, {sort: ["pts", "-prev"]}).then(respon => {
                var clubNum = 1;
                respon.data.forEach(CLUB => {
                  Clubs.forEach(club => {
                    if(clubNum == 1){
                      db.add(`Seasons/${SeNum}/WCQ/clubs/${clubNum}`, {
                        club: CLUB.club,
                        pts: 0,
                        p: 0,
                        w: 0,
                        d: 0,
                        l: 0,
                        gf: 0,
                        ga: 0,
                        gd: 0,
                        _id: clubNum
                      });
                      if(CLUB.club == 'غانا'){
                        db.get(`playersData/hassan/toursStats/wcq`).then(pd => {
                          var part = pd.data[0] + 1;
                          db.update(`playersData/hassan/toursStats/wcq`, {
                            part
                          });
                        });
                      } else if (CLUB.club == "السنغال"){
                        db.get(`playersData/mo/toursStats/wcq`).then(pd => {
                          var part = pd.data[0] + 1;
                          db.update(`playersData/mo/toursStats/wcq`, {
                            part
                          });
                        });
                      }
                    } else if (clubNum == 2){
                      db.add(`Seasons/${SeNum}/WCQ/clubs/${clubNum}`, {
                        club: CLUB.club,
                        pts: 0,
                        p: 0,
                        w: 0,
                        d: 0,
                        l: 0,
                        gf: 0,
                        ga: 0,
                        gd: 0,
                        _id: clubNum
                      });
                      if(CLUB.club == 'غانا'){
                        db.get(`playersData/hassan/toursStats/wcq`).then(pd => {
                          var part = pd.data[0] + 1;
                          db.update(`playersData/hassan/toursStats/wcq`, {
                            part
                          });
                        });
                      } else if (CLUB.club == "السنغال"){
                        db.get(`playersData/mo/toursStats/wcq`).then(pd => {
                          var part = pd.data[0] + 1;
                          db.update(`playersData/mo/toursStats/wcq`, {
                            part
                          });
                        });
                      }
                    } else if (clubNum <= 8) {
                      db.add(`Seasons/${SeNum}/WCQ/clubs/${clubNum}`, {
                        club,
                        pts: 0,
                        p: 0,
                        w: 0,
                        d: 0,
                        l: 0,
                        gf: 0,
                        ga: 0,
                        gd: 0,
                        _id: clubNum
                      });
                    }
                  });
                  clubNum++;
                });
              });

            });
          });
        }
      })
    },
    createLeague(){
      var SeNum = $(".select select").val();
      Swal.fire({
        title: 'هل تريد بدأ المرحلة النهائية من التصفيات ؟',
        type: 'question',
        customClass: {
          icon: 'swal2-arabic-question-mark'
        },
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
        if(res.value){
          let Clubs = [];
          var num = 1;
          var num2 = 1;
          db.get(`rankings/nationals`, {sort: ["pts", "-prev"]}).then(resp => {

                Object.values($(".final-stage tr td:nth-of-type(2)")).forEach(td => {
                  if(td.textContent) {
                    if(num2 == 1 || num2 == 2){
                      Clubs.push(td.textContent);
                    }
                  }
                  num2++;
                });
            
                Object.values($(".league tr td:nth-of-type(2)")).forEach(td => {
                  if(td.textContent) {
                    if(num == 1 || num == 2 || num == 5 || num == 6 || num == 9 || num == 10){
                      Clubs.push(td.textContent);
                    }
                  }
                  num++;
                });

          }).then(() => {
            // 1ST ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round1`, {
              num: 1
            });

            // 1ST ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round1/match1`, {
              home: Clubs[0],
              homeScore: 0,
              away: Clubs[4],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round1/match2`, {
              home: Clubs[1],
              homeScore: 0,
              away: Clubs[5],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round1/match3`, {
              home: Clubs[2],
              homeScore: 0,
              away: Clubs[6],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round1/match4`, {
              home: Clubs[3],
              homeScore: 0,
              away: Clubs[7],
              awayScore: 0,
              state: false
            });

            // 2ND ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round2`, {
              num: 2
            });

            // 2ND ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round2/match1`, {
              home: Clubs[0],
              homeScore: 0,
              away: Clubs[1],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round2/match2`, {
              home: Clubs[2],
              homeScore: 0,
              away: Clubs[4],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round2/match3`, {
              home: Clubs[3],
              homeScore: 0,
              away: Clubs[5],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round2/match4`, {
              home: Clubs[7],
              homeScore: 0,
              away: Clubs[6],
              awayScore: 0,
              state: false
            });

            // 3RD ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round3`, {
              num: 3
            });

            // 3RD ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round3/match1`, {
              home: Clubs[1],
              homeScore: 0,
              away: Clubs[3],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round3/match2`, {
              home: Clubs[2],
              homeScore: 0,
              away: Clubs[0],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round3/match3`, {
              home: Clubs[4],
              homeScore: 0,
              away: Clubs[7],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round3/match4`, {
              home: Clubs[5],
              homeScore: 0,
              away: Clubs[6],
              awayScore: 0,
              state: false
            });

            // 4TH ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round4`, {
              num: 4
            });

            // 4TH ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round4/match1`, {
              home: Clubs[0],
              homeScore: 0,
              away: Clubs[3],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round4/match2`, {
              home: Clubs[5],
              homeScore: 0,
              away: Clubs[4],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round4/match3`, {
              home: Clubs[6],
              homeScore: 0,
              away: Clubs[1],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round4/match4`, {
              home: Clubs[7],
              homeScore: 0,
              away: Clubs[2],
              awayScore: 0,
              state: false
            });

            // 5TH ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round5`, {
              num: 5
            });

            // 5TH ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round5/match1`, {
              home: Clubs[0],
              homeScore: 0,
              away: Clubs[7],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round5/match2`, {
              home: Clubs[4],
              homeScore: 0,
              away: Clubs[1],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round5/match3`, {
              home: Clubs[5],
              homeScore: 0,
              away: Clubs[2],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round5/match4`, {
              home: Clubs[6],
              homeScore: 0,
              away: Clubs[3],
              awayScore: 0,
              state: false
            });

            // 6TH ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round6`, {
              num: 6
            });

            // 6TH ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round6/match1`, {
              home: Clubs[2],
              homeScore: 0,
              away: Clubs[1],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round6/match2`, {
              home: Clubs[3],
              homeScore: 0,
              away: Clubs[4],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round6/match3`, {
              home: Clubs[6],
              homeScore: 0,
              away: Clubs[0],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round6/match4`, {
              home: Clubs[7],
              homeScore: 0,
              away: Clubs[5],
              awayScore: 0,
              state: false
            });

            // 7TH ROUND
            db.update(`Seasons/${SeNum}/WCQ/matches/round7`, {
              num: 7
            });

            // 7TH ROUND MATCHES
            db.update(`Seasons/${SeNum}/WCQ/matches/round7/match1`, {
              home: Clubs[3],
              homeScore: 0,
              away: Clubs[2],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round7/match2`, {
              home: Clubs[5],
              homeScore: 0,
              away: Clubs[0],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round7/match3`, {
              home: Clubs[6],
              homeScore: 0,
              away: Clubs[4],
              awayScore: 0,
              state: false
            });
            db.update(`Seasons/${SeNum}/WCQ/matches/round7/match4`, {
              home: Clubs[7],
              homeScore: 0,
              away: Clubs[1],
              awayScore: 0,
              state: false
            });

            // ADD LEAGUE CLUBS
            var clubNum = 1;
            Clubs.forEach(club => {
              db.add(`Seasons/${SeNum}/WCQ/clubs/${clubNum}`, {
                club,
                pts: 0,
                p: 0,
                w: 0,
                d: 0,
                l: 0,
                gf: 0,
                ga: 0,
                gd: 0,
                _id: clubNum
              });
              clubNum++;
            });

          });
        }
      });
    },
    EndThisSeason(){
      Swal.fire({
        title: 'هل تريد إنهاء الموسم الحالي ؟',
        type: 'question',
        customClass: {
          icon: 'swal2-arabic-question-mark'
        },
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
        if(res.value){

          var seNum = $(".select select").val();
          db.get(`Seasons/${seNum}/AFCON/matches`).then(res => {
            var checker = 0;
            res.data.forEach(round => {
              Object.values(round).forEach(match => {
                if(typeof match == 'object' &&!match.state){
                  checker++;
                }
              });
            });
            if(checker > 0){
              Swal.fire({
                type: 'error',
                title: 'خطأ',
                text: 'لا تزال هناك مباريات لم تنتهى بعد'
              });
            } else {
              var winner = $(".final-stage tr:nth-of-type(2) td:nth-child(2)").text();
                
                if(winner == "غانا") {
                  firebase.database().ref(`playersData/hassan/toursStats/wcq`).transaction(data => {
                    data.win++;
                    return data;
                  }).then(() => {
                    db.update(`Seasons/${seNum}/WCQ`, {
                      state: true
                    }).then(location.reload());
                  }).catch(err => {
                    alert(err.message);
                  });
                } else if (winner == "السنغال"){
                  firebase.database().ref(`playersData/mo/toursStats/wcq`).transaction(data => {
                    data.win++;
                    return data;
                  }).then(() => {
                    db.update(`Seasons/${seNum}/WCQ`, {
                      state: true
                    }).then(location.reload());
                  }).catch(err => {
                    alert(err.message);
                  });
                } else {
                  db.update(`Seasons/${seNum}/WCQ`, {
                    state: true
                  }).then(location.reload());
                }

            }
          });

        }
      });
    }
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | WORLD CUP QUALIFICATIONS";
    $(".preloader").show();

    // Check if Final Stage is Started
    var checker = 0;
    Object.values($(".final-stage tr td:nth-of-type(2)")).forEach(td => {
      if(td.textContent == "لم يتأهل بعد") {
        checker++;
      }
    });
    if(checker == 0) this.showFinalBTN = false;

    // GET SEASONS SELECT OPTIONS
    db.get("Seasons").then(res => {
      res.data.forEach(season => {
        var seNum = season.num;
        db.get(`Seasons/${seNum}/WCQ`).then(res => {
          if(res == undefined){
            var option = `<option value="${seNum}" disabled>الموسم ${seNum}</option>`;
          } else {
            var option = `<option value="${seNum}">الموسم ${seNum}</option>`;
          }
          $(".select select").prepend(option);
          $(".select select option:not(:disabled):first-of-type").attr('selected','selected');
        });
      });
    }).then(() => {
      // GET SEASONS
      db.get("Seasons", {order:{type:"key"},filter:{type:"last", value:1}}).then(res => {
        if(res.data[0].WCQ){
          var seNum = res.data[0].num;
        } else {
          var seNum = $(".select select").val();
        }
        
        // Get Season State
        db.get(`Seasons/${seNum}/WCQ`).then(respon => {
          this.seasonOpen = !respon.data[6];
        }).then(() => {
          this.selectSeason();
          setTimeout(() => {
                  $(".preloader").addClass("hide");
                }, 2000)
        });

      });
    });
    
  },
  mounted(){
    // SET GROUPS MATCHES RESULT
    $("#first-matches-table .AllMatches").on("click", ".match i.editGResult", function(){
      var id = $(this).parent().attr("id");
      var seNum = $(".select select").val();
      var home = $(this).siblings("span:first-of-type").text();
      var away = $(this).siblings("span:last-of-type").text();
      Swal.fire({
        title: 'تعديل نتيجة المباراة',
        html:`
              <label>نتيجة ${home}</label>
              <input id="homeRes" class="swal2-input" type="number" style="display:block;width:75px;"> 
              <label>نتيجة ${away}</label>
              <input id="awayRes" class="swal2-input" type="number" style="display:block;width:75px;">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('homeRes').value,
            document.getElementById('awayRes').value
          ]
        }
      }).then(val => {
        if(val.value){
          var homeScore = Number(val.value[0]);
          var awayScore = Number(val.value[1]);
          db.update(`Seasons/${seNum}/WCQ/Gmatches/${id}`, {
            homeScore, awayScore, state: true
          }).then(() => {
            var HomeClubId;
            var AwayClubId;

            Object.values($(".league tr td:nth-child(2)")).forEach(td => {
              if(td.innerHTML == home){
                if(td.id == 1 && td.parentElement.parentElement.className == "g1"){
                  HomeClubId = `groub1/1`;
                } else if (td.id == 1 && td.parentElement.parentElement.className == "g2") {
                  HomeClubId = `groub2/1`;
                } else if (td.id == 1 && td.parentElement.parentElement.className == "g3") {
                  HomeClubId = `groub3/1`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g1") {
                  HomeClubId = `groub1/2`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g2") {
                  HomeClubId = `groub2/2`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g3") {
                  HomeClubId = `groub3/2`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g1") {
                  HomeClubId = `groub1/3`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g2") {
                  HomeClubId = `groub2/3`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g3") {
                  HomeClubId = `groub3/3`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g1") {
                  HomeClubId = `groub1/4`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g2") {
                  HomeClubId = `groub2/4`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g3") {
                  HomeClubId = `groub3/4`;
                }
              } else if (td.innerHTML == away){
                if(td.id == 1 && td.parentElement.parentElement.className == "g1"){
                  AwayClubId = `groub1/1`;
                } else if (td.id == 1 && td.parentElement.parentElement.className == "g2") {
                  AwayClubId = `groub2/1`;
                } else if (td.id == 1 && td.parentElement.parentElement.className == "g3") {
                  AwayClubId = `groub3/1`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g1") {
                  AwayClubId = `groub1/2`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g2") {
                  AwayClubId = `groub2/2`;
                } else if (td.id == 2 && td.parentElement.parentElement.className == "g3") {
                  AwayClubId = `groub3/2`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g1") {
                  AwayClubId = `groub1/3`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g2") {
                  AwayClubId = `groub2/3`;
                } else if (td.id == 3 && td.parentElement.parentElement.className == "g3") {
                  AwayClubId = `groub3/3`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g1") {
                  AwayClubId = `groub1/4`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g2") {
                  AwayClubId = `groub2/4`;
                } else if (td.id == 4 && td.parentElement.parentElement.className == "g3") {
                  AwayClubId = `groub3/4`;
                }
              }
            });
            
            // Handling Home Result
            db.get(`Seasons/${seNum}/WCQ/groubs/${HomeClubId}`).then(res => {
              db.get(`rankings/nationals/${home}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + homeScore;
                var ga = res.data[3] + awayScore;
                var gd = gf - ga;
                if(homeScore > awayScore){
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if(homeScore < awayScore){
                  var w = res.data[9];
                  var l = res.data[6] + 1;
                  var d = res.data[2];
                  var pts = res.data[8];
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var w = res.data[9];
                  var l = res.data[6];
                  var d = res.data[2] + 1;
                  var pts = res.data[8] + 1;
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`Seasons/${seNum}/WCQ/groubs/${HomeClubId}`, {
                  p, gf, ga, gd, w, l, d, pts
                });
                db.update(`rankings/nationals/${home}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
                if(home == "غانا"){
                  db.get(`playersData/hassan/matchesStats`).then(matches => {
                    if(away == "السنغال"){
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                      db.get(`playersData/hassan/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {scored,scoredIn});
                      });
                      db.get(`playersData/hassan/vsNational/matchesStats`).then(mat => {
                        if(homeScore > awayScore){
                          var win = mat.data[2] + 1;
                          var draw = mat.data[0];
                          var lose = mat.data[1];
                        } else if (homeScore < awayScore){
                          var win = mat.data[2];
                          var draw = mat.data[0];
                          var lose = mat.data[1] + 1;
                        } else {
                          var win = mat.data[2];
                          var draw = mat.data[0] + 1;
                          var lose = mat.data[1];
                        }
                        db.update(`playersData/hassan/vsNational/matchesStats`, { win, lose, draw });
                        db.get(`playersData/hassan/vsNational/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/hassan/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                            Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                          });
                        });
                      });
                    } else {
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                      db.get(`playersData/hassan/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                      });
                    }
                  });
                } else if (home == "السنغال"){
                  db.get(`playersData/mo/matchesStats`).then(matches => {
                    if(away == "غانا"){
                      db.get(`playersData/mo/vsNational/matchesStats`).then(mat => {
                        if(homeScore > awayScore){
                          var win = matches.data[2] + 1;
                          var draw = matches.data[0];
                          var lose = matches.data[1];
                        } else if (homeScore < awayScore){
                          var win = matches.data[2];
                          var draw = matches.data[0];
                          var lose = matches.data[1] + 1;
                        } else {
                          var win = matches.data[2];
                          var draw = matches.data[0] + 1;
                          var lose = matches.data[1];
                        }
                        db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                        db.get(`playersData/mo/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/mo/goalsStats`, {scored,scoredIn});
                        });
                        if(homeScore > awayScore){
                          var win = mat.data[2] + 1;
                          var draw = mat.data[0];
                          var lose = mat.data[1];
                        } else if (homeScore < awayScore){
                          var win = mat.data[2];
                          var draw = mat.data[0];
                          var lose = mat.data[1] + 1;
                        } else {
                          var win = mat.data[2];
                          var draw = mat.data[0] + 1;
                          var lose = mat.data[1];
                        }
                        db.update(`playersData/mo/vsNational/matchesStats`, { win, lose, draw });
                        db.get(`playersData/mo/vsNational/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/mo/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                        });
                      });
                    } else {
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                      db.get(`playersData/mo/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/mo/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                      });
                    }
                  });
                }
              });
            });
            
            
            // Handling Away Result
            db.get(`Seasons/${seNum}/WCQ/groubs/${AwayClubId}`).then(res => {
              db.get(`rankings/nationals/${away}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + awayScore;
                var ga = res.data[3] + homeScore;
                var gd = gf - ga;
                if(awayScore > homeScore){
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if(awayScore < homeScore){
                  var w = res.data[9];
                  var l = res.data[6] + 1;
                  var d = res.data[2];
                  var pts = res.data[8];
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var w = res.data[9];
                  var l = res.data[6];
                  var d = res.data[2] + 1;
                  var pts = res.data[8] + 1;
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`Seasons/${seNum}/WCQ/groubs/${AwayClubId}`, {
                  p, gf, ga, gd, w, l, d, pts
                }).then(() => {
                  db.update(`rankings/nationals/${away}`, {
                    prev: prevRankingPTS,
                    pts: currentRankingPTS
                  }).then(() => {
                    if(away == "غانا"){
                      db.get(`playersData/hassan/matchesStats`).then(matches => {
                        if(home == "السنغال"){
                          db.get(`playersData/hassan/vsNational/matchesStats`).then(mat => {
                            if(awayScore > homeScore){
                              var win = matches.data[2] + 1;
                              var draw = matches.data[0];
                              var lose = matches.data[1];
                            } else if (awayScore < homeScore){
                              var win = matches.data[2];
                              var draw = matches.data[0];
                              var lose = matches.data[1] + 1;
                            } else {
                              var win = matches.data[2];
                              var draw = matches.data[0] + 1;
                              var lose = matches.data[1];
                            }
                            db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                            db.get(`playersData/hassan/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/hassan/goalsStats`, {scored,scoredIn});
                            });
                            if(awayScore > homeScore){
                              var win = mat.data[2] + 1;
                              var draw = mat.data[0];
                              var lose = mat.data[1];
                            } else if (awayScore < homeScore){
                              var win = mat.data[2];
                              var draw = mat.data[0];
                              var lose = mat.data[1] + 1;
                            } else {
                              var win = mat.data[2];
                              var draw = mat.data[0] + 1;
                              var lose = mat.data[1];
                            }
                            db.update(`playersData/hassan/vsNational/matchesStats`, { win, lose, draw });
                            db.get(`playersData/hassan/vsNational/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/hassan/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                            });
                          });
                        } else {
                          if(awayScore > homeScore){
                            var win = matches.data[2] + 1;
                            var draw = matches.data[0];
                            var lose = matches.data[1];
                          } else if (awayScore < homeScore){
                            var win = matches.data[2];
                            var draw = matches.data[0];
                            var lose = matches.data[1] + 1;
                          } else {
                            var win = matches.data[2];
                            var draw = matches.data[0] + 1;
                            var lose = matches.data[1];
                          }
                          db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                          db.get(`playersData/hassan/goalsStats`).then(goals => {
                            var scored = goals.data[0] + awayScore;
                            var scoredIn = goals.data[1] + homeScore;
                            db.update(`playersData/hassan/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                          });
                        }
                      });
                    } else if (away == "السنغال"){
                      db.get(`playersData/mo/matchesStats`).then(matches => {
                        if(home == "غانا"){
                          db.get(`playersData/mo/vsNational/matchesStats`).then(mat => {
                            if(awayScore > homeScore){
                              var win = matches.data[2] + 1;
                              var draw = matches.data[0];
                              var lose = matches.data[1];
                            } else if (awayScore < homeScore){
                              var win = matches.data[2];
                              var draw = matches.data[0];
                              var lose = matches.data[1] + 1;
                            } else {
                              var win = matches.data[2];
                              var draw = matches.data[0] + 1;
                              var lose = matches.data[1];
                            }
                            db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                            db.get(`playersData/mo/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/mo/goalsStats`, {scored,scoredIn});
                            });
                            if(awayScore > homeScore){
                              var win = mat.data[2] + 1;
                              var draw = mat.data[0];
                              var lose = mat.data[1];
                            } else if (awayScore < homeScore){
                              var win = mat.data[2];
                              var draw = mat.data[0];
                              var lose = mat.data[1] + 1;
                            } else {
                              var win = mat.data[2];
                              var draw = mat.data[0] + 1;
                              var lose = mat.data[1];
                            }
                            db.update(`playersData/mo/vsNational/matchesStats`, { win, lose, draw });
                            db.get(`playersData/mo/vsNational/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/mo/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                            });
                          });
                        } else {
                          if(awayScore > homeScore){
                            var win = matches.data[2] + 1;
                            var draw = matches.data[0];
                            var lose = matches.data[1];
                          } else if (awayScore < homeScore){
                            var win = matches.data[2];
                            var draw = matches.data[0];
                            var lose = matches.data[1] + 1;
                          } else {
                            var win = matches.data[2];
                            var draw = matches.data[0] + 1;
                            var lose = matches.data[1];
                          }
                          db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                          db.get(`playersData/mo/goalsStats`).then(goals => {
                            var scored = goals.data[0] + awayScore;
                            var scoredIn = goals.data[1] + homeScore;
                            db.update(`playersData/mo/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                          });
                        }
                      });
                    } else {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    }
                  });
                });
              });
            });

          });
        }
      });
    });

    // SET FINAL MATCHES RESULT
    $("#final-matches-table .AllMatches").on("click", ".match i", function(){
      var id = $(this).parent().attr("id");
      var seNum = $(".select select").val();
      var home = $(this).siblings("span:first-of-type").text();
      var away = $(this).siblings("span:last-of-type").text();
      Swal.fire({
        title: 'تعديل نتيجة المباراة',
        html:`
              <label>نتيجة ${home}</label>
              <input id="homeRes" class="swal2-input" type="number" style="display:block;width:75px;"> 
              <label>نتيجة ${away}</label>
              <input id="awayRes" class="swal2-input" type="number" style="display:block;width:75px;">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('homeRes').value,
            document.getElementById('awayRes').value
          ]
        }
      }).then(val => {
        if(val.value){
          var homeScore = Number(val.value[0]);
          var awayScore = Number(val.value[1]);
          db.update(`Seasons/${seNum}/WCQ/matches/${id}`, {
            homeScore, awayScore, state: true
          }).then(() => {
            var HomeClubId;
            var AwayClubId;

            Object.values($(".final-stage tr td:nth-child(2)")).forEach(td => {
              if(td.innerHTML == home){
                HomeClubId = td.id;
              } else if (td.innerHTML == away){
                AwayClubId = td.id;
              }
            });
            
            // Handling Home Result
            db.get(`Seasons/${seNum}/WCQ/clubs/${HomeClubId}`).then(res => {
              db.get(`rankings/nationals/${home}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + homeScore;
                var ga = res.data[3] + awayScore;
                var gd = gf - ga;
                if(homeScore > awayScore){
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if(homeScore < awayScore){
                  var w = res.data[9];
                  var l = res.data[6] + 1;
                  var d = res.data[2];
                  var pts = res.data[8];
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var w = res.data[9];
                  var l = res.data[6];
                  var d = res.data[2] + 1;
                  var pts = res.data[8] + 1;
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`Seasons/${seNum}/WCQ/clubs/${HomeClubId}`, {
                  p, gf, ga, gd, w, l, d, pts
                });
                db.update(`rankings/nationals/${home}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
                if(home == "غانا"){
                  db.get(`playersData/hassan/matchesStats`).then(matches => {
                    if(away == "السنغال"){
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                      db.get(`playersData/hassan/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {scored,scoredIn});
                      });
                      db.get(`playersData/hassan/vsNational/matchesStats`).then(mat => {
                        if(homeScore > awayScore){
                          var win = mat.data[2] + 1;
                          var draw = mat.data[0];
                          var lose = mat.data[1];
                        } else if (homeScore < awayScore){
                          var win = mat.data[2];
                          var draw = mat.data[0];
                          var lose = mat.data[1] + 1;
                        } else {
                          var win = mat.data[2];
                          var draw = mat.data[0] + 1;
                          var lose = mat.data[1];
                        }
                        db.update(`playersData/hassan/vsNational/matchesStats`, { win, lose, draw });
                        db.get(`playersData/hassan/vsNational/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/hassan/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                        });
                      });
                    } else {
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                      db.get(`playersData/hassan/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                      });
                    }
                  });
                } else if (home == "السنغال"){
                  db.get(`playersData/mo/matchesStats`).then(matches => {
                    if(away == "غانا"){
                      db.get(`playersData/mo/vsNational/matchesStats`).then(mat => {
                        if(homeScore > awayScore){
                          var win = matches.data[2] + 1;
                          var draw = matches.data[0];
                          var lose = matches.data[1];
                        } else if (homeScore < awayScore){
                          var win = matches.data[2];
                          var draw = matches.data[0];
                          var lose = matches.data[1] + 1;
                        } else {
                          var win = matches.data[2];
                          var draw = matches.data[0] + 1;
                          var lose = matches.data[1];
                        }
                        db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                        db.get(`playersData/mo/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/mo/goalsStats`, {scored,scoredIn});
                        });
                        if(homeScore > awayScore){
                          var win = mat.data[2] + 1;
                          var draw = mat.data[0];
                          var lose = mat.data[1];
                        } else if (homeScore < awayScore){
                          var win = mat.data[2];
                          var draw = mat.data[0];
                          var lose = mat.data[1] + 1;
                        } else {
                          var win = mat.data[2];
                          var draw = mat.data[0] + 1;
                          var lose = mat.data[1];
                        }
                        db.update(`playersData/mo/vsNational/matchesStats`, { win, lose, draw });
                        db.get(`playersData/mo/vsNational/goalsStats`).then(goals => {
                          var scored = goals.data[0] + homeScore;
                          var scoredIn = goals.data[1] + awayScore;
                          db.update(`playersData/mo/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                        });
                      });
                    } else {
                      if(homeScore > awayScore){
                        var win = matches.data[2] + 1;
                        var draw = matches.data[0];
                        var lose = matches.data[1];
                      } else if (homeScore < awayScore){
                        var win = matches.data[2];
                        var draw = matches.data[0];
                        var lose = matches.data[1] + 1;
                      } else {
                        var win = matches.data[2];
                        var draw = matches.data[0] + 1;
                        var lose = matches.data[1];
                      }
                      db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                      db.get(`playersData/mo/goalsStats`).then(goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/mo/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                      });
                    }
                  });
                }
              });
            });
            
            
            // Handling Away Result
            db.get(`Seasons/${seNum}/WCQ/clubs/${AwayClubId}`).then(res => {
              db.get(`rankings/nationals/${away}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + awayScore;
                var ga = res.data[3] + homeScore;
                var gd = gf - ga;
                if(awayScore > homeScore){
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if(awayScore < homeScore){
                  var w = res.data[9];
                  var l = res.data[6] + 1;
                  var d = res.data[2];
                  var pts = res.data[8];
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var w = res.data[9];
                  var l = res.data[6];
                  var d = res.data[2] + 1;
                  var pts = res.data[8] + 1;
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`Seasons/${seNum}/WCQ/clubs/${AwayClubId}`, {
                  p, gf, ga, gd, w, l, d, pts
                }).then(() => {
                  db.update(`rankings/nationals/${away}`, {
                    prev: prevRankingPTS,
                    pts: currentRankingPTS
                  }).then(() => {
                    if(away == "غانا"){
                      db.get(`playersData/hassan/matchesStats`).then(matches => {
                        if(home == "السنغال"){
                          db.get(`playersData/hassan/vsNational/matchesStats`).then(mat => {
                            if(awayScore > homeScore){
                              var win = matches.data[2] + 1;
                              var draw = matches.data[0];
                              var lose = matches.data[1];
                            } else if (awayScore < homeScore){
                              var win = matches.data[2];
                              var draw = matches.data[0];
                              var lose = matches.data[1] + 1;
                            } else {
                              var win = matches.data[2];
                              var draw = matches.data[0] + 1;
                              var lose = matches.data[1];
                            }
                            db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                            db.get(`playersData/hassan/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/hassan/goalsStats`, {scored,scoredIn});
                            });
                            if(awayScore > homeScore){
                              var win = mat.data[2] + 1;
                              var draw = mat.data[0];
                              var lose = mat.data[1];
                            } else if (awayScore < homeScore){
                              var win = mat.data[2];
                              var draw = mat.data[0];
                              var lose = mat.data[1] + 1;
                            } else {
                              var win = mat.data[2];
                              var draw = mat.data[0] + 1;
                              var lose = mat.data[1];
                            }
                            db.update(`playersData/hassan/vsNational/matchesStats`, { win, lose, draw });
                            db.get(`playersData/hassan/vsNational/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/hassan/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                            });
                          });
                        } else {
                          if(awayScore > homeScore){
                            var win = matches.data[2] + 1;
                            var draw = matches.data[0];
                            var lose = matches.data[1];
                          } else if (awayScore < homeScore){
                            var win = matches.data[2];
                            var draw = matches.data[0];
                            var lose = matches.data[1] + 1;
                          } else {
                            var win = matches.data[2];
                            var draw = matches.data[0] + 1;
                            var lose = matches.data[1];
                          }
                          db.update(`playersData/hassan/matchesStats`, { win, lose, draw });
                          db.get(`playersData/hassan/goalsStats`).then(goals => {
                            var scored = goals.data[0] + awayScore;
                            var scoredIn = goals.data[1] + homeScore;
                            db.update(`playersData/hassan/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                          });
                        }
                      });
                    } else if (away == "السنغال"){
                      db.get(`playersData/mo/matchesStats`).then(matches => {
                        if(home == "غانا"){
                          db.get(`playersData/mo/vsNational/matchesStats`).then(mat => {
                            if(awayScore > homeScore){
                              var win = matches.data[2] + 1;
                              var draw = matches.data[0];
                              var lose = matches.data[1];
                            } else if (awayScore < homeScore){
                              var win = matches.data[2];
                              var draw = matches.data[0];
                              var lose = matches.data[1] + 1;
                            } else {
                              var win = matches.data[2];
                              var draw = matches.data[0] + 1;
                              var lose = matches.data[1];
                            }
                            db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                            db.get(`playersData/mo/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/mo/goalsStats`, {scored,scoredIn});
                            });
                            if(awayScore > homeScore){
                              var win = mat.data[2] + 1;
                              var draw = mat.data[0];
                              var lose = mat.data[1];
                            } else if (awayScore < homeScore){
                              var win = mat.data[2];
                              var draw = mat.data[0];
                              var lose = mat.data[1] + 1;
                            } else {
                              var win = mat.data[2];
                              var draw = mat.data[0] + 1;
                              var lose = mat.data[1];
                            }
                            db.update(`playersData/mo/vsNational/matchesStats`, { win, lose, draw });
                            db.get(`playersData/mo/vsNational/goalsStats`).then(goals => {
                              var scored = goals.data[0] + awayScore;
                              var scoredIn = goals.data[1] + homeScore;
                              db.update(`playersData/mo/vsNational/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                            });
                          });
                        } else {
                          if(awayScore > homeScore){
                            var win = matches.data[2] + 1;
                            var draw = matches.data[0];
                            var lose = matches.data[1];
                          } else if (awayScore < homeScore){
                            var win = matches.data[2];
                            var draw = matches.data[0];
                            var lose = matches.data[1] + 1;
                          } else {
                            var win = matches.data[2];
                            var draw = matches.data[0] + 1;
                            var lose = matches.data[1];
                          }
                          db.update(`playersData/mo/matchesStats`, { win, lose, draw });
                          db.get(`playersData/mo/goalsStats`).then(goals => {
                            var scored = goals.data[0] + awayScore;
                            var scoredIn = goals.data[1] + homeScore;
                            db.update(`playersData/mo/goalsStats`, {scored,scoredIn}).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                          });
                        }
                      });
                    } else {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    }
                  });
                });
              });
            });

          });
        }
      });
    });

    auth.onAuth((user) => {
      if(user){
        db.get(`users/${auth.user().uid}`).then(res => {
          if(typeof res.data[0] == 'boolean'){
            this.admin = res.data[0];
          }
        }).then(() => {
          setTimeout(() => {
            const admin = this.admin;
            if (admin == false){
              $(".AllMatches .match i").remove();
            }
          }, 2200);
        });
      } else {
        db.get(`users/any`).then(() => {
          setTimeout(() => {
            const admin = this.admin;
            if (admin == false){
              $(".AllMatches .match i").remove();
            }
          }, 2200);
        });
      }
    });

  }
};
</script>
