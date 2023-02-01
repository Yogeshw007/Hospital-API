## Hospital API

This is an API below are the routes which can register doctor and patients and update the report of the patients also retrieve the patient with status filter.

# Routes:
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

## Getting started

```
$ npm start
```

To start the server up and running.

## Tools used
  * mongoose
  * express
  * node
  * jwt
  * passport
  * passport-jwt
