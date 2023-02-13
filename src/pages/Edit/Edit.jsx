import React from 'react';
import { useLocation } from 'react-router-dom';
import PostEditor from '../../components/PostEditor/PostEditor';

export default function Edit() {
  const {
    state: {
      posts: { id, category, date, title, body },
    },
  } = useLocation();

  return <PostEditor />;
}
