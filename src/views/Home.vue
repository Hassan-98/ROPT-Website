<template>
  <div class="home">
    <MainHeader></MainHeader>

    <section class="welcome">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12" data-aos="fade-up" data-aos-duration="900">
            <h6>مرحباُ بكم</h6>
            <h2>نتائج بطولات البيس</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
ومن هنا ،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع </p>
          <button @click="location.href='/tournaments'">أبدأ الان</button>
          </div>
          <div class="col-md-6 col-12" data-aos="fade-up" data-aos-duration="1300">
            <img src="../assets/images/about-home.png">
          </div>
        </div>
      </div>
    </section>

    <section class="recent">
      <h2>المبارايات المقبلة</h2>
      <div class="cont">
        <div class="left" data-aos="fade-right" data-aos-duration="1000">
          <img src="https://d33wubrfki0l68.cloudfront.net/03447586027d016d44fbfb77ab0d82341e961398/c6e09/imgs/clubs/wol.svg">
          <span>
            VS
            <p><i class="fas fa-trophy"></i> الدوري الانجليزي</p>
            <p><i class="far fa-calendar-alt"></i> الجولة 24</p>
          </span>
          <img src="https://d33wubrfki0l68.cloudfront.net/749d3923739868072b6fb71df8a0a6afbf4e090c/6ad35/imgs/clubs/mancity.svg">
        </div>
        <div class="right" data-aos="fade-left" data-aos-duration="1000">
          <img src="https://d33wubrfki0l68.cloudfront.net/bcae75792371a590d2a7bfd9729d5560a3ff83a1/ca9f1/imgs/clubs/lei.svg">
          <span>
            VS
            <p><i class="fas fa-trophy"></i> الدوري الانجليزي</p>
            <p><i class="far fa-calendar-alt"></i> الجولة 24</p>
          </span>
          <img src="https://d33wubrfki0l68.cloudfront.net/9d394001c05d6d5414f873f7f36cacd008683bed/7d9f3/imgs/clubs/che.svg">
        </div>
      </div>
    </section>

    <section class="ranking">
      <h2>متصدري الدوري</h2>
      <div class="table" data-aos="fade-up" data-aos-duration="1300">
        <table>
          <tr>
            <th>#</th>
            <th>الفريق</th>
            <th>لعب</th>
            <th>ف</th>
            <th>ت</th>
            <th>خ</th>
            <th>نقاط</th>
          </tr>
          <tr v-for="club in league" :key="club._id">
            <td>{{club.rank}}</td>
            <td>{{club.club}}</td>
            <td>{{club.p}}</td>
            <td>{{club.w}}</td>
            <td>{{club.d}}</td>
            <td>{{club.l}}</td>
            <td>{{club.pts}}</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="newsHome">
      <h2>أخر الاخبار</h2>

      <div class="container" data-aos="fade-up" data-aos-duration="1300">

        <div class="row singlePost mb-4" v-for="post in posts" :key="post.id">
          <div class="col-lg-4 col-md-5 col-12 image">
            <img :src="post.coverImg">
          </div>
          <div class="col-lg-8 col-md-7 col-12">
            <div class="details">
              <a :href="'/news/show/'+ post.id" class="title">{{post.title}}</a>
              <span><i class="far fa-user"></i> {{post.author}}</span>
              <span><i class="far fa-clock"></i> {{post.date}}</span>
              <span><i class="far fa-comments"></i> {{post.commentsNumber}}</span>
              <p>{{post.details}}</p>
              <a :href="'/news/show/'+ post.id" class="readMore"><i class="fas fa-long-arrow-alt-right"></i> أقرأ المزيد</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="numbers">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="number" data-aos="fade-left" data-aos-duration="1300">
              <img src="../assets/images/trophy.svg">
              <h2>9</h2>
              <h4>بطولات</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="number" data-aos="fade-down" data-aos-duration="1300">
              <img src="../assets/images/matches.svg">
              <h2>127</h2>
              <h4>مباريات</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="number" data-aos="fade-up" data-aos-duration="1300">
              <img src="../assets/images/award.svg">
              <h2>27</h2>
              <h4>جوائز</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="number" data-aos="fade-right" data-aos-duration="1300">
              <img src="../assets/images/players.svg">
              <h2>2</h2>
              <h4>لاعبين</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-us">
      <div class="overlay">
        <h2>تواصل معنا</h2>
        <div class="form">
          <label data-aos="fade-left" data-aos-duration="1300">الاسم الكامل</label>
          <input type="text" class="name" placeholder="الاسم الكامل" data-aos="fade-left" data-aos-duration="1300" v-model="message.fullName">
          <label data-aos="fade-right" data-aos-duration="1300">البريد الالكتروني</label>
          <input type="text" class="email" placeholder="البريد الالكتروني" data-aos="fade-right" data-aos-duration="1300" v-model="message.email">
          <label data-aos="zoom-in" data-aos-duration="1300">أترك رسالة</label>
          <textarea class="message" cols="30" rows="10" placeholder="أكتب رسالتك هنا" data-aos="zoom-in" data-aos-duration="1300" v-model="message.message"></textarea>
          <button data-aos="fade-up" data-aos-duration="1300" @click="sendMessage">إرسال الرسالة</button>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss">
