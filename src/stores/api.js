import { computed, ref } from "vue";
import { defineStore } from "pinia";
import axios from "../plugins/axios";
export const useApi = defineStore("api", () => {
  const getProduct = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `/services`,
        headers: {
          "Content-Type": "application/json",
        },
        params: {
        },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {
    getProduct
  };
});
