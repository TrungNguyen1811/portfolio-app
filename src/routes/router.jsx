import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </Suspense>
    ),
  },
]);

export default router;
