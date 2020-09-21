import { useEffect } from 'react'
import Navbar from 'src/components/Navbar'
import ProductPreviewList from 'src/containers/ProductList'

import { useDispatch, useSelector } from 'react-redux'
import { fetchingProductsAction, fetchProductsSuccessAction } from '@store/products/actions'
import productsService from '@services/products'

const Home = ({ products }) => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.productsLoading)

    useEffect(() => {
        dispatch(fetchProductsSuccessAction(products))
    })

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

export const getServerSideProps = async function () {
    return {
        props: {
            productsLoading: false,
            products: await productsService.getPaginated(1, 10)
        }
    }
}

export default Home;