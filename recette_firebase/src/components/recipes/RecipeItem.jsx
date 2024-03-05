import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";
import { changeState } from "./recipeSlice"; 



const RecipeItem = (props) => {
    const recette = props.recipe
    const dispatch = useDispatch()
    console.log(recette);
    const user = useSelector(state => state.auth.user)

    const deleteRecipe = () => {
        axios.delete(`${BASE_DB_URL}recipeList/${recette.id}.json?auth=${user.idToken}`)
            .then(() => {
                console.log(`La recette avec l'id ${recette.id} est correctement supprimée`)
                dispatch(changeState())})
            .catch((error) => {
                console.error(error);
            }, [])
    }
    return  (
        <> <ul style={{listStyle : "none"}}>
        <li>Titre : {recette.titre}</li>
        <li>Instruction : {recette.instruction}</li>
        <li>Temps de préparation : {recette.preparation}</li>
        <li>Temps de cuisson : {recette.cuisson}</li>
       
        {
            
             recette.ingredients?.map((ingredients, index)=>(
                <li>{ingredients}</li>
             ))
        }
        </ul>
       
        <button onClick={deleteRecipe}>Supprimer</button>
        </>
       

    ) ;
     
}
 
export default RecipeItem;