import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'
import "../styles/SearchPage.css"
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Search = () => {
    const[values,setValues] =useSearch()

  return (
    <Layout className="container">
      <div className="text-center searchPage">
        <h1>Search Results</h1>
        <h6>{values?.results.length<1?'No products Found': `Found${values?.results.length}`}</h6>
        <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div className="card m-2" key={p._id}>
                <NavLink to={`/product/${p.slug}`}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  
                />
                </NavLink>
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 30)}...
                  </p>
                  <div className="card-name-price">
        
                    <button class="btn btn-secondary ms-1">
                      ADD TO CART
                    </button>
                    </div>
                    </div>
                    ))}
     </div>
      </div>
    </Layout>
  )
}

export default Search
