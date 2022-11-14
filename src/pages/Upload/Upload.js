import React from 'react'
import './Upload.css';
import { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
  };

  return (
    <div className='services'>
      <div >
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
      <div></div>
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default Upload