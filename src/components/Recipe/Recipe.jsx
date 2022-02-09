import {React} from 'react'
import { Link } from "react-router-dom";


import './Recipe.css'



//  вопрос: можно ли как-то выводить имя автора без упражнений вроде тех, которые делались в RecipeCard? 
// Тут у меня уже не хватило сил их повторить. Без упражнений выводится id пользователя, что ожидаемо 
// (связь ForeignKey, кастомная модель пользователя не делалась, эта из коробки)
// И на вытаскивании автора не по айди конкретного поста, а в списке, я застряла просто насмерть. Как это можно сделать?


const Recipe = ({ data }) =>  {



return(
    <div className="recipeList">

        {data.current && data.current.map(({id, description, author, title}) =>(
            <div className='container' key={id}>
                <div className="recipeList__title">
                <Link to = {{
                    pathname:`/recipe-details/${id}`,
                    state: {data: data}
                }} >
               {title} </Link>
                </div>
                {/* <div className="recipeList__image">{picture}</div> */}
                <div className="recipeList__text">
                {description}
                </div>
            </div>
        ) )} 
    </div>


) }
export default Recipe
