<template>
  <div class="SingleNews">
    <AltHeader Header="أبرز الاخبار" :child="post.title"></AltHeader>

    <div v-if="!subscribed && uid" class="subscribeToNotifications" title="Subscribe To The News Notifications" @click="subscribeToNotifications">
      <i class="fas fa-bell"></i>
    </div>

    <section class="single-news">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="post">
              <img :src="post.coverImg">
              <div class="details">
                <div class="content" v-html="post.content"></div>
                <hr>
                <div class="addthis_inline_share_toolbox_zca9"></div>
                <AddThis publicId="ra-5d524e59a2f2efe5"/>
                <hr>
                <div class="others">
                  <span class="others deleteNews" v-if="post.authorUID == uid || admin" title="مسح الخبر؟" @click="deleteThisNews"><i class="fas fa-trash-alt"></i> مسح الخبر</span>
                  <span class="others"><i class="far fa-user"></i> {{post.author}}</span>
                  <span class="others"><i class="far fa-clock"></i> {{post.date}}</span>
                  <span class="others"><i class="far fa-comments"></i> {{post.commentsNumber}}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <div class="comments">
          <h2>التعليقات</h2>

          <div v-if="post.comments.length > 0">
            <div class="comment" v-for="comment in post.comments" :key="comment.key">
              <div class="row">
                <div class="col-sm-2 col-12 text-center brd">
                  <img :src="comment.image">
                  <span class="author-name adminCont" v-if="comment.admin"><i class="fas fa-check-circle adminrole"></i> {{comment.author}}</span>
                  <span class="author-name" v-else>{{comment.author}}</span>
                  <span class="comment-time"><i class="far fa-clock"></i> {{comment.date}}</span>
                </div>
                <div class="col-sm-10 col-12 cmt-txt">{{comment.content}}</div>
                <i v-if="comment.authorUID == uid" class="fas fa-pen editComment" title="تعديل التعليق؟" :id="comment.key" @click="editThisComment($event)"></i>
                <i v-if="comment.authorUID == uid || admin" class="fas fa-trash deleteComment" title="مسح التعليق؟" :id="comment.key" @click="deleteThisComment($event)"></i>
              </div>
            </div>
          </div>
          <div v-else class="noComments">
            <p>لا توجد تعليقات بعد</p>
          </div>

        </div>
        
        <div class="row sendCommentsSection">
          <div v-if="uid" class="col-12">
            <div class="form">
              <h4>أترك تعليق</h4>
              <textarea class="newComment" cols="30" rows="10" placeholder="أترك تعليقاً على الخبر"></textarea>
              <button @click="sendComment">إرسال التعليق</button>
            </div>
          </div>
          <div v-else class="col-12">
            <p>قم بتسجيل الدخول للتعليق على الخبر</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style lang="scss">
