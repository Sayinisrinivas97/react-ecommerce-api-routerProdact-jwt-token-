import AllProductsSection from '../AllProductsSection'
import PrimeDealSection from '../PrimeDealsSection'
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
