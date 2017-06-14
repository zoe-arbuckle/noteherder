import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            text: '',
        }

        this.updateText = this.updateText.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
    }

    updateTitle(e){
        this.setState({ title: e.target.value})
    }

    updateText(e){
        this.setState({ text: e.target.value})
    }

    render() {
        return (
            <div className="NoteForm">
                <form>
                    <p>
                        <input type="text" name="title" placeholder="Title your note" value={this.state.title} onChange={this.updateTitle}/>
                    </p>
                    <p>
                        <textarea name="body" value={this.state.text} cols="30" rows="10" placeholder="Just start typing..." onChange={this.updateText}></textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm