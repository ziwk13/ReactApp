import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/Board";
import Board from "../pages/Board";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export const router =  createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      // 중첩된 자식 라우트
      children: [
        // Home (부모 경로를 그대로 사용)
        {
          index: true,
          element: <Home/>,
        },
        // About (부모 라우트의 상대 경로로 작성 : "/" + "about" = "/about")
        {
          path: "about",
          element: <About/>,
        },
        // Board
        {
          path: "board",
          element: <Board/>,
        }
      ]
    },
    // 그 외 경로
    {
      path: "*",
      element: <NotFound/>
    }
]);