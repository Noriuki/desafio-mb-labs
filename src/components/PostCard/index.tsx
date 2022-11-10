import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { IPost } from "../types/interfaces";
import styles from "./postcard.module.css";

const PostCard: React.FC<IPost> = ({
  image,
  date,
  title,
  description,
  slug,
  host,
}) => {
  return (
    <Link href={`/eventos/${slug}`}>
      <Card className={styles.postCard}>
        <CardMedia component="img" alt={title} height="140" image={image} />
        <CardContent className={styles.postCardContent}>
          <Typography variant="h5">{title}</Typography>
          <span>
            {date} | {host}
          </span>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}...
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
