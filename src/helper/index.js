import React from 'react';
import { toXML } from 'jstoxml';

function hex2bin(hex) {
  return parseInt(hex, 16).toString(2).padStart(8, '0');
}

// hex code 배열화
export const splitHexCode = (scanResult) => {
  if (
    (scanResult && scanResult.includes('H01')) ||
    (scanResult && scanResult.includes('H02')) ||
    (scanResult && scanResult.includes('S01')) ||
    (scanResult && scanResult.includes('S02'))
  ) {
    const resultBinary = hex2bin(scanResult.split('.')[2].slice(3, 7));
    const resultBinaryArray = resultBinary.split('');
    const ObjectBinaryMatch = [
      {
        name: 'Generic/Heuristic',
        code: resultBinaryArray[0],
      },
      {
        name: 'Virus/Patch',
        code: resultBinaryArray[1],
      },
      {
        name: 'Worm',
        code: resultBinaryArray[2],
      },
      {
        name: 'Trojan',
        code: resultBinaryArray[3],
      },
      {
        name: 'AntiDetection',
        code: resultBinaryArray[4],
      },
      {
        name: 'Packed/Cryptor',
        code: resultBinaryArray[5],
      },
      {
        name: 'Exploit/Macro',
        code: resultBinaryArray[6],
      },
      {
        name: 'Downloader',
        code: resultBinaryArray[7],
      },
      {
        name: 'Dropper',
        code: resultBinaryArray[8],
      },
      {
        name: 'Backdoor',
        code: resultBinaryArray[9],
      },
      {
        name: 'Bot/RAT',
        code: resultBinaryArray[10],
      },
      {
        name: 'Ransomware',
        code: resultBinaryArray[11],
      },
      {
        name: 'PUP',
        code: resultBinaryArray[12],
      },
      {
        name: 'ExtraExtension',
        code: resultBinaryArray[13],
      },
      {
        name: 'ExtraExtension',
        code: resultBinaryArray[14],
      },
      {
        name: 'ExtraExtension',
        code: resultBinaryArray[15],
      },
      {
        name: 'ExtraExtension',
        code: resultBinaryArray[16],
      },
    ];
    return ObjectBinaryMatch;
  } 
    return [];
  
};

// ScanResult 글자색 강조
export const activeScanResultString = (string) => {
  const stringArray = string.split('.');
  const name = stringArray[0];
  const name2 = stringArray[1];
  const fileType = stringArray[2].slice(0, 3);
  const attribute = stringArray[2].slice(3, 7);
  const value = stringArray[3];
  const value2 = stringArray[4];
  const accuracy = stringArray[5];
  return {
    name: `${name}.`,
    name2: `${name2}.`,
    fileType: <span className="file">{fileType}</span>,
    attribute: <span className="attr">{attribute}</span>,
    value: `${value}.`,
    value2: `${value2}.`,
    accuracy: `${accuracy}`,
  };
};

// bytes to KB 변환 - 미사용
export const formatBytes = (bytes) => {
  return `${(bytes / 1024).toFixed(2)  } KB`;
};

