import { connect } from "react-redux";
import SearchProductsList from "./SearchProductsList";
import {searchProductsAC} from "../../redux/reducers/productsReducer"
const mapStateToProps = (state) => ({
    products: state.products.products,
    searchStatus: state.products.searchStatus,
    searchArr: state.products.search
    
})

const mapDispatchToProps = {
    searchProducts: searchProductsAC

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductsList);
