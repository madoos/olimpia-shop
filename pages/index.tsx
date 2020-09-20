import Navbar from '@components/Navbar'
import ProductList from '@containers/ProductList'

import { useDispatch, useSelector } from 'react-redux'
import { fetchingProductsAction } from '@store/products/actions'

const Home = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.productsLoading)
    debugger
    
    return (
        <div>
            <Navbar />
            <button 
                onClick={() => dispatch(fetchingProductsAction())}
            >
                Fetch posts
            </button>
            {isLogin ? '...loading' : 'cargados'}
            <h1>Products</h1>
            <ProductList />
        </div>
    );
}
 
export default Home;