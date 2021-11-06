<template>
  <div class="SingleNews">
    <AltHeader Header="أبرز الاخبار" child="إضافة خبر جديد"></AltHeader>

    <section class="single-news">
      <div class="container">
        
        <div class="row addNewNews">
          <div class="col-12">
            <div class="form">
              <h4>إضافة خبر جديد</h4>
              <label>عنوان الخبر</label>
              <input type="text" placeholder="عنوان الخبر" class="newsTitle">
              <label>غلاف الخبر</label>
              <input type="file" class="newsCover">
              <label>وصف مختصر للخبر</label>
              <textarea placeholder="وصف الخبر" class="newsDetails"></textarea>
              <label>تفاصيل الخبر</label>
              <div id="editor"></div>
              <button class="sendNews">أضف الخبر</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style lang="scss">
#editor, .fr-buttons{
  & * {
    font-family: 'changa'!important;
  }
  button{
    box-shadow: none;
  }
  .fr-wrapper{
    height: 500px;
    div > a {
      display: none;
    }
    @include sm {
      height: 350px;
    }
  }
}
.fr-popup * {
  font-family: 'changa'!important;
}
.fr-box.fr-basic .fr-element{
  font-family: 'changa'!important;
  text-align: right!important;
  direction: rtl!important;
  height: 500px;
  @include sm {
    height: 350px;
  }
  & * {
    font-family: 'changa'!important;
  }
}

#logo{
  display: none;
}
.single-news{
  padding: 100px 0;
  background: #f5f5f5;
  
  input.newsTitle, input.newsCover, .newsDetails{
    width: 100%;
    margin: 10px 0;
    background: #fff;
    border: 1px solid #ccc;
    font-family: 'changa'!important;
  }
  label {
    font-family: 'changa'!important;
    margin: 10px 0 0;
    display: block;
  }
}

.addNewNews{
  .form{
    background: #fff;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 0 3px rgba($color: #000, $alpha: 0.15);
    text-align: right;
    h4{
      font-weight: bold;
      margin: 0 0 25px;
      font-family: 'changa'!important;
      text-align: center;
    }
    textarea{
      display: block;
      width: 100%;
      resize: none;
      font-family: one;
      &:focus{
        border-color: $mc;
      }
    }
    button{
      margin: 15px auto;
      padding: 10px 60px;
      border-radius: 10px;
      font-weight: bold;
      background: $mc;
      font-family: 'changa'!important;
    }
  }
}
</style>

<style>
.at-share-btn-elements{
  text-align: center!important;
}
.at-resp-share-element .at-share-btn .at-label{
  font-family: 'Poppins', sans-serif!important;
}
.at-style-responsive .at-share-btn{
  outline: none!important;
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
      newsName: this.$route.params.id,
      newsData: ''
    }
  },
  mounted(){
    auth.onNoUser(() => {
      location.href = '/news';
    });
    window.scrollTo(0, 0);
    document.title = "ROPT | ADD NEWS";
    $(".preloader").show();
    new FroalaEditor('#editor', {
      tabSpaces: 4,
      events: {
        initialized: function () {
          var editor = this;
          editor.events.bindClick(editor.$('body'), 'button.sendNews', function () {
            $("button.sendNews").attr("disabled", true);
            $("button.sendNews").text("جاري نشر الخبر ...");
            var html = editor.html.get();
            var title = $(".newsTitle").val();
            var details = $(".newsDetails").val();
            var cover = $(".newsCover").val();
            if(html != false && title != false && details != false && cover != false){
              db.push(`news`, {
                title,
                content: html,
                coverImg: "uploading",
                author: auth.user().uid,
                date: (new Date).toLocaleDateString(),
                details,
                perority: Date.now(),
                id: "not yet"
              }).then(key => {
                storage.upload(`.newsCover`, `news/${key}/coverImg`).then(url => {
                  db.update(`news/${key}`, {coverImg: url, id: key}).then(() => {
                    // Subscribe To This News Comments Notifications
                    firebase.messaging().getToken().then(token => {
                      if(token){
                          db.push(`news/${key}/comments/tokens`, {token}).then(() => {
                            notifications.send(title, details, url, `https://ropt.tk/news/show/${key}`);
                            Swal.fire(
                              'تم بنجاح',
                              'تم نشر الخبر بنجاح!',
                              'success'
                            ).then(() => {
                              location.href = "/news";
                            });
                        });
                      } else {
                        notifications.send(title, details, url, `https://ropt.tk/news/show/${key}`);
                        Swal.fire(
                          'تم بنجاح',
                          'تم نشر الخبر بنجاح!',
                          'success'
                        ).then(() => {
                          location.href = "/news";
                        });
                      }
                    });
                  });
                }).catch(err => {
                  $("button.sendNews").text("أضف الخبر");
                  $("button.sendNews").attr("disabled", false);
                  db.delete(`news/${key}`).then(() => {
                    Swal.fire({
                      type: 'error',
                      title: 'خـطـأ',
                      text: 'حدث خطأ في نشر الخبر'
                    });
                  });
                });
              });
            } else {
              $("button.sendNews").text("أضف الخبر");
              $("button.sendNews").attr("disabled", false);
              Swal.fire({
                type: 'error',
                title: 'خـطـأ',
                text: 'لا يمكن ترك خانة فارغة'
              });
            }
          });
        },
        imageMaxSize: 1024 * 1024 * 3
        ,
        imagePasteProcess: true
        ,
        imageResizeWithPercent: true
        ,
        imageAddNewLine: true
        ,
        imageManagerPreloader: 'https://i.imgur.com/6PpDugh.gif'
        ,
        'image.beforeUpload': function (images) {
          let image = images[0];
          let imageKey = Math.floor(Math.random() * 1000000000000000000);
          firebase.storage().ref(`news/detailsImages/${imageKey}`).put(image).then(() => {
            firebase.storage().ref(`news/detailsImages/${imageKey}`).getDownloadURL().then(url => {
              this.image.insert(url);
            });
          });
          
          return false;
        },
        'image.beforeRemove': function ($img) {
          let url = $img[0].src;
          let imageRef = firebase.storage().refFromURL(url).fullPath;
          firebase.storage().ref(imageRef).delete();
        }
      }
    });
    setTimeout(() => {
      $(".preloader").addClass("hide");
    }, 2000);
  }
};
</script>
