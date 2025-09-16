import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./Ui/AppLayout";
import { useState } from "react";
import MoviePage from "./Pages/MoviePage";
import SeriesPage from "./Pages/SeriesPage";
import DetailPage from "./Pages/DetailPage";
import MovieTrailerPage from "./Pages/MovieTrailerPage";
import Cast from "./features/Credits/Cast";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout activeIndex={activeIndex} />}>
            <Route
              index
              element={
                <HomePage
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            />

            <Route path="movie" element={<MoviePage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route
              path="movie/detail/:movieSeriesId"
              element={<DetailPage type="movie" />}
            />
            <Route
              path="series/detail/:movieSeriesId"
              element={<DetailPage type="tv" />}
            />
            <Route
              path="movie/trailer/:movieSeriesId"
              element={<MovieTrailerPage />}
            />
            <Route
              path="/movie/detail/:movieSeriesId/cast"
              element={<Cast />}
            />
            <Route
              path="/series/detail/:movieSeriesId/cast"
              element={<Cast />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
