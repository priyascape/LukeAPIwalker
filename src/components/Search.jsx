import React, { useState, useEffect }from "react";
import axios from 'axios';
import  { navigate } from '@reach/router';

const Search = () => {
    
    const [categories, setCategories] = useState([]);

    const [inputs, setInputs] = useState({
        category:"people",
        id:""
    })        

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(res => {
            setCategories(Object.keys(res.data));
        } )
        .catch(err => console.log(err))
    }, []);

    const onChange = (e) => {
        setInputs({
            ...inputs, 
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${inputs.category}/${inputs.id}`);
    }

    return (
        <div className="container mt-5">

            <form className="form-inline" onSubmit={ submitHandler } >
                <div className="form-group">
                    <label className="form-label mr-2" htmlFor="">Search For:</label>
                    <select onChange= { onChange } name="category" id="" className="form-control">
                        {
                            categories.map((category,i) => {
                                return (
                                    <option key={i} value={category} >{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="input-group ml-4">
                    <label className="form-label mr-2" htmlFor="id">ID:</label>
                    <input onChange= { onChange } className="form-control" type="number" name="id"/>
                </div>
                <button className="btn btn-primary ml-3" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
