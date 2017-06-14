import React from 'react'
import './NoteList.css'

import Note from './Note'

const noteArr = [
    {
        title: "Citizens of distant epochs",
        text: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?",
    },

    {
        title: "Preserve and cherish that pale blue dot ",
        text: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!",
    },

    {
        title: "Laws of physics",
        text: "Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas",
    },

]

const NoteList = () => {
    return (
        <div className="NoteList">
            <h3>Notes <button className="delete button" onClick>
                <i className="fa fa-trash-o"></i>
            </button>
            </h3>

            <ul id="notes">
                {noteArr.map((noteInfo, i) =>
                    <Note noteInfo={noteInfo} key={i} />)}

            </ul>
        </div>
    )
}

export default NoteList