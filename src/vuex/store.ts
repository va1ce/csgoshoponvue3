import { createStore } from "vuex";
import items from "./items/items";
import cart from "./cart/cart";
import itemsForSale from "./items-For-Sale/itemsForSale";
import itemsInInventory from "./items-In-Inventory/itemsInInventory";
import searchValue from "./search-value/searchValue";
import filterOptions from "./filterOptions/filterOptions";
import filterAndSortItems from "./filterAndSortItems/filterAndSortItems";
export default createStore({
    modules: {
        items,
        cart,
        itemsForSale,
        itemsInInventory,
        searchValue,
        filterOptions,
        filterAndSortItems
    },
})
