<template>
  <div class="PL">
    <div class="container">
      <div class="row">
        <div class="col-12 newSeason">
          <button v-if="admin" @click="CreateNewSeason">
            <i class="fas fa-plus-circle"></i> إنشاء موسم جديد
          </button>
          <button v-if="admin && seasonOpen" @click="EndThisSeason">
            <i class="fas fa-times-circle"></i> إنهاء الموسم الحالي
          </button>
          <button v-if="admin" @click="editRanks">
            <i class="fas fa-times-circle"></i> تعديل الدرجة الاولى
          </button>
        </div>
        <div class="col-lg-4 col-12">
          <div class="imageTitle">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e4c4d84e17f1c3a71acec4ba4f092b2030b68202/3df06/imgs/pll.png"
            />
            <h3>الدوري الانجليزي</h3>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="info">
            <h4>معلومات البطولة :</h4>
            <p>
              الدوري الانجليزي , بطولة بنظام الدوري مكونة من 20 فريق إنجليزي ,
              بمجمل مباريات ذهاب و إياب 38 مباراة , الفائز بالبطولة يتأهل للعب
              مبارة الدرع الخيرية أمام بطل كأس الاتحاد , كذلك أصحاب المراكز
              الاربعة الاولى يتأهلون لدوري أبطال أوروبا , والمراكز من الـ5 حتى
              الـ9 يتأهلون للدوري الاوروبي.
            </p>
            <hr />
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
            <select @change="SelectSeason"></select>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="league-table-tab"
            data-toggle="tab"
            href="#league-table"
            role="tab"
            aria-controls="league-table"
            aria-selected="true"
            >جدول البطولة</a
          >
          <a
            class="nav-item nav-link"
            id="matches-table-tab"
            data-toggle="tab"
            href="#matches-table"
            role="tab"
            aria-controls="matches-table"
            aria-selected="false"
            >جدول المباريات</a
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
            id="team-tab"
            data-toggle="tab"
            href="#team"
            role="tab"
            aria-controls="team"
            aria-selected="false"
            >فريق الموسم</a
          >
          <a
            class="nav-item nav-link"
            id="best-tab"
            data-toggle="tab"
            href="#best"
            role="tab"
            aria-controls="best"
            aria-selected="false"
            >الافضل في الموسم</a
          >
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="league-table"
          role="tabpanel"
          aria-labelledby="league-table-tab"
        >
          <h2>جدول الدوري</h2>
          <div class="league">
            <table>
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

        <div
          class="tab-pane fade"
          id="matches-table"
          role="tabpanel"
          aria-labelledby="matches-table-tab"
        >
          <h2>جدول المباريات</h2>
          <carousel :perPage="1" :paginationPadding="0" :paginationSize="20">
            <slide v-for="round in LEAGUEMATCHES" :key="round.num">
              <h4>الجولة {{ round.num }}</h4>
              <div
                v-if="typeof match == 'object'"
                v-for="(match, i) in round"
                :key="match.home"
                class="match"
                :id="`round${round.num}/${i}`"
                :style="
                  (match.home == 'ليستر سيتي' &&
                    match.away == 'مانشيستر سيتي') ||
                  (match.home == 'مانشيستر سيتي' && match.away == 'ليستر سيتي')
                    ? 'background: #ff000059'
                    : match.home == 'ليستر سيتي' || match.away == 'ليستر سيتي'
                    ? 'background: #00309060'
                    : match.home == 'مانشيستر سيتي' ||
                      match.away == 'مانشيستر سيتي'
                    ? 'background: #A6C8EA'
                    : 'visiblity: auto'
                "
              >
                <span>{{ match.home }}</span>
                <span
                  >{{
                    match.state
                      ? match.homeScore + " - " + match.awayScore
                      : "VS"
                  }}
                </span>
                <span>{{ match.away }}</span>
                <i class="far fa-edit" v-if="admin && !match.state"></i>
              </div>
            </slide>
          </carousel>
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
            <div class="record">
              <h5>أقوى هجوم</h5>
              <p class="bestF">ليستر سيتي : 87 هدف</p>
            </div>
            <div class="record">
              <h5>أقوى دفاع</h5>
              <p class="bestD">ليستر سيتي : 18 هدف</p>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="team"
          role="tabpanel"
          aria-labelledby="team-tab"
        >
          <h2>فريق الموسم</h2>
          <div class="steam row justify-content-center">
            <h5 class="col-md-2 col-3">CF</h5>
            <p class="col-md-4 col-8" id="CF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">RWF</h5>
            <p class="col-md-4 col-8" id="RWF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">LWF</h5>
            <p class="col-md-4 col-8" id="LWF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">AMF</h5>
            <p class="col-md-4 col-8" id="AMF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">CMF</h5>
            <p class="col-md-4 col-8" id="CMF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">DMF</h5>
            <p class="col-md-4 col-8" id="DMF">ج. فاردي</p>
            <h5 class="col-md-2 col-3">RB</h5>
            <p class="col-md-4 col-8" id="RB">ج. فاردي</p>
            <h5 class="col-md-2 col-3">CB</h5>
            <p class="col-md-4 col-8" id="CB1">ج. فاردي</p>
            <h5 class="col-md-2 col-3">CB</h5>
            <p class="col-md-4 col-8" id="CB2">ج. فاردي</p>
            <h5 class="col-md-2 col-3">LB</h5>
            <p class="col-md-4 col-8" id="LB">ج. فاردي</p>
            <h5 class="col-md-2 col-3">GK</h5>
            <p class="col-md-4 col-8" id="GK">ج. فاردي</p>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="best"
          role="tabpanel"
          aria-labelledby="best-tab"
        >
          <h2>الافضل في الموسم</h2>
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
@function str-split($string, $separator) {
  // empty array/list
  $split-arr: ();
  // first index of separator in string
  $index: str-index($string, $separator);
  // loop through string
  @while $index != null {
    // get the substring from the first character to the separator
    $item: str-slice($string, 1, $index - 1);
    // push item to array
    $split-arr: append($split-arr, $item);
    // remove item and separator from string
    $string: str-slice($string, $index + 1);
    // find new index of separator
    $index: str-index($string, $separator);
  }

  @return $string;
}

