import { Collapse, CollapseProps, Pagination } from "antd";
import { useRef, useState, type FC, type ReactNode } from "react";
import styled from "styled-components";
import { useTotal, useWords } from "../hook/useWords";
import { getLocalStorageItem, setLocalStorageItem } from "../util/localStorage";
import Details from "./details";
import SkeletonList from "./skeletonList";
import Title from "./title";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [page, setPage] = useState(() => getLocalStorageItem("page", 1));
  const [pageSize, setPageSize] = useState(() =>
    getLocalStorageItem("pageSize", 10),
  );

  const {
    data: words,
    isLoading,
    error,
  } = useWords((page - 1) * pageSize, page * pageSize - 1);
  const { data: total } = useTotal();
  console.log("data: ", words);
  if (error) throw error;

  const playAudio = (url: string) => {
    audioRef.current!.src = url;
    audioRef.current!.play();
  };

  const items: CollapseProps["items"] = words?.map((word, i) => {
    return {
      key: i,
      label: <Title word={word} playAudio={playAudio} />,
      children: <Details word={word} playAudio={playAudio} />,
      showArrow: false,
    };
  });

  let pageOnChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
    setLocalStorageItem("page", page);
    setLocalStorageItem("pageSize", pageSize);
  };

  return (
    <Wrap>
      <Pagination
        simple
        total={total}
        showTotal={(total) => `${total}`}
        pageSize={pageSize}
        current={page}
        onChange={pageOnChange}
      />

      {isLoading ? (
        <SkeletonList rows={pageSize} />
      ) : (
        <Collapse accordion bordered={false} items={items} />
      )}

      <Pagination
        simple
        total={total}
        showTotal={(total) => `${total}`}
        pageSize={pageSize}
        current={page}
        onChange={pageOnChange}
      />

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
