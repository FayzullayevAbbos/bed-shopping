import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./components/Main/Main";
import About from "./components/About/About";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CollectionData from "./Data/ProductData";
import ProductCategory from "./components/ProductCategory/ProductCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/shop",
      element: <Collection />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/product/:name",
      element: <ProductDetails data={CollectionData} />,
    },
    {
      path: "/product-category/:collectionName",
      element: <ProductCategory data={CollectionData} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
