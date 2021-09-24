import http from 'k6/http'
import { check, sleep } from 'k6'

export let options = {
    // stages: [
    //     { duration: '1m', target: 1 },
    //     { duration: '2m', target: 1 },
    //     { duration: '1m', target: 0 }
    // ],
    vus: 1,
    duration: "1m",
    executor: "constant-vus",
    minIterationDuration: "2s"
}


export default function () {
    let piAddress = "http://192.168.178.64:3000/names"
    let namePostContent = JSON.stringify({
        firstName: "Douglas",
        middleName: "Stuart",
        lastName: "MacIntyre",
        jobTitle: "Tester",
        gender: "Male",
        prefix: "",
        suffix: "Esq",
        title: "Mr.",
        jobDescriptor: "Test man",
        jobArea: "Software",
        jobType: "Full-time"
    })
    let parameters = {
        headers: {
            "Content-type": "application/json"
        }
    }

    let endpoint = Math.floor(Math.random() * 9)

    switch (true) {
        case (endpoint === 1):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 2):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 3):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 4):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 5):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 6):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 7):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 8):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 9):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        case (endpoint === 0):
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
        default:
            console.log("default: ", endpoint)
            check(http.post(piAddress, namePostContent, parameters), { 'status was 201': (r) => r.status == 201 })
            break
    }
}
