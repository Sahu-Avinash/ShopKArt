import Layout from "./../components/Layout/Layout";
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCart } from "../context/cart";
import toast  from "react-hot-toast";
import "../styles/productDetails.css"
import { NavLink } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams()
    const [product ,setProduct] = useState({})
    const [relatedProducts, setRelatedProducts]= useState([]);
    const [cart, setCart] = useCart();
    useEffect(()=> {
        if(params?.slug) getProduct();
    },[params?.slug]);

    const getProduct = async ()=>
    {
        try {
            const {data} = await  axios.get(`/api/v1/product/get-product/${params.slug}`)
           setProduct(data?.product)
           getSimilarProduct(data?.product._id,data?.product.category._id)
        } catch (error) {
            console.log(error);
        }
    }
    

    const getSimilarProduct = async(pid,cid)=>
    {
       try {
        const{data}= await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
        setRelatedProducts(data?.products);
       } catch (error) {
          console.log(error);
       }
    }

  return (
    <Layout>
         <div className="row container mt-2  product-details">
          <div className="col-md-6">
          <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    
                  />
                  
            </div>
          <div className="col-md-6 product-details-info">
            <h2 className="text-center">Product Details</h2> 
            <h6><b>Name</b>: {product.name}</h6>
            <h6><b>Description</b> : {product.description}</h6>
            <h6><b>Price</b> : ₹{product.price}</h6>
            <h6><b>Category</b> : {product.category?.name}</h6>
            <button className="btn btn-dark ms-1" onClick={() => {
                        setCart([...cart, product]);

                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item Added to cart");
                      }}>
                      ADD TO CART
                    </button>
            </div>
         </div>
         <hr/>
         <div className="row container similar-products">
          <h5>Similar Products</h5>
          <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div className="card m-2" key={p._id}>
                 <NavLink to={`/product/${p.slug}`}>
               
                <img

                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                </NavLink>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                    ₹{p.price}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                   
                    <button className="btn btn-dark ms-1" onClick={() => {
                        setCart([...cart, p]);

                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
         </div>
    </Layout>
  )
}

export default ProductDetails
