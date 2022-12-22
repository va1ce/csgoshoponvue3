import { createRouter, createWebHistory } from 'vue-router'
import market from '../components/skins-market/market.vue'
import saleSkinsLayout from '../components/sell-skins/SellSkinsLayout.vue'
const routes = [
  {
    path: "/",
    component: saleSkinsLayout,
  },
  {
    path: "/market",
    name:'market',
    component: market,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
