import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
        
      }
    // componentDidMount() {
        
        
    //   }
      onHandleSubmit = (event) => {
        
        event.preventDefault();
      
        let searchWord = event.target.children[0].value
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=oTfEfwP5F1GUNqC1r6n0bvKze6gGdoZ4&rating=g`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            gifs: data.data.slice(0,3)
          })
        })
          
      }

  render() {
    return (
        <div>
            <GifSearch handleSubmit={this.onHandleSubmit.bind(this)}/>
            <GifList gifs={this.state.gifs} />
        </div>
        )
    }
  }
  
  export default GifListContainer