import './App.css'
import SignForm from './components/auth/SignForm'
import { useDispatch, useSelector } from 'react-redux'
import RecipeForm from './components/recipes/RecipeForm'
import { removeUser } from './components/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/recipes/RecipeDisplay'

function App() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(removeUser())} >Déconnexion</button>
      {
        user ?
        <div>
          <RecipeForm />
          <RecipeList/>
          </div>
        :
          <SignForm />
      }
    </>
  )
}

export default App;