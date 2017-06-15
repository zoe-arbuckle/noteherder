import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: '',
            text: '',
        }
    }

    handleChanges = (e) => {
        this.props.saveNote({title: 'Created from noteForm'})
        this.setState({title: e.target.value})
        
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
                            value={this.state.text}
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