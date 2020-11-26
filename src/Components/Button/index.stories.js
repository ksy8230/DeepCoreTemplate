import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import DefaultButton from './index';

export default {
    title: 'Components|basic/DefaultButton',
    component: DefaultButton,
    parameters: {
        componentSubtitle: '기본 버튼 컴포넌트'
    },
    decorators: [withKnobs]
};

export const Variable = () => {
    // knobs 
    const children = text('Content', 'Button Text', 'Option 1');
    const disabled = boolean('disabled', false, 'Option 1');
    const visibled = boolean('visibled', true, 'Option 1');
    const color = text('color', '#252525', 'Option 1');
    // props들 전부 디폴트로 추가되어 있음, 실제 사용시 버튼 내용(children)만 기재
    return <DefaultButton color={color} disabled={disabled} visibled={visibled}>{children}</DefaultButton>;
  };
  Variable.story = {
    disabled: false
  };

export const standard = () => <DefaultButton>standard</DefaultButton>;
export const disabled = () => <DefaultButton disabled={!false}>disabled</DefaultButton>;