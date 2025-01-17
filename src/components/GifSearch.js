import React from 'react'
class GifSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { term: "" };
      }
    
      handleChange = (event) => {
       
         // console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return (
            <div>Enter a Search term: 
            <form onSubmit={this.props.handleSubmit}>
                
                <input type="text" value={this.state.term} onChange={this.handleChange}></input>
                <input type="submit" value="Find Gifs" />
            </form>
           </div>
        )
    }
}
export default GifSearch