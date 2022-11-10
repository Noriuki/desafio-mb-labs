import Button from "@mui/material/Button/Button";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import PostCarousel from "../src/components/Carousel";
import Layout from "../src/components/Layout";
import PartnerSlider from "../src/components/PartnerSlider";
import PostGrid from "../src/components/PostGrid";
import { IPost } from "../src/components/types/interfaces";
import { postFilter, postListGlobal } from "../src/state/atom";
import styles from "../src/styles/pages/home.module.css";

type homePage = {
  carouselPosts: IPost[];
  postList: IPost[];
};

const partnerList = [
  { name: "UNISO", image: "/images/parceiros/parceiros-uniso.png" },
  { name: "UNIP", image: "/images/parceiros/parceiros-unip.png" },
  { name: "IBM", image: "/images/parceiros/parceiros-ibm.png" },
  { name: "UFSCAR", image: "/images/parceiros/parceiros-ufscar.png" },
  { name: "USP", image: "/images/parceiros/parceiros-usp.png" },
  { name: "GOOGLE", image: "/images/parceiros/parceiros-google.png" },
];

const Home: NextPage<homePage> = ({ carouselPosts, postList }) => {
  const setPostListCached = useSetRecoilState(postListGlobal);
  const setPostFilter = useSetRecoilState(postFilter);

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
          <PartnerSlider partnerList={partnerList} />
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

export async function getServerSideProps() {
  const apiUrl = "http://localhost:3000/api";
  const res = await fetch(`${apiUrl}/eventos`);
  const { eventos } = await res.json();

  return {
    props: {
      carouselPosts: eventos.slice(0, 3),
      postList: eventos.slice(3),
    },
  };
}