// bytes in all case 변환
export const AllformatBytes = (bytes, decimals = 0) => {
  if (!bytes) return '-';
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / (k ** i)).toFixed(dm))  } ${  sizes[i]}`;
};

// Reg_datetime 내림차순
export const descArrangeDate = (array) =>
  array.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
// Reg_datetime 오름차순
export const ascArrangeDate = (array) =>
  array.sort((a, b) => new Date(a.create_date) - new Date(b.create_date));
// create date 날짜 T 이하 삭제
export const exportDate = (date) => date.split("T")[0];

// date 와 매칭되는 Reg_datetime return 수
export function countValues(lists, date) {
  let value = 0;
  lists.forEach((element) => {
    if (element.create_date.split(' ')[0] === date) {
      value += 1;
    }
  });
  return value;
}

// 샘플에서 탐지된 갯수
export const checkDetecterLen = (array) => {
  let nullLength = 0;
  array.forEach ((item) => {
    if (!item || item === '' || item.slice(0, 6) === 'ERROR_' ) {
      nullLength +=1;
    }
  });
  return array.length - nullLength;
};

// 말줄임 처리 - 미사용
export const elipsisText = (text) => {
  const length = 20;
  if(text.length > length) {
    return text.substr(0, length-2) + '...';
  }
};

// n자리 0,1로된 난수 만들기
export const makeRandomNumber = (n) => {
  let string = '';
  for (let i = 0; i < n; i += 1) {
    const oneOrZero = (Math.random() > 0.5) ? 1 : 0;
    string += oneOrZero;
  }
  return string;
};

export function fakeDelay(ms) {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        }),
    );
}

// 오늘 날짜와 비교 날짜까지의 빈도수 배열 (ex. 7월 27일 데이터가 몇 개인지 카운트)
// export function getDates(array, previousweek, nowDate) {
//   const dateArray = [];
//   let currentDate = dayjs(previousweek);
//   const stopDate = dayjs(nowDate);
//   while (currentDate <= stopDate) {
//     const obj = {
//       name: dayjs(currentDate).format('YYYY-MM-DD'),
//       amount: countValues(array, dayjs(currentDate).format('YYYY-MM-DD')),
//     };
//     dateArray.push(obj);
//     currentDate = dayjs(currentDate).add(1, 'days');
//   }
//   return dateArray;
// }

// 배열의 특정 키값 갯수 리턴 - 미사용
export function getMaxValue(arr, key) {
  const newArr = [];
  for (let i = 0; i < arr.length; i+=1) {
    newArr.push(arr[i][key]);
  }
  const result = Math.max.apply( null, newArr );
  return result; 
}

// 체크 박스 전체 선택
export const checkedAll = (event, checkedLists, unCheckedCallback, checkedCallback) => {
  const { checked } = event.target;
  let newArray = [...checkedLists];
  if (!checked) {
    // 전체 선택 해제
    newArray = checkedLists.map((v) => ({ ...v, checked: false }));
    unCheckedCallback(newArray);
  } else {
    // 전체 선택
    newArray = checkedLists.map((v) => ({ ...v, checked: true }));
    checkedCallback(newArray);
  }
};

// 위험도 수치에 따른 텍스트 변경
export const threatRankTransfer = (number) => {
  let result;
  if (number >= 0 && number <= 2) {
    result = '탐지 결과 없음';
  } else if (number >=3 && number <= 6) {
    result = '의심';
  } else if (number >= 7 && number <= 10) {
    result = '악성';
  } else {
    result = '탐지 결과 없음';
  }
  if (!number && number !== 0) {
    result = '탐지 결과 없음';
  }
  return result;
};
// 위험도 수치에 따른 클래스 변경
export const threatRankTransferClass = (number) => {
  let className;
  if (number >= 0 && number <= 2) {
    className = 'gray';
  } else if (number >=3 && number <= 6) {
    className = 'orange';
  } else if (number >= 7 && number <= 10) {
    className = 'red';
  } else {
    className = 'gray';
  }
  if (!number && number !== 0) {
    className = 'gray';
  }
  return className;
};
// ai 수치에 따른 텍스트 변경
export const tagRankTransfer = (number) => {
  let result;
  if (number === 0) {
    result = '탐지 결과 없음';
  } else if (number === 1) {
    result = '의심';
  } else if (number === 2) {
    result = '악성';
  } else {
    result = '탐지 결과 없음';
  }
  return result;
};
// ai 수치에 따른 클래스 변경 
export const tagRankTransferClass = (number) => {
  let className;
  if (number === 0) {
    className = 'gray';
  } else if (number === 1) {
    className = 'orange';
  } else if (number === 2) {
    className = 'red';
  } else {
    className = 'gray';
  }
  return className;
};
// 로컬스토리지 key 값 내용 가져오기
export const getFromLS = (key) => {
  let ls = {};
  if (window.localStorage) {
    try {
      ls = JSON.parse(window.localStorage.getItem('lg')) || {};
    } catch (e) {
      console.error(e);
    }
  }
  return ls[key];
}; 

export const urlStatus = (status) => {
  let result = status;
  if (!status) {
    result = '접속 실패';
  }
  return <span>{result}</span>;
};
export const urlClass = (status) => {
  let className;
  if (status === (200 || 201 || 202 || 203 || 204 || 205)) {
    className = 'green';
  } else if (status === (400 || 401 || 403 || 404 || 405 || 406 || 407)) {
    className = 'orange';
  } else if (status === (500 || 501 || 502 || 503 || 504 || 505 || 506 || 507 || 508 || 510 || 511)) {
    className = 'orange';
  } else {
    className = 'gray';
  }
  return className;
};
// xml 변환 후 다운로드
export const transferXML = (downloadFilename, xmlData, xmlOptions) => {
  const filename = `${downloadFilename}.xml`;
  const pom = document.createElement('a');
  const bb = new Blob(
    [
      toXML(
        {
          _name: 'rss',
          _attrs: {
            version: '2.0',
          },
          _content: xmlData.map((v) => {
            return {
              list: v,
            };
          }),
        },
        xmlOptions,
      ),
    ],
    { type: 'text/plain' },
  );
  pom.setAttribute('href', window.URL.createObjectURL(bb));
  pom.setAttribute('download', filename);

  pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
  pom.draggable = true;
  pom.classList.add('dragout');

  pom.click();
};