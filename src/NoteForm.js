import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props) {
        super()

        NoteForm.propTypes = {
            addToList: React.PropTypes.func,
        }

        this.state = {
            title: '',
            text: '',
        }

        this.updateText = this.updateText.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateText(props, e) {
        this.setState({ text: e.target.value}, () => {
            props.addToList(this.state)
        })
    }

    render(props) {
        return (
            <div className="NoteForm">
                <form>
                    <p>
                        <input type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.state.title} 
                            onChange={this.updateTitle} />
                    </p>

                    <p>
                        <textarea name="body"
                            value={this.state.text}
                            cols="30" rows="10"
                            placeholder="Just start typing..."
                            onChange={this.updateText.bind(this, this.props)}>
                        </textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm