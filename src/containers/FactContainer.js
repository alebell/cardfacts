import { connect } from "react-redux";
import { fetchRandomFact } from "../store/actions/fact";
import { fetchRandomImage } from "../store/actions/image";
import Fact from "../components/Fact";

//Redux
const mapStateToProps = state => ({
  fact: state.fact,
  image: state.image
});

const mapDispatchToProps = dispatch => ({
  doFetchFact: () => {
    dispatch(fetchRandomFact());
  },
  doFetchImage: () => {
    dispatch(fetchRandomImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fact);
