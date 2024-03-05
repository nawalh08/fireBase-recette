import { useRef , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { BASE_DB_URL } from "../../firebaseConfig";
import { addRecipe,changeState } from "./recipeSlice";


const RecipeForm = () => {
    const titreRef = useRef()
    const instructionRef = useRef()
    const preparationRef = useRef()
    const cuissonRef = useRef()
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [ingredientTempo , setIngredientTempo ]= useState([])
    const ingredientRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecipe = {
            titre: titreRef.current.value,
            instruction:  instructionRef.current.value,
            preparation : preparationRef.current.value,
            cuisson : cuissonRef.current.value,
            ingredients : ingredientTempo,
            done: false
        }


        if (user.idToken) {
            axios.post(`${BASE_DB_URL}recipeList.json?auth=${user.idToken}`, newRecipe).then((response) => {
                console.log(response.data);
                dispatch(addRecipe(newRecipe))
                dispatch(changeState())
            })
        }
    }

    const addIngredient = () => {
        setIngredientTempo(prev=>[...prev, ingredientRef.current.value])
        console.log(ingredientTempo)
       
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="mb-4" placeholder="Ajouter un nom à votre recette" ref={titreRef} />
                <input type="text" placeholder="Ajouter les instructions " className="mx-2" ref={instructionRef} />
                <input type="number" placeholder="Ajouter le temps de préparation " className="mx-2" ref={preparationRef} />
                <input type="number" placeholder="Ajouter le temps de cuisson" ref={cuissonRef} />
                <input type="text" placeholder="Ajouter les ingrédients" ref={ingredientRef} />   
                <button type="submit"> Ajouter </button>

            </form>
            <button onClick={addIngredient} >Ajouter l'ingrédient</button>
            <button onClick={() => ingredientTempo.pop()} >Supprimer le dernier ingrédient</button>

        </>
    );
}

export default RecipeForm;