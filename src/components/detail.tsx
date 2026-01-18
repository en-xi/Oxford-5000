import { useState, type FC, type ReactNode } from "react";
import { FcMinus, FcPlus } from "react-icons/fc";
import styled from "styled-components";
import { type Detail } from "../entities/Detail";

interface IProps {
  children?: ReactNode;
  detail: Detail;
}

const Detail: FC<IProps> = ({ detail }) => {
  const [isShowExamples, setIsShowExamples] = useState(false);

  const toggleShowExamples = () => setIsShowExamples(!isShowExamples);

  return (
    <Wrap>
      <div>
        <span className="name">{detail.name}</span>
        <span className="pos">{detail.pos}</span>
      </div>
      <hr />

      <div className="detail">
        {isShowExamples ? (
          <FcMinus onClick={toggleShowExamples} className="show" />
        ) : (
          <FcPlus onClick={toggleShowExamples} className="show" />
        )}

        <span className="level">{detail.level}</span>
        {detail.def_en}
      </div>

      {isShowExamples && (
        <div>
          examples:
          {detail.examples.map((example, i) => (
            <div key={i}>{example}</div>
          ))}
        </div>
      )}
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  .show {
    cursor: pointer;
  }
  .level {
    color: white;
    background-color: green;
    padding: 1px 6px;
    margin: 0 10px;
  }

  .detail {
    color: blue;
  }

  .name {
    font-size: 25px;
    font-weight: 700;
    margin-right: 20px;
  }

  .pos {
    font-size: 20px;
    font-weight: 500;
  }
`;
