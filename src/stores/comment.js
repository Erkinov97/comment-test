import axios from "axios";
import { defineStore } from "pinia";

export const useCommentStore = defineStore("comment", {
  state: () => ({
    comments: [],
    comment: "",
    page: 0,
    total: 0,
    limit: 4,
    loading: false,
  }),
  getters: {
    getTotal(state) {
      return Math.ceil(state.total / state.limit);
    },
  },
  actions: {
    async fetchComments({ limit, page }) {
      this.loading = true;
      await axios
        .get("/comments", {
          params: {
            _limit: limit,
            _page: page,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.comments = res.data;
          this.total = res.headers["x-total-count"];
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchComment({ id }) {
      await axios
        .get(`/comments/${id}`)
        .then((res) => {
          this.comment = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
