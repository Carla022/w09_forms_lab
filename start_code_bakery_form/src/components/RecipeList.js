

const RecipeList = ({recipes}) =>{
    return (
        <>
            <section>
                {
                    recipes.map((recipe, index) => {
                        return(
                            <div key={index}>
                                <h3>{recipe.cakeName}</h3>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(recipes.reduce((total, recipe) => total + recipe.rating, 0) / recipes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;