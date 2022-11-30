import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ProfileContext from '../../context/ProfileContext';
// import { Alert } from "@mui/material";

import './Card.css';
export const CookieCard = () => {
  return (
    <div className='card border-light shadow-sm mb-4'>
      <div className='card-body'>
        <form action=''>
          <div className='form-row align-items-center'>
            <div className='col-auto'>
              <div className='custom-file'>
                <input
                  className='form-control'
                  type='file'
                  id='formFile'
                ></input>
                <div className='invalid-feedback'>
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <button className='btn btn-primary' type='submit'>
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ToolCard = () => {
  const [textArea, setTextArea] = useState('');
  const [submittedText, setSubmittedText] = useState(null);
  const [listOfUrls, setListOfUrls] = useState([]);
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(0);
  const [comments, setComments] = useState(false);
  const [reactors, setReactors] = useState(false);

  const { setMembers, isLoading, setIsLoading } = useContext(ProfileContext);

  useEffect(() => {
    setSubmittedText(() => textArea);
    setListOfUrls(() => textArea.split(','));
  }, [textArea]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (listOfUrls.length === 0 || !file)
      return alert('URLs and file must not be left empty');

    setIsLoading(() => true);

    setTextArea(() => '');
    listOfUrls.map((url) => {
      let f = new FormData();
      f.append('group', url.trim());
      f.append('pages', pages);
      f.append('comments', comments);
      f.append('reactors', reactors);
      f.append('file', file);
      axios({
        method: 'POST',
        url: 'http://103.143.143.211/crawl-group',
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        data: f,
      })
        .then((res) => {
          setMembers((prev) => [
            ...prev,
            ...res.data.map((mem) => {
              if (!prev.includes(mem)) return mem;
            }),
          ]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(setIsLoading(() => false));
    });
  };
  return (
    <div>
      <div className='card border-light shadow-sm mb-4'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div className='form-row align-items-center'>
              <div className='col-xl-4'>
                <label htmlFor='inlineFormInputName'>
                  Enter facebook groups/pages 's url
                </label>
                <textarea
                  onChange={(event) => {
                    setTextArea(() => event.target.value);
                  }}
                  value={textArea}
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='For example groups/219499848640636, groups/dilamvuithayba/, ...'
                ></textarea>
              </div>
              <div className='col-xl-4'>
                <label htmlFor=''>pages</label>
                <input
                  type='number'
                  name='page'
                  id=''
                  value={pages + ''}
                  className='form-control'
                  onChange={(e) => {
                    setPages(() => parseInt(e.target.value));
                  }}
                />
              </div>
              <div className='col-xl-4'>
                <label htmlFor=''>comments</label>
                <select
                  name=''
                  id=''
                  className='form-control'
                  defaultValue={0}
                  onChange={(e) => {
                    setComments(() => {
                      return e.target.value === '0' ? false : true;
                    });
                  }}
                >
                  <option value={0}>false</option>
                  <option value={1}>true</option>
                </select>
              </div>
              <div className='col-xl-4'>
                <label htmlFor=''>reactors</label>
                <select
                  name=''
                  id=''
                  className='form-control'
                  defaultValue={0}
                  onChange={(e) => {
                    setReactors(() => {
                      return e.target.value === '0' ? false : true;
                    });
                  }}
                >
                  <option value={0}>false</option>
                  <option value={1}>true</option>
                </select>
              </div>
              <div className='col-xl-4'>
                <label htmlFor=''>file</label>
                <input
                  type='file'
                  name=''
                  id=''
                  className='form-control'
                  onChange={(e) => {
                    if (e.target.files) setFile(() => e.target.files[0]);
                  }}
                />
              </div>
              <div className='col-xl-4'></div>
              <div className='col-auto my-1 p-1'>
                {isLoading ? (
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={true}
                  >
                    Loading...
                  </button>
                ) : (
                  <button type='submit' className='btn btn-primary'>
                    CRAWL
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {submittedText && (
        <div>
          <p style={{ color: 'red' }}>You just typed: {submittedText}</p>
        </div>
      )}
      {/* TODO: */}
      {listOfUrls &&
        listOfUrls.map((url, id) => {
          // if (
          //   url.match(
          //     "/(?:https?://)?(?:www.)?facebook.com/(?:(?:w.)*#!/)?(?:pages/)?(?:[w-.]*/)*([w-.]*)/"
          //   )
          // ) {
          return <p key={id}>{url}</p>;
          // }
          // else {
          //   return (
          //     <Alert severity="warning">
          //       {url} is not a correct facebook url
          //     </Alert>
          //   );
          // }
          // return (
          //   <alert severity="warning">
          //     {url} is not a corrent facebook url
          //   </alert>
          // );
        })}
    </div>
  );
};

export default ToolCard;
