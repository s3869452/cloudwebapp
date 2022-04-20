import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Deals() {
    const [products, setProduct] = useState([])
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        getProducts();
    }, [])

    function getProducts() {
        axios.get('https://lbnhkavsjh.execute-api.us-east-1.amazonaws.com/prod/displayposts').then((result) => {
            setProduct(result.data.products)
            setTitle(result.data.products.title)
            setCategory(result.data.products.category)
            setDescription(result.data.products.description)
            setProductId(result.data.products.postId)
        })
    }

    return (
        <div>
            <table border="1" style={{ float: 'left' }}>
                <tbody>
                    {
                        products.map((item, i) =>
                            <tr key={i}>
                                <td>{item.title} <br/>
                                {item.category} <br/>
                                {item.description}</td>

                            </tr>
                        )       
                    }
                </tbody>
        </table>
        </div>
    )
}

export default Deals;

