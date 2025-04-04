import { LoadingOutlined } from '@ant-design/icons';
import {
  Checkbox,
  Divider,
  Form,
  Input,
  InputPassword,
  Link,
} from '../../components/controls';
import { useToastContext } from '../../store/contexts';
import { useState } from 'react';
import { useAuthActions } from '@convex-dev/auth/react';
import { DASHBOARD_PAGE, FORGOT_PASSWORD_PAGE } from '@/config';
import AuthContainer from './auth-container';
import { useNavigate } from '@/hooks';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from '@/utils/lib/form-validations';
import { AuthRequestType } from '@/types';
import { useConvexAuth } from 'convex/react';
import { Navigate } from 'react-router-dom';

const rules = [{ required: true }];

export default function Login() {
  const [form] = Form.useForm();
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'signIn' | 'signUp'>('signIn');

  const email = Form.useWatch(['email'], form);
  const password = Form.useWatch(['password'], form);
  const cpassword = Form.useWatch(['cpassword'], form);
  const { open } = useToastContext();
  const { navigate } = useNavigate();

  const handleSubmit = async (values: AuthRequestType) => {
    setLoading(true);
    try {
      await signIn('password', {
        email: values.email as string,
        password: values.password as string,
        flow: step,
      });

      form.resetFields();

      open({
        type: 'success',
        message:
          step === 'signIn'
            ? 'Logged in successfully!'
            : 'Account created successfully!',
      });
      navigate(DASHBOARD_PAGE);
    } catch (error) {
      if (error instanceof Error) {
        const err = error.message.includes('InvalidAccountId')
          ? 'Invalid email or password.'
          : 'Authentication error, check credentials and try again';
        open({
          type: 'error',
          message: err,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={DASHBOARD_PAGE} />;
  }

  return (
    <AuthContainer
      heading={step === 'signIn' ? 'Welcome back!' : 'Hey there!'}
      title={
        step === 'signIn'
          ? 'Enter your account details to login.'
          : 'Fill in the form below to register an account'
      }
      showTermsAndConditions={false}
    >
      <Form
        form={form}
        name='auth-form'
        onFinish={handleSubmit}
        className='my-3 py-3'
      >
        <div className='flex flex-col gap-2'>
          <Form.Item
            name='email'
            rules={[
              ...rules,
              {
                type: 'email',
                message: 'Please enter a valid email address.',
              },
              validateEmail,
            ]}
          >
            <Input
              label='Email Address'
              size='middle'
              placeholder='example@mail.com'
            />
          </Form.Item>

          <Form.Item name='password' rules={[...rules, validatePassword]}>
            <InputPassword
              label='Password'
              size='middle'
              placeholder='••••••••'
            />
          </Form.Item>

          {step === 'signUp' && (
            <Form.Item
              name='cpassword'
              dependencies={['password']}
              rules={[...rules, validateConfirmPassword]}
            >
              <InputPassword
                label='Confirm Password'
                size='middle'
                placeholder='••••••••'
              />
            </Form.Item>
          )}
        </div>

        {step === 'signIn' && (
          <div className='flex items-center justify-between my-4'>
            <div className='text-white'>
              <Checkbox
                name='remember_me'
                placeholder='Remember me'
                className='font-normal'
              />
            </div>
            <Link to={FORGOT_PASSWORD_PAGE}>
              <span className='align-baseline capitalize cursor-pointer font-size-base inline-block text-blue-600 underline'>
                Forgot Password?
              </span>
            </Link>
          </div>
        )}

        <section className='mt-8'>
          <button
            disabled={
              !email ||
              !password ||
              loading ||
              (step === 'signUp' && !cpassword)
            }
            type='submit'
            className='bg-primary disabled:bg-primary/35 w-full py-2 rounded-md hover:bg-primary/60 cursor-pointer transition-all disabled:cursor-not-allowed'
          >
            <span className='text-white text-base disabled:text-white/60'>
              {loading ? (
                <LoadingOutlined />
              ) : step === 'signIn' ? (
                'Log in'
              ) : (
                'Register'
              )}
            </span>
          </button>
        </section>

        <div className='dark:bg-white/30'>
          <Divider />
        </div>
        <div className='flex justify-center items-center gap-1.5'>
          <span className='text-sm dark:text-white'>
            {step === 'signIn'
              ? 'Already have and account? '
              : "Don't have an account? "}
          </span>
          <span
            onClick={() => {
              setStep(step === 'signIn' ? 'signUp' : 'signIn');
              form.resetFields();
            }}
            className='cursor-pointer text-blue-600 underline'
          >
            {step === 'signIn' ? 'Sign up' : 'Log in'}
          </span>
        </div>
      </Form>
    </AuthContainer>
  );
}
