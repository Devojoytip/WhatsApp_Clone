export const addUser = async (request, response) => {
    try {
        console.log(request.body)
    } catch (error) {
        response.status(500).json(error);
    }
}