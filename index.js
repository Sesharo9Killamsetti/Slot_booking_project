/**
 * @description "Import Express Module for API's"
 */
const _EXPRESS = require("express");
const _SLOT_BOOKING_API = _EXPRESS();
const path = require("path");

const hbs = require('hbs');
const _COOKIE_PARSER = require('cookie-parser');
const _BODY_PARSER = require('body-parser');

_SLOT_BOOKING_API.set('view engine', 'hbs');
_SLOT_BOOKING_API.use(_EXPRESS.json());
_SLOT_BOOKING_API.use(_BODY_PARSER.json());
_SLOT_BOOKING_API.use(_BODY_PARSER.urlencoded({
    extended: true
}));

_SLOT_BOOKING_API.use(_COOKIE_PARSER());

const { getScreens } = require("./bookingDb");


_SLOT_BOOKING_API.get("/", async(req, res) => {
    const output = await getScreens();

    res.render("cinema" , {
        data : output
    });
});

/**
 * @description "Server Connection Establish"
 */
_SLOT_BOOKING_API.listen(3000, () => {
    console.log("Booking Server is Running.....");
});