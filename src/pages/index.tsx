import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

interface IProfile {
  title: string;
  sobre: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<IProfile>();
  const [linkedinURL, setLinkedinURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      await axios
        .get("/api/puppeteer", {
          params: {
            url: linkedinURL,
          },
        })
        .then((data) => {
          setLoading(false);
          console.log("data", data);
          setProfileData(data.data);
        })
        .catch((e) => {
          setLoading(false);
          setError(error);
          console.log(e);
          return;
        });
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  const handleInputChange = (event: any) => {
    setLinkedinURL(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetchProfileData();
  };

  return (
    <div className="m-4">
      <h1 className="h2">Obter Dados do Perfil do LinkedIn</h1>
      <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2">
        <input
          className="form-control my-4"
          type="text"
          placeholder="Insira a URL do Perfil do LinkedIn"
          value={linkedinURL}
          onChange={handleInputChange}
        />
        <button className="btn btn-secondary w-full" type="submit">
          Buscar
        </button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {profileData && (
        <div>
          <h2 className="h3">Dados do Perfil:</h2>
          <p>Nome: {profileData.title}</p>
          <p>Descrição: {profileData.sobre}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
