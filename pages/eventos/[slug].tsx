import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import Layout from "../../src/components/Layout";
import { IPost } from "../../src/components/types/interfaces";
import { shopCart } from "../../src/state/atom";
type postPage = {
  post: IPost;
};

const postPage: NextPage<postPage> = ({ post }) => {
  const [quantity, setQuantity] = useState(1);
  const setShopCart = useSetRecoilState(shopCart);

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
    <Layout title="slug">
      <div
        style={{
          backgroundImage: `url(${post.image})`,
          filter: "blur(8px)",
          position: "absolute",
          backgroundSize: "cover",
          zIndex: -1,
          top: "0px",
          left: "0px",
          width: "100%",
          height: "450px",
        }}
      ></div>
      <div
        style={{
          minHeight: "100vh",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            top: "0px",
            left: "0px",
            width: "100%",
            height: "450px",
            marginBottom: "2rem",
            boxShadow: "0 10px 31px 0 rgb(0 0 0 / 30%)",
          }}
        >
          <img alt={post.title} src={post.image} width="100%" height="450px" />
        </div>
        <Typography gutterBottom variant="h5" style={{ fontSize: "2rem" }}>
          {post.title}
        </Typography>
        <span>{post.date}</span>
        <div style={{ display: "flex", padding: "2rem 0", width: "100%" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              padding: "0 1rem",
              width: "70%",
              fontSize: "1.2rem",
              textAlign: "justify",
            }}
          >
            {post.description}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "1px solid var(--primary-color)",
              padding: "0 2rem",
              flex: 1,
            }}
          >
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
      </div>
    </Layout>
  );
};
export default postPage;

export async function getServerSideProps({ params }: any) {
  const apiUrl = "http://localhost:3000/api";
  const res = await fetch(`${apiUrl}/eventos/${params.slug}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
