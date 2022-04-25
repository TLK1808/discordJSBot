require("dotenv").config();
const axios = require(`axios`);
//on is just a variable used for state of the light
//personal data such as ip and username can be kept in seperate .env file
controlLight = async(lightId, on, hue, sat, bri) => {
    try {
        return await axios.put
        (
            `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${lightId}/state`,
            {
                on,
                ...(bri && { bri }),
                ...(hue && { hue }),
                ...(sat && { sat }),
            }
        );
        }
        catch(err)
        {
            console.error(error)
        }
};
module.exports.controlLight = controlLight;

// example for function controlLight(5, false, 9000, 254, 254);
