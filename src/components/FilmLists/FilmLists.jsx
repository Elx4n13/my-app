import './FilmLists.scss'
import React from 'react'
import ListItem from '../FilmListItem/ListItem'

const FilmLists = ({moviesList}) => {
    console.log(moviesList)
    return (
        <div>
            {/* {
                moviesList.map(m => <div key={m.imdbID}>{<ListItem text={m.Title} /> }</div>)
            } */}
            <ListItem />
        </div>
    )
}

export default FilmLists