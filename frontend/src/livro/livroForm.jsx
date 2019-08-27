import React from 'react'
import Grid from '../templates/grid'
import IconButton from '../templates/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
            <div role='form' className='livroForm'>

                <Grid cols='12 9 10'>
                    <input id='titulo' className='form-control'
                    placeholder='Adicione o titulo do livro'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.titulo}></input>
                </Grid>
                <Grid cols='12 9 10'>
                    <input id='autor' className='form-control'
                    placeholder='Adicione o autor do livro'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.autor}></input>
                </Grid>
                <Grid cols='12 9 10'>
                    <input id='editora' className='form-control'
                    placeholder='Adicione a editora'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.editora}></input>
                </Grid>
                <Grid cols='12 9 10'>
                    <input id='paginas' className='form-control'
                    placeholder='Adicione o número de páginas'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.paginas}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={props.handleClear}></IconButton>
                </Grid>

            </div>
    )

}



