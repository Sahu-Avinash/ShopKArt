import Layout from 'antd/es/layout/layout'
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    const [product ,setProduct] = useState({})
    useEffect(()=> {
        if(params?.slug) getProduct()
    },[params?.slug])
    const getProduct = async ()=>
    {
        try {
            const {data} = await  axios.get(`/api/v1/product/get-product/${params.slug}`)
           setProduct(data?.product)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Layout>
        
    </Layout>
  )
}

export default ProductDetails
