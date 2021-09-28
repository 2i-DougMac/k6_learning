import http from "k6/http";
import { sleep, check } from "k6";
import runStressTest from "./tests/k6_hci_stress_test.js"
import runLoadTest from "./tests/k6_hci_load_test.js"
import runSoakTest from "./tests/k6_hci_soak_test.js"

export default function() {
    runStressTest()
    sleep(1800)
    runLoadTest()
    sleep(1800)
    runSoakTest()
    sleep(120)
};
