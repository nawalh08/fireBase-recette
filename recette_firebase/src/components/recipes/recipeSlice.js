import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    change: false
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    fetchRecipe: (state , action) => {
        state.recipes= action.payload
    },
    deleteRecipe : (state , action) => {

    },
    changeState :(state,action) =>{
        state.change = !state.change
    }
  },
});

export const { addRecipe , fetchRecipe,changeState } = recipeSlice.actions;
export default recipeSlice.reducer;
