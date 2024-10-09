import { SETJOB_ACTION, ADDJOB_ACTION, DELETEJOB_ACTION } from './constant'

export const initState = {
    job: '',
    jobs: []
}
const reducer = (state, action) => {


    switch (action.type) {
        case SETJOB_ACTION:
            return {
                ...state,
                job: action.payload
            }

        case ADDJOB_ACTION:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }

        case DELETEJOB_ACTION:

            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }

        default:
            throw new Error('Invalid action')
    }

}
export default reducer