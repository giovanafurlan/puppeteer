import axios from "axios";

const getLinkedInInfo = async (url) => {
  await axios
    .get("/api/puppeteer", {
      params: {
        url: url,
      },
    })
    .then((e) => {
      return e.data;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

export { getLinkedInInfo };
