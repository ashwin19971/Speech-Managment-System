import React from 'react';

import './AuthorForm.scss';

const AuthorForm = ({
  handleAuthorForm,
  handleSpeechData,
  handleAuthorInput,
  handleSubjectKeywords,
  handleSpeech,
  handleDate,
  author,
  subjectKeywords,
  speech,
  date
}) => (
    <div className='author-form-wrapper'>
      <div>
        <p className='text'>Add your Speech</p>
        <p
          className='close'
          onClick={handleAuthorForm}
        >Close</p>
        <input
          type="text"
          autoComplete="off"
          value={author}
          onChange={handleAuthorInput}
          placeholder={author || 'Author name...'}
        />
        <input
          type="text"
          autoComplete="off"
          value={subjectKeywords}
          onChange={handleSubjectKeywords}
          placeholder={subjectKeywords || 'Subject keywords...'}
        />
        <textarea
          type="text"
          autoComplete="off"
          value={speech}
          onChange={handleSpeech}
          placeholder={speech || 'Author speech...'}
        />
        <input
          type="date"
          autoComplete="off"
          value={date}
          onChange={handleDate}
        />
        <button
          disabled={!author || !subjectKeywords || !speech || !date}
          onClick={handleSpeechData}
        >
          Submit
        </button>
      </div>
    </div>
  )

export default AuthorForm;
