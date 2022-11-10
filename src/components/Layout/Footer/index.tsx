import Link from "next/link";
import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <div className={styles.footerNaveCol}>
          <h5>ENCONTRE EVENTOS</h5>
          <Link href="/">Hoje</Link>
          <Link href="/">Amanhã</Link>
          <Link href="/">Esta semana</Link>
          <Link href="/">Este fim de semana</Link>
          <Link href="/">Próxima semana</Link>
          <Link href="/">Este mês</Link>
        </div>
        <div className={styles.footerNaveCol}>
          <h5>CIDADES</h5>
          <Link href="/">São Paulo</Link>
          <Link href="/">Belo Horizonte</Link>
          <Link href="/">Rio de Janeiro</Link>
          <Link href="/">Porto Alegre</Link>
          <Link href="/">Brasília</Link>
          <Link href="/">Salvador</Link>
          <Link href="/">Curitiba</Link>
          <Link href="/">Recife</Link>
        </div>
        <div className={styles.footerNaveCol}>
          <h5>CATEGORIAS</h5>
          <Link href="/">Cursos e workshops</Link>
          <Link href="/">Congressos e palestras</Link>
          <Link href="/">Passeios e tours</Link>
          <Link href="/">Grátis</Link>
          <Link href="/">Saúde e Bem-Estar</Link>
          <Link href="/">Arte, Cultura e Lazer</Link>
          <Link href="/">Religião e Espiritualidade</Link>
          <Link href="/">Games e Geek</Link>
        </div>
        <div className={styles.footerNaveCol}>
          <h5>PLANEJE SEU EVENTO</h5>
          <Link href="/"> Música e festa </Link>
          <Link href="/">Cursos e workshops </Link>
          <Link href="/">Esportivo </Link>
          <Link href="/">Congresso e Seminário </Link>
          <Link href="/">Gastronômico </Link>
          <Link href="/">Encontro e Networking </Link>
          <Link href="/">Religioso </Link>
          <Link href="/">Evento online </Link>
        </div>
        <div className={styles.footerNaveCol}>
          <h5>AJUDA</h5>
          <Link href="/">Central de Ajuda</Link>
          <Link href="/">Compradores e Participantes</Link>
          <Link href="/">Produtores de Eventos</Link>
        </div>
      </nav>
      <div className={styles.footerSocialMedia}>
        Criado por Noriuki {new Date().getFullYear()}
        <div className={styles.footerSocialMediaLinks}>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
