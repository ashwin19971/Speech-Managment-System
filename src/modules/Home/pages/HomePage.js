import React from 'react';

import Header from '../components/Header';
import AuthorForm from '../components/AuthorForm';
import SpeechFeed from '../components/SpeechFeed';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      showForm: false,
      speechData: [],
      author: '',
      subjectKeywords: '',
      speech: '',
      date: ''
    }
  }

  handleAuthorInput = (e) => {
    this.setState({ author: e.target.value });
  }

  handleSubjectKeywords = (e) => {
    this.setState({ subjectKeywords: e.target.value });
  }

  handleSpeech = (e) => {
    this.setState({ speech: e.target.value });
  }

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  }

  controlSearchInput = (e) => {
    this.setState({ searchString: e.target.value });
  }

  handleAuthorForm = () => {
    this.setState(state => ({ showForm: !state.showForm }));
  }

  handleSpeechData = () => {
    let { speechData, author, subjectKeywords, speech, date } = this.state;
    speechData.push({
      author, subjectKeywords, speech, date
    })
    this.setState({
      showForm: false,
      searchString: '',
      author: '',
      subjectKeywords: '',
      speech: '',
      date: ''
    });
  }

  deleteSpeech = (key) => {
    let { speechData } = this.state;
    speechData = speechData.filter((val, index) => index != key);
    this.setState({ speechData });
  }

  render() {
    const {
      searchString,
      showForm,
      speechData,
      author,
      subjectKeywords,
      speech,
      date
    } = this.state;
    return (
      <div>
        <Header
          searchString={searchString}
          controlSearchInput={this.controlSearchInput}
          handleAuthorForm={this.handleAuthorForm}
        />
        {
          showForm ?
            <AuthorForm
              handleAuthorForm={this.handleAuthorForm}
              handleSpeechData={this.handleSpeechData}
              handleAuthorInput={this.handleAuthorInput}
              handleSubjectKeywords={this.handleSubjectKeywords}
              handleSpeech={this.handleSpeech}
              handleDate={this.handleDate}
              author={author}
              subjectKeywords={subjectKeywords}
              speech={speech}
              date={date}
            /> : ''
        }
        <SpeechFeed
          searchString={searchString}
          speechData={speechData}
          deleteSpeech={this.deleteSpeech}
        />
      </div>
    )
  }
}

Home.propTypes = {
};

export default Home;
