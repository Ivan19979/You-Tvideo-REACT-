import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Pages Not Found</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
