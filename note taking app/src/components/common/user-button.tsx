import { api } from '@/../convex/_generated/api';
import { Dropdown, MenuProps, Space } from 'antd';
import { useConvexAuth, useQuery } from 'convex/react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import AuthButtons from './auth-buttons';
import { User } from 'lucide-react';

const UserButton = () => {
  const { isAuthenticated } = useConvexAuth();
  const user = useQuery(api.user.getUserDetails);

  const items: MenuProps['items'] = [
    {
      label: (
        <>
          {isAuthenticated && (
            <div className='w-[9rem] md:w-[12rem]'>
              <p className='text-blue-950'>{user?.email}</p>
            </div>
          )}
        </>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div className='w-[9rem] md:w-[12rem]'>
          <AuthButtons />
        </div>
      ),
      key: '1',
    },
  ];

  return (
    <>
      {isAuthenticated ? (
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space className='cursor-pointer'>
            <aside className='h-7 w-7 rounded-full bg-blue-900 flex items-center justify-center text-white cursor-pointer'>
              {user && user.name ? (
                user?.name?.split('')[0].toUpperCase()
              ) : (
                <User size={18} />
              )}
            </aside>
            <p className='text-sm'>
              {user && user?.name
                ? user.name.split(' ')[0] + ' ' + user.name.split(' ')[1]
                : 'User'}
            </p>
            <p className='text-xs hidden md:block'>
              <DownOutlined />
            </p>
          </Space>
        </Dropdown>
      ) : (
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <aside className='h-7 w-7 rounded-full bg-blue-900 flex items-center justify-center text-white cursor-pointer'>
              <UserOutlined />
            </aside>
          </Space>
        </Dropdown>
      )}
    </>
  );
};
export default UserButton;
