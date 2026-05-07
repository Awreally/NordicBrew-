import { createBrowserRouter, redirect } from "react-router-dom";
import { RouteErrorBoundary, RouteLoading } from "./RouteFeedback";
import { RootLayout } from "../components/layout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { ShopProductPage } from "../pages/ShopProductPage";
import { SubscriptionPage } from "../pages/SubscriptionPage";
import { BrewPage } from "../pages/BrewPage";
import { StoryPage } from "../pages/StoryPage";
import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import {
  fetchProducts,
  fetchProductsBySlug,
} from "../features/products/api/product.api";
import type {
  ProductCategory,
  ProductRoast,
  CoffeeOrigin,
  FlavorProfile,
} from "../features/products/types/product.types";
import {
  fetchLoginUser,
  fetchRegisterUser,
} from "../features/Auth/api/auth.api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    hydrateFallbackElement: <RouteLoading />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetchProducts({ featured: true }),
      },
      {
        path: "shop",
        element: <ShopPage />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const category =
            (url.searchParams.get("category") as ProductCategory) ?? undefined;
          const roast =
            (url.searchParams.get("roast") as ProductRoast) ?? undefined;
          const origin =
            (url.searchParams.get("origin") as CoffeeOrigin) ?? undefined;
          const flavorProfile =
            (url.searchParams.get("flavorProfile") as FlavorProfile) ??
            undefined;
          const featuredParam = url.searchParams.get("featured");
          const featured =
            featuredParam === "true"
              ? true
              : featuredParam === "false"
                ? false
                : undefined;

          return fetchProducts({
            category,
            roast,
            origin,
            flavorProfile,
            featured,
          });
        },
      },
      {
        path: "shop/:slug",
        element: <ShopProductPage />,
        loader: ({ params }) => {
          if (!params.slug) {
            throw new Error("Missing product slug");
          }
          return fetchProductsBySlug(params.slug);
        },
      },
      { path: "subscription", element: <SubscriptionPage /> },
      { path: "brewguides", element: <BrewPage /> },
      { path: "ourstory", element: <StoryPage /> },
      { path: "cart", element: <CartPage /> },
      {
        path: "login",
        element: <LoginPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const response = await fetchLoginUser({
            email: String(formData.get("email")),
            password: String(formData.get("password")),
          });

          localStorage.setItem("token", response.data.token);
          return redirect("/");
        },
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const response = await fetchRegisterUser({
            firstName: String(formData.get("firstName")),
            lastName: String(formData.get("lastName")),
            email: String(formData.get("email")),
            password: String(formData.get("password")),
          });

          localStorage.setItem("token", response.data.token);

          return redirect("/");
        },
      },
    ],
  },
]);
