import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailListPage from "./pages/CocktailListPage";
import HomePage from "./pages/HomePage";
import RandomCocktailPage from "./pages/RandomCocktailPage";
import RandomCocktail2Page from "./pages/RandomCocktail2Page";
import CategoryPage from "./pages/CategoryPage";
import IngredientListPage from "./pages/IngredientListPage";
import CocktailsDetailPage from "./pages/CocktailsDetailPage";
import MealListPage from "./pages/MealListPage";
import MealDetailPage from "./pages/MealDetailPage";


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
        <Route path='/cocktails/details/:id' element={<CocktailsDetailPage/>}/>
        <Route path="/meals" element={<MealListPage/>}/>
        <Route path="/meals/details/:mealID" element={<MealDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
