import { type FC, type ReactNode } from "react";
import styled from "styled-components";
import { type Detail } from "../entities/Detail";

interface IProps {
  children?: ReactNode;
  detail: Detail;
}

const Detail: FC<IProps> = ({ detail }) => {
  return (
    <Wrap>
      <div className="flex">
        <div>
          <span className="name">{detail.name}</span>
          <span className="pos">{detail.pos}</span>
        </div>
        <a target="blank" href={detail.url}>
          more
        </a>
      </div>
      <hr />

      <div className="detail">
        <span className="level">{detail.level}</span>
        {detail.def_en}
      </div>

      {
        <div>
          <span className="ex">examples:</span>

          {detail.examples.map((example, i) => {
            if (i < 3) {
              return <div key={i}>{example}</div>;
            }
            return null;
          })}
        </div>
      }
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    cursor: pointer;
    color: black;
  }
  a:hover {
    color: blue;
    text-decoration: underline;
  }
  .ex {
    color: green;
  }
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
