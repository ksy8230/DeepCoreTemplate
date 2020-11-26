import { isNil, isEmpty } from 'lodash';

// 숫자 패턴 판별
const hasNumbers = (value) => {
    const regex = /\d/g;
    return regex.test(value); // true, false
};
// 영문 패턴 판별
const hasEng = (value) => {
    const regex = /[a-zA-Z]/;
    return regex.test(value); // true, false
};
// 특수문자 패턴 판별
const hasSpecial = (value) => {
    const regex = /[~!@#$%^&*()_+|<>?:{}]/;
    return regex.test(value); // true, false
};
// 동일한 문자 n 번 판별
const checkRepeatString = (value, n) => {
    const range = '([a-zA-Z])';
    const nTimes = '\\1';
    const result = range + nTimes.repeat(n-1);
    const newRegExp = new RegExp(result, '');
    return newRegExp.test(value); // true, false
};
// 동일한 숫자 n 번 판별
const checkRepeatNumber = (value, n) => {
    const range = '([0-9])';
    const nTimes = '\\1';
    const result = range + nTimes.repeat(n-1);
    const newRegExp = new RegExp(result, '');
    return newRegExp.test(value); // true, false
};

// 정책 찾기
const findPolicy = (policyName, arr) => arr.filter(c => c.config_name === policyName);

const blankPattern = /^\s+|\s+$/g;
const stringSpace = /\s/;  
// 빈값인 경우, 공백만 있는 경우
export const required = (value) => !isNil(value) && !isEmpty(value) && value.replace(blankPattern, '') === '' === false ? undefined : '값을 넣어주세요.';
// 값에 공백이 들어간 경우
export const noSpace = (value) => stringSpace.exec(value) ? '공백을 사용할 수 없습니다.' : undefined;
// 첫 글자, 마지막 글자 공백이 들어간 경우
export const noSpaceFront = (value) => (value.charAt(0) === ' ' || value.charAt(value.length - 1) === ' ') === true ? '앞 뒤 공백이 들어갈 수 없습니다.' : undefined;

export const validateId = (value) => {
    if(required(value)) return required(value);
    if(noSpace(value)) return noSpace(value);
    return false;
};

export const validateInput = (value) => {
    if(required(value)) return required(value);
    if(noSpaceFront(value)) return noSpaceFront(value);
    return false;
};

export const validatePassword = (value, policy, id) => {
    // console.log(value, 'needNum', policy, 'policy', id);
    const minPolicy = findPolicy('length_min', policy);
    const needNumPolicy = findPolicy('need_num', policy);
    const needAlphabetPolicy = findPolicy('need_alphabet', policy);
    const needSpecialPolicy = findPolicy('need_special', policy);
    const checkIdPolicy = findPolicy('check_id', policy);
    const checkRepeatWordPolicy = findPolicy('check_repeat_word', policy);
    const checkRepeatNumberPolicy = findPolicy('check_repeat_num', policy);

    // 빈값인 경우
    if(required(value)) return required(value);
    // 결과에 길이가 9 미만인 경우
    if (value.length < minPolicy[0].config_data) return '최소 9자리여야 합니다.';
    // 숫자 포함 유효성 검사 필수인 경우
    if ((needNumPolicy[0].config_data) !== "0") {
        if (!hasNumbers(value)) return '숫자가 포함되어야 합니다.';
    }
    // 영문 포함 검사 필수인 경우
    if ((needAlphabetPolicy[0].config_data) !== "0") {
        if(!(hasEng(value))) return '영문이 포함되어야 합니다.';
    }
    // 특수문자 검사 필수인 경우
    if ((needSpecialPolicy[0].config_data) !== "0") {
        if(!(hasSpecial(value))) return '특수문자가 포함되어야 합니다.';
    }
    // 아이디와 동일한 경우
    if ((checkIdPolicy[0].config_data) !== "0") {
        if (value === id) {
            return '아이디와 중복되는 패스워드는 사용이 불가능 합니다.';
        }
    }
    // 같은 문자가 연속한 경우
    if ((checkRepeatWordPolicy[0].config_data) !== "0") {
        if((checkRepeatString(value, checkRepeatWordPolicy[0].config_data))) return `같은 문자를 ${checkRepeatWordPolicy[0].config_data}번 이상 사용할 수 없습니다.`;
    }
    // 같은 숫자가 연속한 경우
    if ((checkRepeatNumberPolicy[0].config_data) !== "0") {
        if((checkRepeatNumber(value, checkRepeatNumberPolicy[0].config_data))) return `같은 숫자를 ${checkRepeatNumberPolicy[0].config_data}번 이상 사용할 수 없습니다.`;
    }

    return false;
};

// 이름 중복 찾기
