// init port
const PORT = process.env.PORT || 3003;

// Import modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Import Routes
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')
const postRoute = require('./routes/post.route')

// app initiation
const app = express()
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // enable set cookie
}));
app.use(cookieParser());
app.use(session({
    secret: 'Three can keep a secret if two of them are dead.',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.static('public'));


// Use routes
userRoute(app);
blogRoute(app);
postRoute(app);

app.get('/', (req, res) => {
    res.send('Hello ReBlog Backend!')
})


// Init sockets
const socketService = require('./services/socket.service.js')
const server = app.listen(PORT, () => console.log(`ReBlog app listening on port ${PORT}`))
const io = require('socket.io')(server);

// Use socket services
socketService(io);

