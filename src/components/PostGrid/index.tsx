import PostCard from "../PostCard";
import styles from "./postgrid.module.css";
import { IPost } from "../types/interfaces";

interface IProps {
  postList: IPost[];
}

const PostGrid: React.FC<IProps> = (props) => {
  return (
    <div className={styles.postGrid}>
      {!!props.postList?.length &&
        props.postList.map((post, index) => (
          <PostCard
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            slug={post.slug}
            place={post.place}
            price={post.price}
            key={index}
            host={post.host}
          />
        ))}
    </div>
  );
};

export default PostGrid;
