import React from "react";
import axios from "axios";

import Header from "../../components/Header/Header";

import { useNavigate, useParams} from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menos de 40 caracteres"),
    description: yup.string().required("A descrição é obrigatória").max(150, "A descrição precisa ter menos de 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menos de 500 caracteres")
})

function Edit() {

    const { id } = useParams()

    const navigate = useNavigate();

    const addPost = data => axios.post("https://concessionaria.onrender.com/sedan", data)
    .then(() => {
        console.log("Deu tudo certo")
        navigate('/');
        
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationPost)
    })
    

    return(
        <div>
            <Header />
            
            <main>
                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div> {/* espaço vazio */}

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Descrição</label>
                                <input type="text"  name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")}></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit ">Enviar</button>
                            </div>

                        </form>                        

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Edit;