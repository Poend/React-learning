import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { clearUserToken } from "../Storage";

export const Logout = () => {
  const { updateToken } = useUserContext();
  let navigate = useNavigate();

  const handleLogout = () => {
    clearUserToken();
    updateToken(null);
    navigate("/");
    window.location.reload();
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="blur modal">
      <div className="modal-content">
        <button
          onClick={handleClose}
          id="close-button"
          className="close-button blur__close-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />

            <line
              id="Line 12"
              x1="7.424316"
              y1="6.718750"
              x2="21.566406"
              y2="20.861328"
              stroke="currentColor"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />

            <line
              id="Line 13"
              x1="6.717285"
              y1="20.859375"
              x2="20.859375"
              y2="6.716797"
              stroke="currentColor"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />
          </svg>
        </button>

        <div className="modal-content-slot blur__form">
          <div className="blur__content">
            <p className="blur__title blur__title_logout">
              Вы уверены что хотите выйти?
            </p>
            <div className="blur__dialog-button">
              <button
                onClick={handleLogout}
                className="blur__button red-button blur__button_basket logoutButton"
              >
                Да
              </button>
              <button
                onClick={handleClose}
                className="blur__button red-button blur__button_basket cancelButton"
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
