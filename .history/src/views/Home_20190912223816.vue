<template>
  <div>
    <div class="d-flex mt-4 justify-content-between" v-if="articles.data">
      <button
        @click="getPreviousArticls()"
        :disabled="articles.prev_page_url === null"
        class="btn btn-warning"
      >Previous Page</button>
      <button
        @click="getNextArticls()"
        :disabled="articles.next_page_url === null"
        class="btn btn-warning"
      >Next Page</button>
    </div>

    <div class="row" v-if="!loading">
      <div class="col-md-8 offset-md-2" v-for="article in articles.data" :key="article.id">
        <Article :article="article" />
      </div>
    </div>
    <div class="loader text-center" v-else>
      <i class="fas fa-5x fa-spin fa-fan" v-if="loading"></i>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import config from "@/config.js";
import Article from "@/components/Article";
export default {
  components: {
    Article
  },
  data() {
    return {
      articles: {},
      loading: true
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles(url = `${config.apiUrl}/articles`) {
      this.loading = true;
      Axios.get(url).then(response => {
        this.loading = false;
        this.articles = response.data.data;
      });
    },
    getNextArticls() {
      this.getArticles(this.articles.next_page_url);
    },
    getPreviousArticls() {
      this.getArticles(this.articles.prev_page_url);
    }
  }
};
</script>
<style lang="css" scoped>
.btn-warning {
  color: white;
}
</style>
