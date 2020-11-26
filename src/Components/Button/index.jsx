import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from './button.styles';

/**
 * 기본 버튼을 사용할 때는 `DefaultButton` 컴포넌트를 사용하세요.
 *
 * - `visibled` 값을 `false`로 설정하면 **숨김** 됩니다.
 * - `disabled` 값을 `false`로 설정하면 **비활성** 됩니다.
 */

const DefaultButton = (props) => {
  const { children, disabled, visibled, onClick, className, color } = props;
  return (
    <Button
      type="button"
      visibled={visibled}
      disabled={disabled}
      onClick={onClick}
      className={className}
      color={color}
    >
      {children}
    </Button>
  );
};

// DefaultButton.propTypes = {
//   /** 버튼 사용 유무 결정 */
//   disabled: PropTypes.bool.isRequired,
//   /** 버튼 보이기 숨기기 결정 */
//   visibled: PropTypes.bool.isRequired,
//   /** 버튼 onClick 함수 */
//   onClick: PropTypes.func,
//   /** 버튼 className 결정 */
//   className: PropTypes.string,
//   /** 버튼 글자 색상 결정 */
//   color: PropTypes.string,
//   /** 버튼 내용 결정 */
//   // children: PropTypes.element || PropTypes.string,
// };

DefaultButton.defaultProps = {
  disabled: false,
  visibled: true,
  color: null,
};

export default React.memo(DefaultButton);
