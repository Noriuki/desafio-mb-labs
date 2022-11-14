import Head from "next/head";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.css";

interface IProps {
  children: any;
  title: string;
}

const Layout: React.FC<IProps> = (props) => {
  const title = props?.title && `- ${props.title}`;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{`Mais Ingressos ${title}`}</title>
        <meta
          name="description"
          content="Site de compra e venda de ingressos para universidades e empresas"
        />
      </Head>
      <Header />
      <Content>{props?.children}</Content>
      <Footer />
    </div>
  );
};
export default Layout;
