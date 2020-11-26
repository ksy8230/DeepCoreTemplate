import React, { useEffect } from 'react';
import { TableWrapper } from './table.styles';

const Table = ({ data }) => {
  useEffect(() => {
    if (data.rows[0]) {
      console.log(data?.rows[0]); // {checkbox: {…}, reg_datetime: {…}, uri: {…}}
      console.log(data?.rows[0].checkbox); // element
      console.log(Object.keys(data.rows[0])); // [checkbox, ...]
      console.log(Object.keys(data.rows[0])[0]); // checkbox
      //   const chk = Object.keys(data.rows[0])[0];
      console.log(data?.rows[0][Object.keys(data.rows[0])[0]]);
      console.log(data?.rows[0][Object.keys(data.rows[0])[1]]);
      console.log(data?.rows[0][Object.keys(data.rows[0])[2]]);
    }
  });
  //   const tdLoop = (v) => {
  //     if (data.rows[0]) {
  //       console.log('len', Object.keys(data.rows[0]).length); // [checkbox, ...]
  //       let result;
  //       for (let i = 0; i < Number(Object.keys(data.rows[0]).length); i += 1) {
  //         // result = <td>{data?.rows[v][Object.keys(data.rows[v])[i]]}</td>;
  //         result = i;
  //         // console.log(data?.rows[v][Object.keys(data.rows[v])[i]]);
  //         console.log(result);
  //         // return <td>{data?.rows[v][Object.keys(data.rows[v])[result]]}</td>;
  //         return result;
  //       }
  //     }
  //   };

  //   tdLoop();

  return (
    <TableWrapper>
      <table>
        <colgroup>
          {data?.columns.map((v, i) => (
            <col width={v.width} key={i} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {data?.columns.map((v, i) => (
              <th key={i}>{v.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.rows.map((v, i) => (
            <tr key={i}>{/* {tdLoop(i)} */}</tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
