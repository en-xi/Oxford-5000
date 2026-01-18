import { type FC, type ReactNode } from "react";
import styled from "styled-components";
import { Word } from "../entities/Word";
import { sub } from "../util/substring";

interface IProps {
  children?: ReactNode;
  word: Word;
}

const Title: FC<IProps> = ({ word }) => {
  let defcn = "";
  let defExist = false;
  if (word.def_cn) {
    defExist = true;
    for (const def of word.def_cn) {
      defcn += def.pos + " " + def.first + "; ";
    }
  }

  return (
    <Wrap>
      <div>{word.name}</div>

      {defExist && <div id="defcn">{sub(defcn)}</div>}
    </Wrap>
  );
};

export default Title;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  > div#defcn {
    width: 180px;
    text-align: left;
  }
`;