.welcome{
  padding: 100px 0;
  text-align: right;
  h6{
    font-weight: bold;
    font-family: 'changa';
  }
  h2{
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
    font-family: 'one';
  }
  p{
    color: #555;
    line-height: 35px;
    margin-bottom: 25px;
    font-family: 'changa';
    @include sm {
      line-height: 25px;
    }
  }
  button{
    background: $mc;
    border-radius: 8px;
    padding: 8px 50px;
    outline: none;
    border: 1px solid $mc;
    font-family: 'changa';
    &:hover{
      background: #fff;
      color: $mc;
    }
  }
}

.recent{
  padding: 60px 0;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
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
  .cont{
    direction: ltr;
    background: rgb(24, 48, 82);
    padding: 0;
    text-align: center;
    color: #fff;
    display: flex;
    box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.2);
    @include sm {
      flex-direction: column;
    }
    .right, .left{
      display: flex;
      width: 50%;
      justify-content: center;
      padding: 70px 0;
      margin: 0;
      @include sm {
        width: 100%;
      }
      img{
        width: 150px;
        height: 150px;
        background: rgba($color: #000000, $alpha: 0.2);
        padding: 15px;
        border-radius: 50%;
        @include md {
          padding: 5px;
          width: 100px;
          height: 100px;
        }
        @include sm {
          padding: 5px;
          width: 100px;
          height: 100px;
        }
        @include xxs {
          padding: 5px;
          width: 80px;
          height: 80px;
        }
      }
      span{
        color: #fff;
        font-weight: bold;
        margin: 10px 30px;
        position: relative;
        top: 25px;
        font-size: 36px;
        letter-spacing: 3px;
        font-family: 'changa';
        @include md {
          margin: 10px;
          font-size: 24px;
          top: 10px;
        }
        p{
          margin: 0;
          font-family: 'changa';
          font-size: 13px;
          letter-spacing: 1px;
          @include md {
            font-size: 12px;
          }
          @include sm {
            font-size: 10px;
          }
        }
      }
    }
    .right{
      background: $mc;
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
      @include sm {
        clip-path: none;
      }
    }
  }
}

.ranking{
  padding: 60px 0 100px;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
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
  .table{
    @include sm {
      overflow-x: scroll;
    }
    table{
      width: 75%;
      margin: auto;
      tr{
        &:first-child{
          background: $mc;
          color: #fff;
        }
        &:nth-child(even){
          background: #f6f6f6;
        }
        td, th{
          font-family: 'changa';
          font-weight: bold;
          border: 0;
          text-align: center;
          padding: 12px;
          @include sm {
            font-size: 13px;
          }
        }
      }
    }
  }
}

.newsHome{
  padding: 100px 0;
  background: #F6F6F6;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 20px auto 50px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }
  .singlePost{
    text-align: right;
    background: #fff;
    box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    overflow: hidden;
    margin: 0;
    .details{
      padding: 25px 0;
      @include md {
        padding: 15px 0;
        padding-right: 5px;
      }
      @include sm {
        padding: 25px 5px;
      }
      a.title{
        display: block;
        text-decoration: none;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        color: $mc;
        margin-bottom: 15px;
        font-family: 'changa';
        cursor: pointer;
        &:hover{
          color: #FBC02D;
        }
        @include md {
          font-size: 18px;
        }
      }
      span{
        font-size: 13px;
        color: #909090;
        margin-right: 15px;
        font-family: 'Poppins', sans-serif;
      }
      p{
        font-family: 'changa';
        line-height: 30px;
        margin: 20px 0;
        width: 90%;
        @include md {
          line-height: 20px;
          margin: 10px 0;
          width: 95%;
          font-size: 13px;
        }
      }
      a.readMore{
        display: block;
        text-decoration: none;
        background: none;
        color: $mc;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        box-shadow: none;
        padding: 0 5px;
        font-family: 'changa';
        i{
          color: $mc;
          font-size: 20px;
          position: relative;
          top: 3px;
          left: 5px;
        }
        &:hover{
          transform: none;
          color: #FBC02D;
          i{
            color: #FBC02D;
            left: 15px;
          }
        }
      }
    }
    .image{
      padding-right: 0;
      @include sm {
        padding-left: 0;
      }
      img{
        max-height: 400px;
      }
    }
  }
}

