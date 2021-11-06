<template>
  <div class="club">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="imageTitle">
            <img :src="img">
            <h3>{{clubName}}</h3>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="info">
            <h4>ميزانية النادي : <span>{{balance}}</span> مليون</h4>
            <h4>قيمة لاعبي الفريق : <span>{{playersValue}}</span> مليون</h4>
            <h4>مركز النادي في الدوري : <span>{{leagueRank}}</span></h4>
            <h4>تصنيف النادي : <span>{{clubRank}}</span></h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>لاعبي الفريق</h2>
      <div class="table">
        <button v-if="admin" @click="requestGlobalTransfer" class="buy"><i class="fas fa-exchange-alt"></i> طلب شراء لاعب خارجي</button>
        <button v-if="admin" @click="deductSalaries" class="buy" title="تقدر الرواتب الموسمية للاعبين بمقدار (3.5% | 2.5% | 1.5%) من إجمالي قيمة اللاعبين"><i class="fas fa-hand-holding-usd"></i> صرف الرواتب الموسمية</button>
        <button v-if="admin" @click="editBalance" class="buy"><i class="fas fa-money-bill-alt"></i> تعديل الميزانية</button>
        <table>
          <tr>
            <th>اللاعب</th>
            <th>المركز</th>
            <th>القوة</th>
            <th>القيمة السوقية</th>
            <th v-if="admin">طلب تعاقد</th>
          </tr>
          <tr v-for="player in players" :key="player.key">
            <td>{{player.name}}</td>
            <td>{{player.pos}}</td>
            <td>{{player.pwr}}</td>
            <td>{{player.price}}</td>
            <td v-if="admin"><button @click="requestLocalTrasfer($event)" :id="player.key">Request</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swal2-title{
  font-family: one;
}
.club{
  padding: 100px 0;
  .imageTitle{
    padding: 35px 0 0;
    text-align: center;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 7px rgba($color: $mc, $alpha: 0.15);
    margin-bottom: 25px;
    img{
      width: 220px;
      height: 220px;
      margin-bottom: 35px;
    }
    h3{
      background: $mc;
      padding: 20px 0 25px;
      margin: 0;
      color: #fff;
      font-family: 'changa';
    }
  }
  .info{
    text-align: right;
    h4{
      color: $mc;
      font-family: 'changa';
      font-weight: bold;
      background: #f6f6f6;
      padding: 23px;
      margin: 0px 0 20px;
      box-shadow: 0 0 7px rgba($color: $mc, $alpha: 0.15);
      @include xs {
        font-size: 20px;
      }
      @include em {
        font-size: 18px;
      }
      span{
        font-family: 'Changa', sans-serif;
      }
    }
  }
  
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    margin-top: 40px;
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

  .table{
    text-align: right;
    @include sm {
      overflow-x: scroll;
      text-align: center;
    }
    button.buy{
      font-family: 'changa';
      font-weight: bold;
      padding: 5px 30px 7px;
      background: #f6f6f6;
      color: $mc;
      border-radius: 5px;
      border-color: $mc;
      margin: 10px 0 10px 10px;
      i{
        color: $mc;
      }
      &:hover{
        transform: none;
        background: $mc;
        color: #fff;
        i{
          color: #fff;
        }
      }
    }
    table{
      width: 100%;
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
          font-family: 'Changa', sans-serif;
          font-weight: bold;
          border: 0;
          text-align: center;
          padding: 12px;
          @include sm {
            font-size: 13px;
          }
        }
        td{
          color: $mc;
          border: 1px solid #ccc;
          &:first-child{
            width: 40%;
          }
          &:nth-child(5){
            width: 15%;
          }
          button{
            padding: 5px 15px;
            background: #f6f6f6;
            color: $mc;
            border-radius: 5px;
            border-color: $mc;
            &:hover{
              transform: none;
              background: $mc;
              color: #fff;
            }
          }
        }
        td:not(:nth-child(2)){
          font-weight: bold;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "club",
  data(){
    return {
      club: this.$route.params.page,
      clubName: null,
      players: [],
      balance: null,
      playersValue: null,
      leagueRank: null,
      clubRank: null,
      img: null,
      seNum: null,
      allClubs: [],
      admin: false
    }
  },
  methods: {
    requestLocalTrasfer(e){
      let chances = [true, false];
      let playerID = e.path[0].id;
      let playerName = e.path[2].children[0].textContent;
      let playerPOS = e.path[2].children[1].textContent;
      let playerPWR = Number(e.path[2].children[2].textContent);
      let playerPrice = Number(e.path[2].children[3].textContent);

      let Options = ``;
      this.allClubs.forEach(club => {
        Options += `<option value="${club}">${club}</option>`;
      });

      Swal.fire({
        title: 'طلب شراء لاعب',
        html: `
              <label>أختر الفريق المشتري</label>
              <select id="swal-input1" class="swal2-input">
                ${Options}
              </select>
              <label>أختر الزيادة المدفوعة</label>
              <select id="swal-input2" class="swal2-input">
                <option value="0">عدم دفع زيادة</option>
                <option value="20">20%</option>
                <option value="40">40%</option>
                <option value="60">60%</option>
                <option value="80">80%</option>
                <option value="100">100%</option>
                <option value="125">125%</option>
                <option value="150">150%</option>
                <option value="175">175%</option>
                <option value="200">200%</option>
              </select>
              `,
        showCancelButton: true,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      }).then(val => {
        // Declaring Main Consts
        const buyerClub = val.value[0];
        const increment = Number(val.value[1]);

        // Handle ShortName For Buyer Club
        if(buyerClub == 'ليستر سيتي'){
          var buyer = 'lei';
        } else if(buyerClub == 'مانشيستر سيتي'){
          var buyer = 'mci';
        } else if(buyerClub == 'أرسنال'){
          var buyer = 'ars';
        } else if(buyerClub == 'توتنهام هوتسبير'){
          var buyer = 'tot';
        } else if(buyerClub == 'تشيلسي'){
          var buyer = 'che';
        } else if(buyerClub == 'واتفورد'){
          var buyer = 'wat';
        } else if(buyerClub == 'ليفربول'){
          var buyer = 'liv';
        } else if(buyerClub == 'مانشيستر يونايتد'){
          var buyer = 'utd';
        } else if(buyerClub == 'إيفيرتون'){
          var buyer = 'eve';
        } else if(buyerClub == 'ويست هام'){
          var buyer = 'whu';
        } else if(buyerClub == 'سوثهامبتون'){
          var buyer = 'sth';
        } else if(buyerClub == 'كريستال بالاس'){
          var buyer = 'cry';
        } else if(buyerClub == 'برايتون هوف'){
          var buyer = 'bri';
        } else if(buyerClub == 'بيرنلي'){
          var buyer = 'brn';
        } else if(buyerClub == 'هدرسفليد تاون'){
          var buyer = 'hud';
        } else if(buyerClub == 'فولهام'){
          var buyer = 'ful';
        } else if(buyerClub == 'كارديف سيتي'){
          var buyer = 'car';
        } else if(buyerClub == 'ولفرهامبتون'){
          var buyer = 'wol';
        }

        // Getting Buyer Club Rank And Compare
        db.get(`rankings/clubs`, {sort:["pts", "-prev"]}).then(res => {
          let rank = 1;
          var buyerClubRank;
          res.data.forEach(clubs => {
            let {club} = clubs;
            if(club == buyerClub){
              buyerClubRank = rank;
            }
            rank++;
          });
          var RankDiff = buyerClubRank - this.clubRank;
          if(RankDiff >= 2 && RankDiff < 5){
            chances.push(false);
          } else if (RankDiff >= 5) {
            chances.push(false, false);
          }

          // Check Availability of Player Position
          var positions = $("table tr td:nth-of-type(2)");
          var posCheck = 0;
          for(var i = 0; i < positions.length; i++){
            if(positions[i].textContent == playerPOS){
              posCheck++;
            }
          }
          if(posCheck >= 3){
            chances.push(true);
          } else if (posCheck == 2){
            chances.push(false);
          } else if (posCheck == 1){
            chances.push(false, false);
          }

          // Check If Any Increments Payed
          if (increment == 20){
            chances.push(true);
          } else if (increment == 40){
            chances.push(true, true);
          } else if (increment == 60){
            chances.push(true, true, true);
          } else if (increment == 80){
            chances.push(true, true, true, true);
          } else if (increment == 100){
            chances.push(true, true, true, true, true);
          } else if (increment == 125){
            chances.push(true, true, true, true, true, true);
          } else if (increment == 150){
            chances.push(true, true, true, true, true, true, true);
          } else if (increment == 175){
            chances.push(true, true, true, true, true, true, true, true);
          } else if (increment == 200){
            chances.push(true, true, true, true, true, true, true, true, true);
          }

          // Check Of Player Power
          if (playerPWR >= 85 && playerPWR < 88){
            chances.push(false);
          } else if (playerPWR >= 88 && playerPWR <= 90){
            chances.push(false, false);
          } else if (playerPWR > 90){
            chances.push(false, false, false);
          } else if (playerPWR < 80){
            chances.push(true);
          } 
          
          
          // THE RESULT OF THE REQUEST TRAIL
          let randomChance = Math.floor(Math.random() * chances.length);
          let finalPrice = playerPrice + (increment / 100 * playerPrice);
          if(chances[randomChance]){
            Swal.fire({
              title: `نتيجة هذه المحاولة هي نجاح الصفقة`,
              text: `هل تريد إتمام الصفقة ؟ السعر المقدر لهذه الصفقة هو ${finalPrice} مليون`,
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.value) {
                db.get(`market/clubs/${buyer}`).then(res => {
                  const buyerBalance = res.data[0];
                  if(buyerBalance >= finalPrice){
                    firebase.database().ref(`market/clubs/${this.club}/players/${playerID}`).once('value').then(player => {
                      const playerData = player.val();
                      db.push(`market/clubs/${buyer}/players`, playerData).then(() => {
                        db.delete(`market/clubs/${this.club}/players/${playerID}`).then(() => {
                          db.update(`market/clubs/${buyer}`, {balance: buyerBalance - finalPrice}).then(() => {
                            db.update(`market/clubs/${this.club}`, {balance: Number(this.balance) + finalPrice}).then(() => {
                              db.push("market/lastTransfers", {
                                from: this.clubName,
                                to: buyerClub,
                                player: playerData.name,
                                pwr: playerData.pwr,
                                pos: playerData.pos,
                                price: finalPrice,
                                season: this.seNum,
                                perority: Date.now()
                              }).then(() => {
                                Swal.fire(
                                  'نجاح',
                                  'تمت الصفقة بنجاح',
                                  'success'
                                ).then(() => {
                                  location.reload();
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  } else {
                    Swal.fire({
                      type: 'error',
                      title: 'خطأ في إتمام الصفقة',
                      text: 'لا توجد ميزانية كافية لدى الفريق المشتري لإتمام تلك الصفقة'
                    });
                  }
                });
              }
            });
          } else {
            Swal.fire({
              type: 'error',
              title: 'نتيجة هذه المحاولة هي فشل الصفقة.'
            });
          }
        });
      });
    },
    requestGlobalTransfer(){
      let chances = [true, false];
      if(this.leagueRank < 4){
        Swal.fire({
          title: 'طلب شراء لاعب خارجي',
          html: `
                <label>أختر الفريق البائع</label>
                <input id="swal-input1" class="swal2-input" placeholder="الفريق البائع">
                <label>أسم اللاعب</label>
                <input id="swal-input2" class="swal2-input" placeholder="أسم اللاعب">
                <label>قوة اللاعب</label>
                <input id="swal-input3" class="swal2-input" placeholder="قوة اللاعب">
                <label>مركز اللاعب</label>
                <input id="swal-input4" class="swal2-input" placeholder="مركز اللاعب">
                <label>قيمة اللاعب</label>
                <input id="swal-input5" class="swal2-input" placeholder="قيمة اللاعب">
                <label>أختر الزيادة المدفوعة</label>
                <select id="swal-input6" class="swal2-input">
                  <option value="0">عدم دفع زيادة</option>
                  <option value="20">20%</option>
                  <option value="40">40%</option>
                  <option value="60">60%</option>
                  <option value="80">80%</option>
                  <option value="100">100%</option>
                  <option value="125">125%</option>
                  <option value="150">150%</option>
                  <option value="175">175%</option>
                  <option value="200">200%</option>
                </select>
                `,
          showCancelButton: true,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
              document.getElementById('swal-input4').value,
              document.getElementById('swal-input5').value,
              document.getElementById('swal-input6').value
            ]
          }
        }).then(val => {
          // Declaring Main Consts
          const buyerClub = this.clubName;
          const buyer = this.club;
          const sellerClub = val.value[0];
          const playerName = val.value[1];
          const playerPWR = val.value[2];
          const playerPOS = val.value[3];
          const playerPrice = Number(val.value[4]);
          const increment = Number(val.value[5]);

          // Check If Any Increments Payed
          if (increment == 20){
            chances.push(true);
          } else if (increment == 40){
            chances.push(true, true);
          } else if (increment == 60){
            chances.push(true, true, true);
          } else if (increment == 80){
            chances.push(true, true, true, true);
          } else if (increment == 100){
            chances.push(true, true, true, true, true);
          } else if (increment == 125){
            chances.push(true, true, true, true, true, true);
          } else if (increment == 150){
            chances.push(true, true, true, true, true, true, true);
          } else if (increment == 175){
            chances.push(true, true, true, true, true, true, true, true);
          } else if (increment == 200){
            chances.push(true, true, true, true, true, true, true, true, true);
          }

          // Check Of Player Power
          if (playerPWR >= 85 && playerPWR < 88){
            chances.push(false);
          } else if (playerPWR >= 88 && playerPWR <= 90){
            chances.push(false, false);
          } else if (playerPWR > 90){
            chances.push(false, false, false);
          } else if (playerPWR < 80){
            chances.push(true);
          } 
          
          
          // THE RESULT OF THE REQUEST TRAIL
          let randomChance = Math.floor(Math.random() * chances.length);
          let finalPrice = playerPrice + (increment / 100 * playerPrice);
          if(chances[randomChance]){
            Swal.fire({
              title: `نتيجة هذه المحاولة هي نجاح الصفقة`,
              text: `هل تريد إتمام الصفقة ؟ السعر المقدر لهذه الصفقة هو ${finalPrice} مليون`,
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.value) {
                  const buyerBalance = Number(this.balance);
                  if(buyerBalance >= finalPrice){
                      const playerData = {
                        name: playerName,
                        pos: playerPOS,
                        pwr: playerPWR,
                        price: playerPrice
                      };
                      db.push(`market/clubs/${buyer}/players`, playerData).then(() => {
                        db.update(`market/clubs/${buyer}`, {balance: buyerBalance - finalPrice}).then(() => {
                          db.push("market/lastTransfers", {
                            from: sellerClub,
                            to: buyerClub,
                            player: playerData.name,
                            pwr: playerData.pwr,
                            pos: playerData.pos,
                            price: finalPrice,
                            season: this.seNum,
                            perority: Date.now()
                          }).then(() => {
                            Swal.fire(
                              'نجاح',
                              'تمت الصفقة بنجاح',
                              'success'
                            ).then(() => {
                              location.reload();
                            });
                          });
                        });
                      });
                  } else {
                    Swal.fire({
                      type: 'error',
                      title: 'خطأ في إتمام الصفقة',
                      text: 'لا توجد ميزانية كافية لدى الفريق المشتري لإتمام تلك الصفقة'
                    });
                  }
              }
            });
          } else {
            Swal.fire({
              type: 'error',
              title: 'نتيجة هذه المحاولة هي فشل الصفقة.'
            });
          }
        });
      } else {
        Swal.fire({
          type: 'error',
          title: 'غير مسموح لهذا الفريق بإجراء طلب شراء خارجي هذا الموسم.'
        });
      }
    },
    deductSalaries(){
      if(Number(this.playersValue) > 800){
        var deduction = Number(this.playersValue / 100 * 3.5).toFixed(1);
      } else if(Number(this.playersValue) > 500 && Number(this.playersValue) <= 800){
        var deduction = Number(this.playersValue / 100 * 2.5).toFixed(1);
      } else {
        var deduction = Number(this.playersValue / 100 * 1.5).toFixed(1);
      }
      Swal.fire({
        title: 'هل أنت متأكد انك تريد صرف الرواتب',
        text: `سيتم خصم رواتب اللاعبين المقدرة بقيمة ${deduction} مليون من الميزانية العامة للفريق`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'صرف الرواتب'
      }).then((result) => {
        if (result.value) {
          db.update(`market/clubs/${this.club}`, {balance: this.balance - deduction}).then(() => {
            Swal.fire(
              'نجاح',
              'تمت خصم رواتب اللاعبين من ميزانية الفريق بنجاح',
              'success'
            ).then(() => {
              location.reload();
            });
          });
        }
      });
    },
    editBalance(){
      Swal.fire({
        title: 'تعديل ميزانية الفريق',
        html: `
              <label>الزيادة في الميزانية</label>
              <input type="number" id="swal-input1" class="swal2-input" placeholder="الزيادة في الميزانية">
              `,
        showCancelButton: true,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value
          ]
        }
      }).then(val => {
        const balanceIncrement = Number(val.value[0]);
        const NewBalance = Number(this.balance) + balanceIncrement;
        db.update(`market/clubs/${this.club}`, {balance: NewBalance}).then(() => {
          Swal.fire(
            'تمت الزيادة نجاح',
            `تمت زيادة ميزانية الفريق بمقدار ${balanceIncrement} مليون`,
            'success'
          ).then(() => {
            location.reload();
          });
        });
      });
    }
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | CLUB DETAILS";
    $(".preloader").show();
    // GET CLUB PLAYERS
    db.get(`market/clubs/${this.club}`).then(res => {
      if(res == undefined) return location.href = '/404';
      this.balance = Number(res.data[0]).toFixed(1);
      this.img = res.data[1];
      var playersValue = 0;
      Object.entries(res.data[2]).forEach(player => {
        var playerObj = player[1];
        playerObj.key = player[0];
        this.players.push(playerObj);
        playersValue += playerObj.price;
      });
      this.playersValue = playersValue.toFixed(1);
    });

    // GET CLUB RANKING RANK & ALL CLUBS DATA
    db.get(`rankings/clubs`, {sort:["pts", "-prev"]}).then(res => {
      let rank = 1;
      let clubName = $(".main-header h1").text();
      res.data.forEach(clubs => {
        let {club} = clubs;
        if(club == clubName){
          this.clubRank = rank;
        } else {
          this.allClubs.push(club);
        }
        rank++;
      });
    });

    // GET CLUB LEAGUE RANK
    db.get(`Seasons`, {
      order: {type: "child", value: "num"},
      filter: {type: "last", value: 1}
    }).then(res => {
      const seNum = res.data[0].num;
      this.seNum = res.data[0].num;
      db.get(`Seasons/${seNum}/PL/clubs`, {sort: ["pts", "gd", "gf", "-ga"]}).then(response => {
        let num = 1;
        let clubName = $(".main-header h1").text();
        response.data.forEach(club => {
          if(club.club == clubName){
            this.leagueRank = num;
          }
          num++;
        });
      }).then(setTimeout(() => {
                  $(".preloader").addClass("hide");
                }, 2000));
    });
  },
  mounted(){
    this.clubName = $(".main-header h1").text();
    auth.onLogin(() => {
      db.get(`users/${auth.user().uid}`).then(res => {
        if(typeof res.data[0] == 'boolean'){
          this.admin = res.data[0];
        }
      });
    });
  }
};
</script>
