import { createBrowserRouter } from "react-router-dom";
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
import { fetchProducts } from "../features/products/api/product.api";
import type {
  ProductCategory,
  ProductRoast,
  CoffeeOrigin,
  FlavorProfile,
} from "../features/products/types/product.types";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    hydrateFallbackElement: <RouteLoading />,
    children: [
      { index: true, 
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
      { path: "shop/:slug", element: <ShopProductPage /> },
      { path: "subscription", element: <SubscriptionPage /> },
      { path: "brewguides", element: <BrewPage /> },
      { path: "ourstory", element: <StoryPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
