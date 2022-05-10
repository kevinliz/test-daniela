import "./styles.css";
import { connect } from "react-redux";
import { fetchData } from "./store/actions";
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";

function App(props) {
  return (
    <div className="App">
      <Instructions />

      <form>
        <input type="text" />
        <button type="submit">Buscar</button>
      </form>

      <CharacterList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps)(App);
