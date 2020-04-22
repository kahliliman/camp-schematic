var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://localhost:3000";
var METABASE_SECRET_KEY =
  "a9cac8000c14d03791c6e75ffae27d548f7895257b75abd2d082113e596ccb5e";

var payload = {
  resource: { dashboard: 1 },
  params: {},
  exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl =
  METABASE_SITE_URL +
  "/embed/dashboard/" +
  token +
  "#theme=night&bordered=true&titled=true";
