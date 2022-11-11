import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { IPost } from "../types/interfaces";
import styles from "./postcard.module.css";
import PlaceIcon from "@mui/icons-material/Place";
import GiteIcon from "@mui/icons-material/Gite";
import DateRangeIcon from "@mui/icons-material/DateRange";
const PostCard: React.FC<IPost> = ({
  image,
  date,
  title,
  description,
  slug,
  place,
  host,
}) => {
  return (
    <Link href={`/eventos/${slug}`}>
      <Card className={styles.postCard}>
        <CardMedia component="img" alt={title} height="140" image={image} />
        <CardContent className={styles.postCardContent}>
          <Typography variant="h5">{title}</Typography>
          <div className={styles.postCardContentDate}>
            <p>
              <DateRangeIcon style={{ marginRight: "5px" }} />
              {date}
            </p>
            <p>
              <GiteIcon style={{ marginRight: "5px" }} /> {host}
            </p>
          </div>
          <p className={styles.postCardContentLocal}>
            <PlaceIcon style={{ marginRight: "5px", color: "red" }} />
            {place}
          </p>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.postCardContentDescription}
          >
            {description.slice(0, 100)}...
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
