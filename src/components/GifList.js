import React from 'react'


class GifList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => <li key={gif.id}>{gif.images.original.url}</li>)}

            </ul>
        )
    }
}
export default GifList