import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import recipeSlice from "./components/recipes/recipeSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipeSlice,
  },
});
