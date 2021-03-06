const express = require("express");
const EventRoute = express.Router();
const EventController = require("../Controllers/EventController.js");
const upload = require("../middleware/handleimg.js");
EventRoute.post("/", upload.single("img"), EventController.createEvent);
EventRoute.get("/", upload.single("img"), EventController.getEvent);
// EventRoute.get("/:id", EventController.getSingleEvent);
EventRoute.put("/", upload.single("img"), EventController.updateEvent);
EventRoute.put(
  "/member/",
  upload.single("img"),
  EventController.updateEventMember
);
EventRoute.put(
  "/removemember/",
  upload.single("img"),
  EventController.updateEventRemoveMember
);

module.exports = EventRoute;
