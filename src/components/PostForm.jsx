import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: uuidv4(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <div>
      <form>
        {/* {Управляемый компонент} */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Введите название поста"
        />
        {/* Неуправляемый компонент */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Введите описание поста" /> */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Введите описание поста"
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
