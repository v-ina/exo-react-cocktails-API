import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailListPage from "./pages/CocktailListPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CocktailListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
