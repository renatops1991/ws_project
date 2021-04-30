import express from "express";
import "./database";

const app = express();

app.get("/users", (request, response) => {
    return response.json({
        message: "Hello World!"
    });
});

app.post("/user", (request, response) => {
    return response.json({
        message: "User Created Successfully"
    });
});

app.listen(3333, () => console.log('Server is running =)'));