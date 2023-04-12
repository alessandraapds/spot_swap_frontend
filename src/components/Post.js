import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Spot id : {id}</h2>
      {/* add more content here */}
    </div>
  );
}

export default Post;
