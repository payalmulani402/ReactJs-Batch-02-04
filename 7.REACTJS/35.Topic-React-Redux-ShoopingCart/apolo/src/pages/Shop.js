import React from 'react'
import ProductsCard from '../components/ProductsCard'

const Shop = () => {
  return (
    <div>
      <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Shop
