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
    <Box>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2, p: 2 }}>
          <CardContent>
            <Typography variant='h6'>{post.title}</Typography>
            <Typography variant='body2' color='textSecondary'>
              {post.body}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => onDelete(post.id)}
                disabled={deleting[post.id]}
              >
                {deleting[post.id] ? <CircularProgress size={20} /> : 'Delete'}
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => onEdit(post)}
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
