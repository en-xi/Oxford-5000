import { Button } from "antd";
import { type FC, type ReactNode } from "react";
import { FcSpeaker } from "react-icons/fc";
import styled from "styled-components";
import { Word } from "../entities/Word";
import Detail from "./detail";

interface IProps {
  children?: ReactNode;
  word: Word;
  playAudio: (url: string) => void;
}

const Details: FC<IProps> = ({ word, playAudio }) => {
  return (
    <Wrap>
      <span className="level">{word.level}</span>
      <span>
        {word.phonetic_us}
        <Button type="link" onClick={() => playAudio(word.audio_us)}>
          <FcSpeaker />
        </Button>
      </span>
      {word.def_cn?.map((def, i) => {
        return (
          <div key={i}>
            {def.pos} {def.first}
          </div>
        );
      })}
      {word.details.map((detail, i) => (
        <Detail detail={detail} key={i} />
      ))}
    </Wrap>
  );
};

export default Details;

const Wrap = styled.div`
  text-align: left;

  .level {
    color: white;
    background-color: green;
    padding: 1px 6px;
    margin-right: 10px;
  }
`;
