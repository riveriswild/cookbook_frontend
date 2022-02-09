import {React, useEffect } from 'react'

import useAsyncReference from '../../hooks/useAsyncReference';
import './RecipeCard.css'


import { useParams } from "react-router";


import axios from 'axios';


const RecipeCard = () => {

    // вопрос: без вот этого кастомного хука useAsyncReference у меня уже не первый раз не обновляется нормально state.
    // Что я делаю не так? 

    const[recipe, setRecipe] = useAsyncReference({});
    const[authorName, setAuthor] = useAsyncReference();
    const params = useParams();
    // console.log(params)
    const currentId = params.id;
    useEffect(() => {
        const getRecipeCard = async() => {
            const data = await axios.get(`http://127.0.0.1:8000/recipe_list/${currentId}`);
            const author = await axios.get(`http://127.0.0.1:8000/recipe/${currentId}/user`);  // я знаю, что это извращение
            const authorN = author.data.username
            setRecipe(data.data)
            setAuthor(authorN)
            // console.log('1',authorN)
            // console.log('DATA', recipe.current)
            // console.log(authorName)
        }
        getRecipeCard()
    }, [currentId])
    return (
        <div className="recipeCard__container">
            <div className="recipeCard">
            <div className="recipeCard__author">
            {authorName.current}
            </div>
            <div className="recipeCard__title">
            {recipe.current.title}
            </div>
            <div className="recipeCard__text">
            {recipe.current.text}
            </div>
            </div>
        </div>
      );
}

export default RecipeCard