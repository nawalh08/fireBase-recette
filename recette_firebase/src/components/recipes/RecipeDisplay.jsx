import { useSelector, useDispatch } from "react-redux";
import RecipeItem from "./RecipeItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";
import { fetchRecipe } from "./recipeSlice";

const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes)
    const change = useSelector(state => state.recipes.change)
    const dispatch = useDispatch()
  
    useEffect(() => {
        axios.get(`${BASE_DB_URL}/recipeList.json`)
            .then(response => {
                const table = []
                console.log(response.data)

                for (const recipe in response.data) {
                    
                    table.push({id:recipe,...response.data[recipe]})

                }
                console.log(table)
                dispatch(fetchRecipe(table))

            })
    }, [change])

    

    console.log("test");
    return (
        <>
            {
                recipes.map((recipe, index) => (
                    <RecipeItem recipe={recipe} key={index} />
                ))
            }


        </>
    );
}


export default RecipeList;
