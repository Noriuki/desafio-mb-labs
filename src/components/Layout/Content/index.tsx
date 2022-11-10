import { Container } from "@mui/material";
interface IProps {
  children: any;
}
const Content: React.FC<IProps> = (props) => {
  return (
    <main>
      <Container maxWidth="lg">{props?.children}</Container>
    </main>
  );
};
export default Content;
