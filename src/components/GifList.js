import React from 'react'


class GifList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => <li key={gif.id}><img width='200' src={gif.images.original.url} alt=''></img></li>)}

            </ul>
        )
    }
}
export default GifList