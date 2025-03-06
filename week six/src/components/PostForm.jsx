/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';

const PostForm = ({ onSubmit, editPost, saving, editing }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editPost) {
      form.setFieldsValue(editPost);
    }
  }, [editPost, form]);

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form
      layout='vertical'
      form={form}
      onFinish={handleFinish}
      className='post-form'
    >
      <Form.Item
        name='title'
        rules={[{ required: true, message: 'Enter post title' }]}
        label='Title'
      >
        <Input placeholder='Enter post title...' />
      </Form.Item>
      <Form.Item
        name='body'
        rules={[{ required: true, message: 'Enter post body' }]}
        label='Body'
      >
        <Input.TextArea placeholder='Enter post body...' rows={5} />
      </Form.Item>
      <Button
        htmlType='submit'
        loading={saving || editing}
        disabled={saving || editing}
      >
        {saving
          ? 'Saving...'
          : editing
          ? 'Editing...'
          : editPost
          ? 'Save Changes'
          : 'Submit'}
      </Button>
    </Form>
  );
};

export default PostForm;
