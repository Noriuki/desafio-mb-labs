import { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../src/components/Layout";
import PostGrid from "../../src/components/PostGrid";
import { IPost } from "../../src/components/types/interfaces";
import { postFilter, postListGlobal } from "../../src/state/atom";

const BuscarEventos: NextPage = (props) => {
  const postListCached = useRecoilValue(postListGlobal);
  const postFilterValue = useRecoilValue(postFilter);
  const [postList, setPostList] = useState<IPost[]>([]);

  const filterPosts = () => {
    if (postFilterValue?.length > 0 && postListCached?.length > 0) {
      const filtered = postListCached.filter(
        (post) =>
          post.date.includes(postFilterValue) ||
          post.title.includes(postFilterValue) ||
          post.place.includes(postFilterValue)
      );
      setPostList(filtered);
    }
  };

  useLayoutEffect(() => {
    filterPosts();
  }, []);

  return (
    <Layout title="buscar-eventos">
      {!!postList?.length ? (
        <PostGrid postList={postList} />
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            maxHeight: "450px",
            margin: "2rem auto",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/images/error-image.svg"
            alt="imagem-de-erro"
            width="100%"
            height="400px"
          />
          <h4 style={{ fontSize: "2rem" }}>
            Não encontramos o que você procurou...
          </h4>
        </div>
      )}
    </Layout>
  );
};

export default BuscarEventos;
