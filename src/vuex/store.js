import { createStore } from "vuex";
import axios from "axios";
import items from "./items/items";
import cart from "./cart/cart";
import itemsForSale from "./items-For-Sale/itemsForSale";
import itemsInInventory from "./items-In-Inventory/itemsInInventory";
import searchValue from "./search-value/searchValue";
export default createStore({
    modules: {
        items,
        cart,
        itemsForSale,
        itemsInInventory,
        searchValue
    },
})
