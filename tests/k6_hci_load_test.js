import http from 'k6/http'
import { check, sleep } from 'k6'


export let options = {
    //
    //  Soak Test 1
    //  Run 1 virtual user that, every 2 seconds over a period of 1 hour, hits a single endpoint from those available.
    //
        vus: 1,
        duration: "60m",
        executor: "constant-vus",
        minIterationDuration: "2s"
}


export default function () {


    //
    //  SPEC OUT ENDPOINTS
    //

    //      GET     /users/{id} (getUserDetails)
    let endpoint01Address = "http://tst-a01-pg-common.bip:8079/api/users/1"
    let endpoint01Body = JSON.stringify({
        // no body
    })
    let endpoint01Params = {
        // no params
    }

    //      POST    /users (saveUserDetails)
    let endpoint02Address = "http://tst-a01-pg-common.bip:8079/api/users"
    let endpoint02Body = JSON.stringify(
        {
            "acceptTerms": true,
            "accountNonExpired": true,
            "accountNonLocked": true,
            "confirmPassword": "string",
            "contactTelephoneNumber": "string",
            "credentialsNonExpired": true,
            "email": "string",
            "enabled": true,
            "firstName": "string",
            "hasOptedIntoCommunications": true,
            "id": 0,
            "jobTitle": "string",
            "lastName": "string",
            "mobile": "string",
            "password": "string",
            "prefix": "string",
            "registrationOrganisation": {
              "addresses": [
                {
                  "address1": "string",
                  "address2": "string",
                  "address3": "string",
                  "address4": "string",
                  "companyName": "string",
                  "country": "string",
                  "county": "string",
                  "id": 0,
                  "latitude": 0,
                  "longitude": 0,
                  "mainAddress": true,
                  "nutsCode": "string",
                  "postCode": "string",
                  "town": "string"
                }
              ],
              "category": "string",
              "companiesHouseNo": "string",
              "coreIndustrySector": 0,
              "employees": 0,
              "hasPublicSectorContractAwarded": true,
              "id": 0,
              "name": "string",
              "turnover": 0,
              "vatNumber": "string",
              "website": "string"
            },
            "salesforceId": "string",
            "stripeCustomerId": "string",
            "userApplications": [
              {
                "accountEnabled": true,
                "accountLocked": true,
                "application": {
                  "fromAddress": "string",
                  "id": 0,
                  "name": "string",
                  "siteUrl": "string"
                },
                "created": "string",
                "id": 0,
                "lastLogin": "2021-09-27T09:44:35.477Z",
                "numberLogins": 0,
                "parentOrgAccount": {
                  "id": 0,
                  "maxUsers": 0,
                  "organisation": {
                    "addresses": [
                      {
                        "address1": "string",
                        "address2": "string",
                        "address3": "string",
                        "address4": "string",
                        "companyName": "string",
                        "country": "string",
                        "county": "string",
                        "id": 0,
                        "latitude": 0,
                        "longitude": 0,
                        "mainAddress": true,
                        "nutsCode": "string",
                        "postCode": "string",
                        "town": "string"
                      }
                    ],
                    "category": "string",
                    "companiesHouseNo": "string",
                    "coreIndustrySector": 0,
                    "employees": 0,
                    "hasPublicSectorContractAwarded": true,
                    "id": 0,
                    "name": "string",
                    "turnover": 0,
                    "vatNumber": "string",
                    "website": "string"
                  },
                  "organisationAccountType": {
                    "code": "string",
                    "description": "string",
                    "id": 0,
                    "initialMaxUsers": 0
                  },
                  "pendingInvitations": [
                    {
                      "accessCode": "string",
                      "application": "string",
                      "created": "string",
                      "email": "string",
                      "firstName": "string",
                      "id": 0,
                      "inviterEmailAddress": "string",
                      "inviterIpAddress": "string",
                      "lastName": "string",
                      "orgAccountId": 0,
                      "prefix": "string",
                      "roleName": "string",
                      "userId": 0,
                      "verificationCode": "string"
                    }
                  ]
                },
                "roles": [
                  {
                    "description": "string",
                    "id": 0,
                    "name": "string",
                    "permissions": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ]
                  }
                ],
                "userId": 0,
                "userVerification": {
                  "agreeTermsAndConditions": true,
                  "cgtAccessCode": "string",
                  "cgtDiscount": 0,
                  "cgtEmail": "string",
                  "cgtIpAddress": "string",
                  "creationDate": "string",
                  "expiryDate": "string",
                  "id": 0,
                  "redirectToPaymentScreen": true,
                  "registrationServiceOffer": 0,
                  "signupIpAddress": "string",
                  "verificationCode": "string",
                  "verificationDate": "string",
                  "verificationIpAddress": "string"
                }
              }
            ],
            "username": "string",
            "uuid": "string"
        }
    )
    let endpoint02Params = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //      POST    /users/user-application (incrementUserLogin)
    let endpoint03Address = "http://tst-a01-pg-common.bip:8079/api/users/user-application"
    let endpoint03Body = JSON.stringify(
        {
            "accountEnabled": true,
            "accountLocked": true,
            "application": {
              "fromAddress": "string",
              "id": 0,
              "name": "string",
              "siteUrl": "string"
            },
            "created": "string",
            "id": 0,
            "lastLogin": "2021-09-24T15:19:55.620Z",
            "numberLogins": 0,
            "parentOrgAccount": {
              "id": 0,
              "maxUsers": 0,
              "organisation": {
                "addresses": [
                  {
                    "address1": "string",
                    "address2": "string",
                    "address3": "string",
                    "address4": "string",
                    "companyName": "string",
                    "country": "string",
                    "county": "string",
                    "id": 0,
                    "latitude": 0,
                    "longitude": 0,
                    "mainAddress": true,
                    "nutsCode": "string",
                    "postCode": "string",
                    "town": "string"
                  }
                ],
                "category": "string",
                "companiesHouseNo": "string",
                "coreIndustrySector": 0,
                "employees": 0,
                "hasPublicSectorContractAwarded": true,
                "id": 0,
                "name": "string",
                "turnover": 0,
                "vatNumber": "string",
                "website": "string"
              },
              "organisationAccountType": {
                "code": "string",
                "description": "string",
                "id": 0,
                "initialMaxUsers": 0
              },
              "pendingInvitations": [
                {
                  "accessCode": "string",
                  "application": "string",
                  "created": "string",
                  "email": "string",
                  "firstName": "string",
                  "id": 0,
                  "inviterEmailAddress": "string",
                  "inviterIpAddress": "string",
                  "lastName": "string",
                  "orgAccountId": 0,
                  "prefix": "string",
                  "roleName": "string",
                  "userId": 0,
                  "verificationCode": "string"
                }
              ]
            },
            "roles": [
              {
                "description": "string",
                "id": 0,
                "name": "string",
                "permissions": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ]
              }
            ],
            "userId": 0,
            "userVerification": {
              "agreeTermsAndConditions": true,
              "cgtAccessCode": "string",
              "cgtDiscount": 0,
              "cgtEmail": "string",
              "cgtIpAddress": "string",
              "creationDate": "string",
              "expiryDate": "string",
              "id": 0,
              "redirectToPaymentScreen": true,
              "registrationServiceOffer": 0,
              "signupIpAddress": "string",
              "verificationCode": "string",
              "verificationDate": "string",
              "verificationIpAddress": "string"
            }
        }
    )
    let endpoint03Params = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //      GET     /searches/{searchType}/{searchString} (autoCompleteSearch)
    let endpoint04Address = "http://tst-a01-pg-common.bip:8079/api/searches/searches/{searchType}/{searchString}"
    let endpoint04Body = JSON.stringify({
        // no body
    })
    let endpoint04Params = {
        // no params
    }

    //      POST    /searches (search)
    let endpoint05Address = "http://tst-a01-pg-common.bip:8079/api/searches"
    let endpoint05Body = JSON.stringify({
        "criteriaTypes": [
          {
            "andCriteriaItems": true,
            "criteriaItems": [
              {
                "boostFactor": 0,
                "criteriaValue": "string",
                "criteriaValueMax": "string",
                "exactMatch": true,
                "id": 0,
                "uuid": "string"
              }
            ],
            "id": 0,
            "singleItemValue": "string",
            "type": "string"
          }
        ],
        "customReturnFields": [
          "string"
        ],
        "facetFields": [
          "string"
        ],
        "fieldList": [
          "string"
        ],
        "id": 0,
        "intersectKeywordsCpvs": true,
        "name": "string",
        "pageNo": 0,
        "priorityCore": "string",
        "resultsPerPage": 0,
        "showExplainPlan": true,
        "sortBy": "string",
        "sortOrder": "string",
        "statsField": "string",
        "uuid": "string"
      })
    let endpoint05Params = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //      GET     /award-industry-sectors (getAll)
    let endpoint06Address = "http://tst-a01-pg-common.bip:8079/api/award-industry-sector"
    let endpoint06Body = JSON.stringify({
        //  no body
    })
    let endpoint06Params = {
        // no params
    }

    //      GET     /opportunity-actions/notice/{noticeId}/total (getOpportunityViewsTotal)
    let endpoint07Address = "http://tst-a01-pg-common.bip:8079/api/opportunity-actions/notice/{noticeId}/total"
    let endpoint07Body = JSON.stringify({
        // no body
    })
    let endpoint07Params = {
        // no params
    }

    //      POST    /validate/user (validateUserDetails)
    let endpoint08Address = "http://tst-a01-pg-common.bip:8079/api/validate/user"
    let endpoint08Body = JSON.stringify({
        "acceptedTsAndCs": true,
        "email": "string",
        "emailConfirm": "string",
        "firstName": "string",
        "jobTitle": "string",
        "lastName": "string",
        "mobile": "string",
        "password": "string",
        "passwordConfirm": "string",
        "telephone": "string",
        "userTitle": "string"
      })
    let endpoint08Params = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //      POST    /search-criteria/ (Save a provided Search Criteria to database)
    let endpoint09Address = "http://tst-a01-pg-common.bip:8079/api/search-criteria/"
    let endpoint09Body = JSON.stringify({
        "criteriaTypes": [
          {
            "andCriteriaItems": true,
            "criteriaItems": [
              {
                "boostFactor": 0,
                "criteriaValue": "string",
                "criteriaValueMax": "string",
                "exactMatch": true,
                "id": 0
              }
            ],
            "id": 0,
            "type": "string"
          }
        ],
        "facetFields": [
          "string"
        ],
        "fieldList": [
          "string"
        ],
        "id": 0,
        "intersectKeywordsCpvs": true,
        "name": "string",
        "pageNo": 0,
        "priorityCore": "string",
        "resultsPerPage": 0,
        "sortBy": "string",
        "sortOrder": "string"
      })
    let endpoint09Params = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //      GET     /cpv-codes/{type}/{identifier} (getCPVCode)
    let endpoint10Address = "http://tst-a01-pg-common.bip:8079/api/cpv-codes/{type}/{identifier}"
    let endpoint10Body = JSON.stringify({
        // no body
    })
    let endpoint10Params = {
        // no params
    }

    //      GET     /user-alert-runs/list/{type}/{id} (Endpoint to return a list of user alert runs based on user or profile id)
    let endpoint11Address = "http://tst-a01-pg-common.bip:8079/api/user-alert-runs/list/{type}/{id}"
    let endpoint11Body = JSON.stringify({
        // no body
    })
    let endpoint11Params = {
        // no params
    }


    //
    //  ENDPOINT SELECTOR PER HIT
    //

    let endpoint = Math.floor(1 + Math.random() * 10)


    //
    //  ENDPOINT SWITCH
    //

    switch (true) {
        case (endpoint === 1):
            // console.log("/users/{id} (getUserDetails)") // GET
            check(http.post(endpoint01Address, endpoint01Body, endpoint01Params), { 'status was 200': (r) => r.status == 200 })
            break
        case (endpoint === 2):
            // console.log("/users (saveUserDetails)")     // POST
            check(http.post(endpoint02Address, endpoint02Body, endpoint02Params), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 3):                          // POST
            // console.log("/users/user-application (incrementUserLogin)")
            check(http.post(endpoint03Address, endpoint03Body, endpoint03Params), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 4):                          // GET
            // console.log("/searches/{searchType}/{searchString} (autoCompleteSearch)")
            check(http.post(endpoint04Address, endpoint04Body, endpoint04Params), { 'status was 200': (r) => r.status == 200 })
            break
        case (endpoint === 5):                          // POST
            // console.log("/searches (search)")
            check(http.post(endpoint05Address, endpoint05Body, endpoint05Params), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 6):                          // GET
            // console.log("/award-industry-sectors (getAll)")
            check(http.post(endpoint06Address, endpoint06Body, endpoint06Params), { 'status was 200': (r) => r.status == 200 })
            break
        case (endpoint === 7):                          // GET
            // console.log("/opportunity-actions/notice/{noticeId}/total (getOpportunityViewsTotal)")
            check(http.post(endpoint07Address, endpoint07Body, endpoint07Params), { 'status was 200': (r) => r.status == 200 })
            break
        case (endpoint === 8):                          // POST
            // console.log("/validate/user (validateUserDetails)")
            check(http.post(endpoint08Address, endpoint08Body, endpoint08Params), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 9):                          // POST
            // console.log("/search-criteria/ (Save a provided Search Criteria to database)")
            check(http.post(endpoint09Address, endpoint09Body, endpoint09Params), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 10):                         // GET
            // console.log("/cpv-codes/{type}/{identifier} (getCPVCode)")
            check(http.post(endpoint10Address, endpoint10Body, endpoint10Params), { 'status was 200': (r) => r.status == 200 })
            break
        case (endpoint === 11):                         // GET
            // console.log("/user-alert-runs/list/{type}/{id} (Endpoint to return a list of user alert runs based on user or profile id)")
            check(http.post(endpoint11Address, endpoint11Body, endpoint11Params), { 'status was 200': (r) => r.status == 200 })
            break
        default:
            // console.log("default switch endpoint")
            //  default replicates case 1
            // console.log("/users/{id} (getUserDetails)") // GET
            check(http.post(endpoint01Address, endpoint01Body, endpoint01Params), { 'status was 200': (r) => r.status == 200 })
            break
    }
}