.VueCarousel-inner {
  direction: ltr !important;
}

.VueCarousel-dot-container {
  margin-top: 15px !important;
  direction: ltr;
}

.VueCarousel-dot {
  margin: 10px;
  border: 2px solid $pl;
  background: $pl !important;
  padding: 2px 4px 7px 4px !important;
  width: 25px !important;
  border-radius: 5px !important;
  font-family: "Changa", sans-serif !important;
  font-weight: bold;
  &.VueCarousel-dot--active {
    background: #fff !important;
    border: 2px solid $pl;
    color: $pl !important;
    box-shadow: inset 0 0 5px rgba(0,0,0,.3);
  }
}

// .VueCarousel-dot::after {
//   content: str-split(attr(title), " ");
// }

.PL {
  padding: 100px 0;
  .newSeason {
    text-align: right;
    margin-bottom: 20px;
    @include xs {
      text-align: center;
    }
    button {
      font-family: "changa";
      background: $pl;
      padding: 0 0 0 35px;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      margin: 5px;
      text-align: right;
      i {
        margin-left: 15px;
        padding: 15px 25px;
        color: $pl;
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
    box-shadow: 0 0 7px rgba($color: $pl, $alpha: 0.15);
    margin-bottom: 25px;
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 30px;
    }
    h3 {
      background: $pl;
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
    box-shadow: 0 0 7px rgba($color: $pl, $alpha: 0.15);
    h4 {
      color: $pl;
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
      color: $pl;
      background: #f6f6f6;
      option {
        font-family: "changa";
        font-weight: bold;
        color: $pl;
        background: #f6f6f6;
      }
      &:focus {
        border-color: $pl;
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
      color: $pl;
      text-align: right;
      font-family: "changa";
      font-weight: bold;
      &:hover,
      &.active {
        background: $pl;
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
    color: $pl;
    font-weight: bold;
    padding-top: 25px;
    &::after {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 35px;
      background: $pl;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }

  #league-table {
    .league {
      @include sm {
        overflow-x: scroll;
      }
      table {
        width: 100%;
        margin: auto;
        tr {
          &:first-child {
            background: $pl;
            color: #fff;
          }
          &:nth-child(even) {
            background: #f6f6f6;
          }
          td,
          th {
            font-family: "Changa", sans-serif;
            font-weight: bold;
            border: 0;
            text-align: center;
            padding: 12px;
            @include sm {
              font-size: 13px;
              &:nth-of-type(7),
              &:nth-of-type(8),
              &:nth-of-type(9) {
                display: none;
              }
            }
            .ucl-logo,
            .uel-logo {
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
          }
          td {
            color: $pl;
          }
          td:not(:nth-child(2)) {
            font-weight: bold;
          }
        }
      }
    }
  }
  .AllMatches,
  .VueCarousel-inner {
    text-align: center;
    h4 {
      padding: 15px;
      background: $pl;
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
        color: $pl;
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
      box-shadow: 0 0 2px rgba($color: $pl, $alpha: 0.2);
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
        background: $pl;
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
        color: $pl;
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
        color: $pl;
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
      box-shadow: 0 0 5px rgba($color: $pl, $alpha: 0.15);
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
      box-shadow: 0 0 5px rgba($color: $pl, $alpha: 0.15);
      color: $pl;
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

.swal2-title {
  &::after {
    display: none;
  }
}
</style>

<script>
/* eslint-disable */
export default {
  name: "PL",
  data() {
    return {
      seasonOpen: true,
      admin: false,
      LEAGUEMATCHES: [],
    };
  },
  methods: {
    SelectSeason() {
      var seNum = $(".select select").val();
      // GET SEASONS
      db.get(`Seasons/${seNum}`).then((res) => {
        // Get Season State
        db.get(`Seasons/${seNum}/PL`).then((respon) => {
          this.seasonOpen = !respon.data[6];
        });

        // GET SEASONS RANKING
        db.getting(
          `Seasons/${seNum}/PL/clubs`,
          (response) => {
            var num = 1;
            $(".league table tr:not(:first-of-type)").remove();
            response.data.forEach((club, i) => {
              var ucl = `<img src="https://d33wubrfki0l68.cloudfront.net/5acdeaa1d1161330761a606e002abb7f9bac1ebf/e3f97/imgs/ucl.svg" 
                        onclick="location.href = '/tournaments/ucl'" class="ucl-logo">`;
              var uel = `<img src="https://d33wubrfki0l68.cloudfront.net/6210efbe34ccfd4467bc718625f8b4ac8d797c14/31a3e/imgs/uel.svg"
                        onclick="location.href = '/tournaments/uel'" class="uel-logo">`;
              var down = `<i class="fas fa-angle-down" style="font-size:18px;color:red;position:relative;top:3px"></i>`;
              var tr = `
                      <tr>
                        <td>${i < 4 ? ucl : ""} ${i < 9 && i > 3 ? uel : ""} ${
                i < 20 && i > 16 ? down : ""
              } ${num}</td>
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
              $(".league table").append(tr);
              num++;
            });
            // GET SEASONS Record Attck
            (function attack() {
              var highest = 0;
              var club;
              Object.values($(".league tr td:nth-child(7)")).forEach((td) => {
                if (Number(td.innerHTML) > highest) {
                  highest = Number(td.innerHTML);
                  club = td.parentElement.children[1].innerText;
                }
              });
              if (highest == 0) {
                club = "لا يوجد فرق";
              }
              $(".bestF").text(`${club} : ${highest} أهداف`);
            })();

            // GET SEASONS Record Defence
            (function defence() {
              var highest = 999;
              var club;
              Object.values($(".league tr td:nth-child(8)")).forEach((td) => {
                if (Number(td.innerHTML) < highest) {
                  highest = Number(td.innerHTML);
                  club = td.parentElement.children[1].innerText;
                }
              });
              $(".bestD").text(`${club} : ${highest} أهداف`);
            })();
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );

        // GET SEASONS MATCHES
        db.getting(
          `Seasons/${seNum}/PL/matches`,
          (response) => {
            response.data.forEach((round) => {
              this.LEAGUEMATCHES.push(round);
            });
            const admin = this.admin;
            if (admin == false) {
              $(".gs h5").off();
              $(".am h5").off();
              $(".sbest p").off();
              $(".steam p").off();
            }
          },
          { sort: ["-num"] }
        );

        // GET SEASONS GS
        db.getting(
          `Seasons/${seNum}/PL/GS`,
          (res) => {
            var num = 1;
            res.data.forEach((player) => {
              $(`.gs${num}p`).text(player.player);
              $(`.gs${num}g`).text(player.goals + " هدف");
              num++;
            });
          },
          { order: { type: "key" } }
        );

        // GET SEASONS AS
        db.getting(
          `Seasons/${seNum}/PL/AS`,
          (res) => {
            var num = 1;
            res.data.forEach((player) => {
              $(`.as${num}p`).text(player.player);
              $(`.as${num}g`).text(player.goals + " هدف");
              num++;
            });
          },
          { order: { type: "key" } }
        );

        // GET SEASONS TEAM
        db.getting(`Seasons/${seNum}/PL/TEAM`, (res) => {
          res.data.forEach((player) => {
            if (player._id == "CF") {
              $("#CF").text(player.player);
            } else if (player._id == "RWF") {
              $("#RWF").text(player.player);
            } else if (player._id == "LWF") {
              $("#LWF").text(player.player);
            } else if (player._id == "AMF") {
              $("#AMF").text(player.player);
            } else if (player._id == "CMF") {
              $("#CMF").text(player.player);
            } else if (player._id == "DMF") {
              $("#DMF").text(player.player);
            } else if (player._id == "RB") {
              $("#RB").text(player.player);
            } else if (player._id == "LB") {
              $("#LB").text(player.player);
            } else if (player._id == "CB1") {
              $("#CB1").text(player.player);
            } else if (player._id == "CB2") {
              $("#CB2").text(player.player);
            } else if (player._id == "GK") {
              $("#GK").text(player.player);
            }
          });
        });

        // GET SEASONS BEST
        db.getting(`Seasons/${seNum}/PL/BEST`, (res) => {
          res.data.forEach((player) => {
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
        db.get(`Seasons/${seNum}/PL/matches`, { sort: ["-num"] }).then(
          (response) => {
            $(".recordes .record .recMatch").remove();
            var matchRec;
            var record = 0;
            response.data.forEach((round) => {
              var arrRounds = Object.values(round);
              arrRounds.forEach((match) => {
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
            $(".recordes .record:first-of-type").append(Match);
          }
        );
      });
    },
    CreateNewSeason() {
      Swal.fire({
        title: "هل تريد إنشاء موسم جديد ؟",
        type: "question",
        customClass: {
          icon: "swal2-arabic-question-mark",
        },
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true,
      }).then((res) => {
        if (res.value) {
          let AllClubs = [];
          db.get(`clubNames`)
            .then((res) => {
              res.data.forEach((club) => {
                if (club.rank == 1) {
                  AllClubs.push(club.name);
                }
              });
            })
            .then(() => {
              var datalist = `<datalist id="clubsNames">`;
              for (var i = 0; i < AllClubs.length; i++) {
                datalist += `<option value="${AllClubs[i]}">`;
              }
              datalist += `</datalist>`;
              var inputs = ``;
              for (var i = 1; i <= 20; i++) {
                inputs += `
              <label>Team #${i}</label>
              <input id="Team${i}" class="swal2-input" type="text" style="display:block;height:auto;margin:0" list="clubsNames">
              `;
              }
              Swal.fire({
                title: "أدخل الفرق المشاركة",
                html: `${datalist}${inputs}`,
                showCancelButton: true,
                focusConfirm: false,
                preConfirm: () => {
                  return [
                    document.getElementById("Team1").value,
                    document.getElementById("Team2").value,
                    document.getElementById("Team3").value,
                    document.getElementById("Team4").value,
                    document.getElementById("Team5").value,
                    document.getElementById("Team6").value,
                    document.getElementById("Team7").value,
                    document.getElementById("Team8").value,
                    document.getElementById("Team9").value,
                    document.getElementById("Team10").value,
                    document.getElementById("Team11").value,
                    document.getElementById("Team12").value,
                    document.getElementById("Team13").value,
                    document.getElementById("Team14").value,
                    document.getElementById("Team15").value,
                    document.getElementById("Team16").value,
                    document.getElementById("Team17").value,
                    document.getElementById("Team18").value,
                    document.getElementById("Team19").value,
                    document.getElementById("Team20").value,
                  ];
                },
              }).then((clubsArr) => {
                var set = new Set([...clubsArr.value]);
                const Clubs = [...set];

                if (Clubs.length >= 20) {
                  if (Clubs.includes("ليستر سيتي")) {
                    db.get(`playersData/hassan/toursStats/pl`).then((pd) => {
                      var part = pd.data[0] + 1;
                      db.update(`playersData/hassan/toursStats/pl`, {
                        part,
                      });
                    });
                  }

                  if (Clubs.includes("مانشيستر سيتي")) {
                    db.get(`playersData/mo/toursStats/pl`).then((pd) => {
                      var part = pd.data[0] + 1;
                      db.update(`playersData/mo/toursStats/pl`, {
                        part,
                      });
                    });
                  }

                  db.get("Seasons", {
                    order: { type: "key" },
                    filter: { type: "last", value: 1 },
                  }).then((res) => {
                    if (res) {
                      if (res.data[0].PL) {
                        var SeNum = res.data[0].num + 1;
                      } else {
                        var SeNum = res.data[0].num;
                      }
                    } else {
                      var SeNum = 1;
                    }

                    db.update(`Seasons/${SeNum}`, {
                      num: SeNum,
                    });

                    db.update(`Seasons/${SeNum}/PL`, {
                      state: false,
                    });

                    // PL Rounds Algorithem
                    const rounds = [
                      [
                        [1, 2],
                        [19, 3],
                        [18, 4],
                        [17, 5],
                        [16, 6],
                        [15, 7],
                        [14, 8],
                        [13, 9],
                        [12, 10],
                        [20, 11],
                      ], // 1
                      [
                        [3, 1],
                        [2, 20],
                        [4, 19],
                        [5, 18],
                        [6, 17],
                        [7, 16],
                        [8, 15],
                        [9, 14],
                        [10, 13],
                        [11, 12],
                      ], // 2
                      [
                        [1, 4],
                        [2, 3],
                        [19, 5],
                        [18, 6],
                        [17, 7],
                        [16, 8],
                        [15, 9],
                        [14, 10],
                        [13, 11],
                        [20, 12],
                      ], // 3
                      [
                        [5, 1],
                        [4, 2],
                        [3, 20],
                        [6, 19],
                        [7, 18],
                        [8, 17],
                        [9, 16],
                        [10, 15],
                        [11, 14],
                        [12, 13],
                      ], // 4
                      [
                        [1, 6],
                        [2, 5],
                        [3, 4],
                        [19, 7],
                        [18, 8],
                        [17, 9],
                        [16, 10],
                        [15, 11],
                        [14, 12],
                        [20, 13],
                      ], // 5
                      [
                        [7, 1],
                        [6, 2],
                        [5, 3],
                        [4, 20],
                        [8, 19],
                        [9, 18],
                        [10, 17],
                        [11, 16],
                        [12, 15],
                        [13, 14],
                      ], // 6
                      [
                        [1, 8],
                        [2, 7],
                        [3, 6],
                        [4, 5],
                        [19, 9],
                        [18, 10],
                        [17, 11],
                        [16, 12],
                        [15, 13],
                        [20, 14],
                      ], // 7
                      [
                        [9, 1],
                        [8, 2],
                        [7, 3],
                        [6, 4],
                        [5, 20],
                        [10, 19],
                        [11, 18],
                        [12, 17],
                        [13, 16],
                        [14, 15],
                      ], // 8
                      [
                        [1, 10],
                        [2, 9],
                        [3, 8],
                        [4, 7],
                        [5, 6],
                        [19, 11],
                        [18, 12],
                        [17, 13],
                        [16, 14],
                        [20, 15],
                      ], // 9
                      [
                        [11, 1],
                        [10, 2],
                        [9, 3],
                        [8, 4],
                        [7, 5],
                        [6, 20],
                        [12, 19],
                        [13, 18],
                        [14, 17],
                        [15, 16],
                      ], // 10
                      [
                        [1, 12],
                        [2, 11],
                        [3, 10],
                        [4, 9],
                        [5, 8],
                        [6, 7],
                        [19, 13],
                        [18, 14],
                        [17, 15],
                        [20, 16],
                      ], // 11
                      [
                        [13, 1],
                        [12, 2],
                        [11, 3],
                        [10, 4],
                        [9, 5],
                        [8, 6],
                        [7, 20],
                        [14, 19],
                        [15, 18],
                        [16, 17],
                      ], // 12
                      [
                        [1, 14],
                        [2, 13],
                        [3, 12],
                        [4, 11],
                        [5, 10],
                        [6, 9],
                        [7, 8],
                        [19, 15],
                        [18, 16],
                        [20, 17],
                      ], // 13
                      [
                        [15, 1],
                        [14, 2],
                        [13, 3],
                        [12, 4],
                        [11, 5],
                        [10, 6],
                        [9, 7],
                        [8, 20],
                        [16, 19],
                        [17, 18],
                      ], // 14
                      [
                        [1, 16],
                        [2, 15],
                        [3, 14],
                        [4, 13],
                        [5, 12],
                        [6, 11],
                        [7, 10],
                        [8, 9],
                        [19, 17],
                        [20, 18],
                      ], // 15
                      [
                        [17, 1],
                        [16, 2],
                        [15, 3],
                        [14, 4],
                        [13, 5],
                        [12, 6],
                        [11, 7],
                        [10, 8],
                        [9, 20],
                        [18, 19],
                      ], // 16
                      [
                        [1, 18],
                        [2, 17],
                        [3, 16],
                        [4, 15],
                        [5, 14],
                        [6, 13],
                        [7, 12],
                        [8, 11],
                        [9, 10],
                        [20, 19],
                      ], // 17
                      [
                        [19, 1],
                        [18, 2],
                        [17, 3],
                        [16, 4],
                        [15, 5],
                        [14, 6],
                        [13, 7],
                        [12, 8],
                        [11, 9],
                        [10, 20],
                      ], // 18
                      [
                        [1, 20],
                        [2, 19],
                        [3, 18],
                        [4, 17],
                        [5, 16],
                        [6, 15],
                        [7, 14],
                        [8, 13],
                        [9, 12],
                        [10, 11],
                      ], // 19
                    ];

                    // ADD Rounds & Matches
                    for (var r = 1; r <= rounds.length * 2; r++) {
                      db.update(`Seasons/${SeNum}/PL/matches/round${r}`, {
                        num: r,
                      });

                      var matchNum = 0;
                      var roundNum = r - 1;
                      var homeC = 0;
                      var awayC = 1;
                      if (r >= 20)
                        (roundNum = r - 20), (homeC = 1), (awayC = 0);

                      rounds[roundNum].forEach((match) => {
                        db.update(
                          `Seasons/${SeNum}/PL/matches/round${r}/match${++matchNum}`,
                          {
                            home: Clubs[match[homeC] - 1],
                            homeScore: 0,
                            away: Clubs[match[awayC] - 1],
                            awayScore: 0,
                            state: false,
                          }
                        );
                      });
                    }

                    // ADD LEAGUE CLUBS
                    for (var cl = 1; cl <= Clubs.length; cl++) {
                      db.add(`Seasons/${SeNum}/PL/clubs/${cl}`, {
                        club: Clubs[cl - 1],
                        pts: 0,
                        p: 0,
                        w: 0,
                        d: 0,
                        l: 0,
                        gf: 0,
                        ga: 0,
                        gd: 0,
                        _id: cl,
                      });
                    }

                    // ADD GOAL SCORERS
                    for (var gs = 1; gs <= 10; gs++) {
                      db.add(`Seasons/${SeNum}/PL/GS/${gs}`, {
                        player: "لم يتم التعيين",
                        goals: 0,
                        _id: gs,
                      });
                    }

                    // ADD ASSIST MAKERS
                    for (var ass = 1; ass <= 10; ass++) {
                      db.add(`Seasons/${SeNum}/PL/AS/${ass}`, {
                        player: "لم يتم التعيين",
                        goals: 0,
                        _id: ass,
                      });
                    }

                    // ADD SEASONS TEAM
                    var teamPos = [
                      "CF",
                      "RWF",
                      "LWF",
                      "AMF",
                      "CMF",
                      "DMF",
                      "RB",
                      "LB",
                      "CB1",
                      "CB2",
                      "GK",
                    ];
                    teamPos.forEach((pos) => {
                      db.add(`Seasons/${SeNum}/PL/TEAM/${pos}`, {
                        player: "لم يتم التعيين",
                        _id: pos,
                      });
                    });

                    // ADD SEASONS BEST
                    var bestPos = [
                      "FORWOARD",
                      "CENTER",
                      "DEFENDER",
                      "GOALKEEPER",
                    ];
                    bestPos.forEach((pos) => {
                      db.add(`Seasons/${SeNum}/PL/BEST/${pos}`, {
                        player: "لم يتم التعيين",
                        _id: pos,
                      });
                    });

                    var checker = setInterval(() => {
                      db.get(`Seasons/${SeNum}/PL`).then((res) => {
                        if (res.data.length >= 7) {
                          clearInterval(checker);
                          Swal.fire(
                            "Done!",
                            "PL Add Successfully To Season " + SeNum,
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
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error!, Please Insert All Clubs [20 Club]",
                  });
                }
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
          icon: "swal2-arabic-question-mark",
        },
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true,
      }).then((res) => {
        if (res.value) {
          var seNum = $(".select select").val();
          db.get(`Seasons/${seNum}/PL/matches`).then((res) => {
            var checker = 0;
            res.data.forEach((round) => {
              Object.values(round).forEach((match) => {
                if (typeof match == "object" && !match.state) {
                  checker++;
                }
              });
            });
            if (checker > 0) {
              Swal.fire({
                type: "error",
                title: "خطأ",
                text: "لا تزال هناك مباريات لم تنتهى بعد",
              });
            } else {
              var winner = $(
                ".league tr:nth-of-type(2) td:nth-child(2)"
              ).text();
              if (winner == "ليستر سيتي") {
                firebase
                  .database()
                  .ref(`playersData/hassan/toursStats/pl`)
                  .transaction((data) => {
                    data.win++;
                    return data;
                  })
                  .then(() => {
                    db.update(`Seasons/${seNum}/PL`, {
                      state: true,
                    }).then(location.reload());
                  })
                  .catch((err) => {
                    alert(err.message);
                  });
              } else if (winner == "مانشيستر سيتي") {
                firebase
                  .database()
                  .ref(`playersData/mo/toursStats/pl`)
                  .transaction((data) => {
                    data.win++;
                    return data;
                  })
                  .then(() => {
                    db.update(`Seasons/${seNum}/PL`, {
                      state: true,
                    }).then(location.reload());
                  })
                  .catch((err) => {
                    alert(err.message);
                  });
              } else {
                db.update(`Seasons/${seNum}/PL`, {
                  state: true,
                }).then(location.reload());
              }
            }
          });
        }
      });
    },
    async editRanks() {
      let RankOne = [];
      let RankTwo = [];
      let AllClubs = [];
      const { data } = await db.get(`clubNames`);
      data.forEach((club) => {
        if (club.rank == 1) {
          RankOne.push(club.name);
        } else {
          RankTwo.push(club.name);
        }
        AllClubs.push(club.name);
      });

      var datalist = `<datalist id="clubsNames">`;
      for (var i = 0; i < AllClubs.length; i++) {
        datalist += `<option value="${AllClubs[i]}">`;
      }
      datalist += `</datalist>`;
      var inputs = ``;
      for (var i = 1; i <= RankOne.length; i++) {
        inputs += `
        <label>Team #${i}</label>
        <input id="Team${i}" class="swal2-input" type="text" style="display:block;height:auto;margin:0" list="clubsNames" value="${
          RankOne[i - 1]
        }">
        `;
      }
      var { value } = await Swal.fire({
        title: "أدخل الفرق المشاركة",
        html: `${datalist}${inputs}`,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("Team1").value,
            document.getElementById("Team2").value,
            document.getElementById("Team3").value,
            document.getElementById("Team4").value,
            document.getElementById("Team5").value,
            document.getElementById("Team6").value,
            document.getElementById("Team7").value,
            document.getElementById("Team8").value,
            document.getElementById("Team9").value,
            document.getElementById("Team10").value,
            document.getElementById("Team11").value,
            document.getElementById("Team12").value,
            document.getElementById("Team13").value,
            document.getElementById("Team14").value,
            document.getElementById("Team15").value,
            document.getElementById("Team16").value,
            document.getElementById("Team17").value,
            document.getElementById("Team18").value,
            document.getElementById("Team19").value,
            document.getElementById("Team20").value,
          ];
        },
      });
      let clubNames = {};
      value.forEach((rankOneClub) => {
        clubNames[rankOneClub] = {
          name: rankOneClub,
          rank: 1,
        };
        AllClubs.splice(AllClubs.indexOf(rankOneClub), 1);
      });
      AllClubs.forEach((rankTwoClub) => {
        clubNames[rankTwoClub] = {
          name: rankTwoClub,
          rank: 2,
        };
      });
      const answer = await Swal.fire({
        title: "هل انت متأكد من أختيارات فرق الدرجة الاولى ؟",
        type: "question",
        customClass: {
          icon: "swal2-arabic-question-mark",
        },
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true,
      });
      if (answer.value) {
        try {
          await db.add(`clubNames`, clubNames);
          Swal.fire(
            "Done!",
            `تم تعديل فرق الدرجة الاولى بنجاح`,
            "success"
          ).then(() => location.reload());
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  created() {
    window.scrollTo(0, 0);
    document.title = "ROPT | PREMIER LEAGUE";
    $(".preloader").show();

    // GET SEASONS SELECT OPTIONS
    db.get("Seasons")
      .then((res) => {
        res.data.forEach((season) => {
          var seNum = season.num;
          db.get(`Seasons/${seNum}/PL`).then((res) => {
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
          filter: { type: "last", value: 1 },
        }).then((res) => {
          if (res.data[0].PL) {
            var seNum = res.data[0].num;
          } else {
            var seNum = $(".select select").val();
          }

          // Get Season State
          db.get(`Seasons/${seNum}/PL`)
            .then((respon) => {
              this.seasonOpen = !respon.data[6];
            })
            .then(() => {
              this.SelectSeason();
              setTimeout(() => {
                $(".preloader").addClass("hide");
              }, 2000);
            });
        });
      });
  },
  mounted() {
    // SET MATCH RESULT
    $(".AllMatches, .VueCarousel-inner").on("click", ".match i", function() {
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
            document.getElementById("awayRes").value,
          ];
        },
      }).then((val) => {
        if (val.value) {
          var homeScore = Number(val.value[0]);
          var awayScore = Number(val.value[1]);
          db.update(`Seasons/${seNum}/PL/matches/${id}`, {
            homeScore,
            awayScore,
            state: true,
          }).then(() => {
            var HomeClubId;
            var AwayClubId;

            Object.values($(".league tr td:nth-child(2)")).forEach((td) => {
              if (td.innerHTML == home) {
                HomeClubId = td.id;
              } else if (td.innerHTML == away) {
                AwayClubId = td.id;
              }
            });

            // Handling Home Result
            db.get(`Seasons/${seNum}/PL/clubs/${HomeClubId}`).then((res) => {
              db.get(`rankings/clubs/${home}`).then((resp) => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + homeScore;
                var ga = res.data[3] + awayScore;
                var gd = gf - ga;
                if (homeScore > awayScore) {
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if (homeScore < awayScore) {
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
                db.update(`Seasons/${seNum}/PL/clubs/${HomeClubId}`, {
                  p,
                  gf,
                  ga,
                  gd,
                  w,
                  l,
                  d,
                  pts,
                });
                db.update(`rankings/clubs/${home}`, {
                  prev: prevRankingPTS,
                  pts: currentRankingPTS,
                });
                if (home == "ليستر سيتي") {
                  db.get(`playersData/hassan/matchesStats`).then((matches) => {
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
                        draw,
                      });
                      db.get(`playersData/hassan/goalsStats`).then((goals) => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {
                          scored,
                          scoredIn,
                        });
                      });
                      db.get(`playersData/hassan/vsClub/matchesStats`).then(
                        (mat) => {
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
                            draw,
                          });
                          db.get(`playersData/hassan/vsClub/goalsStats`).then(
                            (goals) => {
                              var scored = goals.data[0] + homeScore;
                              var scoredIn = goals.data[1] + awayScore;
                              db.update(
                                `playersData/hassan/vsClub/goalsStats`,
                                { scored, scoredIn }
                              ).then(() => {
                                Swal.fire(
                                  "تم تسجيل نتيجة المباراة",
                                  "",
                                  "success"
                                );
                              });
                            }
                          );
                        }
                      );
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
                        draw,
                      });
                      db.get(`playersData/hassan/goalsStats`).then((goals) => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/hassan/goalsStats`, {
                          scored,
                          scoredIn,
                        }).then(() => {
                          Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                        });
                      });
                    }
                  });
                } else if (home == "مانشيستر سيتي") {
                  db.get(`playersData/mo/matchesStats`).then((matches) => {
                    if (away == "ليستر سيتي") {
                      db.get(`playersData/mo/vsClub/matchesStats`).then(
                        (mat) => {
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
                            draw,
                          });
                          db.get(`playersData/mo/goalsStats`).then((goals) => {
                            var scored = goals.data[0] + homeScore;
                            var scoredIn = goals.data[1] + awayScore;
                            db.update(`playersData/mo/goalsStats`, {
                              scored,
                              scoredIn,
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
                            draw,
                          });
                          db.get(`playersData/mo/vsClub/goalsStats`).then(
                            (goals) => {
                              var scored = goals.data[0] + homeScore;
                              var scoredIn = goals.data[1] + awayScore;
                              db.update(`playersData/mo/vsClub/goalsStats`, {
                                scored,
                                scoredIn,
                              }).then(() => {
                                Swal.fire(
                                  "تم تسجيل نتيجة المباراة",
                                  "",
                                  "success"
                                );
                              });
                            }
                          );
                        }
                      );
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
                      db.update(`playersData/mo/matchesStats`, {
                        win,
                        lose,
                        draw,
                      });
                      db.get(`playersData/mo/goalsStats`).then((goals) => {
                        var scored = goals.data[0] + homeScore;
                        var scoredIn = goals.data[1] + awayScore;
                        db.update(`playersData/mo/goalsStats`, {
                          scored,
                          scoredIn,
                        }).then(() => {
                          Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                        });
                      });
                    }
                  });
                }
              });
            });

            // Handling Away Result
            db.get(`Seasons/${seNum}/PL/clubs/${AwayClubId}`).then((res) => {
              db.get(`rankings/clubs/${away}`).then((resp) => {
                var prevRankingPTS = resp.data[2];
                var p = res.data[7] + 1;
                var gf = res.data[5] + awayScore;
                var ga = res.data[3] + homeScore;
                var gd = gf - ga;
                if (awayScore > homeScore) {
                  var w = res.data[9] + 1;
                  var l = res.data[6];
                  var d = res.data[2];
                  var pts = res.data[8] + 3;
                  var currentRankingPTS = prevRankingPTS + 3;
                } else if (awayScore < homeScore) {
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
                db.update(`Seasons/${seNum}/PL/clubs/${AwayClubId}`, {
                  p,
                  gf,
                  ga,
                  gd,
                  w,
                  l,
                  d,
                  pts,
                }).then(() => {
                  db.update(`rankings/clubs/${away}`, {
                    prev: prevRankingPTS,
                    pts: currentRankingPTS,
                  }).then(() => {
                    if (away == "ليستر سيتي") {
                      db.get(`playersData/hassan/matchesStats`).then(
                        (matches) => {
                          if (home == "مانشيستر سيتي") {
                            db.get(
                              `playersData/hassan/vsClub/matchesStats`
                            ).then((mat) => {
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
                                draw,
                              });
                              db.get(`playersData/hassan/goalsStats`).then(
                                (goals) => {
                                  var scored = goals.data[0] + awayScore;
                                  var scoredIn = goals.data[1] + homeScore;
                                  db.update(`playersData/hassan/goalsStats`, {
                                    scored,
                                    scoredIn,
                                  });
                                }
                              );
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
                              db.update(
                                `playersData/hassan/vsClub/matchesStats`,
                                { win, lose, draw }
                              );
                              db.get(
                                `playersData/hassan/vsClub/goalsStats`
                              ).then((goals) => {
                                var scored = goals.data[0] + awayScore;
                                var scoredIn = goals.data[1] + homeScore;
                                db.update(
                                  `playersData/hassan/vsClub/goalsStats`,
                                  { scored, scoredIn }
                                ).then(() => {
                                  Swal.fire(
                                    "تم تسجيل نتيجة المباراة",
                                    "",
                                    "success"
                                  );
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
                            db.update(`playersData/hassan/matchesStats`, {
                              win,
                              lose,
                              draw,
                            });
                            db.get(`playersData/hassan/goalsStats`).then(
                              (goals) => {
                                var scored = goals.data[0] + awayScore;
                                var scoredIn = goals.data[1] + homeScore;
                                db.update(`playersData/hassan/goalsStats`, {
                                  scored,
                                  scoredIn,
                                }).then(() => {
                                  Swal.fire(
                                    "تم تسجيل نتيجة المباراة",
                                    "",
                                    "success"
                                  );
                                });
                              }
                            );
                          }
                        }
                      );
                    } else if (away == "مانشيستر سيتي") {
                      db.get(`playersData/mo/matchesStats`).then((matches) => {
                        if (home == "ليستر سيتي") {
                          db.get(`playersData/mo/vsClub/matchesStats`).then(
                            (mat) => {
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
                                draw,
                              });
                              db.get(`playersData/mo/goalsStats`).then(
                                (goals) => {
                                  var scored = goals.data[0] + awayScore;
                                  var scoredIn = goals.data[1] + homeScore;
                                  db.update(`playersData/mo/goalsStats`, {
                                    scored,
                                    scoredIn,
                                  });
                                }
                              );
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
                                draw,
                              });
                              db.get(`playersData/mo/vsClub/goalsStats`).then(
                                (goals) => {
                                  var scored = goals.data[0] + awayScore;
                                  var scoredIn = goals.data[1] + homeScore;
                                  db.update(
                                    `playersData/mo/vsClub/goalsStats`,
                                    { scored, scoredIn }
                                  ).then(() => {
                                    Swal.fire(
                                      "تم تسجيل نتيجة المباراة",
                                      "",
                                      "success"
                                    );
                                  });
                                }
                              );
                            }
                          );
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
                          db.update(`playersData/mo/matchesStats`, {
                            win,
                            lose,
                            draw,
                          });
                          db.get(`playersData/mo/goalsStats`).then((goals) => {
                            var scored = goals.data[0] + awayScore;
                            var scoredIn = goals.data[1] + homeScore;
                            db.update(`playersData/mo/goalsStats`, {
                              scored,
                              scoredIn,
                            }).then(() => {
                              Swal.fire(
                                "تم تسجيل نتيجة المباراة",
                                "",
                                "success"
                              );
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
            document.getElementById("playerGoals").value,
          ];
        },
      }).then((val) => {
        if (val.value) {
          var player = val.value[0];
          var goals = val.value[1];
          db.update(`Seasons/${seNum}/PL/GS/${id}`, {
            player,
            goals,
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
            document.getElementById("playerGoals").value,
          ];
        },
      }).then((val) => {
        if (val.value) {
          var player = val.value[0];
          var goals = val.value[1];
          db.update(`Seasons/${seNum}/PL/AS/${id}`, {
            player,
            goals,
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
        },
      }).then((val) => {
        if (val.value) {
          var player = val.value[0];
          db.update(`Seasons/${seNum}/PL/BEST/${id}`, {
            player,
          });
        }
      });
    });

    // SET SEASON TEAM
    $(".steam p").on("dblclick", function() {
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
        },
      }).then((val) => {
        if (val.value) {
          var player = val.value[0];
          db.update(`Seasons/${seNum}/PL/TEAM/${id}`, {
            player,
          });
        }
      });
    });

    auth.onAuth((user) => {
      if (user) {
        db.get(`users/${auth.user().uid}`)
          .then((res) => {
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
                $(".steam p").off();
              }
              var num = 1
              document.querySelectorAll(".VueCarousel-dot").forEach(e => {
                e.innerHTML = num;
                num++;
              })
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
              $(".steam p").off();
            }
          }, 2200);
        });
      }
    });
  },
};
</script>
