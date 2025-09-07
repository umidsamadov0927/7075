import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        data: null
    }),
    actions: {
        async render() {
            try {
                let res = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
                    method: "GET"
                })
                let books = await res.json()
                this.data = books.results;
            } catch (error) {
                console.log(error)
            }
        }
    }
})