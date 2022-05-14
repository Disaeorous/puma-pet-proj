const express = require("express");
const path = require("path");

const app = express();

app.use("/js", express.static(path.resolve(__dirname, "src", "js")));
app.use(express.static(path.join(__dirname, "src", "js")));

app.get("/*", (req, res) => {
	res.sendfile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(1234, () => console.log('server running'));