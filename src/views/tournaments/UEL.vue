<template>
  <div class="UEL">
    <div class="container">
      <div class="row">
        <div class="col-12 newSeason">
          <button v-if="admin" @click="CreateNewSeason">
            <i class="fas fa-plus-circle"></i> إنشاء موسم جديد
          </button>
          <button v-if="admin && seasonOpen" @click="EndThisSeason">
            <i class="fas fa-times-circle"></i> إنهاء الموسم الحالي
          </button>
          <button v-if="admin && seasonOpen" @click="confirmSkip">
            <i class="fas fa-times-circle"></i> تخطي البطولة
          </button>
        </div>
        <div class="col-lg-4 col-12">
          <div class="imageTitle">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/6210efbe34ccfd4467bc718625f8b4ac8d797c14/31a3e/imgs/uel.svg"
            />
            <h3>الدوري الاوروبي</h3>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="info">
            <h4>معلومات البطولة :</h4>
            <p>
              بطولة بنظام المجموعات ثم تصفية خروج المغلوب بنظام الذهاب والاياب
              تلعب موسميا بمشاركة الاندية أبطال الدوريات الاوروبية , تبدأ من دور
              الـ64 على 12 مجموعة يتأهل منها الاول والثاني , الفائز بالبطولة
              يتأهل لكأس العالم للاندية.
            </p>
            <hr />
            <h4>القوانين العامة</h4>
            <ul>
              <li>تقام مبارياتها على نظام صعوبة لاعب ممتاز</li>
              <li>مدة كل مباراة 10 دقائق على نظام اللعبة</li>
              <li>
                تقام مباريات المجموعات في الجولات : 3 - 6 - 9 - 12 - 15 - 18
              </li>
              <li>
                تقام مباريات التصفية في الجولات : 20 - 22 - 24 - 26 - 28 - 30 -
                32 - 34 | النهائي : 38
              </li>
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
            id="league-table-tab"
            data-toggle="tab"
            href="#league-table"
            role="tab"
            aria-controls="league-table"
            aria-selected="true"
            >مرحلة المجموعات</a
          >
          <a
            class="nav-item nav-link"
            id="groups-matches-table-tab"
            data-toggle="tab"
            href="#groups-matches-table"
            role="tab"
            aria-controls="groups-matches-table"
            aria-selected="false"
            >مباريات المجموعات</a
          >
          <a
            class="nav-item nav-link"
            id="matches-table-tab"
            data-toggle="tab"
            href="#matches-table"
            role="tab"
            aria-controls="matches-table"
            aria-selected="false"
            >مرحلة التصفية</a
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
          id="league-table"
          role="tabpanel"
          aria-labelledby="league-table-tab"
        >
          <h2>مرحلة المجموعات</h2>
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

            <h4>المجموعة الرابعة</h4>
            <table class="g4">
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

            <h4>المجموعة الخامسة</h4>
            <table class="g5">
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

            <h4>المجموعة السادسة</h4>
            <table class="g6">
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

            <h4>المجموعة السابعة</h4>
            <table class="g7">
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

            <h4>المجموعة الثامنة</h4>
            <table class="g8">
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

            <h4>المجموعة التاسعة</h4>
            <table class="g9">
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

            <h4>المجموعة العاشرة</h4>
            <table class="g10">
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

            <h4>المجموعة الحادية عشرة</h4>
            <table class="g11">
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

            <h4>المجموعة الثانية عشرة</h4>
            <table class="g12">
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
          id="groups-matches-table"
          role="tabpanel"
          aria-labelledby="groups-matches-table-tab"
        >
          <h2>جدول مباريات المجموعات</h2>
          <div class="AllMatches"></div>
        </div>

        <div
          class="tab-pane fade"
          id="matches-table"
          role="tabpanel"
          aria-labelledby="matches-table-tab"
        >
          <h2>مرحلة التصفية</h2>
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
.UEL {
  padding: 100px 0;
  .newSeason {
    text-align: right;
    margin-bottom: 20px;
    @include xs {
      text-align: center;
    }
    button {
      font-family: "changa";
      background: $uel;
      padding: 0 0 0 35px;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      margin: 5px;
      text-align: right;
      i {
        margin-left: 15px;
        padding: 15px 25px;
        color: $uel;
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
    box-shadow: 0 0 7px rgba($color: $uel, $alpha: 0.15);
    margin-bottom: 25px;
    img {
      width: 220px;
      height: 220px;
      margin-bottom: 30px;
    }
    h3 {
      background: $uel;

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
    box-shadow: 0 0 7px rgba($color: $uel, $alpha: 0.15);
    h4 {
      color: $uel;
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
      color: $uel;
      background: #f6f6f6;
      option {
        font-family: "changa";
        font-weight: bold;
        color: $uel;
        background: #f6f6f6;
      }
      &:focus {
        border-color: $uel;
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
      color: $uel;
      text-align: right;
      font-family: "changa";
      font-weight: bold;
      &:hover,
      &.active {
        background: $uel;
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
    color: $uel;
    font-weight: bold;
    padding-top: 25px;
    &::after {
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 35px;
      background: $uel;
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
      h4 {
        text-align: center;
        margin: 50px 0 0;
        padding: 15px 0 20px;
        color: $uel;
        font-weight: bold;
        background: #f6f6f6;
        @include xs {
          font-size: 20px;
        }
      }
      table {
        width: 100%;
        margin: auto;
        tr {
          &:first-child {
            background: $uel;
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
          }
          td {
            color: $uel;
          }
          td:not(:nth-child(2)) {
            font-weight: bold;
          }
        }
      }
    }
  }
  .AllMatches {
    text-align: center;
    h4 {
      padding: 15px;
      background: $uel;
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
        color: $uel;
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
      box-shadow: 0 0 2px rgba($color: $uel, $alpha: 0.2);
      text-align: left;
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
        background: $uel;
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
        color: $uel;
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
        color: $uel;
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
      box-shadow: 0 0 5px rgba($color: $uel, $alpha: 0.15);
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
      box-shadow: 0 0 5px rgba($color: $uel, $alpha: 0.15);
      color: $uel;
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
/* eslint-disable */
export default {
  name: "UEL",
  data() {
    return {
      seasonOpen: true,
      admin: false,
      powers: [
        ["أرسنال تولا", 1],
        ["أنتويرب", 1],
        ["أندرلخت", 2],
        ["أوليمباكوس", 2],
        ["أية زد", 1],
        ["اتالانتا", 3],
        ["بازل", 2],
        ["باوك أثينا", 1],
        ["بايرن ليفيركوزين", 3],
        ["بروندباي", 1],
        ["بلدية أسنطبول", 1],
        ["بنفيكا", 2],
        ["بوردو", 1],
        ["بوروسيا مونشينجلادباخ", 2],
        ["بي أس في", 2],
        ["بيشكتاش", 2],
        ["ترابزون سبور", 1],
        ["تولوز", 1],
        ["جينت", 1],
        ["جينك", 1],
        ["دينامو كييف", 1],
        ["دينامو موسكو", 1],
        ["ريال بيتيس", 2],
        ["رينجرس", 1],
        ["زينيت بطرسبرج", 1],
        ["زيوريخ", 1],
        ["سبارتاك موسكو", 1],
        ["سبورتينج براجا", 1],
        ["سبورتينج لشبونة", 2],
        ["ستاد رين", 1],
        ["ستارسبورج", 1],
        ["ستاندر ليج", 1],
        ["سلافيا فارا", 1],
        ["سيلتك", 2],
        ["شختار دوناستك", 1],
        ["فالنسيا", 3],
        ["فاينورد", 1],
        ["فرانكفورت", 2],
        ["فياريال", 2],
        ["فيتوريا", 1],
        ["فينربيخشة", 2],
        ["فيورنتينا", 2],
        ["كوبينهاجن", 2],
        ["لاتسيو", 3],
        ["لوجانو", 1],
        ["مارسيليا", 3],
        ["ماينز", 1],
        ["ميدتيلاند", 1],
        ["ميلان", 3],
        ["نانتس", 1] ,
        ["هيرتا برلين", 1]
      ]
    };
  },
  methods: {
    selectSeason() {
      var seNum = $(".select select").val();

      // Get Season State
      db.get(`Seasons/${seNum}/UEL`).then(respon => {
        this.seasonOpen = !respon.data[6];
      });

      db.get(`Seasons/${seNum}`).then(res => {
        // GET GROUPS RANKING
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub1`,
          response => {
            $(".league .g1 tr:not(:first-of-type)").remove();
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
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub2`,
          response => {
            $(".league .g2 tr:not(:first-of-type)").remove();
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
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub3`,
          response => {
            $(".league .g3 tr:not(:first-of-type)").remove();
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
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub4`,
          response => {
            $(".league .g4 tr:not(:first-of-type)").remove();
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
              $(".league .g4").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub5`,
          response => {
            $(".league .g5 tr:not(:first-of-type)").remove();
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
              $(".league .g5").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub6`,
          response => {
            $(".league .g6 tr:not(:first-of-type)").remove();
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
              $(".league .g6").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub7`,
          response => {
            $(".league .g7 tr:not(:first-of-type)").remove();
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
              $(".league .g7").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub8`,
          response => {
            $(".league .g8 tr:not(:first-of-type)").remove();
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
              $(".league .g8").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub9`,
          response => {
            $(".league .g9 tr:not(:first-of-type)").remove();
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
              $(".league .g9").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub10`,
          response => {
            $(".league .g10 tr:not(:first-of-type)").remove();
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
              $(".league .g10").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub11`,
          response => {
            $(".league .g11 tr:not(:first-of-type)").remove();
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
              $(".league .g11").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );
        db.getting(
          `Seasons/${seNum}/UEL/groubs/groub12`,
          response => {
            $(".league .g12 tr:not(:first-of-type)").remove();
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
              $(".league .g12").append(tr);
              num++;
            });
          },
          { sort: ["pts", "gd", "gf", "-ga"] }
        );

        // GET GROUPS MATCHES
        db.getting(
          `Seasons/${seNum}/UEL/Gmatches`,
          response => {
            $("#groups-matches-table .AllMatches .match").remove();
            $("#groups-matches-table .AllMatches .round").remove();
            var numer = 1;
            response.data.forEach(round => {
              var ROUND = ` <div class="round" id="R${numer}">
                              <h4>الجولة ${numer}</h4>
                            </div>
                            `;
              $("#groups-matches-table .AllMatches").append(ROUND);
              numer++;
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round1`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round1/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round1/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R1").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R1 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R1 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R1 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round2`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round2/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round2/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R2").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R2 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R2 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R2 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round3`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round3/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round3/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R3").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R3 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R3 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R3 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round4`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round4/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round4/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R4").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R4 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R4 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R4 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round5`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round5/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round5/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R5").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R5 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R5 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R5 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            db.get(`Seasons/${seNum}/UEL/Gmatches/round6`, {
              sort: ["-id"]
            }).then(res => {
              res.data.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round6/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                        <span>${match.away}</span>
                                      </div>`;
                  } else {
                    var Match = `<div class="match" id="round6/match${
                      match.id
                    }">
                                        <span>${match.home}</span>
                                        <span>VS</span>
                                        <span>${match.away}</span>
                                        <i class="far fa-edit editGResult"></i>
                                      </div>`;
                  }
                  $("#groups-matches-table .AllMatches #R6").append(Match);
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R6 .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R6 .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#groups-matches-table .AllMatches #R6 .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
            });
            const admin = this.admin;
            if (admin == false) {
              $(".AllMatches .match i").remove();
            }
          },
          { sort: ["-num"] }
        );

        // GET KNOCKOUT MATCHES
        db.getting(
          `Seasons/${seNum}/UEL/matches`,
          response => {
            $("#matches-table .AllMatches .round").remove();
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
              $("#matches-table .AllMatches").append(ROUND);
              var arrRounds = Object.values(round);
              arrRounds.forEach(match => {
                if (typeof match == "object") {
                  if (match.state) {
                    var Match = `<div class="match" id="round${numer}/match${
                      match.id
                    }">
                                  <span>${match.home}</span>
                                  <span>${match.homeScore} - ${
                      match.awayScore
                    }</span>
                                  <span>${match.away}</span>
                                </div>`;
                  } else if (
                    match.home == "لم يتأهل بعد" ||
                    match.away == "لم يتأهل بعد"
                  ) {
                    var Match = `<div class="match" id="round${numer}/match${
                      match.id
                    }">
                                  <span>${match.home}</span>
                                  <span>VS</span>
                                  <span>${match.away}</span>
                                  <i class="far fa-plus-square addClub"></i>
                                </div>`;
                  } else {
                    var Match = `<div class="match" id="round${numer}/match${
                      match.id
                    }">
                                  <span>${match.home}</span>
                                  <span>VS</span>
                                  <span>${match.away}</span>
                                  <i class="far fa-edit editKResult"></i>
                                </div>`;
                  }
                  $("#matches-table .AllMatches .round:last-of-type").append(
                    Match
                  );
                  if (
                    (match.home == "ليستر سيتي" &&
                      match.away == "مانشيستر سيتي") ||
                    (match.home == "مانشيستر سيتي" &&
                      match.away == "ليستر سيتي")
                  ) {
                    $(
                      "#matches-table .AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#ff000059");
                  } else if (
                    match.home == "ليستر سيتي" ||
                    match.away == "ليستر سيتي"
                  ) {
                    $(
                      "#matches-table .AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#00309060");
                  } else if (
                    match.home == "مانشيستر سيتي" ||
                    match.away == "مانشيستر سيتي"
                  ) {
                    $(
                      "#matches-table .AllMatches .round:last-of-type .match:last-of-type"
                    ).css("background", "#A6C8EA");
                  }
                }
              });
              numer++;
            });
          },
          { sort: ["-num"] }
        );

        // GET SEASONS GS
        db.getting(
          `Seasons/${seNum}/UEL/GS`,
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
          `Seasons/${seNum}/UEL/AS`,
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
        db.getting(`Seasons/${seNum}/UEL/BEST`, res => {
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
          Swal.fire({
            title: "أدخل الفرق المشاركة",
            html: `
                  <label>الفريق الاول</label>
                  <input id="Team1" class="swal2-input" type="text" style="display:block"> 
                  <label>الفريق الثاني</label>
                  <input id="Team2" class="swal2-input" type="text" style="display:block">
                  <label>الفريق الثالث</label>
                  <input id="Team3" class="swal2-input" type="text" style="display:block"> 
                  <label>الفريق الرابع</label>
                  <input id="Team4" class="swal2-input" type="text" style="display:block">
                  <label>الفريق الخامس</label>
                  <input id="Team5" class="swal2-input" type="text" style="display:block">
                  `,
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById("Team1").value,
                document.getElementById("Team2").value,
                document.getElementById("Team3").value,
                document.getElementById("Team4").value,
                document.getElementById("Team5").value
              ];
            }
          }).then(async val => {
            if (val.value) {
              var team1 = val.value[0];
              var team2 = val.value[1];
              var team3 = val.value[2];
              var team4 = val.value[3];
              var team5 = val.value[4];

              let {data} = await db.get(`UelClubs`)

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

              let shuffled = shuffle(data);
              let Clubs = []

              shuffled.forEach((club, i) => {
                if (team5 && i < 43) {
                    Clubs.push(club.name)
                } else if (!team5 && i < 44) {
                    Clubs.push(club.name)
                }
              })

              if (team5) {
                Clubs.push(team1,team2,team3,team4,team5)
              } else {
                Clubs.push(team1,team2,team3,team4)
              }
              
              Clubs = shuffle(Clubs);

              if (Clubs.includes("ليستر سيتي")) {
                db.get(`playersData/hassan/toursStats/uel`).then(pd => {
                  var part = pd.data[0] + 1;
                  db.update(`playersData/hassan/toursStats/uel`, {
                    part
                  });
                });
              }

              if (Clubs.includes("مانشيستر سيتي")) {
                db.get(`playersData/mo/toursStats/uel`).then(pd => {
                  var part = pd.data[0] + 1;
                  db.update(`playersData/mo/toursStats/uel`, {
                    part
                  });
                });
              }

              db.get("Seasons", {
                order: { type: "key" },
                filter: { type: "last", value: 1 }
              }).then(res => {
                if (res) {
                  if (res.data[0].UEL) {
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

                db.update(`Seasons/${SeNum}/UEL`, {
                  state: false
                });

                // const rounds = [

                // ]

                // // ADD Rounds & Matches
                // for (var r = 1; r <= rounds.length * 2; r++) {
                //   db.update(`Seasons/${SeNum}/UEL/matches/round${r}`, {
                //     num: r,
                //   });

                //   var matchNum = 0;
                //   var roundNum = r - 1;
                //   var homeC = 0;
                //   var awayC = 1;
                //   if (r >= 20)
                //     (roundNum = r - 20), (homeC = 1), (awayC = 0);

                //   rounds[roundNum].forEach((match) => {
                //     db.update(
                //       `Seasons/${SeNum}/UEL/Gmatches/round${r}/match${++matchNum}`,
                //       {
                //         home: Clubs[match[homeC] - 1],
                //         homeScore: 0,
                //         away: Clubs[match[awayC] - 1],
                //         awayScore: 0,
                //         state: false,
                //         id: matchNum
                //       }
                //     );
                //   });
                // }

                // 1ST ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1`, {
                  num: 1
                });

                // 1ST ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match1`, {
                  home: Clubs[1],
                  homeScore: 0,
                  away: Clubs[2],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match2`, {
                  home: Clubs[3],
                  homeScore: 0,
                  away: Clubs[0],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match3`, {
                  home: Clubs[5],
                  homeScore: 0,
                  away: Clubs[6],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match4`, {
                  home: Clubs[7],
                  homeScore: 0,
                  away: Clubs[4],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match5`, {
                  home: Clubs[9],
                  homeScore: 0,
                  away: Clubs[10],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match6`, {
                  home: Clubs[11],
                  homeScore: 0,
                  away: Clubs[8],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match7`, {
                  home: Clubs[13],
                  homeScore: 0,
                  away: Clubs[14],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match8`, {
                  home: Clubs[15],
                  homeScore: 0,
                  away: Clubs[12],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match9`, {
                  home: Clubs[17],
                  homeScore: 0,
                  away: Clubs[18],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match10`, {
                  home: Clubs[19],
                  homeScore: 0,
                  away: Clubs[16],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match11`, {
                  home: Clubs[21],
                  homeScore: 0,
                  away: Clubs[22],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match12`, {
                  home: Clubs[23],
                  homeScore: 0,
                  away: Clubs[20],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match13`, {
                  home: Clubs[25],
                  homeScore: 0,
                  away: Clubs[26],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match14`, {
                  home: Clubs[27],
                  homeScore: 0,
                  away: Clubs[24],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match15`, {
                  home: Clubs[29],
                  homeScore: 0,
                  away: Clubs[30],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match16`, {
                  home: Clubs[31],
                  homeScore: 0,
                  away: Clubs[28],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match17`, {
                  home: Clubs[33],
                  homeScore: 0,
                  away: Clubs[34],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match18`, {
                  home: Clubs[35],
                  homeScore: 0,
                  away: Clubs[32],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match19`, {
                  home: Clubs[37],
                  homeScore: 0,
                  away: Clubs[38],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match20`, {
                  home: Clubs[39],
                  homeScore: 0,
                  away: Clubs[36],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match21`, {
                  home: Clubs[41],
                  homeScore: 0,
                  away: Clubs[42],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match22`, {
                  home: Clubs[43],
                  homeScore: 0,
                  away: Clubs[40],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match23`, {
                  home: Clubs[45],
                  homeScore: 0,
                  away: Clubs[46],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round1/match24`, {
                  home: Clubs[47],
                  homeScore: 0,
                  away: Clubs[44],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // 2ND ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2`, {
                  num: 2
                });

                // 2ND ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match1`, {
                  home: Clubs[0],
                  homeScore: 0,
                  away: Clubs[1],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match2`, {
                  home: Clubs[2],
                  homeScore: 0,
                  away: Clubs[3],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match3`, {
                  home: Clubs[4],
                  homeScore: 0,
                  away: Clubs[5],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match4`, {
                  home: Clubs[6],
                  homeScore: 0,
                  away: Clubs[7],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match5`, {
                  home: Clubs[8],
                  homeScore: 0,
                  away: Clubs[9],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match6`, {
                  home: Clubs[10],
                  homeScore: 0,
                  away: Clubs[11],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match7`, {
                  home: Clubs[12],
                  homeScore: 0,
                  away: Clubs[13],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match8`, {
                  home: Clubs[14],
                  homeScore: 0,
                  away: Clubs[15],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match9`, {
                  home: Clubs[16],
                  homeScore: 0,
                  away: Clubs[17],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match10`, {
                  home: Clubs[18],
                  homeScore: 0,
                  away: Clubs[19],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match11`, {
                  home: Clubs[20],
                  homeScore: 0,
                  away: Clubs[21],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match12`, {
                  home: Clubs[22],
                  homeScore: 0,
                  away: Clubs[23],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match13`, {
                  home: Clubs[24],
                  homeScore: 0,
                  away: Clubs[25],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match14`, {
                  home: Clubs[26],
                  homeScore: 0,
                  away: Clubs[27],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match15`, {
                  home: Clubs[28],
                  homeScore: 0,
                  away: Clubs[29],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match16`, {
                  home: Clubs[30],
                  homeScore: 0,
                  away: Clubs[31],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match17`, {
                  home: Clubs[32],
                  homeScore: 0,
                  away: Clubs[33],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match18`, {
                  home: Clubs[34],
                  homeScore: 0,
                  away: Clubs[35],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match19`, {
                  home: Clubs[36],
                  homeScore: 0,
                  away: Clubs[37],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match20`, {
                  home: Clubs[38],
                  homeScore: 0,
                  away: Clubs[39],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match21`, {
                  home: Clubs[40],
                  homeScore: 0,
                  away: Clubs[41],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match22`, {
                  home: Clubs[42],
                  homeScore: 0,
                  away: Clubs[43],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match23`, {
                  home: Clubs[44],
                  homeScore: 0,
                  away: Clubs[45],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round2/match24`, {
                  home: Clubs[46],
                  homeScore: 0,
                  away: Clubs[47],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // 3RD ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3`, {
                  num: 3
                });

                // 3RD ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match1`, {
                  home: Clubs[1],
                  homeScore: 0,
                  away: Clubs[3],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match2`, {
                  home: Clubs[2],
                  homeScore: 0,
                  away: Clubs[0],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match3`, {
                  home: Clubs[5],
                  homeScore: 0,
                  away: Clubs[7],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match4`, {
                  home: Clubs[6],
                  homeScore: 0,
                  away: Clubs[4],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match5`, {
                  home: Clubs[9],
                  homeScore: 0,
                  away: Clubs[11],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match6`, {
                  home: Clubs[10],
                  homeScore: 0,
                  away: Clubs[8],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match7`, {
                  home: Clubs[13],
                  homeScore: 0,
                  away: Clubs[15],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match8`, {
                  home: Clubs[14],
                  homeScore: 0,
                  away: Clubs[12],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match9`, {
                  home: Clubs[17],
                  homeScore: 0,
                  away: Clubs[19],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match10`, {
                  home: Clubs[18],
                  homeScore: 0,
                  away: Clubs[16],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match11`, {
                  home: Clubs[21],
                  homeScore: 0,
                  away: Clubs[23],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match12`, {
                  home: Clubs[22],
                  homeScore: 0,
                  away: Clubs[20],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match13`, {
                  home: Clubs[25],
                  homeScore: 0,
                  away: Clubs[27],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match14`, {
                  home: Clubs[26],
                  homeScore: 0,
                  away: Clubs[24],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match15`, {
                  home: Clubs[29],
                  homeScore: 0,
                  away: Clubs[31],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match16`, {
                  home: Clubs[30],
                  homeScore: 0,
                  away: Clubs[28],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match17`, {
                  home: Clubs[33],
                  homeScore: 0,
                  away: Clubs[35],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match18`, {
                  home: Clubs[34],
                  homeScore: 0,
                  away: Clubs[32],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match19`, {
                  home: Clubs[37],
                  homeScore: 0,
                  away: Clubs[39],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match20`, {
                  home: Clubs[38],
                  homeScore: 0,
                  away: Clubs[36],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match21`, {
                  home: Clubs[41],
                  homeScore: 0,
                  away: Clubs[43],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match22`, {
                  home: Clubs[42],
                  homeScore: 0,
                  away: Clubs[40],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match23`, {
                  home: Clubs[45],
                  homeScore: 0,
                  away: Clubs[47],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round3/match24`, {
                  home: Clubs[46],
                  homeScore: 0,
                  away: Clubs[44],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // 4TH ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4`, {
                  num: 4
                });

                // 4TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match1`, {
                  home: Clubs[3],
                  homeScore: 0,
                  away: Clubs[1],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match2`, {
                  home: Clubs[0],
                  homeScore: 0,
                  away: Clubs[2],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match3`, {
                  home: Clubs[7],
                  homeScore: 0,
                  away: Clubs[5],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match4`, {
                  home: Clubs[4],
                  homeScore: 0,
                  away: Clubs[6],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match5`, {
                  home: Clubs[11],
                  homeScore: 0,
                  away: Clubs[9],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match6`, {
                  home: Clubs[8],
                  homeScore: 0,
                  away: Clubs[10],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match7`, {
                  home: Clubs[15],
                  homeScore: 0,
                  away: Clubs[13],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match8`, {
                  home: Clubs[12],
                  homeScore: 0,
                  away: Clubs[14],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match9`, {
                  home: Clubs[19],
                  homeScore: 0,
                  away: Clubs[17],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match10`, {
                  home: Clubs[16],
                  homeScore: 0,
                  away: Clubs[18],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match11`, {
                  home: Clubs[23],
                  homeScore: 0,
                  away: Clubs[21],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match12`, {
                  home: Clubs[20],
                  homeScore: 0,
                  away: Clubs[22],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match13`, {
                  home: Clubs[27],
                  homeScore: 0,
                  away: Clubs[25],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match14`, {
                  home: Clubs[24],
                  homeScore: 0,
                  away: Clubs[26],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match15`, {
                  home: Clubs[31],
                  homeScore: 0,
                  away: Clubs[29],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match16`, {
                  home: Clubs[28],
                  homeScore: 0,
                  away: Clubs[30],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match17`, {
                  home: Clubs[35],
                  homeScore: 0,
                  away: Clubs[33],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match18`, {
                  home: Clubs[32],
                  homeScore: 0,
                  away: Clubs[34],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match19`, {
                  home: Clubs[39],
                  homeScore: 0,
                  away: Clubs[37],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match20`, {
                  home: Clubs[36],
                  homeScore: 0,
                  away: Clubs[38],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match21`, {
                  home: Clubs[43],
                  homeScore: 0,
                  away: Clubs[41],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match22`, {
                  home: Clubs[40],
                  homeScore: 0,
                  away: Clubs[42],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match23`, {
                  home: Clubs[47],
                  homeScore: 0,
                  away: Clubs[45],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round4/match24`, {
                  home: Clubs[44],
                  homeScore: 0,
                  away: Clubs[46],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // 5TH ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5`, {
                  num: 5
                });

                // 5TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match1`, {
                  home: Clubs[2],
                  homeScore: 0,
                  away: Clubs[1],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match2`, {
                  home: Clubs[0],
                  homeScore: 0,
                  away: Clubs[3],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match3`, {
                  home: Clubs[6],
                  homeScore: 0,
                  away: Clubs[5],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match4`, {
                  home: Clubs[4],
                  homeScore: 0,
                  away: Clubs[7],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match5`, {
                  home: Clubs[10],
                  homeScore: 0,
                  away: Clubs[9],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match6`, {
                  home: Clubs[8],
                  homeScore: 0,
                  away: Clubs[11],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match7`, {
                  home: Clubs[14],
                  homeScore: 0,
                  away: Clubs[13],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match8`, {
                  home: Clubs[12],
                  homeScore: 0,
                  away: Clubs[15],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match9`, {
                  home: Clubs[18],
                  homeScore: 0,
                  away: Clubs[17],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match10`, {
                  home: Clubs[16],
                  homeScore: 0,
                  away: Clubs[19],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match11`, {
                  home: Clubs[22],
                  homeScore: 0,
                  away: Clubs[21],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match12`, {
                  home: Clubs[20],
                  homeScore: 0,
                  away: Clubs[23],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match13`, {
                  home: Clubs[26],
                  homeScore: 0,
                  away: Clubs[25],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match14`, {
                  home: Clubs[24],
                  homeScore: 0,
                  away: Clubs[27],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match15`, {
                  home: Clubs[30],
                  homeScore: 0,
                  away: Clubs[29],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match16`, {
                  home: Clubs[28],
                  homeScore: 0,
                  away: Clubs[31],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match17`, {
                  home: Clubs[34],
                  homeScore: 0,
                  away: Clubs[33],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match18`, {
                  home: Clubs[32],
                  homeScore: 0,
                  away: Clubs[35],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match19`, {
                  home: Clubs[38],
                  homeScore: 0,
                  away: Clubs[37],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match20`, {
                  home: Clubs[36],
                  homeScore: 0,
                  away: Clubs[39],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match21`, {
                  home: Clubs[42],
                  homeScore: 0,
                  away: Clubs[41],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match22`, {
                  home: Clubs[40],
                  homeScore: 0,
                  away: Clubs[43],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match23`, {
                  home: Clubs[46],
                  homeScore: 0,
                  away: Clubs[45],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round5/match24`, {
                  home: Clubs[44],
                  homeScore: 0,
                  away: Clubs[47],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // 6TH ROUND
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6`, {
                  num: 6
                });

                // 6TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match1`, {
                  home: Clubs[1],
                  homeScore: 0,
                  away: Clubs[0],
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match2`, {
                  home: Clubs[3],
                  homeScore: 0,
                  away: Clubs[2],
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match3`, {
                  home: Clubs[5],
                  homeScore: 0,
                  away: Clubs[4],
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match4`, {
                  home: Clubs[7],
                  homeScore: 0,
                  away: Clubs[6],
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match5`, {
                  home: Clubs[9],
                  homeScore: 0,
                  away: Clubs[8],
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match6`, {
                  home: Clubs[11],
                  homeScore: 0,
                  away: Clubs[10],
                  awayScore: 0,
                  state: false,
                  id: 6
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match7`, {
                  home: Clubs[13],
                  homeScore: 0,
                  away: Clubs[12],
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match8`, {
                  home: Clubs[15],
                  homeScore: 0,
                  away: Clubs[14],
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match9`, {
                  home: Clubs[17],
                  homeScore: 0,
                  away: Clubs[16],
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match10`, {
                  home: Clubs[19],
                  homeScore: 0,
                  away: Clubs[18],
                  awayScore: 0,
                  state: false,
                  id: 10
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match11`, {
                  home: Clubs[21],
                  homeScore: 0,
                  away: Clubs[20],
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match12`, {
                  home: Clubs[23],
                  homeScore: 0,
                  away: Clubs[22],
                  awayScore: 0,
                  state: false,
                  id: 12
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match13`, {
                  home: Clubs[25],
                  homeScore: 0,
                  away: Clubs[24],
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match14`, {
                  home: Clubs[27],
                  homeScore: 0,
                  away: Clubs[26],
                  awayScore: 0,
                  state: false,
                  id: 14
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match15`, {
                  home: Clubs[29],
                  homeScore: 0,
                  away: Clubs[28],
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match16`, {
                  home: Clubs[31],
                  homeScore: 0,
                  away: Clubs[30],
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match17`, {
                  home: Clubs[33],
                  homeScore: 0,
                  away: Clubs[32],
                  awayScore: 0,
                  state: false,
                  id: 17
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match18`, {
                  home: Clubs[35],
                  homeScore: 0,
                  away: Clubs[34],
                  awayScore: 0,
                  state: false,
                  id: 18
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match19`, {
                  home: Clubs[37],
                  homeScore: 0,
                  away: Clubs[36],
                  awayScore: 0,
                  state: false,
                  id: 19
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match20`, {
                  home: Clubs[39],
                  homeScore: 0,
                  away: Clubs[38],
                  awayScore: 0,
                  state: false,
                  id: 20
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match21`, {
                  home: Clubs[41],
                  homeScore: 0,
                  away: Clubs[40],
                  awayScore: 0,
                  state: false,
                  id: 21
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match22`, {
                  home: Clubs[43],
                  homeScore: 0,
                  away: Clubs[42],
                  awayScore: 0,
                  state: false,
                  id: 22
                });

                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match23`, {
                  home: Clubs[45],
                  homeScore: 0,
                  away: Clubs[44],
                  awayScore: 0,
                  state: false,
                  id: 23
                });
                db.update(`Seasons/${SeNum}/UEL/Gmatches/round6/match24`, {
                  home: Clubs[47],
                  homeScore: 0,
                  away: Clubs[46],
                  awayScore: 0,
                  state: false,
                  id: 24
                });

                // ADD GROUBS CLUBS
                var cnum = 1;
                Clubs.forEach(club => {
                  if (cnum > 0 && cnum <= 4) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub1/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 4 && cnum <= 8) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub2/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 8 && cnum <= 12) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub3/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 12 && cnum <= 16) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub4/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 16 && cnum <= 20) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub5/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 20 && cnum <= 24) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub6/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 24 && cnum <= 28) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub7/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 28 && cnum <= 32) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub8/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 32 && cnum <= 36) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub9/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 36 && cnum <= 40) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub10/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 40 && cnum <= 44) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub11/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  } else if (cnum > 44 && cnum <= 48) {
                    db.add(`Seasons/${SeNum}/UEL/groubs/groub12/${cnum}`, {
                      club,
                      pts: 0,
                      p: 0,
                      w: 0,
                      d: 0,
                      l: 0,
                      gf: 0,
                      ga: 0,
                      gd: 0,
                      _id: cnum
                    });
                  }
                  cnum++;
                });

                // 1st ROUND
                db.update(`Seasons/${SeNum}/UEL/matches/round1`, {
                  num: 1
                });

                // 1st ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match3`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match4`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 4
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match5`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match6`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 6
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match7`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match8`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 8
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match9`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 9
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match10`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 10
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match11`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 11
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match12`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 12
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match13`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 13
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match14`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 14
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match15`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 15
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round1/match16`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 16
                });

                // 2nd ROUND
                db.update(`Seasons/${SeNum}/UEL/matches/round2`, {
                  num: 3
                });

                // 2nd ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match3`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match4`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 4
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match5`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 5
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match6`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 6
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match7`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 7
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round2/match8`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 8
                });

                // 3RD ROUND
                db.update(`Seasons/${SeNum}/UEL/matches/round3`, {
                  num: 4
                });

                // 4TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/matches/round3/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round3/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round3/match3`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 3
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round3/match4`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 4
                });

                // 4TH ROUND
                db.update(`Seasons/${SeNum}/UEL/matches/round4`, {
                  num: 5
                });

                // 4TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/matches/round4/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });
                db.update(`Seasons/${SeNum}/UEL/matches/round4/match2`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 2
                });

                // 5TH ROUND
                db.update(`Seasons/${SeNum}/UEL/matches/round5`, {
                  num: 5
                });

                // 4TH ROUND MATCHES
                db.update(`Seasons/${SeNum}/UEL/matches/round5/match1`, {
                  home: "لم يتأهل بعد",
                  homeScore: 0,
                  away: "لم يتأهل بعد",
                  awayScore: 0,
                  state: false,
                  id: 1
                });

                // ADD GOAL SCORERS
                db.add(`Seasons/${SeNum}/UEL/GS/1`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 1
                });

                db.add(`Seasons/${SeNum}/UEL/GS/2`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 2
                });

                db.add(`Seasons/${SeNum}/UEL/GS/3`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 3
                });

                db.add(`Seasons/${SeNum}/UEL/GS/4`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 4
                });

                db.add(`Seasons/${SeNum}/UEL/GS/5`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 5
                });

                db.add(`Seasons/${SeNum}/UEL/GS/6`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 6
                });

                db.add(`Seasons/${SeNum}/UEL/GS/7`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 7
                });

                db.add(`Seasons/${SeNum}/UEL/GS/8`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 8
                });

                db.add(`Seasons/${SeNum}/UEL/GS/9`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 9
                });

                db.add(`Seasons/${SeNum}/UEL/GS/10`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 10
                });

                // ADD ASSIST MAKERS
                db.add(`Seasons/${SeNum}/UEL/AS/1`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 1
                });

                db.add(`Seasons/${SeNum}/UEL/AS/2`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 2
                });

                db.add(`Seasons/${SeNum}/UEL/AS/3`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 3
                });

                db.add(`Seasons/${SeNum}/UEL/AS/4`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 4
                });

                db.add(`Seasons/${SeNum}/UEL/AS/5`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 5
                });

                db.add(`Seasons/${SeNum}/UEL/AS/6`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 6
                });

                db.add(`Seasons/${SeNum}/UEL/AS/7`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 7
                });

                db.add(`Seasons/${SeNum}/UEL/AS/8`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 8
                });

                db.add(`Seasons/${SeNum}/UEL/AS/9`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 9
                });

                db.add(`Seasons/${SeNum}/UEL/AS/10`, {
                  player: "لم يتم التعيين",
                  goals: 0,
                  _id: 10
                });

                // ADD SEASONS BEST
                db.add(`Seasons/${SeNum}/UEL/BEST/FORWOARD`, {
                  player: "لم يتم التعيين",
                  _id: "FORWOARD"
                });

                db.add(`Seasons/${SeNum}/UEL/BEST/CENTER`, {
                  player: "لم يتم التعيين",
                  _id: "CENTER"
                });

                db.add(`Seasons/${SeNum}/UEL/BEST/DEFENDER`, {
                  player: "لم يتم التعيين",
                  _id: "DEFENDER"
                });

                db.add(`Seasons/${SeNum}/UEL/BEST/GOALKEEPER`, {
                  player: "لم يتم التعيين",
                  _id: "GOALKEEPER"
                });

                var checker = setInterval(() => {
                  db.get(`Seasons/${SeNum}/UEL`).then(res => {
                    if (res.data.length >= 7) {
                      clearInterval(checker);
                      Swal.fire(
                        "Done!",
                        "UEL Add Successfully To Season " + SeNum,
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
            }
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
          db.get(`Seasons/${seNum}/UEL/matches`).then(res => {
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
              db.get(`Seasons/${seNum}/UEL/matches/round5/match1`).then(res => {
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
                    .ref(`playersData/hassan/toursStats/uel`)
                    .transaction(data => {
                      data.win++;
                      return data;
                    })
                    .then(() => {
                      db.update(`Seasons/${seNum}/UEL`, {
                        state: true
                      }).then(location.reload());
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                } else if (winner == "مانشيستر سيتي") {
                  firebase
                    .database()
                    .ref(`playersData/mo/toursStats/uel`)
                    .transaction(data => {
                      data.win++;
                      return data;
                    })
                    .then(() => {
                      db.update(`Seasons/${seNum}/UEL`, {
                        state: true
                      }).then(location.reload());
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                } else {
                  db.update(`Seasons/${seNum}/UEL`, {
                    state: true
                  }).then(location.reload());
                }
              });
            }
          });
        }
      });
    },
    HandleResults (HomeClubId, AwayClubId, homeScore, awayScore, home, away) {
      var seNum = $(".select select").val();
      // Handling Home Result
      db.get(`Seasons/${seNum}/UEL/groubs/${HomeClubId}`).then(res => {
        var p = res.data[7] + 1;
        var gf = res.data[5] + homeScore;
        var ga = res.data[3] + awayScore;
        var gd = gf - ga;
        if (homeScore > awayScore) {
          var w = res.data[9] + 1;
          var l = res.data[6];
          var d = res.data[2];
          var pts = res.data[8] + 3;
        } else if (homeScore < awayScore) {
          var w = res.data[9];
          var l = res.data[6] + 1;
          var d = res.data[2];
          var pts = res.data[8];
        } else {
          var w = res.data[9];
          var l = res.data[6];
          var d = res.data[2] + 1;
          var pts = res.data[8] + 1;
        }
        db.update(`Seasons/${seNum}/UEL/groubs/${HomeClubId}`, {
          p,
          gf,
          ga,
          gd,
          w,
          l,
          d,
          pts
        });
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
              db.get(`playersData/hassan/vsClub/matchesStats`).then(
                mat => {
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
                }).then(() => {
                  Swal.fire("تم تسجيل نتيجة المباراة", "", "success");
                });
              });
            }
          });
        }
      });

      // Handling Away Result
      db.get(`Seasons/${seNum}/UEL/groubs/${AwayClubId}`).then(res => {
        var p = res.data[7] + 1;
        var gf = res.data[5] + awayScore;
        var ga = res.data[3] + homeScore;
        var gd = gf - ga;
        if (awayScore > homeScore) {
          var w = res.data[9] + 1;
          var l = res.data[6];
          var d = res.data[2];
          var pts = res.data[8] + 3;
        } else if (awayScore < homeScore) {
          var w = res.data[9];
          var l = res.data[6] + 1;
          var d = res.data[2];
          var pts = res.data[8];
        } else {
          var w = res.data[9];
          var l = res.data[6];
          var d = res.data[2] + 1;
          var pts = res.data[8] + 1;
        }
        db.update(`Seasons/${seNum}/UEL/groubs/${AwayClubId}`, {
          p,
          gf,
          ga,
          gd,
          w,
          l,
          d,
          pts
        }).then(() => {
          if (away == "ليستر سيتي") {
            db.get(`playersData/hassan/matchesStats`).then(matches => {
              if (home == "مانشيستر سيتي") {
                db.get(`playersData/hassan/vsClub/matchesStats`).then(
                  mat => {
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
                    db.get(`playersData/hassan/goalsStats`).then(
                      goals => {
                        var scored = goals.data[0] + awayScore;
                        var scoredIn = goals.data[1] + homeScore;
                        db.update(`playersData/hassan/goalsStats`, {
                          scored,
                          scoredIn
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
                    db.update(`playersData/hassan/vsClub/matchesStats`, {
                      win,
                      lose,
                      draw
                    });
                    db.get(`playersData/hassan/vsClub/goalsStats`).then(
                      goals => {
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
                  db.get(`playersData/mo/vsClub/goalsStats`).then(
                    goals => {
                      var scored = goals.data[0] + awayScore;
                      var scoredIn = goals.data[1] + homeScore;
                      db.update(`playersData/mo/vsClub/goalsStats`, {
                        scored,
                        scoredIn
                      }).then(() => {
                        Swal.fire(
                          "تم تسجيل نتيجة المباراة",
                          "",
                          "success"
                        );
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
                  }).then(() => {
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
    },
    confirmSkip () {
      Swal.fire({
        title: "هل تريد تخطي الموسم الحالي ؟",
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
          this.skipSeason()
        }
      })
    },
    async skipSeason () {
      var seNum = $(".select select").val();
      const newGmatches = {}
      const {data} = await db.get(`Seasons/${seNum}/UEL/Gmatches`)
      
      // update matches
      data.forEach((round, R) => {
        var Round = {}
        Object.values(round).forEach((match, M) => {
          if (typeof match == 'object') {
            var Match = this.chooseWinner(match).MATCH
            Round[`match${M+1}`] = Match
          }
        })
          newGmatches[`round${R+1}`] = Round
      })

      const clubs = []
      const groubs = await db.get(`Seasons/${seNum}/UEL/groubs`)
      groubs.data.forEach((groub, i) => {
        Object.values(groub).forEach(club => {
          var num = 1;
          if (i == 0) num = 1
          if (i == 1) num = 10
          if (i == 2) num = 11
          if (i == 3) num = 12
          if (i == 4) num = 2
          if (i == 5) num = 3
          if (i == 6) num = 4
          if (i == 7) num = 5
          if (i == 8) num = 6
          if (i == 9) num = 7
          if (i == 10) num = 8
          if (i == 11) num = 9
          clubs.push([club._id, club.club, num])
        })
      })

      var skipNow = 0;

      // update points
      Object.values(newGmatches).forEach((round, R) => {
        Object.values(round).forEach((match, M) => {
          if (typeof match == 'object') {
            var HomeClubId
            var AwayClubId
            clubs.forEach(c => {
              if (c[1] == match.home) {
                HomeClubId = `groub${c[2]}/${c[0]}`
              }
              if (c[1] == match.away) {
                AwayClubId = `groub${c[2]}/${c[0]}`
              }
            })
            setTimeout(() => {
              this.HandleResults(HomeClubId, AwayClubId, match.homeScore, match.awayScore, match.home, match.away)
              skipNow += 1
            }, 700)
          }
        })
      })

      await db.update(`Seasons/${seNum}/UEL/Gmatches`, newGmatches)

      const checker = setInterval(() => {
        if (skipNow >= 144) {
          this.skipKoMatches()
          clearInterval(checker)
        }
      }, 700)

    },
    async skipKoMatches () {
      var seNum = $(".select select").val();
      const R32 = this.getTheQualified()

      const R16 = [];

      R32.forEach(async (c, i) => {
        const I = i + 1
        if (I % 2 == 0) {
          const path = `Seasons/${seNum}/UEL/matches/round1/match${I/2}`
          const match = {
            away:  c,
            awayScore: 0,
            home: R32[i - 1],
            homeScore: 0,
            id: I/2,
            state: false
          }
          const R32Match = this.chooseWinner(match, true)
          R16.push(R32Match.winner)
          await db.update(path, R32Match.MATCH)
        }
      })
      
      const R8 = []

      this.shuffle(R16).forEach(async (c, i) => {
        const I = i + 1
        if (I % 2 == 0) {
          const path = `Seasons/${seNum}/UEL/matches/round2/match${I/2}`
          const match = {
            away:  c,
            awayScore: 0,
            home: R16[i - 1],
            homeScore: 0,
            id: I/2,
            state: false
          }
          const R16Match = this.chooseWinner(match, true)
          R8.push(R16Match.winner)
          await db.update(path, R16Match.MATCH)
        }
      })
      
      const R4 = []

      this.shuffle(R8).forEach(async (c, i) => {
        const I = i + 1
        if (I % 2 == 0) {
          const path = `Seasons/${seNum}/UEL/matches/round3/match${I/2}`
          const match = {
            away:  c,
            awayScore: 0,
            home: R8[i - 1],
            homeScore: 0,
            id: I/2,
            state: false
          }
          const R8Match = this.chooseWinner(match, true)
          R4.push(R8Match.winner)
          await db.update(path, R8Match.MATCH)
        }
      })
      
      const R2 = []

      this.shuffle(R4).forEach(async (c, i) => {
        const I = i + 1
        if (I % 2 == 0) {
          const path = `Seasons/${seNum}/UEL/matches/round4/match${I/2}`
          const match = {
            away:  c,
            awayScore: 0,
            home: R4[i - 1],
            homeScore: 0,
            id: I/2,
            state: false
          }
          const R4Match = this.chooseWinner(match, true)
          R2.push(R4Match.winner)
          await db.update(path, R4Match.MATCH)
        }
      })

      R2.forEach(async (c, i) => {
        const I = i + 1
        if (I % 2 == 0) {
          const path = `Seasons/${seNum}/UEL/matches/round5/match${I/2}`
          const match = {
            away:  c,
            awayScore: 0,
            home: R2[i - 1],
            homeScore: 0,
            id: I/2,
            state: false
          }
          const R2Match = this.chooseWinner(match, true)
          await db.update(path, R2Match.MATCH)
        }
      })

      this.EndThisSeason()
      
      Swal.fire(
        "تم تخطي البطولة بنجاح",
        "",
        "success"
      );
    },
    chooseWinner(match, ko = false) {
      // Default Powers
      var homePower = 2
      var awayPower = 2

      // Get Powers
      this.powers.forEach(pwr => {
        if (match.home == pwr[0]) {
          homePower = pwr[1]
        }
        if (match.away == pwr[0]) {
          awayPower = pwr[1]
        }
      })
      
      var teamsToSelect = [];
      // Check if The Match IS KO or GS
      if (!ko) teamsToSelect.push('Draw')

      var winResults = [[1,0], [2,0], [2,1], [3,1], [4,1], [4,2], [3,2]]
      var drawResults = [[1,1], [2,2], [3,3]]

      for (var i = 0; i < homePower; i++) {
        teamsToSelect.push(match.home)
      }
      for (var i = 0; i < awayPower; i++) {
        teamsToSelect.push(match.away)
      }
      
      // GET A WINNER
      const winner = teamsToSelect[Math.floor(Math.random() * teamsToSelect.length)]

      // SET A RESULT
      if (winner == "Draw") {
        var result = drawResults[Math.floor(Math.random() * drawResults.length)]
      } else {
        var result = winResults[Math.floor(Math.random() * winResults.length)]
      }
      
      // RESTRUCUTE MATCH OBJECT
      if (winner == match.home) {
        var MATCH = {
          home: match.home,
          away: match.away,
          homeScore: result[0],
          awayScore: result[1],
          state: true,
          id: match.id
        }
      } else {
        var MATCH = {
          home: match.home,
          away: match.away,
          homeScore: result[1],
          awayScore: result[0],
          state: true,
          id: match.id
        }
      }

      return {MATCH, winner}
      
    },
    getTheQualified () {
      var qualified = []
      document.querySelectorAll('.league td:nth-of-type(1)').forEach(t => {
        if (t.textContent == 1 || t.textContent == 2) {
          qualified.push(t.nextElementSibling.textContent)
        }
      })
      const otherTeams = ['أوليميك ليون', 'موناكو', 'إنترميلان', 'نابولي', 'فيردير بريمين', 'اتليتيك بيلباو', 'سيسكا موسكو', 'روما']
      const allTeams = otherTeams.concat(qualified)

      return this.shuffle(allTeams)
    },
    shuffle (array) {
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
  },
  created() {
    window.scrollTo(0, 0);
    document.title = "ROPT | UEFA EUROPA LEAGUE";
    $(".preloader").show();

    // GET SEASONS SELECT OPTIONS
    db.get("Seasons")
      .then(res => {
        res.data.forEach(season => {
          var seNum = season.num;
          db.get(`Seasons/${seNum}/UEL`).then(res => {
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
          if (res.data[0].UEL) {
            var seNum = res.data[0].num;
          } else {
            var seNum = $(".select select").val();
          }

          // Get Season State
          db.get(`Seasons/${seNum}/UEL`)
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
    // SET GROUPS MATCH RESULT
    $(".AllMatches").on("click", ".match i.editGResult", function() {
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
          db.update(`Seasons/${seNum}/UEL/Gmatches/${id}`, {
            homeScore,
            awayScore,
            state: true
          }).then(() => {
            var HomeClubId;
            var AwayClubId;

            Object.values($(".league tr td:nth-child(2)")).forEach(td => {
              if (td.innerHTML == home) {
                if (td.id > 0 && td.id <= 4) {
                  HomeClubId = `groub1/${td.id}`;
                } else if (td.id > 4 && td.id <= 8) {
                  HomeClubId = `groub2/${td.id}`;
                } else if (td.id > 8 && td.id <= 12) {
                  HomeClubId = `groub3/${td.id}`;
                } else if (td.id > 12 && td.id <= 16) {
                  HomeClubId = `groub4/${td.id}`;
                } else if (td.id > 16 && td.id <= 20) {
                  HomeClubId = `groub5/${td.id}`;
                } else if (td.id > 20 && td.id <= 24) {
                  HomeClubId = `groub6/${td.id}`;
                } else if (td.id > 24 && td.id <= 28) {
                  HomeClubId = `groub7/${td.id}`;
                } else if (td.id > 28 && td.id <= 32) {
                  HomeClubId = `groub8/${td.id}`;
                } else if (td.id > 32 && td.id <= 36) {
                  HomeClubId = `groub9/${td.id}`;
                } else if (td.id > 36 && td.id <= 40) {
                  HomeClubId = `groub10/${td.id}`;
                } else if (td.id > 40 && td.id <= 44) {
                  HomeClubId = `groub11/${td.id}`;
                } else if (td.id > 44 && td.id <= 48) {
                  HomeClubId = `groub12/${td.id}`;
                }
              } else if (td.innerHTML == away) {
                if (td.id > 0 && td.id <= 4) {
                  AwayClubId = `groub1/${td.id}`;
                } else if (td.id > 4 && td.id <= 8) {
                  AwayClubId = `groub2/${td.id}`;
                } else if (td.id > 8 && td.id <= 12) {
                  AwayClubId = `groub3/${td.id}`;
                } else if (td.id > 12 && td.id <= 16) {
                  AwayClubId = `groub4/${td.id}`;
                } else if (td.id > 16 && td.id <= 20) {
                  AwayClubId = `groub5/${td.id}`;
                } else if (td.id > 20 && td.id <= 24) {
                  AwayClubId = `groub6/${td.id}`;
                } else if (td.id > 24 && td.id <= 28) {
                  AwayClubId = `groub7/${td.id}`;
                } else if (td.id > 28 && td.id <= 32) {
                  AwayClubId = `groub8/${td.id}`;
                } else if (td.id > 32 && td.id <= 36) {
                  AwayClubId = `groub9/${td.id}`;
                } else if (td.id > 36 && td.id <= 40) {
                  AwayClubId = `groub10/${td.id}`;
                } else if (td.id > 40 && td.id <= 44) {
                  AwayClubId = `groub11/${td.id}`;
                } else if (td.id > 44 && td.id <= 48) {
                  AwayClubId = `groub12/${td.id}`;
                }
              }
            });

            this.HandleResults(HomeClubId, AwayClubId, homeScore, awayScore, home, away)
            
          });
        }
      });
    });

    // ADD CLUBS TO KO
    $(".AllMatches").on("click", ".match .addClub", function() {
      var seNum = $(".select select").val();
      var id = $(this)
        .parent()
        .attr("id");
      Swal.fire({
        title: "أختر الفرق المتأهلة لهذه المباراة",
        html: `
              <label>الفريق الاول</label>
              <input id="team1" class="swal2-input" type="text" style="display:block"> 
              <label>الفريق الثاني</label>
              <input id="team2" class="swal2-input" type="text" style="display:block">
              `,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("team1").value,
            document.getElementById("team2").value
          ];
        }
      }).then(val => {
        if (val.value) {
          var team1 = val.value[0];
          var team2 = val.value[1];
          db.update(`Seasons/${seNum}/UEL/matches/${id}`, {
            home: team1,
            away: team2
          });
        }
      });
    });

    // SET KO MATCHES RESULT
    $(".AllMatches").on("click", ".match .editKResult", function() {
      var seNum = $(".select select").val();
      var id = $(this)
        .parent()
        .attr("id");
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
          db.update(`Seasons/${seNum}/UEL/matches/${id}`, {
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
              }, 2500);
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
          db.update(`Seasons/${seNum}/UEL/GS/${id}`, {
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
          db.update(`Seasons/${seNum}/UEL/AS/${id}`, {
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
          db.update(`Seasons/${seNum}/UEL/BEST/${id}`, {
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
