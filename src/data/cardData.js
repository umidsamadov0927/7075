import {ref} from "vue";
import img2 from "../assets/brotherPhotos/whiteBro.png";
import img from "../assets/brotherPhotos/blackBro.png";

export let productData = ref([
    {
        productPhoto:img2,
        productName:"Cotton T Shirt",
        productTitle:"Full Sleeve Zipper",
        productMoney: 99,
        productData: 1

    },
    {
        productPhoto:img,
        productName:"Cotton T Shirt",
        productTitle:"Basic Slim Fit T-Shirt",
        productMoney: 99,
        productData: 1
    },
    {
        productPhoto:img2,
        productName:"Cotton T Shirt",
        productTitle:"Full Sleeve Zipper",
        productMoney: 99,
        productData: 1
    }
])