import React, { useState } from 'react';
import { PageWrapper } from '../../Components/LayoutBox/index.styles';
import { TableWrapper, TableTitle } from '../../Components/Table/table.styles';
import { ActionButtonsWrapper } from '../../Components/Button/button.styles';
import { TableButton } from '../../Components/Button/TableButton';
import TooltipButton from '../../Components/Button/tooltip';

import CheckBox from '../../Components/CheckBox';
import {
  checkedAll,
  threatRankTransferClass,
  threatRankTransfer,
  tagRankTransferClass,
  tagRankTransfer,
  transferXML,
} from '../../helper';
import { theme } from '../../constants';

const DatasetContainer = () => {
  const [checkedLists, setCheckedLists] = useState([]); // 체크박스 속성값 포함된 유저 리스트
  const [exportData, setExportData] = useState([]); // csv 다운로드 데이터

  // 전체 체크 비활성 함수
  const unCheckedCallback = (array) => {
    window.localStorage.setItem('reload', false);
    setExportData([]);
    setCheckedLists(array);
  };
  // 전체 체크 활성 함수
  const checkedCallback = (array) => {
    window.localStorage.setItem('reload', false);
    const convertArray = [];
    array.map((v) => {
      convertArray.push({
        uri: v.uri,
        query_uri_ip: v.query_uri_ip,
        query_uri_cc: v.query_uri_cc,
        asn: v.asn,
        total_malicious_degree: threatRankTransfer(v.total_malicious_degree),
        total_predict: tagRankTransfer(v.total_predict),
        uri_sha256: v.uri_sha256,
        reg_datetime: v.reg_datetime,
      });
    });
    setExportData(convertArray);
    setCheckedLists(array);
  };
  return (
    <PageWrapper>
      <TableTitle className="title mt-3 mb-3">데이터셋 관리</TableTitle>
      <div className="d-flex" style={{ justifyContent: 'space-between' }}>
        <ActionButtonsWrapper margin="10px 0">
          <ul>
            <li>
              <TableButton background={theme.black} color={theme.navyBlue}>
                <i className="fas fa-minus"></i>
                삭제
              </TableButton>
            </li>
            {/* <li>
            <TableButton
              onClick={() =>
                transferXML(downloadFileName, exportData, xmlOptions)
              }
            >
              XML 다운로드
            </TableButton>
          </li> */}
          </ul>
        </ActionButtonsWrapper>
        <ActionButtonsWrapper margin="10px 0" alignRight>
          <ul>
            <li>
              <TableButton background={theme.black} color={theme.navyBlue}>
                <i className="fas fa-redo-alt mr-1"></i>
                {/* 목록갱신 */}
              </TableButton>
            </li>
            <li>
              <TableButton background={theme.black} color={theme.yellow}>
                <i className="fas fa-plus"></i>
                추가
              </TableButton>
            </li>
          </ul>
        </ActionButtonsWrapper>
      </div>

      <TableWrapper>
        <table>
          <colgroup>
            <col width="1%" />
            <col width="15%" />
            <col width="*" />
            <col width="10%" />
            <col width="8%" />
            <col width="6%" />
            <col width="8%" />
            <col width="8%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <CheckBox
                  id="allCheck"
                  onChange={(event) =>
                    checkedAll(
                      event,
                      checkedLists,
                      unCheckedCallback,
                      checkedCallback,
                    )
                  }
                />
              </th>
              <th scope="col">탐지 일시</th>
              <th scope="col">URI</th>
              <th scope="col">IP</th>
              <th scope="col">국가</th>
              <th scope="col">ASN</th>
              <th scope="col">
                <TooltipButton
                  className="tooltip-icon d-inline-block"
                  placement="top"
                  tooltiparea="분석 결과 기반 종합 판단 위험도"
                >
                  위험도 <i className="fas fa-info-circle ml-2"></i>
                </TooltipButton>
              </th>
              <th scope="col">
                <TooltipButton
                  className="tooltip-icon d-inline-block"
                  placement="top"
                  tooltiparea="AI 결과 기반 판단 위험도"
                >
                  AI 위험도 <i className="fas fa-info-circle ml-2"></i>
                </TooltipButton>
              </th>
              <th scope="col">분석 결과</th>
            </tr>
          </thead>
          <tbody>
            {checkedLists.map((v) => (
              <tr key={v.id}>
                <td>
                  <CheckBox
                    id={v.id}
                    checked={v.checked || ''}
                    onChange={() => {}}
                    onClick={(e) => handleDownloadCSV(e, lists)}
                  />
                </td>
                <td>
                  <p>{v.reg_datetime}</p>
                </td>
                <td>
                  <p>
                    <i className="fas fa-globe icon mr-1"></i>
                    {v.uri}
                  </p>
                </td>
                <td>
                  <p>{v.query_uri_ip || '-'}</p>
                </td>
                <td>
                  <p className="font-weight-bolder">
                    <ReactCountryFlag countryCode={v.query_uri_cc} svg />
                    <span className="ml-1">{v.query_uri_cc || '-'}</span>
                  </p>
                </td>
                <td>
                  <p className="font-weight-bolder">{v.asn || '-'}</p>
                </td>
                {/* 위험도 */}
                <td>
                  <Tag
                    className={threatRankTransferClass(
                      v.total_malicious_degree,
                    )}
                  >
                    {threatRankTransfer(v.total_malicious_degree)}
                  </Tag>
                </td>
                {/* ai 위험도 */}
                <td>
                  <Tag className={tagRankTransferClass(v.total_predict)}>
                    {tagRankTransfer(v.total_predict)}
                  </Tag>
                </td>
                <td>
                  <MDBBtn className="link">
                    <Link to={`${route.scanResultDetail}/${v.id}`}></Link>
                    <i className="fas fa-search"></i> 상세 결과
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
    </PageWrapper>
  );
};

export default DatasetContainer;
