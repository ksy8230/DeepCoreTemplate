import React from 'react';
import { MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact';
import { PaginationWrapper } from './padination.styles';

const Pagination = ({
  page, // 현재 페이지 숫자
  totalCount, // 페이지 총 수
  pageActive, // 활성화된 페이지 숫자
  nextOffset, // 다음 페이지에서 불러올 기준 offset
  limit, // 불러올 갯수
  listTotalCount, // 리스트 총 수량
  listLength, //
  onPrevPagenation, // 이전 클릭 이벤트
  onNextPagenation, // 다음 클릭 이벤트
  onPageChange, // 페이지 변경 이벤트
  // handleLimit, // limit 값 변경 이벤트
}) => {
  return (
    <PaginationWrapper>
      {/* <select name="" id="" onChange={handleLimit}>
        <option>10</option>
        <option>50</option>
        <option>100</option>
      </select> */}
      <div className="pagenation-t">
        {nextOffset ? (
          <span>
            {nextOffset - limit + 1} - {nextOffset}
          </span>
        ) : (
          <span>
            {listTotalCount - listLength} - {listTotalCount}
          </span>
        )}
        of<span>{listTotalCount}</span>
      </div>
      <MDBPagination className="mb-5">
        {page === 1 ? (
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">&laquo;</MDBPageNav>
          </MDBPageItem>
        ) : (
          <MDBPageItem onClick={onPrevPagenation}>
            <MDBPageNav className="page-link">&laquo;</MDBPageNav>
          </MDBPageItem>
        )}
        {[...Array(totalCount || []).keys()].map((number, i) => (
          <MDBPageItem
            key={number}
            active={number + 1 === pageActive}
            onClick={onPageChange}
          >
            <MDBPageNav>{i + 1}</MDBPageNav>
          </MDBPageItem>
        ))}
        {nextOffset ? (
          <MDBPageItem onClick={onNextPagenation}>
            <MDBPageNav className="page-link">&raquo;</MDBPageNav>
          </MDBPageItem>
        ) : (
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">&raquo;</MDBPageNav>
          </MDBPageItem>
        )}
      </MDBPagination>
    </PaginationWrapper>
  );
};

export default Pagination;
