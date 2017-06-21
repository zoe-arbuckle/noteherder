import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: this.blankNote(),
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.match.params.id !== this.state.note.id && nextProps.selected !== null) {
            if (nextProps.notes[nextProps.match.params.id]){
                this.setState({ note: nextProps.notes[nextProps.match.params.id] })
            }

        } else if (nextProps.selected === null) {
            this.setState({ note: this.blankNote() })
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

        this.setState({ note: note }, () => { this.props.saveNote(this.state.note) })
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

                </form>
            </div>
        )
    }
}

export default NoteForm