"use strict";

const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

const controllerConversations = require("../controllersSOLID/conversation");

router.get("/list", isAuth, controllerConversations.list);
router.post("/create", isAuth, controllerConversations.create);
module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXNTT0xJRC9jb252ZXJzYXRpb24uanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJpc0F1dGgiLCJjb250cm9sbGVyQ29udmVyc2F0aW9ucyIsImdldCIsImxpc3QiLCJwb3N0IiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsT0FBTyxDQUFDRyxNQUFSLEVBQWY7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUMsdUJBQUQsQ0FBdEI7O0FBRUEsTUFBTUksdUJBQXVCLEdBQUdKLE9BQU8sQ0FBQyxrQ0FBRCxDQUF2Qzs7QUFFQUMsTUFBTSxDQUFDSSxHQUFQLENBQVcsT0FBWCxFQUFvQkYsTUFBcEIsRUFBNEJDLHVCQUF1QixDQUFDRSxJQUFwRDtBQUNBTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QixFQUErQkMsdUJBQXVCLENBQUNJLE1BQXZEO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgaXNBdXRoID0gcmVxdWlyZShcIi4uL21pZGRsZXdhcmUvaXMtYXV0aFwiKTtcblxuY29uc3QgY29udHJvbGxlckNvbnZlcnNhdGlvbnMgPSByZXF1aXJlKFwiLi4vY29udHJvbGxlcnNTT0xJRC9jb252ZXJzYXRpb25cIik7XG5cbnJvdXRlci5nZXQoXCIvbGlzdFwiLCBpc0F1dGgsIGNvbnRyb2xsZXJDb252ZXJzYXRpb25zLmxpc3QpO1xucm91dGVyLnBvc3QoXCIvY3JlYXRlXCIsIGlzQXV0aCwgY29udHJvbGxlckNvbnZlcnNhdGlvbnMuY3JlYXRlKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=