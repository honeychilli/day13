import React from "react";
import React from 'react'
import TableData from "../components/TableData";


const Home = () => {
    
  return (
    <div>
      <h1>Home</h1>
      <TableData products={products} onclick={onclick} />
      <TableDataModal/>
    </div>
  )
}

export default Home