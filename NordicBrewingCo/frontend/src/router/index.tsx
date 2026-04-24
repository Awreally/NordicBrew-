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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    hydrateFallbackElement: <RouteLoading />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage />, loader: fetchProducts, },
      { path: "shop/:slug", element: <ShopProductPage /> },
      { path: "subscription", element: <SubscriptionPage /> },
      { path: "brewguides", element: <BrewPage /> },
      { path: "ourstory", element: <StoryPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
