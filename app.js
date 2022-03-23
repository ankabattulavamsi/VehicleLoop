const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "vehicles.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/vehicleRegistrationNumber/", async (request, response) => {
  const getStatesQuery = `
    SELECT
      *
    FROM
      state;`;
  const statesArray = await database.all(getStatesQuery);
  response.send(statesArray.map((eachState) => eachState));
});

app.get(
  "/vehicleRegistrationNumber/:vehicleRegistrationNumberId/",
  async (request, response) => {
    const { stateId } = request.params;
    const getStateQuery = `
    SELECT 
      *
    FROM 
      state 
    WHERE 
      state_id = ${stateId};`;
    const state = await database.get(getStateQuery);
    response.send(state);
  }
);

app.delete(
  "/vehicleRegistrationNumber/:vehicleRegistrationNumberId/",
  async (request, response) => {
    const { districtId } = request.params;
    const deleteVehicleQuery = `
  DELETE FROM
    district
  WHERE
    district_id = ${districtId} 
  `;
    await database.run(deleteVehicleQuery);
    response.send("District Removed");
  }
);
