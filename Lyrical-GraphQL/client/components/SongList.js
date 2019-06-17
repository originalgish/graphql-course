import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ))
  }

  render() {
    if (this.props.data.loading) {
      return <span>Loading...</span>
    }
    return <ul className="collection">{this.renderSongs()}</ul>
  }
}

export default graphql(query)(SongList)
