import express from "express"
import bodyParser from "body-parser"
import router from "./routes/routes.js"
const app = express()
app.use(bodyParser.json())

// Routes middleware
app.use("/api", router)

// Error handling
app.use((err, req, res, next) => {
	console.error(err)
	res.status(500).json({message: "Internal Server Error"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
