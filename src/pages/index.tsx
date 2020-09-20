import Navbar from 'src/components/Navbar'
import ProductPreviewList from 'src/containers/ProductList'

import { useDispatch, useSelector } from 'react-redux'
import { fetchingProductsAction } from 'src/store/products/actions'

const Home = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.productsLoading)
        
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
            <ProductPreviewList />
        </div>
    );
}
 
export default Home;