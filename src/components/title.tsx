import { Button } from "antd";
import { type FC, type ReactNode } from "react";
import { FcSpeaker } from "react-icons/fc";
import styled from "styled-components";
import { Word } from "../entities/Word";
import { sub } from "../util/substring";

interface IProps {
  children?: ReactNode;
  word: Word;
  playAudio: (url: string) => void;
}

const Title: FC<IProps> = ({ word, playAudio }) => {
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
      <div className="name">{word.name}</div>

      <Button
        className="button"
        type="link"
        onMouseEnter={() => playAudio(word.audio_us)}
      >
        <FcSpeaker />
      </Button>

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

  .button {
    padding: 0;
  }
  .name {
    width: 60px;
    text-align: left;
  }
`;
