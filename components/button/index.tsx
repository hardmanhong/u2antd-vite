import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import './style.less';

const UButton = (props: ButtonProps) => {
  return (
    <Button {...props} className='button'>
      {props.children}
    </Button>
  );
};

export default UButton;
