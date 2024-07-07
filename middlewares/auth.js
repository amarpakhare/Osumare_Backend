// Authentication middleware
const auth = (req, res, next) => {
	const token = req.headers["authorization"]
	if (token === "Bearer mysecrettoken") {
		next()
	} else {
		res.status(403).json({message: "Forbidden"})
	}
}

export default auth
