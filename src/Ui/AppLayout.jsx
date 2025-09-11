import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { BASE_IMAGE_URL } from "../utils/constants";

function AppLayout({ activeIndex }) {
  const { data } = useTrendingMovies();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const backPath = data?.results[activeIndex]?.backdrop_path;
  const backImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${BASE_IMAGE_URL}${backPath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div
      className="flex flex-col items-center"
      style={isHomePage ? backImg : { backgroundColor: "transparent" }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
