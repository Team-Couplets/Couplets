const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const authController = {};

const client = jwksClient({
    jwksUri: 'https://appleid.apple.com/auth/keys',
});

//function to get signing key
const getAppleSigninKey = async (kid) => {
    try {
        const key = await client.getSigningKey(kid);
        const signingKey = key.getPublicKey();
        return signingKey;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

//function to verify token
const verifyJWT = (data, publicKey) => {
    return new Promise((resolve) => {
        jwt.verify(data, publicKey, (err, payload) => {
            if (err) {
                console.error(err);
                return resolve(null);
            }
            resolve(payload);
        })
    })
}

authController.verifyJWT = async (req, res, next) => {
    //validate apple sign in
    const { identityToken, user } = req.body;
    //complete decode of jwt token (header with payload data)
    const data = jwt.decode(identityToken, { complete: true });
    console.log(data);
    //extract kid value
    const { kid } = data.header;
    //validate sign in key (apple uses rsa encryption)
    const appleKeys = await getAppleSigninKey(kid)

    //throw error if no key is returned
    if(!appleKeys) {
        console.error('apple sign in key not found');
    }
    //verify our passed in token with apple key to make sure the token is valid
    const payload = await verifyJWT(identityToken, appleKeys);

    //throw error if no payload is returned
    if (!payload) {
        console.error('token is not valid');
        return;
    }
    console.log('sign in with apple succeeded' + payload)
    //save email in locals object
    res.locals.email = data.payload.email;
    return next();
}

module.exports = authController;