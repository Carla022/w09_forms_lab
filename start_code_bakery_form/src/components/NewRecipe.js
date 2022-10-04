import { useState} from 'react';

const NewRecipe = ({onSubmit}) => {

    const [cakeName, setCakeName] = useState ("");
    const [ingredients, setIngredients] = useState ([]);
    const [rating, setRating] = useState ("");

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault(); 
        const newRecipe = {
            cakeName: cakeName,
            ingredients:ingredients.split(","),
            rating: rating
        }

        setCakeName ("");
        setIngredients([]);
        setRating("");
        onSubmit(newRecipe);
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                id="name"
                onChange={handleCakeNameChange}
                value={cakeName}
            />

            <label htmlFor="ingredients">Ingredients:</label>
            <input 
                type="text"
                id="ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
            />
            
            <label htmlFor="rating">Rating:</label>
            <input 
                type="text"
                id="rating"
                onChange={handleRatingChange}
                value={rating}
            />

            <input type="submit" value="Add Recipe"/>

        </form>
    );

}

export default NewRecipe;