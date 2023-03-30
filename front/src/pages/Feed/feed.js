import React, { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import './feed.css'

import More from '../../images/more.svg'

import HeaderMain from "../../components/HeaderMain/HeaderMain";
import axios from "axios";

function Feed() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://churrascaria-cpx.onrender.com/carnes")  //função
        .then((response) => {
            setPosts(response.data)
        })
        .catch(() => {
            console.log("DEU ERRADO!")
        })
    }, [])

    return(
        <div>

            <HeaderMain />

            <main>

                <div className="cards" >
                    {posts.map((post, key) => {

                        return(
                                <div className="card" key={key} >

                            <header>
                                <h2>{post.title}</h2>
                                <img src={More} />
                            </header>

                            <div className="line"></div>

                            <p>{post.description}</p>

                            <div className="btns" >

                                <div className="btn-edit" >
                                    <Link to={{pathname: '/edit/{$post_id}' }} >
                                        <button>Edit</button>
                                    </Link> 
                                </div>

                                <div className="btn-readmore" >
                                    <Link to="/lermais" >
                                        <button>Ler mais</button>
                                    </Link> 
                                </div>

                                <div className="btn-delete" >
                                    <button>Delete</button>
                                </div>

                            </div>

                         </div>
                        )
                    })}

                </div>

            </main>
            
        </div>
    )
}

export default Feed