/* eslint-disable react/prop-types */
import { Button } from 'antd';

const PostList = ({ posts, onDelete, onEdit, deleting }) => {
  return (
    <div className='posts'>
      {posts.map((post) => (
        <div key={post.id} className='post'>
          <h3 className='post-title'>{post.title}</h3>
          <p className='post-body'>{post.body}</p>
          <section className='post-btns'>
            <Button
              className='delete-btn'
              onClick={() => onDelete(post.id)}
              loading={deleting[post.id]}
              disabled={deleting[post.id]}
            >
              {deleting[post.id] ? 'Deleting...' : 'Delete'}
            </Button>
            <Button className='edit-btn' onClick={() => onEdit(post)}>
              Edit
            </Button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default PostList;
