import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleReload = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="error">
      <h2 className="error__text"> Сервер временно недоступен</h2>
      <button className="error__btn" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
};

export { Error };
