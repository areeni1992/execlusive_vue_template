import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import WishListView from "@/views/WishlistView.vue";
import CartView from "@/views/CartView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import AccountView from "@/views/AccountView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishListView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckOutView
    },
    {
      path: "/account",
      name: "account",
      component: AccountView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    // proudct details route
    {
      path: "/product/:id",
      name: "product-details",
      component: ProductDetailsView
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
  ],
});

export default router;
