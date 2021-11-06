<template>
  <div class="FA">
    <div class="container">
      <div class="row">
        <div class="col-12 newSeason">
          <button v-if="admin" @click="CreateNewSeason">
            <i class="fas fa-plus-circle"></i> إنشاء موسم جديد
          </button>
          <button v-if="admin && seasonOpen" @click="EndThisSeason">
            <i class="fas fa-times-circle"></i> إنهاء الموسم الحالي
          </button>
        </div>
        <div class="col-lg-4 col-12">
          <div class="imageTitle">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/b6b2bf4fe2fa3f68d06790cabfd4659aa718e99b/d28f1/imgs/emfa.png"
            />
            <h3>كأس الاتحاد الانجليزي</h3>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="info">
            <h4>معلومات البطولة :</h4>
            <p>
              بطولة بنظام خروج المغلوب تلعب موسميا بمشاركة جميع الاندية
              الانجليزية الدرجة الاولى و بعض أندية الدرجة الثانية , تبدأ من دور
              الـ32 , الفائز بالبطولة يتأهل للعب مبارة الدرع الخيرية أمام بطل
              الدوري.
            </p>
            <hr />
            <h4>القوانين العامة</h4>
            <ul>
              <li>تقام مبارياتها على نظام صعوبة لاعب ممتاز</li>
              <li>مدة كل مباراة 10 دقائق على نظام اللعبة</li>
              <li>تقام المباريات في الجولات : 7 - 14 - 24 - 30 - 37</li>
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
          <a
            class="nav-item nav-link active"
            id="matches-table-tab"
            data-toggle="tab"
            href="#matches-table"
            role="tab"
            aria-controls="matches-table"
            aria-selected="true"
            >جدول البطولة</a
          >
          <a
            class="nav-item nav-link"
            id="goal-scorer-tab"
            data-toggle="tab"
            href="#goal-scorer"
            role="tab"
            aria-controls="goal-scorer"
            aria-selected="false"
            >الهدافون</a
          >
          <a
            class="nav-item nav-link"
            id="assist-maker-tab"
            data-toggle="tab"
            href="#assist-maker"
            role="tab"
            aria-controls="assist-maker"
            aria-selected="false"
            >صانعوا الاهداف</a
          >
          <a
            class="nav-item nav-link"
            id="recordes-tab"
            data-toggle="tab"
            href="#recordes"
            role="tab"
            aria-controls="recordes"
            aria-selected="false"
            >الارقام القياسية</a
          >
          <a
            class="nav-item nav-link"
            id="best-tab"
            data-toggle="tab"
            href="#best"
            role="tab"
            aria-controls="best"
            aria-selected="false"
            >الافضل في البطولة</a
          >
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="matches-table"
          role="tabpanel"
          aria-labelledby="matches-table-tab"
        >
          <h2>جدول البطولة</h2>
          <div class="AllMatches"></div>
        </div>

        <div
          class="tab-pane fade"
          id="goal-scorer"
          role="tabpanel"
          aria-labelledby="goal-scorer-tab"
        >
          <h2>هدافوا البطولة</h2>
          <div class="gs">
            <h5 id="1">
              <span>1</span> <span class="gs1p">ج. فاردي</span>
              <span class="gs1g">18 هدف</span>
            </h5>
            <h5 id="2">
              <span>2</span> <span class="gs2p">ج. فاردي</span>
              <span class="gs2g">18 هدف</span>
            </h5>
            <h5 id="3">
              <span>3</span> <span class="gs3p">ج. فاردي</span>
              <span class="gs3g">18 هدف</span>
            </h5>
            <h5 id="4">
              <span>4</span> <span class="gs4p">ج. فاردي</span>
              <span class="gs4g">18 هدف</span>
            </h5>
            <h5 id="5">
              <span>5</span> <span class="gs5p">ج. فاردي</span>
              <span class="gs5g">18 هدف</span>
            </h5>
            <h5 id="6">
              <span>6</span> <span class="gs6p">ج. فاردي</span>
              <span class="gs6g">18 هدف</span>
            </h5>
            <h5 id="7">
              <span>7</span> <span class="gs7p">ج. فاردي</span>
              <span class="gs7g">18 هدف</span>
            </h5>
            <h5 id="8">
              <span>8</span> <span class="gs8p">ج. فاردي</span>
              <span class="gs8g">18 هدف</span>
            </h5>
            <h5 id="9">
              <span>9</span> <span class="gs9p">ج. فاردي</span>
              <span class="gs9g">18 هدف</span>
            </h5>
            <h5 id="10">
              <span>10</span> <span class="gs10p">ج. فاردي</span>
              <span class="gs10g">18 هدف</span>
            </h5>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="assist-maker"
          role="tabpanel"
          aria-labelledby="assist-maker-tab"
        >
          <h2>صانعوا الاهداف</h2>
          <div class="am">
            <h5 id="1">
              <span>1</span> <span class="as1p">ر. محرز</span>
              <span class="as1g">20 هدف</span>
            </h5>
            <h5 id="2">
              <span>2</span> <span class="as2p">ر. محرز</span>
              <span class="as2g">17 هدف</span>
            </h5>
            <h5 id="3">
              <span>3</span> <span class="as3p">ر. محرز</span>
              <span class="as3g">15 هدف</span>
            </h5>
            <h5 id="4">
              <span>4</span> <span class="as4p">ر. محرز</span>
              <span class="as4g">15 هدف</span>
            </h5>
            <h5 id="5">
              <span>5</span> <span class="as5p">ر. محرز</span>
              <span class="as5g">13 هدف</span>
            </h5>
            <h5 id="6">
              <span>6</span> <span class="as6p">ر. محرز</span>
              <span class="as6g">12 هدف</span>
            </h5>
            <h5 id="7">
              <span>7</span> <span class="as7p">ر. محرز</span>
              <span class="as7g">12 هدف</span>
            </h5>
            <h5 id="8">
              <span>8</span> <span class="as8p">ر. محرز</span>
              <span class="as8g">12 هدف</span>
            </h5>
            <h5 id="9">
              <span>9</span> <span class="as9p">ر. محرز</span>
              <span class="as9g">12 هدف</span>
            </h5>
            <h5 id="10">
              <span>10</span> <span class="as10p">ر. محرز</span>
              <span class="as10g">12 هدف</span>
            </h5>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="recordes"
          role="tabpanel"
          aria-labelledby="recordes-tab"
        >
          <h2>الارقام القياسية</h2>
          <div class="recordes">
            <div class="record">
              <h5>أكبر نتيجة في مباراة</h5>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="best"
          role="tabpanel"
          aria-labelledby="best-tab"
        >
          <h2>الافضل في البطولة</h2>
          <div class="sbest row justify-content-center">
            <h5 class="col-4">مهاجم</h5>
            <p class="col-5" id="FORWOARD">ج. فاردي</p>
            <h5 class="col-4">خط وسط</h5>
            <p class="col-5" id="CENTER">ج. فاردي</p>
            <h5 class="col-4">مدافع</h5>
            <p class="col-5" id="DEFENDER">ج. فاردي</p>
            <h5 class="col-4">حارس</h5>
            <p class="col-5" id="GOALKEEPER">ج. فاردي</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.FA {
  padding: 100px 0;
  .newSeason {
    text-align: right;
    margin-bottom: 20px;
    @include xs {
      text-align: center;
    }
    button {
      font-family: "changa";
      background: $fa;
      padding: 0 0 0 35px;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      margin: 5px;
      text-align: right;
      i {
        margin-left: 15px;
        padding: 15px 25px;
        color: $fa;
        background: #fff;
        font-size: 20px;
      }
      &:hover {
        transform: translateY(-5px);
        border: none;
      }
      @include xs {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  .imageTitle {
    padding: 32px 0 0;
    text-align: center;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba($color: $fa, $alpha: 0.15);
    margin-bottom: 25px;
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 30px;
    }
    h3 {
      background: $fa;

      padding: 20px 0 25px;
      margin: 0;
      color: #fff;
      font-family: "changa";
    }
  }
  .info {
    padding: 25px;
    text-align: right;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba($color: $fa, $alpha: 0.15);
    h4 {
      color: $fa;
      font-family: one;
      font-weight: bold;

      &::after {
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
    p {
      font-size: 15px;
      font-family: one;
      color: #262626;
      font-weight: bold;
    }
    ul {
      li {
        list-style-type: square;
        padding-right: 0;
        margin-right: 10px;
        font-size: 15px;
        font-family: one;
        color: #262626;
        font-weight: bold;
        background: none;
        padding: 7px 15px;
      }
    }
  }

  .select {
    text-align: right;
    margin: 15px 0;
    select {
      width: 90%;
      margin-right: 10px;
      padding: 5px 15px;
      font-family: "changa";
      font-weight: bold;
      color: $fa;
      background: #f6f6f6;
      option {
        font-family: "changa";
        font-weight: bold;
        color: $fa;
        background: #f6f6f6;
      }
      &:focus {
        border-color: $fa;
      }
      @include lg {
        width: 87%;
      }
      @include md {
        width: 100%;
        margin-right: 0;
      }
    }
    label {
      @include md {
        width: 100%;
        text-align: center;
      }
    }
  }

  .nav-tabs {
    margin: 25px 0;
    .nav-item.nav-link {
      color: $fa;
      text-align: right;
      font-family: "changa";
      font-weight: bold;
      &:hover,
      &.active {
        background: $fa;
        color: #fff;
      }
      @include xs {
        width: 100%;
        text-align: center;
      }
    }
  }

  h2 {
    text-align: center;
    color: $fa;
    font-weight: bold;
    padding-top: 25px;
    &::after {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 35px;
      background: $fa;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }

  .AllMatches {
    text-align: center;
    h4 {
      padding: 15px;
      background: $fa;
      color: #fff;
      font-weight: bold;
      @include xs {
        font-size: 18px;
      }
    }
    .match {
      position: relative;
      &:nth-child(odd) {
        background: #f6f6f6;
      }
      span {
        font-family: "Changa", sans-serif;
        font-weight: bold;
        font-size: 20px;
        color: $fa;
        padding: 15px;
        &:first-child,
        &:nth-child(3) {
          width: 40%;
        }
        &:nth-child(2) {
          font-weight: bold;
          font-size: 24px;
        }
        @include xs {
          padding: 15px 5px;
          font-size: 13px;
          &:nth-child(2) {
            font-size: 13px;
          }
        }
      }
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        cursor: pointer;
        @include xs {
          font-size: 12.5px;
        }
      }
    }
  }
  .gs,
  .am {
    h5 {
      width: 80%;
      margin: 10px auto;
      box-shadow: 0 0 2px rgba($color: $fa, $alpha: 0.2);
      text-align: right;
      @include em {
        width: 85%;
      }
      &:nth-child(odd) {
        background: #f6f6f6;
        span {
          &:first-child {
            background: #fff;
          }
        }
      }
      span {
        text-align: right;
        font-size: 20px;
        font-family: "Changa", sans-serif;
        font-weight: bold;
        &:first-child {
          padding: 17px;
          width: 10%;
          background: #f6f6f6;
          text-align: center;
          @include xs {
            font-size: 13px;
            width: 15%;
          }
        }
        &:nth-child(2) {
          padding: 14px;
          width: 75%;
          @include md {
            width: 68%;
          }
          @include sm {
            width: 62%;
          }
          @include xs {
            width: 50%;
            font-size: 13px;
          }
        }
        &:nth-child(3) {
          text-align: left;
          padding: 14px;
          width: 15%;
          @include md {
            width: 22%;
          }
          @include sm {
            width: 27%;
          }
          @include xs {
            width: 34%;
            font-size: 13px;
          }
          @include em {
            font-size: 12px;
          }
        }
      }
    }
  }

  .recordes {
    text-align: center;
    .record {
      h5 {
        padding: 15px;
        background: $fa;
        color: #fff;
        margin: 0;
        font-weight: bold;
        @include xs {
          font-size: 18px;
        }
      }
      p {
        padding: 15px;
        margin-top: 0;
        margin-bottom: 25px;
        color: $fa;
        font-size: 22px;
        background: #f6f6f6;
        font-family: "Changa", sans-serif;
        font-weight: bold;
        @include xs {
          font-size: 16px;
        }
      }
    }

    .recMatch {
      background: #f6f6f6;
      span {
        font-family: "Changa", sans-serif;
        font-weight: bold;
        font-size: 20px;
        color: $fa;
        padding: 15px;
        &:first-child,
        &:last-child {
          width: 40%;
        }
        &:nth-child(2) {
          font-weight: bold;
          font-size: 24px;
        }
        @include xs {
          padding: 15px 5px;
          font-size: 13px;
          &:nth-child(2) {
            font-size: 13px;
          }
        }
      }
    }
  }

  .steam,
  .sbest {
    text-align: right;
    h5 {
      background: red;
      color: #fff;
      margin-top: 0;
      margin-bottom: 20px;
      padding: 15px;
      text-align: center;
      font-family: "Changa", sans-serif;
      font-weight: bold;
      box-shadow: 0 0 5px rgba($color: $fa, $alpha: 0.15);
      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(6) {
        background: green;
      }
      &:nth-of-type(7),
      &:nth-of-type(8),
      &:nth-of-type(9),
      &:nth-of-type(10) {
        background: blue;
      }
      &:nth-of-type(11) {
        background: orangered;
      }
    }
    p {
      font-family: "Changa", sans-serif;
      font-weight: bold;
      box-shadow: 0 0 5px rgba($color: $fa, $alpha: 0.15);
      color: $fa;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 20px;
      padding: 15px;
      background: #f6f6f6;
      text-align: center;
    }
  }
  .sbest {
    h5 {
      @include em {
        font-size: 17px;
      }
      &:nth-of-type(2) {
        background: green;
      }
      &:nth-of-type(3) {
        background: blue;
      }
      &:nth-of-type(4) {
        background: orangered;
      }
    }
  }
}
</style>

<script>
export default {
  name: "FA",
  data() {
    return {
      seasonOpen: true,
      admin: false
    };
  },
  methods: {
    selectSeason() {
      var seNum = $(".select select").val();
      // GET SEASONS
      db.get(`Seasons/${seNum}`).then(res => {
        // Get Season State
        db.get(`Seasons/${seNum}/FA`).then(respon => {
          this.seasonOpen = !respon.data[4];
        });

        // GET SEASONS MATCHES
        db.getting(
          `Seasons/${seNum}/FA/matches`,
          response => {
            $(".AllMatches .round").remove();
            var numer = 1;
            response.data.forEach(round => {
              if (numer == 1) {
                var RoundName = "دور الـ32";
              } else if (numer == 2) {
                var RoundName = "دور الـ16";
              } else if (numer == 3) {
                var RoundName = "ربع النهائي";
              } else if (numer == 4) {
                var RoundName = "نصف النهائي";
              } else if (numer == 5) {
                var RoundName = "النهائي";
              }
              var ROUND = ` <div class="round">
                            <h4>${RoundName}</h4>
                          </div>
                          `;
              $(".AllMatches").append(ROUND);
              var arrRounds = Object.values(round);
              sort(arrRounds, ["-id"]);
              arrRounds.forEach(match => {
                if (typeof match == "object") {
                  if (
                    match.state ||
                    match.home == "لم يتأهل بعد" ||
                    match.away == "لم يتأهل بعد"
                  ) {
                    var Match = `<div class="match" id="round${numer}/match${
                      match.id
                    }">
                                  <span>${match.home}</span>
                                  <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                  <span>${match.away}</span>
                                </div>`;
                  } else {
                    var Match = `<div class="match" id="round${numer}/match${
                      match.id
                    }">
                                  <span>${match.home}</span>
                                  <span>VS</span>
                                  <span>${match.away}</span>
                                  <i class="far fa-edit"></i>
                                </div>`;
                  }
                  $(".AllMatches .round:last-of-type").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      ".AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      ".AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      ".AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
              numer++;
            });
            const admin = this.admin;
            if (admin == false) {
              $(".AllMatches .match i").remove();
            }
          },
          { sort: ["-num"] }
        );

        // GET SEASONS GS
        db.getting(
          `Seasons/${seNum}/FA/GS`,
          res => {
            var num = 1;
            res.data.forEach(player => {
              $(`.gs${num}p`).text(player.player);
              $(`.gs${num}g`).text(player.goals + " هدف");
              num++;
            });
          },
          { order: { type: "key" } }
        );

        // GET SEASONS AS
        db.getting(
          `Seasons/${seNum}/FA/AS`,
          res => {
            var num = 1;
            res.data.forEach(player => {
              $(`.as${num}p`).text(player.player);
              $(`.as${num}g`).text(player.goals + " هدف");
              num++;
            });
          },
          { order: { type: "key" } }
        );

        // GET SEASONS BEST
        db.getting(`Seasons/${seNum}/FA/BEST`, res => {
          res.data.forEach(player => {
            if (player._id == "FORWOARD") {
              $("#FORWOARD").text(player.player);
            } else if (player._id == "CENTER") {
              $("#CENTER").text(player.player);
            } else if (player._id == "DEFENDER") {
              $("#DEFENDER").text(player.player);
            } else if (player._id == "GOALKEEPER") {
              $("#GOALKEEPER").text(player.player);
            }
          });
        });

        // GET SEASONS Record Match
        db.get(`Seasons/${seNum}/FA/matches`, { sort: ["-num"] }).then(
          response => {
            $(".recordes .record .recMatch").remove();
            var matchRec;
            var record = 0;
            response.data.forEach(round => {
              var arrRounds = Object.values(round);
              arrRounds.forEach(match => {
                if (typeof match == "object") {
                  if (match.homeScore > record) {
                    record = match.homeScore;
                    matchRec = match;
                  } else if (match.awayScore > record) {
                    record = match.awayScore;
                    matchRec = match;
                  }
                }
              });
            });
            if (matchRec == undefined) {
              var Match = `<div class="recMatch">
                            <span>لا يوجد فريق</span>
                            <span>* - *</span>
                            <span>لا يوجد فريق</span>
                          </div>`;
            } else {
              var Match = `<div class="recMatch">
                            <span>${matchRec.home}</span>
                            <span>${matchRec.homeScore} - ${
                matchRec.awayScore
              }</span>
                            <span>${matchRec.away}</span>
                          </div>`;
            }
            $(".recordes .record").append(Match);
          }
        );
      });
    },
    CreateNewSeason() {
      Swal.fire({
        title: "هل تريد إنشاء موسم جديد ؟",
        type: "question",
        customClass: {
          icon: "swal2-arabic-question-mark"
        },
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
        if (res.value) {
          let Clubs = [];
          db.get(`clubNames`)
            .then(res => {
              res.data.forEach(club => {
                if (club.rank == 1) {
                  Clubs.push(club.name);
                }
              });

              res.data.forEach(club => {
                if (club.rank == 2) {
                  if (Clubs.length < 32) {
                    Clubs.push(club.name);
                  }
                }
              });
            })
            .then(() => {
              function shuffle(array) {
                var currentIndex = array.length,
                  temporaryValue,
                  randomIndex;
                while (0 !== currentIndex) {
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
                  temporaryValue = array[currentIndex];
                  array[currentIndex] = array[randomIndex];
                  array[randomIndex] = temporaryValue;
                }
                return array;
              }
              Clubs = shuffle(Clubs);

              if (Clubs.includes("ليستر سيتي")) {
                db.get(`playersData/hassan/toursStats/fa`).then(pd => {
                  var part = pd.data[0] + 1;
                  db.update(`playersData/hassan/toursStats/fa`, {
                    part
                  });
                });
              }

              if (Clubs.includes("مانشيستر سيتي")) {
                db.get(`playersData/mo/toursStats/fa`).then(pd => {
                  var part = pd.data[0] + 1;
                  db.update(`playersData/mo/toursStats/fa`, {
                    part
                  });
                });
              }

              db.get("Seasons", {
                order: { type: "key" },
                filter: { type: "last", value: 1 }
              }).then(res => {
                if (res) {
                  if (res.data[0].FA) {
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

                db.update(`Seasons/${SeNum}/FA`, {
                  state: false
                });

                // 1ST ROUND
                db.update(`Seasons/${SeNum}/FA/matches/round1`, {
                  num: 1
                });

                // 1ST ROUND MATCHES
                db.update(`Seasons/${SeNum}/FA/matches/round1/match1`, {
                  home: Clubs[0],
                  homeScore: 0,
                  away: Clubs[31],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match2`, {
                  home: Clubs[1],
                  homeScore: 0,
                  away: Clubs[30],
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match3`, {
                  home: Clubs[2],
                  homeScore: 0,
                  away: Clubs[29],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match4`, {
                  home: Clubs[3],
                  homeScore: 0,
                  away: Clubs[28],
                  awayScore: 0,
                  state: false,
                  id: 4
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match5`, {
                  home: Clubs[4],
                  homeScore: 0,
                  away: Clubs[27],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match6`, {
                  home: Clubs[5],
                  homeScore: 0,
                  away: Clubs[26],
                  awayScore: 0,
                  state: false,
                  id: 6
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match7`, {
                  home: Clubs[6],
                  homeScore: 0,
                  away: Clubs[25],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match8`, {
                  home: Clubs[7],
                  homeScore: 0,
                  away: Clubs[24],
                  awayScore: 0,
                  state: false,
                  id: 8
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match9`, {
                  home: Clubs[8],
                  homeScore: 0,
                  away: Clubs[23],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match10`, {
                  home: Clubs[9],
                  homeScore: 0,
                  away: Clubs[22],
                  awayScore: 0,
                  state: false,
                  id: 10
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match11`, {
                  home: Clubs[10],
                  homeScore: 0,
                  away: Clubs[21],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match12`, {
                  home: Clubs[11],
                  homeScore: 0,
                  away: Clubs[20],
                  awayScore: 0,
                  state: false,
                  id: 12
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match13`, {
                  home: Clubs[12],
                  homeScore: 0,
                  away: Clubs[19],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match14`, {
                  home: Clubs[13],
                  homeScore: 0,
                  away: Clubs[18],
                  awayScore: 0,
                  state: false,
                  id: 14
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match15`, {
                  home: Clubs[14],
                  homeScore: 0,
                  away: Clubs[17],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/FA/matches/round1/match16`, {
                  home: Clubs[15],
                  homeScore: 0,
                  away: Clubs[16],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                // 2ND ROUND
                db.update(`Seasons/${SeNum}/FA/matches/round2`, {
                  num: 2
                });

                // 2ND ROUND MATCHES
                db.update(`Seasons/${SeNum}/FA/matches/round2/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match3`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match4`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 4
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match5`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match6`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 6
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match7`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/FA/matches/round2/match8`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                // 3RD ROUND
                db.update(`Seasons/${SeNum}/FA/matches/round3`, {
                  num: 3
                });

                // 3RD ROUND MATCHES
                db.update(`Seasons/${SeNum}/FA/matches/round3/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/FA/matches/round3/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/FA/matches/round3/match3`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/FA/matches/round3/match4`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                // 4TH ROUND
                db.update(`Seasons/${SeNum}/FA/matches/round4`, {
                  num: 4
                });

                // 4TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/FA/matches/round4/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/FA/matches/round4/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                // 5TH ROUND
                db.update(`Seasons/${SeNum}/FA/matches/round5`, {
                  num: 5
                });

                // 5TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/FA/matches/round5/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });

                // ADD GOAL SCORERS
                db.add(`Seasons/${SeNum}/FA/GS/1`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 1
                });

                db.add(`Seasons/${SeNum}/FA/GS/2`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 2
                });

                db.add(`Seasons/${SeNum}/FA/GS/3`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 3
                });

                db.add(`Seasons/${SeNum}/FA/GS/4`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 4
                });

                db.add(`Seasons/${SeNum}/FA/GS/5`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 5
                });

                db.add(`Seasons/${SeNum}/FA/GS/6`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 6
                });

                db.add(`Seasons/${SeNum}/FA/GS/7`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 7
                });

                db.add(`Seasons/${SeNum}/FA/GS/8`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 8
                });

                db.add(`Seasons/${SeNum}/FA/GS/9`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 9
                });

                db.add(`Seasons/${SeNum}/FA/GS/10`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 10
                });

                // ADD ASSIST MAKERS
                db.add(`Seasons/${SeNum}/FA/AS/1`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 1
                });

                db.add(`Seasons/${SeNum}/FA/AS/2`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 2
                });

                db.add(`Seasons/${SeNum}/FA/AS/3`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 3
                });

                db.add(`Seasons/${SeNum}/FA/AS/4`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 4
                });

                db.add(`Seasons/${SeNum}/FA/AS/5`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 5
                });

                db.add(`Seasons/${SeNum}/FA/AS/6`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 6
                });

                db.add(`Seasons/${SeNum}/FA/AS/7`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 7
                });

                db.add(`Seasons/${SeNum}/FA/AS/8`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 8
                });

                db.add(`Seasons/${SeNum}/FA/AS/9`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 9
                });

                db.add(`Seasons/${SeNum}/FA/AS/10`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 10
                });

                // ADD SEASONS BEST
                db.add(`Seasons/${SeNum}/FA/BEST/FORWOARD`, {
                  player: "لم يتم التعيين",
                  _id: "FORWOARD"
                });

                db.add(`Seasons/${SeNum}/FA/BEST/CENTER`, {
                  player: "لم يتم التعيين",
                  _id: "CENTER"
                });

                db.add(`Seasons/${SeNum}/FA/BEST/DEFENDER`, {
                  player: "لم يتم التعيين",
                  _id: "DEFENDER"
                });

                db.add(`Seasons/${SeNum}/FA/BEST/GOALKEEPER`, {
                  player: "لم يتم التعيين",
                  _id: "GOALKEEPER"
                });

                var checker = setInterval(() => {
                  db.get(`Seasons/${SeNum}/FA`).then(res => {
                    if (res.data.length >= 5) {
                      clearInterval(checker);
                      Swal.fire(
                        "Done!",
                        "FA Add Successfully To Season " + SeNum,
                        "success"
                      ).then(() => {
                        setTimeout(() => {
                          location.reload();
                        }, 1000);
                      });
                    }
                  });
                }, 1000);
              });
            });
        }
      });
    },
    EndThisSeason() {
      Swal.fire({
        title: "هل تريد إنهاء الموسم الحالي ؟",
        type: "question",
        customClass: {
          icon: "swal2-arabic-question-mark"
        },
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true
      }).then(res => {
        if (res.value) {
          var seNum = $(".select select").val();
          db.get(`Seasons/${seNum}/FA/matches`).then(res => {
            var checker = 0;
            res.data.forEach(round => {
              Object.values(round).forEach(match => {
                if (typeof match == "object" && !match.state) {
                  checker++;
                }
              });
            });
            if (checker > 0) {
              Swal.fire({
                type: "error",
                title: "خطأ",
                text: "لا تزال هناك مباريات لم تنتهى بعد"
              });
            } else {
              db.get(`Seasons/${seNum}/FA/matches/round5/match1`).then(res => {
                var homeScore = res.data[3];
                var awayScore = res.data[1];
                var home = res.data[2];
                var away = res.data[0];

                if (homeScore > awayScore) {
                  var winner = home;
                } else {
                  var winner = away;
                }

                if (winner == "ليستر سيتي") {
                  firebase
                    .database()
                    .ref(`playersData/hassan/toursStats/fa`)
                    .transaction(data => {
                      data.win++;
                      return data;
                    })
                    .then(() => {
                      db.update(`Seasons/${seNum}/FA`, {
                        state: true
                      }).then(location.reload());
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                } else if (winner == "مانشيستر سيتي") {
                  firebase
                    .database()
                    .ref(`playersData/mo/toursStats/fa`)
                    .transaction(data => {
                      data.win++;
                      return data;
                    })
                    .then(() => {
                      db.update(`Seasons/${seNum}/FA`, {
                        state: true
                      }).then(location.reload());
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                } else {
                  db.update(`Seasons/${seNum}/FA`, {
                    state: true
                  }).then(location.reload());
                }
              });
            }
          });
        }
      });
    }
  },
  created() {
    window.scrollTo(0, 0);
    document.title = "ROPT | FA CUP";
    $(".preloader").show();

    // GET SEASONS SELECT OPTIONS
    db.get("Seasons")
      .then(res => {
        res.data.forEach(season => {
          var seNum = season.num;
          db.get(`Seasons/${seNum}/FA`).then(res => {
            if (res == undefined) {
              var option = `<option value="${seNum}" disabled>الموسم ${seNum}</option>`;
            } else {
              var option = `<option value="${seNum}">الموسم ${seNum}</option>`;
            }
            $(".select select").prepend(option);
            $(".select select option:not(:disabled):first-of-type").attr(
              "selected",
              "selected"
            );
          });
        });
      })
      .then(() => {
        // GET SEASONS
        db.get("Seasons", {
          order: { type: "key" },
          filter: { type: "last", value: 1 }
        }).then(res => {
          if (res.data[0].FA) {
            var seNum = res.data[0].num;
          } else {
            var seNum = $(".select select").val();
          }

          // Get Season State
          db.get(`Seasons/${seNum}/FA`)
            .then(respon => {
              this.seasonOpen = !respon.data[6];
            })
            .then(() => {
              this.selectSeason();
              setTimeout(() => {
                $(".preloader").addClass("hide");
              }, 2000);
            });
        });
      });
  },
  mounted() {
    // SET MATCH RESULT
    $(".AllMatches").on("click", ".match i", function() {
      var id = $(this)
        .parent()
        .attr("id");
      var seNum = $(".select select").val();
      var home = $(this)
        .siblings("span:first-of-type")
        .text();
      var away = $(this)
        .siblings("span:last-of-type")
        .text();
      Swal.fire({
        title: "تعديل نتيجة المباراة",
        html: `
              <label>نتيجة ${home}</label>
              <input id="homeRes" class="swal2-input" type="number" style="display:block;width:75px;"> 
              <label>نتيجة ${away}</label>
              <input id="awayRes" class="swal2-input" type="number" style="display:block;width:75px;">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("homeRes").value,
            document.getElementById("awayRes").value
          ];
        }
      }).then(val => {
        if (val.value) {
          var homeScore = Number(val.value[0]);
          var awayScore = Number(val.value[1]);
          db.update(`Seasons/${seNum}/FA/matches/${id}`, {
            homeScore,
            awayScore,
            state: true
          }).then(() => {
            if (home == "ليستر سيتي") {
              db.get(`playersData/hassan/matchesStats`).then(matches => {
                if (away == "مانشيستر سيتي") {
                  if (homeScore > awayScore) {
                    var win = matches.data[2] + 1;
                    var draw = matches.data[0];
                    var lose = matches.data[1];
                  } else if (homeScore < awayScore) {
                    var win = matches.data[2];
                    var draw = matches.data[0];
                    var lose = matches.data[1] + 1;
                  } else {
                    var win = matches.data[2];
                    var draw = matches.data[0] + 1;
                    var lose = matches.data[1];
                  }
                  db.update(`playersData/hassan/matchesStats`, {
                    win,
                    lose,
                    draw
                  });
                  db.get(`playersData/hassan/goalsStats`).then(goals => {
                    var scored = goals.data[0] + homeScore;
                    var scoredIn = goals.data[1] + awayScore;
                    db.update(`playersData/hassan/goalsStats`, {
                      scored,
                      scoredIn
                    });
                  });
                  db.get(`playersData/hassan/vsClub/matchesStats`).then(mat => {
                    if (homeScore > awayScore) {
                      var win = mat.data[2] + 1;
                      var draw = mat.data[0];
                      var lose = mat.data[1];
                    } else if (homeScore < awayScore) {
                      var win = mat.data[2];
                      var draw = mat.data[0];
                      var lose = mat.data[1] + 1;
                    } else {
                      var win = mat.data[2];
                      var draw = mat.data[0] + 1;
                      var lose = mat.data[1];
                    }
                    db.update(`playersData/hassan/vsClub/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/hassan/vsClub/goalsStats`).then(
                      goals => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/vsClub/goalsStats`, {
                          scored,
                          scoredIn
                        }).then(() => {
                          Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                        });
                      }
                    );
                  });
                } else {
                  if (homeScore > awayScore) {
                    var win = matches.data[2] + 1;
                    var draw = matches.data[0];
                    var lose = matches.data[1];
                  } else if (homeScore < awayScore) {
                    var win = matches.data[2];
                    var draw = matches.data[0];
                    var lose = matches.data[1] + 1;
                  } else {
                    var win = matches.data[2];
                    var draw = matches.data[0] + 1;
                    var lose = matches.data[1];
                  }
                  db.update(`playersData/hassan/matchesStats`, {
                    win,
                    lose,
                    draw
                  });
                  db.get(`playersData/hassan/goalsStats`).then(goals => {
                    var scored = goals.data[0] + homeScore;
                    var scoredIn = goals.data[1] + awayScore;
                    db.update(`playersData/hassan/goalsStats`, {
                      scored,
                      scoredIn
                    }).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                  });
                }
              });
            } else if (home == "مانشيستر سيتي") {
              db.get(`playersData/mo/matchesStats`).then(matches => {
                if (away == "ليستر سيتي") {
                  db.get(`playersData/mo/vsClub/matchesStats`).then(mat => {
                    if (homeScore > awayScore) {
                      var win = matches.data[2] + 1;
                      var draw = matches.data[0];
                      var lose = matches.data[1];
                    } else if (homeScore < awayScore) {
                      var win = matches.data[2];
                      var draw = matches.data[0];
                      var lose = matches.data[1] + 1;
                    } else {
                      var win = matches.data[2];
                      var draw = matches.data[0] + 1;
                      var lose = matches.data[1];
                    }
                    db.update(`playersData/mo/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/mo/goalsStats`).then(goals => {
                      var scored = goals.data[0] + homeScore;
                      var scoredIn = goals.data[1] + awayScore;
                      db.update(`playersData/mo/goalsStats`, {
                        scored,
                        scoredIn
                      });
                    });
                    if (homeScore > awayScore) {
                      var win = mat.data[2] + 1;
                      var draw = mat.data[0];
                      var lose = mat.data[1];
                    } else if (homeScore < awayScore) {
                      var win = mat.data[2];
                      var draw = mat.data[0];
                      var lose = mat.data[1] + 1;
                    } else {
                      var win = mat.data[2];
                      var draw = mat.data[0] + 1;
                      var lose = mat.data[1];
                    }
                    db.update(`playersData/mo/vsClub/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/mo/vsClub/goalsStats`).then(goals => {
                      var scored = goals.data[0] + homeScore;
                      var scoredIn = goals.data[1] + awayScore;
                      db.update(`playersData/mo/vsClub/goalsStats`, {
                        scored,
                        scoredIn
                      }).then(() => {
                        Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                      });
                    });
                  });
                } else {
                  if (homeScore > awayScore) {
                    var win = matches.data[2] + 1;
                    var draw = matches.data[0];
                    var lose = matches.data[1];
                  } else if (homeScore < awayScore) {
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
                    db.update(`playersData/mo/goalsStats`, {
                      scored,
                      scoredIn
                    }).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                  });
                }
              });
            }
            if (away == "ليستر سيتي") {
              db.get(`playersData/hassan/matchesStats`).then(matches => {
                if (home == "مانشيستر سيتي") {
                  db.get(`playersData/hassan/vsClub/matchesStats`).then(mat => {
                    if (awayScore > homeScore) {
                      var win = matches.data[2] + 1;
                      var draw = matches.data[0];
                      var lose = matches.data[1];
                    } else if (awayScore < homeScore) {
                      var win = matches.data[2];
                      var draw = matches.data[0];
                      var lose = matches.data[1] + 1;
                    } else {
                      var win = matches.data[2];
                      var draw = matches.data[0] + 1;
                      var lose = matches.data[1];
                    }
                    db.update(`playersData/hassan/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/hassan/goalsStats`).then(goals => {
                      var scored = goals.data[0] + awayScore;
                      var scoredIn = goals.data[1] + homeScore;
                      db.update(`playersData/hassan/goalsStats`, {
                        scored,
                        scoredIn
                      });
                    });
                    if (awayScore > homeScore) {
                      var win = mat.data[2] + 1;
                      var draw = mat.data[0];
                      var lose = mat.data[1];
                    } else if (awayScore < homeScore) {
                      var win = mat.data[2];
                      var draw = mat.data[0];
                      var lose = mat.data[1] + 1;
                    } else {
                      var win = mat.data[2];
                      var draw = mat.data[0] + 1;
                      var lose = mat.data[1];
                    }
                    db.update(`playersData/hassan/vsClub/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/hassan/vsClub/goalsStats`).then(
                      goals => {
                        var scored = goals.data[0] + awayScore;
                        var scoredIn = goals.data[1] + homeScore;
                        db.update(`playersData/hassan/vsClub/goalsStats`, {
                          scored,
                          scoredIn
                        }).then(() => {
                          Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                        });
                      }
                    );
                  });
                } else {
                  if (awayScore > homeScore) {
                    var win = matches.data[2] + 1;
                    var draw = matches.data[0];
                    var lose = matches.data[1];
                  } else if (awayScore < homeScore) {
                    var win = matches.data[2];
                    var draw = matches.data[0];
                    var lose = matches.data[1] + 1;
                  } else {
                    var win = matches.data[2];
                    var draw = matches.data[0] + 1;
                    var lose = matches.data[1];
                  }
                  db.update(`playersData/hassan/matchesStats`, {
                    win,
                    lose,
                    draw
                  });
                  db.get(`playersData/hassan/goalsStats`).then(goals => {
                    var scored = goals.data[0] + awayScore;
                    var scoredIn = goals.data[1] + homeScore;
                    db.update(`playersData/hassan/goalsStats`, {
                      scored,
                      scoredIn
                    }).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                  });
                }
              });
            } else if (away == "مانشيستر سيتي") {
              db.get(`playersData/mo/matchesStats`).then(matches => {
                if (home == "ليستر سيتي") {
                  db.get(`playersData/mo/vsClub/matchesStats`).then(mat => {
                    if (awayScore > homeScore) {
                      var win = matches.data[2] + 1;
                      var draw = matches.data[0];
                      var lose = matches.data[1];
                    } else if (awayScore < homeScore) {
                      var win = matches.data[2];
                      var draw = matches.data[0];
                      var lose = matches.data[1] + 1;
                    } else {
                      var win = matches.data[2];
                      var draw = matches.data[0] + 1;
                      var lose = matches.data[1];
                    }
                    db.update(`playersData/mo/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/mo/goalsStats`).then(goals => {
                      var scored = goals.data[0] + awayScore;
                      var scoredIn = goals.data[1] + homeScore;
                      db.update(`playersData/mo/goalsStats`, {
                        scored,
                        scoredIn
                      });
                    });
                    if (awayScore > homeScore) {
                      var win = mat.data[2] + 1;
                      var draw = mat.data[0];
                      var lose = mat.data[1];
                    } else if (awayScore < homeScore) {
                      var win = mat.data[2];
                      var draw = mat.data[0];
                      var lose = mat.data[1] + 1;
                    } else {
                      var win = mat.data[2];
                      var draw = mat.data[0] + 1;
                      var lose = mat.data[1];
                    }
                    db.update(`playersData/mo/vsClub/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/mo/vsClub/goalsStats`).then(goals => {
                      var scored = goals.data[0] + awayScore;
                      var scoredIn = goals.data[1] + homeScore;
                      db.update(`playersData/mo/vsClub/goalsStats`, {
                        scored,
                        scoredIn
                      }).then(() => {
                        Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                      });
                    });
                  });
                } else {
                  if (awayScore > homeScore) {
                    var win = matches.data[2] + 1;
                    var draw = matches.data[0];
                    var lose = matches.data[1];
                  } else if (awayScore < homeScore) {
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
                    db.update(`playersData/mo/goalsStats`, {
                      scored,
                      scoredIn
                    }).then(() => {
                      Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                    });
                  });
                }
              });
            }
            if (
              home != "ليستر سيتي" ||
              home != "مانشيستر سيتي" ||
              away != "ليستر سيتي" ||
              away != "مانشيستر سيتي"
            ) {
              setTimeout(() => {
                Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
              }, 2000);
            }
            // SET FINAL RANKING
            if (id == "round5/match1") {
              // SET Ranking for HOME
              db.get(`rankings/clubs/${home}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                if (homeScore > awayScore) {
                  var currentRankingPTS = prevRankingPTS + 10;
                } else if (homeScore < awayScore) {
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`rankings/clubs/${home}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
              });
              // SET Ranking for Away
              db.get(`rankings/clubs/${away}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                if (awayScore > homeScore) {
                  var currentRankingPTS = prevRankingPTS + 10;
                } else if (awayScore < homeScore) {
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`rankings/clubs/${away}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
              });
            } else {
              // SET Ranking for HOME
              db.get(`rankings/clubs/${home}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                if (homeScore > awayScore) {
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if (homeScore < awayScore) {
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`rankings/clubs/${home}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
              });
              // SET Ranking for Away
              db.get(`rankings/clubs/${away}`).then(resp => {
                var prevRankingPTS = resp.data[2];
                if (awayScore > homeScore) {
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if (awayScore < homeScore) {
                  var currentRankingPTS = prevRankingPTS - 1;
                } else {
                  var currentRankingPTS = prevRankingPTS + 1;
                }
                db.update(`rankings/clubs/${away}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS
                });
              });
            }

            if (id == "round1/match1") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match1`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match1`, {
                  home: away
                });
              }
            } else if (id == "round1/match2") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match1`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match1`, {
                  away
                });
              }
            } else if (id == "round1/match3") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match2`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match2`, {
                  home: away
                });
              }
            } else if (id == "round1/match4") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match2`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match2`, {
                  away
                });
              }
            } else if (id == "round1/match5") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match3`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match3`, {
                  home: away
                });
              }
            } else if (id == "round1/match6") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match3`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match3`, {
                  away
                });
              }
            } else if (id == "round1/match7") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match4`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match4`, {
                  home: away
                });
              }
            } else if (id == "round1/match8") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match4`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match4`, {
                  away
                });
              }
            } else if (id == "round1/match9") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match5`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match5`, {
                  home: away
                });
              }
            } else if (id == "round1/match10") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match5`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match5`, {
                  away
                });
              }
            } else if (id == "round1/match11") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match6`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match6`, {
                  home: away
                });
              }
            } else if (id == "round1/match12") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match6`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match6`, {
                  away
                });
              }
            } else if (id == "round1/match13") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match7`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match7`, {
                  home: away
                });
              }
            } else if (id == "round1/match14") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match7`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match7`, {
                  away
                });
              }
            } else if (id == "round1/match15") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match8`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match8`, {
                  home: away
                });
              }
            } else if (id == "round1/match16") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round2/match8`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round2/match8`, {
                  away
                });
              }
            }

            // ROUND OF 16
            else if (id == "round2/match1") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match1`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match1`, {
                  home: away
                });
              }
            } else if (id == "round2/match2") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match1`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match1`, {
                  away
                });
              }
            } else if (id == "round2/match3") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match2`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match2`, {
                  home: away
                });
              }
            } else if (id == "round2/match4") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match2`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match2`, {
                  away
                });
              }
            } else if (id == "round2/match5") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match3`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match3`, {
                  home: away
                });
              }
            } else if (id == "round2/match6") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match3`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match3`, {
                  away
                });
              }
            } else if (id == "round2/match7") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match4`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match4`, {
                  home: away
                });
              }
            } else if (id == "round2/match8") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round3/match4`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round3/match4`, {
                  away
                });
              }
            }

            // ROUND OF 8
            else if (id == "round3/match1") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round4/match1`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round4/match1`, {
                  home: away
                });
              }
            } else if (id == "round3/match2") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round4/match1`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round4/match1`, {
                  away
                });
              }
            } else if (id == "round3/match3") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round4/match2`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round4/match2`, {
                  home: away
                });
              }
            } else if (id == "round3/match4") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round4/match2`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round4/match2`, {
                  away
                });
              }
            }

            // ROUND OF 4
            else if (id == "round4/match1") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round5/match1`, {
                  home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round5/match1`, {
                  home: away
                });
              }
            } else if (id == "round4/match2") {
              if (homeScore > awayScore) {
                db.update(`Seasons/${seNum}/FA/matches/round5/match1`, {
                  away: home
                });
              } else {
                db.update(`Seasons/${seNum}/FA/matches/round5/match1`, {
                  away
                });
              }
            }
          });
        }
      });
    });

    // SET GOAL SCORER
    $(".gs h5").on("dblclick", function() {
      var id = $(this).attr("id");
      var seNum = $(".select select").val();
      Swal.fire({
        title: "تعديل اللاعب",
        html: `
              <label>أسم اللاعب</label>
              <input id="playerName" class="swal2-input" type="text" style="display:block"> 
              <label>الاهداف</label>
              <input id="playerGoals" class="swal2-input" type="number" style="display:block;width:75px;">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("playerName").value,
            document.getElementById("playerGoals").value
          ];
        }
      }).then(val => {
        if (val.value) {
          var player = val.value[0];
          var goals = val.value[1];
          db.update(`Seasons/${seNum}/FA/GS/${id}`, {
            player,
            goals
          });
        }
      });
    });

    // SET ASSIST MAKER
    $(".am h5").on("dblclick", function() {
      var id = $(this).attr("id");
      var seNum = $(".select select").val();
      Swal.fire({
        title: "تعديل اللاعب",
        html: `
              <label>أسم اللاعب</label>
              <input id="playerName" class="swal2-input" type="text" style="display:block"> 
              <label>الاهداف</label>
              <input id="playerGoals" class="swal2-input" type="number" style="display:block;width:75px;">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("playerName").value,
            document.getElementById("playerGoals").value
          ];
        }
      }).then(val => {
        if (val.value) {
          var player = val.value[0];
          var goals = val.value[1];
          db.update(`Seasons/${seNum}/FA/AS/${id}`, {
            player,
            goals
          });
        }
      });
    });

    // SET BEST PLAYERS
    $(".sbest p").on("dblclick", function() {
      var id = $(this).attr("id");
      var seNum = $(".select select").val();
      Swal.fire({
        title: "تعديل اللاعب",
        html: `
              <label>أسم اللاعب</label>
              <input id="playerName" class="swal2-input" type="text" style="display:block"> 
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [document.getElementById("playerName").value];
        }
      }).then(val => {
        if (val.value) {
          var player = val.value[0];
          db.update(`Seasons/${seNum}/FA/BEST/${id}`, {
            player
          });
        }
      });
    });

    auth.onAuth(user => {
      if (user) {
        db.get(`users/${auth.user().uid}`)
          .then(res => {
            if (typeof res.data[0] == "boolean") {
              this.admin = res.data[0];
            }
          })
          .then(() => {
            setTimeout(() => {
              const admin = this.admin;
              if (admin == false) {
                $(".AllMatches .match i").remove();
                $(".gs h5").off();
                $(".am h5").off();
                $(".sbest p").off();
              }
            }, 2200);
          });
      } else {
        db.get(`users/any`).then(() => {
          setTimeout(() => {
            const admin = this.admin;
            if (admin == false) {
              $(".AllMatches .match i").remove();
              $(".gs h5").off();
              $(".am h5").off();
              $(".sbest p").off();
            }
          }, 2200);
        });
      }
    });
  }
};
</script>
