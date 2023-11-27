import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailListPage from "./pages/CocktailListPage";
import HomePage from "./pages/HomePage";
import RandomCocktailPage from "./pages/RandomCocktailPage";
import RandomCocktail2Page from "./pages/RandomCocktail2Page";
import CategoryPage from "./pages/CategoryPage";
import IngredientListPage from "./pages/IngredientListPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cocktail" element={<CocktailListPage />}/>
        <Route path="/randomcocktail" element={<RandomCocktailPage />}/>
        <Route path="/randomcocktail2" element={<RandomCocktail2Page />}/>
        <Route path="/category" element={<CategoryPage />}/>
        <Route path='/ingredient' element={<IngredientListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
