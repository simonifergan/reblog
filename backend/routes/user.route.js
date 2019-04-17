const userService = require('../services/user.service');

const BASE = '/api';

module.exports = (app) => {

    // Push notifications:

    app.post('/subscribe', (req, res) => {
        const { pushSub } = req.body;
        req.session.pushSub = pushSub;
        // send 201 status
        res.status(201).json({ 'see': 'see this?' });
    })


    // all users
    app.get(`${BASE}/user`, (req, res) => {
        // Not necessary atm, maybe in the future.
    });

    // Get Single user by Id with his posts
    app.get(`${BASE}/user/:userId`, async (req, res) => {
        const {userId} = req.params;
        const user = await userService.getById(userId);
        if (user) res.json(user);
        else res.status(404).end();
    });

    app.post(`${BASE}/login`, async (req, res) => {
        const credentials = req.body;
        // credentials.pushSub = req.session.pushSub;
        // // IF USER LOGGED IN WITH FACEBOOK:
        // if (credentials && credentials.facebookId) {
        //     try {
        //         const user = await userService.loginWithFacebook(credentials);
        //         req.session.user = user;
        //         if (user) return res.json(user);
        //         else throw new Error('Problem with authentication');
        //     } catch (err) {
        //         return res.status(401).end(err);
        //     }
        // }

        // IF USER LOGGED IN THROUGH OUR WEBSITE
        let user = await userService.login(credentials)
        if (!user) return res.status(401).end();
        req.session.user = user;
        res.json(user)
    });

    app.post(`${BASE}/relogin`, async (req, res) => {
        const user = req.body;
        const isExisting = await userService.getById(user._id);
        if (isExisting) {
            req.session.user = user;
            // console.log('DO I HAVE EVEN A PUSHSUB?', req.session.pushSub);
            // if (req.session.pushSub) await userService.updateSubscriber(user._id, req.session.pushSub);
            res.status(201).end();
        } else res.status(401).end();
    })

    app.post(`${BASE}/signup`, async (req, res) => {
        const newUser = req.body;
        try {
            const user = await userService.signup(newUser)
            req.session.user = user;
            res.json(user);
        } catch (err) {
            if (err === 409) return res.status(409).end();
            else if (err === 401) return res.status(401).end();
        }
    });

    app.post(`${BASE}/logout`, (req, res) => {
        delete req.session.user;
        res.status(200).end();
    });

}