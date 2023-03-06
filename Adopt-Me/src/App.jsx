import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";

const QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
