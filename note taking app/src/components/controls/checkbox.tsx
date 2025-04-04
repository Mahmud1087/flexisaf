import { Checkbox as AntdCheckbox } from 'antd';
import React from 'react';

import type { CheckboxProps } from 'antd';

type CheckboxType = CheckboxProps & {
  error?: string;
  label?: React.ReactNode;
  placeholder?: React.ReactNode;
};

function Checkbox({ label, error, placeholder, ...props }: CheckboxType) {
  return (
    <>
      {' '}
      {label && (
        <label
          className={`${
            error ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'
          } block font-semibold my-1 text-xs sm:text-sm`}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <AntdCheckbox defaultChecked={false} {...props}>
        <span
          className={`${
            error ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'
          } block text-sm sm:text-base`}
        >
          {placeholder}
        </span>
      </AntdCheckbox>
    </>
  );
}

export default Checkbox;
