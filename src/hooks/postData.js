export const postData = async(requestBody) => {
    try{
        const response = await fetch(requestBody.url,{
                    method: requestBody.method,
                    body: JSON.stringify(requestBody.body),
                    headers: {
                        Accept: 'application/json',
                        'Authorization' : `Bearer ${requestBody.access}`,
                    },
                }
            );
        if(!response.ok){
            throw new Error('')
        }
        const JSONresponse = await response.json();
        return JSONresponse;
    }catch(error){
        throw new Error('Something went wrong!');
    }
}