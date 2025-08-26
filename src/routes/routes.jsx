import { useRoutes } from "react-router-dom";
import privateRoutes from "./_privateRoutes";
import publicRoutes from "./_publicRoutes";
import globalRoutes from "./_globalRoutes";

function AppRoutes() {
  const routes = [...globalRoutes, ...publicRoutes, ...privateRoutes];
  return useRoutes(routes);
}

export default AppRoutes;
