import React from 'react'

function TableData({products,onclick}) {
    return (
        <Table THE PRODUCTS>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>View Details</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product=>(
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.total}</td>
                        <td><button onClick={()=>onclick(product)}>View Details</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableData