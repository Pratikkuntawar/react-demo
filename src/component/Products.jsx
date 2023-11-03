import React, { useState, useEffect } from "react";
const Products = () => {
    let [data, setData] = useState([]);
    let [filter, setFilter] = useState(data);
    var [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    const Loading = () => {
        return (
            <>
                Products are Loading..
            </>
        )
    }
    const filterProduct=(cat)=>{
        const updatelist=data.filter((x)=>x.category===cat);
        setFilter(updatelist);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3  mb-4">
                                    <div class="card h-100 text-center" >
                                        <img src={product.image} class="card-img-top" alt={product.titie} height="250px" />
                                        <div class="card-body">
                                            <h5 className="card-title mb-0">{product.title}</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <p className="text-center" height="20px">{product.description.substring(0,131)}</p>
                                            <a href="#" className="btn btn-outline-dark mb-4">ADD TO Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div >
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;