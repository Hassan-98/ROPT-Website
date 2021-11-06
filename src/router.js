// SETUP VUE ROUTER
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// PAGES
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import SingleNews from "./views/news/SingleNews.vue";
import addNews from "./views/news/addNews.vue";
import Tournaments from "./views/Tournaments.vue";
import Tournament from "./views/tournaments/Tournament.vue";
import Rankings from "./views/Rankings.vue";
import Ranking from "./views/rankings/Ranking.vue";
import TransferMarket from "./views/TransferMarket.vue";
import Market from "./views/market/Market.vue";
import PlayersData from "./views/PlayersData.vue";
import Player from "./views/players/player.vue";
import NotFound from "./views/404.vue";
import Live from "./views/Live.vue";
import Stream from "./views/Stream.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/news/show/:id",
      name: "SingleNews",
      component: SingleNews
    },
    {
      path: "/news/add",
      name: "addNews",
      component: addNews
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments
    },
    {
      path: "/tournaments/:tour",
      name: "tournament",
      component: Tournament
    },
    {
      path: "/rankings",
      name: "rankings",
      component: Rankings
    },
    {
      path: "/rankings/:ranking",
      name: "ranking",
      component: Ranking
    },
    {
      path: "/market",
      name: "market",
      component: TransferMarket
    },
    {
      path: "/market/:page",
      name: "marketPages",
      component: Market
    },
    {
      path: "/players",
      name: "players",
      component: PlayersData
    },
    {
      path: "/players/:player",
      name: "player",
      component: Player
    },
    {
      path: "/live",
      name: "Live",
      component: Live
    },
    {
      path: "/admin-stream",
      name: "Stream",
      component: Stream
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
