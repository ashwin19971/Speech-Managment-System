import React, { Component } from 'react';

import './SpeechFeed.scss';
import map from 'lodash/map';

class SpeechFeed extends Component {
  render() {
    const {
      searchString,
      speechData,
      deleteSpeech
    } = this.props;
    return (
      <div className='speech-feed-wrapper'>
        {
          map(speechData, (val, index) => (
            val.author.toLowerCase().includes(searchString.toLowerCase()) &&
            <div key={index} className='speech-wrapper'>
              <p className='author'>{val.author}</p>
              <p className='subject-keywords'>{val.subjectKeywords}</p>
              <p className='speech'>{val.speech}</p>
              <p className='date'>{val.date}</p>
              <p className='delete' onClick={() => deleteSpeech(index)}>Delete</p>
            </div>
          ))
        }
        {
          !speechData.length && !searchString ? <p className='msg'>No speeches added yet!!!</p> : ''
        }
        {
          searchString ? <p className='not-found'>No speeches by <i>{searchString}</i> found yet!!!</p> : ''
        }
      </div>
    )
  }
}


export default SpeechFeed;
