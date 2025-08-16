import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ErrorView from "@/views/ErrorView.vue";
import CartView from "@/views/CartView.vue";
import CustomizeView from "@/views/CustomizeView.vue";
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
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/customize",
      name: "customize",
      component: CustomizeView,
    },
    {
      path: "/product/:id",
      name: "productid",
      component: ProductDetailsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: ErrorView,
    },
  ],
});

export default router;
