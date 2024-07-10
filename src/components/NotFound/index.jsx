import { Button } from "primereact/button";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import UserContext from "../../../hooks/contextUser";

function NotFound() {
  const navigate = useNavigate()
//   const {user} = useContext(UserContext)

  return (
    <div className="flex surface-section w-full h-full">
      <div className="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
        <div className="border-left-2 border-pink-500">
          <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
            404
          </span>
        </div>
        <div className="mt-6 mb-5 font-bold text-6xl text-900">
          Page non trouvée
        </div>
        <p className="text-700 text-3xl mt-0 mb-6">
          Désolé, vous essayez d'accéder à rien !
        </p>
        <div>
          {
            <Button label="Page de connexion" icon="pi pi-home" onClick={() => navigate('/login')}/>
          }
        </div>
      </div>
      <div
        className="w-6 hidden sm:block border-round"
        style={{
          backgroundImage: `url('https://breakforbuzz.com/wp-content/uploads/2014/10/cest-pas-marrant.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default NotFound;