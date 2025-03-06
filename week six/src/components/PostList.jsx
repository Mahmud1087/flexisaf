/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

const PostList = ({ posts, onDelete, onEdit, deleting }) => {
  return (
    <Box className='posts'>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            backgroundColor: 'transparent',
            // height: '55rem',
          }}
        >
          <CardContent className='post'>
            <Typography
              variant='h6'
              className='post-title'
              style={{
                fontSize: '1.1rem',
                marginBottom: '15px',
                fontWeight: '500',
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              className='post-body'
            >
              {post.body}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }} className='post-btns'>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => onDelete(post.id)}
                disabled={deleting[post.id]}
                className='delete-btn'
              >
                {deleting[post.id] ? <CircularProgress size={20} /> : 'Delete'}
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => onEdit(post)}
                className='edit-btn'
              >
                Edit
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PostList;
