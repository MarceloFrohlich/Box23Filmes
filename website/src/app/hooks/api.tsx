import axios from 'axios'

export async function submitEmail(data:{}) {
    try {
        const response = await axios.post('pages/api', data)
        return response
    }
    catch (error:any) {
        console.log(`API error: ${error}`)
        return error
    }   
}
export async function receive() {
    try {
        const response = await axios.get('pages/api')
        return response
    }
    catch (error:any) {
        console.log(`API error: ${error}`)
        return error
    }   
}