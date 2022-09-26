async function authKeycloak(token) {
  const client_id = "test-bar-front-json-server";
  const client_secret = "PvBRdCqNcKuxY26e83JDTi4iUJs99H1X";
  const server_url = "https://accounts.unyc.io/realms/technical-tests";

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("client_id", client_id);
  urlencoded.append("client_secret", client_secret);
  urlencoded.append("token", token);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return JSON.parse(
    await fetch(
      `${server_url}/protocol/openid-connect/token/introspect`,
      requestOptions
    ).then((response) => response.text())
  )["active"];
}

module.exports = async (req, res, next) => {
  if (req.headers.hasOwnProperty("authorization")) {
    const token = req.headers["authorization"].split(" ")[1];
    if (!(await authKeycloak(token))) {
      res.sendStatus(403);
    }
  }
  next();
};
