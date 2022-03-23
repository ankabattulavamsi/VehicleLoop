### Problem Statement:

- Build a VehicleLookup Rest API based on the attached structure.
  - [VehicleLookUp_Service](https://docs.google.com/spreadsheets/d/1GQlMheQB8Ax4fVQhcX3nPOtPnd4es9bY/edit?usp=sharing&ouid=100314568685744919644&rtpof=true&sd=true)
- Reference doc from the company

### **Tech** **Stack:**

- Technology:
  - Any Backend Technology
    - **You can use NodeJS**.
- Datastore:
  - File or SQL DB or No SQL DB
    - **You can use SQLite DB**

### Completion Instructions:

- [ ] Create your own database file (SQLite DB)
- [ ] Create required tables related to the problem statement
- [ ] Write a GET API that returns the required response as mentioned in the above-given [sheet](https://docs.google.com/spreadsheets/d/1GQlMheQB8Ax4fVQhcX3nPOtPnd4es9bY/edit#gid=1381275837)
- [ ] Create a `README.md` file with steps to configure and run the service
- [ ] Populate the data in the database (add a few rows of dummy data in each of the tables)

### Sample request and response:

- **Request**
  - `/:vehicleRegistrationNumber`
- **Response**
  ```jsx
  {
  	"vehicle": {
  		"registrationNumber": "XXXXXXX",
  		"vehicleMake": "Honda",
  		"vehicleModel": "CBR650R",
  		"vehicleVariant": "XXXX",
  		"registrationDate": "21-03-2022",
  		"manufactureYear": 2022,
  		"rtoCode": "XXXX",
  		"rtoLocation": "Hyderabad",
  		"fuelType": "Petrol",
  		"engineNo": "XXXX",
  		"chasisNo": "XXXX"
  	},
  	"customer": {
  		"individualOrOrganisation": "Individual",
  		"individual": {
  			"firstName": "Michael",
  			"lastName": "Clarke"
  		},
  		"permanentAddress": "XXXX",
  		"communicationAddress": "XXXX",
  		"phoneNumber": 0000000000,
  		"emailAddress": "test@test.com",
  		"dateOfBirth": "22-09-1998",
  		"nomineeName": "Marcus Clarke",
  		"nomineeAge": 25,
  		"nomineeRelationship": "Father"
  	},
  	"insurance": {
  		"insuranceProvider": "XXXX",
  		"policyNumber": "XXXX",
  		"policyType": "XXXX",
  		"policyTerm": "XXXX",
  		"riskStartDate": "21-03-2022",
  		"riskEndDate": "21-03-2027"
  	}
  }
  ```

<aside>
💡 If `customer.individualOrOrganisation` is equal to `Individual`, then `organisation` key in the `customer` object is not required.

</aside>

<aside>
💡 If `customer.individualOrOrganisation` is equal to `Organisation`, then `individual` key in the `customer` object is not required.

</aside>
