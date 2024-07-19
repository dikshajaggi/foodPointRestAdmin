

export default function tryCatchHandler (func) {
    // this is a HOC, it takes a function and returns a function after applying try-catch checks
    return async (...args) => {
        try {
            return await func(...args)
        } catch (error) {
            console.error("Error:", error);
            throw new Error(error.message);
        }
    }
}
