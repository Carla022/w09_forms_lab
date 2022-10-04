import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Search from "./components/Search";
import RecipeContainer from "./CONTAINERS/RecipeContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeContainer />
        <Search />
      </main>
    </>
  );
}

export default App;
