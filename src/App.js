import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailListPage from "./pages/CocktailListPage";
import HomePage from "./pages/HomePage";
import RandomCocktailPage from "./pages/RandomCocktailPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cocktail" element={<CocktailListPage />}/>
        <Route path="/randomcocktail" element={<RandomCocktailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
