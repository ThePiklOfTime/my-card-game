/** @type {import('./$types').Actions} */
console.log("This is a test and it's not going great")
export const actions = {
    //@ts-ignore
    default: async ({cookies, request}) =>{
        const user = await request.formData()
        const username = user.get("username");
        console.log("username:");
        console.log(username)
        return {
            success : true,
        }
    }
}