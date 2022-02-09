import {React, Fragment, useEffect} from 'react'
import { Link } from "react-router-dom";

import useAsyncReference from '../../hooks/useAsyncReference';
import './CategoryList.css'


import axios from 'axios';


const CategoryList = () => {

    const[categoryList, setCategoryList] = useAsyncReference();


    useEffect(() => {
        const getCategoryData = async() => {
            const data = await axios.get('http://127.0.0.1:8000/categories');
            // console.log(data.data)
            setCategoryList(data.data)
            
        }
    getCategoryData()
    // console.log('set', categoryList)
}, [])


    return(

        <Fragment>
         { categoryList &&    
          <div className="container__cat">


     {categoryList.current && categoryList.current.map(({id, title}) =>(
    <div className='recipeCat__list' key={id}>
        <div className="recipeCat__list__link">
                    <Link to = {{
            pathname:`/categories/${id}`,
            state: {data: categoryList.current}
        }} >
       <p>{title}</p> </Link>
        </div>

    </div>
) )} 
</div>}
        </Fragment>
    );
    
}


export default CategoryList