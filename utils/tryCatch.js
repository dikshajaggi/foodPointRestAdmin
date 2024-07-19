

export default async function tryCatchHandler (func) {
    // this is a HOC, it takes a function and returns a function after applying try-catch checks
    return async (...args) => {
        try {
            func(...args)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}