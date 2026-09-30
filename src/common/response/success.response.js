export function successResponse({ res, status = 200, msg = "Done", data }) {
  return res.status(status).json({ msg, data });
}
