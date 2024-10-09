import { SETJOB_ACTION, ADDJOB_ACTION, DELETEJOB_ACTION } from './constant'
const setJob = payload => {
    return {
        type: SETJOB_ACTION,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADDJOB_ACTION,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETEJOB_ACTION,
        payload
    }
}
export { setJob, addJob, deleteJob }