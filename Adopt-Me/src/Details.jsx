import { useParams } from "react-router-dom";
const Details = () => {
  const id = useParams();

  return <h1>{id.id}</h1>;
};
export default Details;
