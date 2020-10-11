import React, { useState, useEffect }  from "react";
import Axios from 'axios';

import Header from './Header';
import Product from './Product';
import Detail from './Detail';
import Footer from './Footer';
import { Zoom } from "@material-ui/core";


function Home() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();

    useEffect(() => {
        loadData()
    }, []);

    function loadData() {
        Axios.get('/products')
            .then(res => { 
                console.log("Home: loadData -> ", res.data);       
                setProducts(res.data);
            })
            .catch(err => {
                console.log('Error: ' + err);
            });
    }

    function popUpProduct(product_id) {
        Axios.get(`/products/${product_id}`)
            .then(res => {
                console.log("Home: setProduct -> ", res.data);
                setSelectedProduct(res.data);
            })
            .catch(err => {
                console.log('Error: ' + err);
            });
        
    }

    function closeDetail() {
        setSelectedProduct(null);
    }


    return (
        <div>
            <Header />

            {selectedProduct && 
                <Detail
                    code={selectedProduct.code}
                    name={selectedProduct.name}
                    description={selectedProduct.description}
                    price={selectedProduct.price}
                    onClose={closeDetail}
                />
            }
            

            <div>
                <h2>Listado de todos los productos</h2>

                <Zoom in={true} timeout={500}>
                    <div className="products-area">
                        {products.map((product, index) => {
                            return (
                                <Product
                                    key={index}
                                    id={product._id}
                                    name={product.name}
                                    clickOnProduct={popUpProduct}
                                />
                            );
                        })}
                    </div>

                </Zoom>

            </div>

            <Footer />
        </div>

    );

}

export default Home;