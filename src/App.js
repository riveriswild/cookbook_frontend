import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import CategoryList from './components/CategoryList/CategoryList';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeCard from './components/RecipeCard/RecipeCard';
import CategoryCard from './components/CategoryCard/CategoryCard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
       <Router>
       <Header />
          <Routes>
            <Route exact path="/" element={<RecipeList/>} />
            <Route
              path="/recipe-details/:id"
              element={<RecipeCard/>}
            />
            <Route path="/categories/" element={<CategoryList/>} />
            <Route path="/categories/:id" element={<CategoryCard/>} />
          </Routes>
      </Router>
    </div> 
  );
}

export default App;
