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

    render() {
        return (
            <div className="NoteForm">
                <form>
                    <p>
                        <input type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.state.title} 
                            onChange={this.handleChanges} />
                    </p>

                    <p>
                        <textarea name="body"
                            value={this.state.body}
                            cols="30" rows="10"
                            placeholder="Just start typing..."
                            onChange={this.handleChanges}>
                        </textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm