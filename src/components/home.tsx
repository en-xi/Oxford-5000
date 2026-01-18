import { Collapse, CollapseProps, Pagination } from "antd";
import { useRef, useState, type FC, type ReactNode } from "react";
import styled from "styled-components";
import { useWords } from "../hook/useWords";
import Details from "./details";
import Title from "./title";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  console.log("render: page:", page);
  const {
    data: words,

    error,
  } = useWords((page - 1) * pageSize, page * pageSize - 1);
  console.log("data: ", words);
  if (error) throw error;

  const playAudio = (url: string) => {
    audioRef.current!.src = url;
    audioRef.current!.play();
  };

  const items: CollapseProps["items"] = words?.map((word, i) => {
    return {
      key: i,
      label: <Title word={word} />,
      children: <Details word={word} playAudio={playAudio} />,
      showArrow: false,
    };
  });

  let onPageChange = (page: number, pageSize: number) => {
    console.log("page: ", page);
    console.log("pageSize: ", pageSize);
    setPage(page);
    setPageSize(pageSize);
  };
  return (
    <Wrap>
      <Pagination
        total={85}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
        onChange={onPageChange}
      />
      <Collapse accordion bordered={false} items={items} />
      <audio ref={audioRef} />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  width: 360px;
  margin: auto;
`;