.single-news{
  padding: 100px 0;
  background: #f5f5f5;
  .post{
    text-align: right;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    & *:not(i):not(code) {
      font-family: 'changa'!important;
    }
    .fr-class-code{
      font-family: "consolas"!important;
      background: #f6f6f6;
      padding: 5px 10px;
      & *{
        font-family: "consolas"!important;
      }
    }
    img{
      max-height: 600px;
    }
    .details{
      padding: 20px;
      span.others{
        margin-right: 15px;
        color: #909090;
        font-size: 13px;
        font-family: 'changa'!important;
        @include sm {
          font-size: 12px;
        }
      }
      .deleteNews{
        cursor: pointer;
      }
      h2{
        margin: 20px 0;
        color: $mc;
        font-weight: bold;
        font-family: one;
        @include sm {
          font-size: 18px;
        }
      }
      h3{
        margin: 10px 0;
        color: $mc;
        font-weight: bold;
        font-family: one;
        @include sm {
          font-size: 16px;
        }
      }
      p{
        line-height: 30px;
        margin-bottom: 20px;
        font-family: 'changa'!important;
        @include sm {
          font-size: 13px;
          line-height: 20px;
        }
        &[data-f-id="pbf"]{
          display: none;
        }
      }
      button{
        background: none;
        color: $mc;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        box-shadow: none;
        padding: 0 10px;
        i{
          color: $mc;
          font-size: 20px;
          position: relative;
          top: 2px;
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
  }
}

.sendCommentsSection {
  .form{
    background: #fff;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    text-align: right;
    h4{
      font-weight: bold;
      margin: 0 0 25px;
    }
    textarea{
      display: block;
      width: 100%;
      resize: none;
      font-family: 'changa';
      &:focus{
        border-color: $mc;
      }
    }
    button{
      margin: 15px auto;
      padding: 8px 50px;
      border-radius: 8px;
      background: $mc;
    }
  }
  p{
    text-align: center;
    background: #fff;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    font-family: 'changa';
  }
}

.comments{
  background: #fff;
  padding: 25px;
  margin: 5px 0;
  box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
  text-align: right;

  .noComments{
    p{
      background: #f6f6f6;
      padding: 40px 0;
      text-align: center;
      font-weight: bold;
      margin: 0;
      color: $mc;
      border-radius: 8px;
      box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
      font-family: 'changa'!important;
    }
  }
    
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 10px auto 50px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }

  .comment{
    position: relative;
    padding: 20px;
    background: #f9f9f9d6;
    margin: 0px 0 20px;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    .brd{
      border-left: 1px solid #ddd;
      @include sm {
        border-left: none;
      }
    }
    .deleteComment, .editComment{
      position: absolute;
      bottom: 8px;
      left: 8px;
      cursor: pointer;
      color: $mc;
      background: #fff;
      font-size: 13px;
      padding: 5px;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba($color: #000, $alpha: 0.3);
      &:hover{
        color: #fff;
        background: $mc;
      }
    }
    .editComment{
      left: 35px;
    }
    img{
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #555;
      padding: 3px;
      margin-bottom: 5px;
    }
    span{
      display: block;
      font-weight: bold;
      &.author-name{
        font-family: 'Poppins', sans-serif;
        &.adminCont {
          position: relative;
          left: 10px;
        }
        .adminrole{
          color: #3578E5;
          font-size: 13px;
          position: relative;
          top: -2px;
        }
      }
      &.comment-time{
        font-weight: normal;
        font-size: 12px;
        color: #909090;
        border-top: 1px solid #ddd;
        margin-top: 5px;
        padding-top: 5px;
        font-family: 'changa'!important;
        direction: ltr;
        @include sm {
          margin-bottom: 15px;
        }
      }
    }
    .cmt-txt{
      font-size: 15px;
      font-family: 'changa'!important;
      @include sm {
        font-size: 14px;
        padding-bottom: 20px;
      }
    }
  }
}
</style>

<style>
.swal2-title, #swal2-content, .swal2-confirm, .swal2-cancel{
  font-family: 'changa'!important;
}
.at-share-btn-elements{
  text-align: center!important;
}
.at-resp-share-element .at-share-btn .at-label{
  font-family: 'Poppins', sans-serif!important;
}
.at-style-responsive .at-share-btn{
  outline: none!important;
}
.swal2-textarea{
  font-family: 'changa';
  resize: none;
  height: 350px;
}
</style>


<script>
import AltHeader from "../../components/AltHeader.vue";
import AddThis from 'vue-simple-addthis-share';

export default {
  name: "SingleNews",
  components: {
    AltHeader, AddThis
  },
  data(){
    return {
      newsKey: this.$route.params.id,
      post: {
        title: '',
        coverImg: '',
        content: '',
        author: '',
        authorUID: '',
        date: '',
        comments: '',
        commentsNumber: 0
      },
      uid: false,
      admin: false,
      subscribed: false
    }
  },
  methods: {
    sendComment(e){
      e.path[0].setAttribute("disabled", true);
      var comment = $(".newComment").val();
      if(comment.length > 0){
        db.push(`news/${this.newsKey}/comments`, {
          author: auth.user().uid,
          content: comment,
          date: new Date().toISOString(),
          perority: Date.now()
        }).then(key => {
          db.update(`news/${this.newsKey}/comments/${key}`, { key }).then(() => {
            $(".newComment").val("");
            e.path[0].removeAttribute("disabled");
            // Subscribe To This News Comments Notifications
            firebase.messaging().getToken().then(token => {
              if(token){
                const options = { 
                    order: { type: "child", value: "token" }, 
                    filter: { type: "equal", value: token  }
                };
                db.get(`news/${this.newsKey}/comments/tokens`, options).then(res => {
                    if(res){
                      // Send Notification To Subscribed Users
                      var sender = $("span.authName").text();
                      db.push("SubNotifications", {
                          title: 'هناك تعليق جديد على الخبر الذي تتابعة',
                          body: `قام ${sender} بالتعليق على الخبر الذي تتابعة أضغط هنا لمتابعة أخر التعليقات`,
                          icon: 'https://ropt.tk/img/favicon.1489dc95.png',
                          url: location.href,
                          _NewsID: this.newsKey
                      }).then(e.path[0].removeAttribute("disabled"));
                    } else {
                      // Subscribe Then Send Notification To Subscribed Users
                      db.push(`news/${this.newsKey}/comments/tokens`, {token}).then(() => {
                        var sender = $("span.authName").text();
                        db.push("SubNotifications", {
                            title: 'هناك تعليق جديد على الخبر الذي تتابعة',
                            body: `قام ${sender} بالتعليق على الخبر الذي تتابعة أضغط هنا لمتابعة أخر التعليقات`,
                            icon: 'https://ropt.tk/img/favicon.1489dc95.png',
                            url: location.href,
                            _NewsID: this.newsKey
                        }).then(e.path[0].removeAttribute("disabled"));
                      });
                    }
                });
              }
            });

          });
        });
      } else {
        e.path[0].removeAttribute("disabled");
        Swal.fire({
          type: 'error',
          title: 'خـطـأ',
          text: 'لا يمكن إرسال تعليق فارغ'
        });
      }
    },
    editThisComment(e){
      var id = e.path[0].id;
      var commentTxt = e.path[1].children[1].textContent;
      Swal.fire({
        title: 'تعديل التعليق',
        input: 'textarea',
        inputPlaceholder: 'أكتب تعديلات على التعليق',
        inputValue: commentTxt,
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      }).then((result) => {
        if (result.value) {
          db.update(`news/${this.newsKey}/comments/${id}`, {
            content: result.value
          }).then(() => {
            Swal.fire( 'تم تعديل التعليق بنجاح', '', 'success' );
          });
        }
      });
    },
    deleteThisComment(e){
      var id = e.path[0].id;
      Swal.fire({
        title: 'هل تريد مسح التعليق ؟',
        text: "كن حذراً لايمكنك إعادة التعليق مرة أخرى بعد الحذف!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      }).then((result) => {
        if (result.value) {
          db.delete(`news/${this.newsKey}/comments/${id}`).then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          });
        }
      });
    },
    deleteThisNews(){
      Swal.fire({
        title: 'هل تريد مسح الخبر ؟',
        text: "كن حذراً لايمكنك إعادة الخبر مرة أخرى بعد الحذف!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      }).then((result) => {
        if (result.value) {
          db.delete(`news/${this.newsKey}`).then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(location.href = "/news");
          });
        }
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
    window.scrollTo(0, 0);
    document.title = "ROPT | NEWS DETAILS";
    $(".preloader").show();
    auth.onLogin(() => {
      this.uid = auth.user().uid;
      db.get(`users/${this.uid}`).then(user => {
        if(user.data[0]) this.admin = true
      });
      firebase.messaging().getToken().then(token => {
        if(token){
          this.subscribed = true;
        }
      });
    })
    db.get(`news/${this.newsKey}`).then(res => {
      if(res == undefined) return location.href = '/404';
      let title, id, date, coverImg, content;
      let comments = res.data[1];
      let commentsNumber = 0;
      let authorUID = res.data[0];
      if(typeof comments == 'object'){
        Object.values(comments).forEach(comment => commentsNumber++);
        title = res.data[8];
        id = res.data[6];
        date = res.data[4];
        coverImg = res.data[3];
        content = res.data[2];
      } else {
        title = res.data[7];
        id = res.data[5];
        date = res.data[3];
        coverImg = res.data[2];
        content = res.data[1];
      }

      this.post = {
        title, id, date, coverImg, content, authorUID, commentsNumber, comments: []
      }

      db.get(`users/${authorUID}`).then(user => {
        var author = user.data[5];
        this.post.author = author;
        setTimeout(() => {
          $(".preloader").addClass("hide");
        }, 2000);
      });

      db.getting(`news/${this.newsKey}/comments`, response => {
        this.post.comments = [];
        if(response != undefined){
          response.data.forEach(comment => {
            var authorUID = comment.author;
            if(authorUID != undefined){
              var {content, date, key} = comment;
              var arrDate = moment(date).toArray();
              date = moment(arrDate).fromNow();
              this.post.comments.push({ author: null, image: '', content, date, key, authorUID });

              this.post.comments.forEach((unEditedcomment, i) => {
                db.get(`users/${unEditedcomment.authorUID}`).then(user => {
                  var admin = user.data[0];
                  var author = user.data[5];
                  var image = user.data[2];
                  this.post.comments[i].admin = admin;
                  this.post.comments[i].author = author;
                  this.post.comments[i].image = image;
                });
              });

              var commentsNum = 0;
              Object.values(this.post.comments).forEach(comment => commentsNum++);
              this.post.commentsNumber = commentsNum;
            }

          });
        }
      }, { sort: ["-perority"] });
    });
  }
};
</script>
