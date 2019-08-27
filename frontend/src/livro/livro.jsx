import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../templates/pageHeader'
import LivroForm from './livroForm'
import LivroList from './livroList'

const URL = 'http://localhost:3003/api/cruds'

export default class Livro extends Component {
    constructor(props){
        super(props)
        this.state = {
            titulo:'',
            autor:'',
            editora:'',
            paginas:'',
            list:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    refresh(titulo = '') {
        const search = titulo?`&titulo__regex=/${titulo}/`: ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, titulo:'', autor:'', editora:'', paginas:'', list: resp.data}))
        }
    handleSearch() {
        this.refresh(this.state.titulo)
        }
    handleChange(e) {
        this.setState({...this.state, titulo: e.target.value, autor: e.target.value,
            editora: e.target.value, paginas: e.target.value})
    }
    handleAdd(){
            const titulo = this.state.titulo
            const autor = this.state.autor
            const editora =this.state.editora
            const paginas =this.state.paginas
            axios.post(URL,{titulo,autor,editora,paginas})
            .then(resp => this.refresh())
    }
    handleRemove(livro) {
        axios.delete(`${URL}/${livro._id}`)
        .then(resp => this.refresh(this.state.titulo,this.state.autor,
            this.state.editora, this.state.paginas))
        }
    handleClear() {
        this.refresh()
        }
    render() {
        return (
            <div>
                <PageHeader name='Livros' small='Cadastro'></PageHeader>
                <LivroForm
                    titulo = {this.state.titulo}
                    autor ={this.state.autor}
                    editora = {this.state.editora}
                    paginas ={this.state.paginas}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <LivroList list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}













