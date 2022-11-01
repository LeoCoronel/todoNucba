import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./ui/components/Navbar/Navbar";
import ToDo from "./ui/screens/ToDo/ToDo";
import Home from "./ui/screens/Home/Home";
import Poke from "./ui/screens/Poke/Poke";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/poke",
    element: <Poke />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
