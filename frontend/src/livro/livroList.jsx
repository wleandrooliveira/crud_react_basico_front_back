import React from 'react'
import IconButton from '../templates/iconButton'

export default props => {
    const renderRows = () => {
    const list = props.list || []
        return list.map(livro => (
            <tr key={livro._id}>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>{livro.paginas}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(livro)}></IconButton>
                </td>
            </tr>
            ))
        }
        return (
            <table className='table'>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Páginas</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}



