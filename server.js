require('dotenv').config()

const express = require("express")
const connectToDB = require("./database/db")
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require('./routes/image-routes')

const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/image', uploadImageRoutes)

const PORT = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectToDB()

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startServer()

/* app.use("/api/auth", authRoutes);
router.post("/register", registerUser); */
