import {React, useEffect} from 'react'

import useAsyncReference from '../../hooks/useAsyncReference';


  import { useParams } from "react-router";


import axios from 'axios';

import Recipe from '../Recipe/Recipe';
import './CategoryCard.css'


const CategoryCard = () => {

    const[recipeCat, setRecipeCat] = useAsyncReference();
    const[catName, setCatName] = useAsyncReference();
    const params = useParams();
    // console.log(params)
    const currentId = params.id;
    useEffect(() => {
        const getRecipeCard = async() => {
            const data = await axios.get(`http://127.0.0.1:8000/categories/${currentId}`);
            const catNameData = await axios.get(`http://127.0.0.1:8000/categories/name/${currentId}`);
            setRecipeCat(data.data)
            setCatName(catNameData.data.title)
            console.log(catName)
            // console.log('DATA', recipeCat.current)
        }
        getRecipeCard()
    }, [currentId])
    return (
        <div className="recipeCat">
            <div className="recipeCat__catName">
            {catName.current}
            </div>
            <Recipe data={recipeCat} />
        </div>
      );
}


export default CategoryCard