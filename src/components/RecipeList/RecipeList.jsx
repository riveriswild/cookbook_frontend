import {React, useState, Fragment, useEffect, useRef} from 'react'
import useAsyncReference from '../../hooks/useAsyncReference';


import axios from 'axios';
import Recipe from '../Recipe/Recipe';
import CategoryList from '../CategoryList/CategoryList';
import './RecipeList.css'


const RecipesList = () => {

    const[recipeList, setRecipeList] = useAsyncReference();


    useEffect(() => {
        const getRecipeData = async() => {
            const data = await axios.get('http://127.0.0.1:8000/recipe_list/');
            // console.log(data.data)
            setRecipeList(data.data)
            
        }
    getRecipeData()
    // console.log('set', recipeList)
}, [])
// console.log('set2', recipeList.current)

    return(

        <Fragment>
            <CategoryList /> 
            <div className="container_recipe__all">         
            { recipeList && <Recipe data = {recipeList} />}
            </div>
        </Fragment>
    );
    
}


export default RecipesList