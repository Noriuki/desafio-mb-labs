import Button from "@mui/material/Button/Button";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PostCarousel from "../src/components/Carousel";
import Layout from "../src/components/Layout";
import PartnerSlider from "../src/components/PartnerSlider";
import PostGrid from "../src/components/PostGrid";
import { IPost } from "../src/components/types/interfaces";
import { partnerList, postFilter, postListGlobal } from "../src/state/atom";
import styles from "../src/styles/pages/home.module.css";

type homePage = {
  carouselPosts: IPost[];
  postList: IPost[];
};

const Home: NextPage<homePage> = ({ carouselPosts, postList }) => {
  const setPostListCached = useSetRecoilState(postListGlobal);
  const setPostFilter = useSetRecoilState(postFilter);
  const partnerListValue = useRecoilValue(partnerList);

  useEffect(() => {
    setPostFilter("");
    setPostListCached([...carouselPosts, ...postList]);
  }, []);

  return (
    <Layout title="Home">
      <PostCarousel carouselPosts={carouselPosts} />

      <div className={styles.homeSection}>
        <h3 className={styles.homeSectionTitle}>Eventos mais vistos</h3>
        <PostGrid postList={postList} />
      </div>

      <div className={styles.homeSection}>
        <h3 className={styles.homeSectionTitle}>
          Empresas e Universidades parceiras
        </h3>
        <div style={{ width: "100%" }}>
          <PartnerSlider partnerList={partnerListValue} />
        </div>
      </div>

      <div className={styles.homeSection}>
        <h3 className={styles.homeSectionTitle}>Eventos universitários</h3>
        <PostGrid postList={carouselPosts} />
        <Button variant="outlined" className={styles.homeSectionLink}>
          Ver mais eventos
        </Button>
      </div>
      <div className={styles.homeSection}>
        <h3 className={styles.homeSectionTitle}>Workshops e Palestras</h3>
        <PostGrid postList={postList.slice(0, 3)} />
        <Button variant="outlined" className={styles.homeSectionLink}>
          Ver mais eventos
        </Button>
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? `https://${context.req.rawHeaders[1]}/api`
      : "http://localhost:3000/api";
  const res = await fetch(`${apiUrl}/eventos`);
  const { eventos } = await res.json();

  return {
    props: {
      carouselPosts: eventos.slice(0, 3),
      postList: eventos.slice(3),
    },
  };
}
