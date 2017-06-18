import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: this.blankNote(),
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

    handleChanges = (e) => {
        const note = this.state.note
        note[e.target.name] = e.target.value

        this.setState({note: note}, () => {this.props.saveNote(this.state.note)})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        if(this.props.selected === null){
            this.setState({note: this.blankNote() })
        }else{
            this.setState({note: this.props.notes[this.props.selected]})
        }
    }

    render() {
        return (
            <div className="NoteForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.state.note.title} 
                            onChange={this.handleChanges} />
                    </p>

                    <p>
                        <textarea name="body"
                            value={this.state.note.body}
                            cols="30" rows="10"
                            placeholder="Just start typing..."
                            onChange={this.handleChanges}>
                        </textarea>
                    </p>

                    <button type="submit">Save and new</button>
                </form>
            </div>
        )
    }
}

export default NoteForm