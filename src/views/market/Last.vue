<template>
  <div class="Last">
    <h2>أخر الانتقالات</h2>
    <div class="container">
      <table>
        <tr>
          <th>اللاعب</th>
          <th>المركز</th>
          <th>القوة</th>
          <th>من</th>
          <th>إلى</th>
          <th>قيمة الصفقة</th>
          <th>الموسم</th>
        </tr>
        <tr v-for="transfer in lastTransfers" :key="transfer.price">
          <td>{{transfer.player}}</td>
          <td>{{transfer.pos}}</td>
          <td>{{transfer.pwr}}</td>
          <td>{{transfer.from}}</td>
          <td>{{transfer.to}}</td>
          <td>{{transfer.price}}</td>
          <td>{{transfer.season}}</td>
        </tr>
      </table>
    </div>
    <button @click="getMore" class="show-more">أظهر المزيد</button>
  </div>
</template>

<style lang="scss" scoped>
.Last{
  padding: 75px 0;
  h2{
    text-align: center;
    color: $mc;
    font-weight: bold;
    &::after{
      content: "";
      display: block;
      width: 25%;
      height: 2px;
      margin: 10px auto 60px;
      background: $mc;
      border-radius: 50%;
      @include sm {
        width: 50%;
      }
    }
  }
  table{
    width: 100%;
    tr{
      &:nth-child(odd){
        background: #f6f6f6;
      }
    }
    th{
      background: $mc;
      color: #fff;
      border: 0;
      font-family: one;
      padding: 10px;
    }
    td{
      font-family: 'changa';
      text-align: center;
      color: $mc;
      border: 0;
      font-weight: bold;
      padding: 15px;
    }
  }
  .show-more{
    display: block;
    margin: 50px auto;
    padding: 10px 50px;
    border-radius: 5px;
    background: $mc;
    font-family: 'changa';
    font-weight: bold;
  }
}
</style>

<script>
export default {
  name: "Last",
  data(){
    return {
      viewed: 10,
      lastTransfers: []
    }
  },
  methods: {
    getMore(){
      this.lastTransfers = [];
      this.viewed += 10;
      db.get(`market/lastTransfers`, {
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
        res.data.forEach(transfer => {
          this.lastTransfers.push(transfer);
        });
      });
    }
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | LAST TRANSFERS";
    $(".preloader").show();
    db.get(`market/lastTransfers`, {
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
      res.data.forEach(transfer => {
        this.lastTransfers.push(transfer);
      });
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
