function getHeaders(req, res) {
  const ipaddress = req.get('x-forwarded-for').split(",")[0];
  const language = req.get("Accept-Language");
  const software = req.get("User-Agent");
  const response = { ipaddress, software, language };
  res.json(response);
}

module.exports = getHeaders;