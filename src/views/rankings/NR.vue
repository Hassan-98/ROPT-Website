<template>
  <div class="NR">
    <h2>تصنيف المنتخبات</h2>
    <div class="table">
      <table>
        <tr>
          <th>#</th>
          <th>Club</th>
          <th>Current PTS</th>
          <th>Previous PTS</th>
          <th>Diff</th>
        </tr>
        <tr v-for="club in clubs" :key="club.club">
          <td>{{club.rank}}</td>
          <td>{{club.club}}</td>
          <td>{{club.pts}}</td>
          <td>{{club.prev}}</td>
          <td>{{club.diff}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.NR{
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

  .table{
    @include xs {
      overflow-x: sNRoll;
    }
    table{
      width: 100%;

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
            &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9){
              display: none;
            }
          }
        }
        td{
          color: $mc;
        }
        td:nth-of-type(4){
          color: #999;
        }
        td:nth-of-type(2){
          width: 50%;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "NR",
  data (){
    return {
      clubs: []
    }
  },
  created(){
    window.scrollTo(0, 0);
    document.title = "ROPT | NATIONALS RANKINGS";
    $(".preloader").show();
    db.get(`rankings/nationals`, {sort:["pts", "-prev"]}).then(res => {
      let rank = 1;
      res.data.forEach(clubs => {
        let {club, pts, prev} = clubs;
        this.clubs.push({
          rank,
          club,
          pts,
          prev,
          diff: pts - prev
        });
        rank++;
      });
      setTimeout(() => {
        $(".preloader").addClass("hide");
      }, 2000);
    });
  }
};
</script>
