import axios from "axios";

export default async function handler(req, res) {
  try {
    const { language, query } = req.body;
    console.log(query, language);
    console.log(req.body);

    let inputLanguage = "en";

    if (language == "hindi") {
      inputLanguage = "hi";
    } else if (language == "marathi") {
      inputLanguage = "mr";
    }
    const response = await axios.get(
      `http://aca2-34-143-144-203.ngrok-free.app/get/${inputLanguage}/${query}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
