import React, { useState } from 'react';
import { firestore } from './firebase';
import {useFormInput} from'./hooks';

function CreatePost() {
  const title    = useFormInput('');  
  const subTitle = useFormInput(''); 
  const content  = useFormInput(''); 

function handleSubmit(e){
  e.preventDefault();
  
  console.log('title',title);
  console.log('subTitle', subTitle);
  console.log('content', content);

  firestore.collection('posts').add({
    title:title.value,
    content:content.value,
    subTitle :subTitle.value,
    createdAt: new Date(),
    });
}


  return  <div className="create-post  ">
    <h1 className='"w3-animate-zoom"'>CreatePost</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Title</label>
       <input {...title} />
      </div>

      <div className="form-field">
        <label>sub-title</label>
       <input {...subTitle} />

      </div>

      <div className="form-field">
        <label>Content</label>
        < textarea{...content}/>
      </div>

      <button className="create-post-btn">createpost</button>

    </form>


  </div>
  }

export default CreatePost;