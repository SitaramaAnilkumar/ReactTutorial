import React, {Component} from "react";
import Form from "./Form";
import Table from "./Table";
class App extends Component {
    state = {
        characters : []
    }
    removeCharacter = index => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }
   /* render() {
        const heading = <h2 className="site-heading">Hello, Welcome to React</h2>
        const name = 'John'
        const content = <h3>Hello, {name}</h3>
        return (
            <div>
                <h1>Hello, React</h1>
                {heading}{content}
                <Table/>
            </div>
        )
    } */
   render() {
       return(
           <div className="container">
               <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
               <Form handleSubmit={this.handleSubmit} />
           </div>
       )
   }
}
export default App;