<template>
  <div class="news">
    <AltHeader Header="أبرز الاخبار"></AltHeader>

    <div v-if="!subscribed && user" class="subscribeToNotifications" title="Subscribe To The News Notifications" @click="subscribeToNotifications">
      <i class="fas fa-bell"></i>
    </div>

    <section class="all-news">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <a v-if="user" href="/news/add" tag="button" class="newNews"><i class="fas fa-newspaper"></i> إضافة خبر جديد</a>
          </div>
          <div class="col-lg-9 col-12">

            <div class="post" v-for="post in posts" :key="post.id">
              <img :src="post.coverImg">
              <div class="details">
                <div class="others">
                  <span><i class="far fa-user"></i> {{post.author}}</span>
                  <span><i class="far fa-clock"></i> {{post.date}}</span>
                  <span><i class="far fa-comments"></i> {{post.commentsNumber}}</span>
                </div>
                <a :href="'/news/show/'+ post.id" class="title">{{post.title}}</a>
                <p>{{post.details}}</p>
                <a :href="'/news/show/'+ post.id" class="readMore">قراءة باقي الخبر <i class="fas fa-long-arrow-alt-left"></i></a>
              </div>
            </div>

          </div>

          <div class="col-lg-3 d-none d-lg-block">
            <div class="sidebar mb-4">
              <h4>أبرز الاخبار</h4>
              <ul>
                <li v-for="post in sideposts" :key="post.id">
                  <a :href="'/news/show/'+ post.id">{{post.title}}</a>
                </li>
              </ul>
            </div>
            <div class="sidebar">
              <h4>المشرفين</h4>
              <ul>
                <li style="font-family: 'Poppins', sans-serif">Hassan Ali</li>
                <li style="font-family: 'Poppins', sans-serif">Moustafa Naser</li>
              </ul>
            </div>
          </div>

        </div>
        <button class="loadMore" @click="showMore">أظهر المزيد</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.subscribeToNotifications{
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 9998;
  padding: 10px 12px;
  border-radius: 50%;
  overflow: hidden;
  background: #9d0404;
  box-shadow: 0 3px 6px rgba($color: #000, $alpha: 0.3);
  border: 1px solid #ccc;
  cursor: pointer;
  i{
    color: #fff;
    font-size: 24px;
    @include xs {
      font-size: 22px;
    }
  }
  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 7px 8px rgba($color: #000, $alpha: 0.5);
  }
}
.all-news{
  padding: 100px 0;
  background: #f5f5f5;
  text-align: right;
  .newNews{
    display: block;
    text-decoration: none;
    text-align: center;
    font-family: 'changa';
    width: 25%;
    margin: 0 0 25px;
    padding: 10px 50px;
    border: 0;
    border-radius: 10px;
    background: #fff;
    color: $mc;
    font-weight: bold;
    box-shadow: 0 0 5px rgba($color: #000, $alpha: 0.15);
    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 4px 5px rgba($color: #000, $alpha: 0.2);
    }
    @include xs {
      width: 100%;
    }
  }
  .post{
    margin-bottom: 30px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    img{
      max-height: 400px;
    }
    .details{
      text-align: right;
      padding: 20px;
      span{
        margin-right: 15px;
        color: #909090;
        font-size: 13px;
        @include sm {
          font-size: 12px;
        }
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
      p{
        line-height: 30px;
        margin-bottom: 30px;
        font-family: one;
        img{
          display: none;
        }
        hr{
          display: none;
        }
        @include sm {
          font-size: 13px;
          line-height: 20px;
        }
      }
      span{
        font-family: 'Poppins', sans-serif;
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
        padding: 0 10px;
        font-family: 'changa';
        i{
          color: $mc;
          font-size: 20px;
          position: relative;
          top: 2px;
          right: 5px;
        }
        &:hover{
          transform: none;
          color: #FBC02D;
          i{
            color: #FBC02D;
            right: 15px;
          }
        }
      }
    }
  }
  .loadMore{
    display: block;
    margin: 10px auto 0;
    border-radius: 25px;
    padding: 10px 50px;
    background: $mc;
    border-color: $mc;
    &:hover{
      transform: none;
      background: #fff;
      color: $mc;
    }
  }
}

.sidebar{
  text-align: right;
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba($color: #000, $alpha: 0.15);
  h4{
    padding: 15px;
    margin-bottom: 0;
    font-family: 'changa';
    &::after{
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      margin: 10px 0 0;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }
  ul{
    li{
      padding: 10px;
      font-family: 'changa';
      background: none;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      a{
        display: block;
        text-decoration: none;
        font-family: 'changa';
        color: inherit;
        &:hover{
          color: $mc;
        }
        &::before{
          content: '»';
          position: relative;
          left: 3px;
        }
      }
    }
  }
}
</style>

<script>
import AltHeader from "../components/AltHeader.vue";

export default {
  name: "news",
  components: {
    AltHeader
  },
  data(){
    return {
      viewed: 7,
      posts: [],
      sideposts: [],
      user: false,
      subscribed: false
    }
  },
  methods: {
    showMore(){
      this.viewed += 5;
      this.posts = [];
      db.get('news', {
        order: {
          type: "child",
          value: "perority"
        }, 
        filter: {
          type: "last",
          value: this.viewed
        },
        sort: ["perority"]
      }).then(res => {
        res.data.forEach(post => {
            this.posts.push(post);
        });
        this.posts.forEach((unEditedPost, i) => {
          console.log(unEditedPost);
          db.get(`users/${unEditedPost.author}`).then(user => {
            var postAuthor = user.data[5];
            this.posts[i].author = postAuthor;
          });
        });
      });
    },
    subscribeToNotifications(){
      notifications.subscribe();
      firebase.messaging().getToken().then(token => {
        if(token){
          Swal.fire('تم الاشتراك في الاشعارات بنجاح', '', 'success').then(() => {this.subscribed = true});
        }
      });
    }
  },
  created(){
    auth.onLogin(() => {
      this.user = true;
      firebase.messaging().getToken().then(token => {
        const options = { 
            order: { type: "child", value: "token" }, 
            filter: { type: "equal", value: token  }
        };
        db.get(`tokens`, options).then(res => {
            if(res){
              this.subscribed = true;
            }
        });
      });
    });

    window.scrollTo(0, 0);
    document.title = "ROPT | LATEST NEWS";
    $(".preloader").show();
    // GET ALL NEWS
    db.get('news', {
      order: {
        type: "child",
        value: "perority"
      }, 
      filter: {
        type: "last",
        value: this.viewed
      },
      sort: ["perority"]
    }).then(res => {
      res.data.forEach(post => {
          let {title, id, details, author, comments, date, coverImg} = post;
          let commentsNumber = 0;
          if(comments != undefined){
            Object.values(comments).forEach(comment => {
              if(comment.author != undefined){
                commentsNumber++;
              }
            });
          }

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

    // GET SIDEBAR NEWS
    db.get('news', {
      order: {
        type: "child",
        value: "perority"
      }, 
      filter: {
        type: "last",
        value: 7
      },
      sort: ["perority"]
    }).then(res => {
      res.data.forEach(post => {
        this.sideposts.push(post);
      });
    });
  }
};
</script>