.numbers{
  padding: 70px 0 60px;
  .number{
    text-align: center;
    color: $mc;
    margin: 0 0 30px;
    @include sm {
      margin: 0 0 50px;
    }
    img{
      width: 60px;
      height: 60px;
    }
    h2{
      font-family: 'Poppins', sans-serif;
      &::before{
        content: "";
        display: block;
        width: 70%;
        height: 2px;
        margin: 0 auto 10px;
        background: $mc;
        border-radius: 50%;
        @include sm {
          width: 50%;
        }
      }
      margin: 20px 0 10px;
      font-weight: bold;
    }
  }
}

.contact-us{
  background: url("../assets/images/contact.jpg") fixed no-repeat;
  background-size: cover;
  color: #fff;
  .overlay{
    padding: 60px 0;
    @include overlay($mc, 0.8);
    h2{
      text-align: center;
      color: #fff;
      font-weight: bold;
      &::after{
        content: "";
        display: block;
        width: 25%;
        height: 2px;
        margin: 20px auto 50px;
        background: #fff;
        border-radius: 50%;
        @include sm {
          width: 50%;
        }
      }
    }
    .form{
      text-align: center;
      input, textarea {
          font-family: 'changa';
        display: block;
        margin: 0 auto 15px;
        width: 50%;
        background: rgba($color: #000000, $alpha: 0.4);
        border-color: rgba($color: #000000, $alpha: 0.4);
        resize: none;
        color: #fff;
        &:focus{
        border-color: rgba($color: #fff, $alpha: 0.5); 
        }
        @include sm {
          width: 90%;
        }
      }
      button{
        font-family: 'changa';
        background: rgba($color: #000, $alpha: 0.5);
        &:hover{
          background: #fff;
          color: $mc;
          transform: none;
        }
      }
    }
  }
}
</style>

<script>
import MainHeader from "../components/MainHeader.vue";

export default {
  name: "home",
  components: {
    MainHeader
  },
  data(){
    return {
      league: [],
      posts: [],
      message: {
        fullName: null,
        email: null,
        message: null,
        date: null,
        perority: null
      }
    }
  },
  methods: {
    sendMessage(){
      if(this.message.fullName != null && this.message.email != null && this.message.message != null){
        this.message.date = new Date().toLocaleDateString();
        this.message.perority = Date.now();
        db.push(`messages`, this.message).then(() => {
          this.message = {
            fullName: null,
            email: null,
            message: null,
            date: null,
            perority: null
          }
          Swal.fire(
            'تم إرسال الرسالة بنجاح',
            'لقد تم إرسال رسالتك إلى مديري الموقع',
            'success'
          )
        });
      } else {
        Swal.fire({
          type: 'error',
          title: 'خطأ',
          text: 'لا يمكن ترك إحدى الخانات فارغة'
        });
      }
    }
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | HOME";
    $(".preloader").show();

    // GET SEASON RANKING
    db.get("Seasons", {order:{type:"key"},filter:{type:"last", value:1}}).then(res => {
      if(res.data[0].PL){
        var seNum = res.data[0].num;
      } else {
        var seNum = res.data[0].num - 1;
      }

      // GET SEASONS RANKING
      db.get(`Seasons/${seNum}/PL/clubs`, {sort: ["pts", "gd", "gf", "-ga"]}).then(response => {
        var num = 1;
        response.data.forEach(club => {
          if(num <= 10){
            club.rank = num;
            this.league.push(club);
          }
          num++;
        });
      }).then(setTimeout(() => {
          $(".preloader").addClass("hide");
        }, 2000));
    });

    // GET ALL NEWS
    db.get('news', {
      order: {
        type: "child",
        value: "perority"
      }, 
      filter: {
        type: "last",
        value: 4
      },
      sort: ["perority"]
    }).then(res => {
      res.data.forEach(post => {
          let {title, id, details, author, comments, date, coverImg} = post;
          let commentsNumber = 0;
          Object.values(comments).forEach(comment => commentsNumber++);

          let handledPost = {
            title, id, date, details, coverImg, author, commentsNumber
          }
          this.posts.push(handledPost);
      });

      

      this.posts.forEach((unEditedPost, i) => {
        db.get(`users/${unEditedPost.author}`).then(user => {
          var postAuthor = user.data[5];
          this.posts[i].author = postAuthor;
        });
      });
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
