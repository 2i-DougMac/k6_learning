import http from 'k6/http';
import { sleep } from 'k6';

// 1. init code

export let options = {
    // to avoid adding params at command line invocation
    
}

export function setup() {
    // 2. setup code
    return { v: 1 }
}


export default function (data) {
    // 3. VU code
    console.log(JSON.stringify(data))
}

export function teardown(data) {
    // 4. teardown code
    if (data.v !=1) {
        throw new Error('incorrect data: ' + JSON.stringify(data))
    }
}

