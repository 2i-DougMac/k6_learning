import http from 'k6/http'
import { check, sleep } from 'k6'
import faker from 'faker'
faker.locale = "en"

export let options = {
  stages: [

    { duration: '60m', target: 200 }
  ],
}

export default function () {
    let piAddress = "http://192.168.178.64:3000/names"
    let namePostContent = JSON.stringify({
        firstName: faker.name.firstName(),
        middleName: faker.name.middleName(),
        lastName: faker.name.lastName(),
        jobTitle: faker.name.jobTitle(),
        gender: faker.name.gender(),
        prefix: faker.name.prefix(),
        suffix: faker.name.suffix(),
        title: faker.name.title(),
        jobDescriptor: faker.name.jobDescriptor(),
        jobArea: faker.name.jobArea(),
        jobType: faker.name.jobType(),
    })
    let parameters = {
        headers: {
            "Content-type": "application/json"
        }
    }

    let response = http.post(piAddress, namePostContent, parameters)
    check(response, { 'status was 201': (r) => r.status == 201 })
    sleep(52)
}
