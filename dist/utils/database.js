"use strict";

const Sequelize = require("Sequelize");

const sequelize = new Sequelize("api", "me", "password", {
  // gimme postgres, please!
  dialect: "postgres",
  host: "localhost",
  port: 5432
});
module.exports = sequelize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhYmFzZS5qcyJdLCJuYW1lcyI6WyJTZXF1ZWxpemUiLCJyZXF1aXJlIiwic2VxdWVsaXplIiwiZGlhbGVjdCIsImhvc3QiLCJwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJRixTQUFKLENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQixVQUEzQixFQUF1QztBQUN2RDtBQUNBRyxFQUFBQSxPQUFPLEVBQUUsVUFGOEM7QUFHdkRDLEVBQUFBLElBQUksRUFBRSxXQUhpRDtBQUl2REMsRUFBQUEsSUFBSSxFQUFFO0FBSmlELENBQXZDLENBQWxCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKFwiU2VxdWVsaXplXCIpO1xuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFwiYXBpXCIsIFwibWVcIiwgXCJwYXNzd29yZFwiLCB7XG4gIC8vIGdpbW1lIHBvc3RncmVzLCBwbGVhc2UhXG4gIGRpYWxlY3Q6IFwicG9zdGdyZXNcIixcbiAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgcG9ydDogNTQzMlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2VxdWVsaXplO1xuIl19