import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PlaceIcon from "@mui/icons-material/Place";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../../src/components/Layout";
import PartnerSlider from "../../src/components/PartnerSlider";
import { IPost } from "../../src/components/types/interfaces";
import { partnerList, shopCart } from "../../src/state/atom";
import styles from "./eventos.module.css";

type IPostPage = {
  post: IPost;
};

const PostPage: NextPage<IPostPage> = ({ post }) => {
  const [quantity, setQuantity] = useState(1);
  const setShopCart = useSetRecoilState(shopCart);
  const partnerListValue = useRecoilValue(partnerList);
  const handleQuantity = (type: string) => {
    let newQuantity = quantity;
    if (type === "ADD") {
      newQuantity += 1;
      setQuantity(newQuantity);
    } else if (type === "REMOVE" && newQuantity - 1 >= 1) {
      newQuantity -= 1;
      setQuantity(newQuantity);
    }
  };

  const handleAddTicket = (ticket: IPost) => {
    const ticketPaylod = {
      ...ticket,
      quantity,
    };
    setShopCart((shopCardOld) => [...shopCardOld, ticketPaylod]);
  };

  return (
    <Layout title={post?.slug}>
      <div
        style={{
          minHeight: "100vh",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.imageContainer}>
          <div
            className={styles.imageBlur}
            style={{ backgroundImage: `url(${post.image}` }}
          ></div>
          <img alt={post.title} src={post.image} className={styles.postImage} />
        </div>
        <Typography gutterBottom variant="h5" style={{ fontSize: "2rem" }}>
          {post.title}
        </Typography>
        <p style={{ display: "flex", alignItems: "center" }}>
          <DateRangeIcon style={{ marginRight: "5px" }} />
          {post.date}
        </p>
        <div className={styles.contentContainer}>
          <div className={styles.descriptionContent}>
            <Typography
              variant="h6"
              color="text.secondary"
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                color: "var(--primary-color)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PlaceIcon style={{ marginRight: "5px", color: "red" }} />{" "}
              {post.place}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                paddingTop: "1rem",
                width: "100%",
                fontSize: "1.2rem",
                textAlign: "justify",
              }}
            >
              {post.description}
            </Typography>
          </div>
          <div className={styles.buyTicket}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  onClick={() => handleQuantity("REMOVE")}
                  style={{ color: "var(--primary-color)" }}
                  aria-label="remover ingresso"
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <span>{quantity}</span>
                <IconButton
                  style={{ color: "var(--primary-color)" }}
                  onClick={() => handleQuantity("ADD")}
                  aria-label="adicionar-ingresso"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <span>
                Preço unidade:{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(post.price)}
              </span>
            </div>
            <hr />
            <Button
              onClick={() => handleAddTicket(post)}
              variant="contained"
              style={{
                display: "flex",
                padding: "10px 0",
                backgroundColor: "var(--primary-color)",
              }}
            >
              Comprar Ingresso
            </Button>
          </div>
        </div>
        <div style={{ width: "100%", margin: "2rem auto" }}>
          <PartnerSlider partnerList={partnerListValue} />
        </div>
      </div>
    </Layout>
  );
};
export default PostPage;

export async function getServerSideProps(context: any) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? `https://${context.req.rawHeaders[1]}/api`
      : "http://localhost:3000/api";
  const { params } = context;
  const res = await fetch(`${apiUrl}/eventos/${params.slug}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
