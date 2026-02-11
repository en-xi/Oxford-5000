import { Skeleton } from "antd";
import { type FC, type ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children?: ReactNode;
  rows: number;
}

const SkeletonList: FC<IProps> = ({ rows }) => {
  return (
    <Wrap>
      {Array.from({ length: rows }).map((_, i) => (
        <div className="skeletonFlex" key={i}>
          <Skeleton
            paragraph={{ rows: 1, width: "100px" }}
            title={false}
            active={true}
          />
          <Skeleton
            paragraph={{ rows: 1, width: "100px" }}
            title={false}
            active={true}
          />
        </div>
      ))}
    </Wrap>
  );
};

export default SkeletonList;

const Wrap = styled.div`
  .skeletonFlex {
    display: flex;
    justify-content: space-between;
  }
`;
