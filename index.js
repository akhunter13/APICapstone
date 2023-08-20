import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    try
    {
        const joke = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt");
        const result = joke.data;
        console.log(result);
        res.render("index.ejs", { data: result });
    }catch(error)
    {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
        error: error.message,
        });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });