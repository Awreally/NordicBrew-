import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { ShopProductPage } from "../pages/ShopProductPage";
import { SubscriptionPage } from "../pages/SubscriptionPage";
import { StoryPage } from "../pages/StoryPage";
import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:slug", element: <ShopProductPage /> },
      { path: "subscription", element: <SubscriptionPage/> },
      { path: "ourstory", element: <StoryPage />},
      { path: "cart", element: <CartPage />},
      { path: "login", element: <LoginPage />}
    ],
  },
]);