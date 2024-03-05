import { useState } from "react";
import axios from "axios";
import { getLinkedInInfo } from "../services/getAPIs";

interface IProfile {
  name: string;
  description: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<IProfile>();
  const [linkedinURL, setLinkedinURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      // await getLinkedInInfo(linkedinURL)
      //   .then((res) => {
      //     const data = res;
      //     console.log("data", data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      await axios
        .get("/api/puppeteer", {
          params: {
            url: linkedinURL,
          },
        })
        .then((data) => {
          console.log("data", data);
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    } catch (error) {
      setError("Erro ao buscar dados do perfil");
      setLoading(false);
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
    <div>
      <h1>Obter Dados do Perfil do LinkedIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira a URL do Perfil do LinkedIn"
          value={linkedinURL}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {profileData && (
        <div>
          <h2>Dados do Perfil:</h2>
          <p>Nome: {profileData.name}</p>
          <p>Descrição: {profileData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
