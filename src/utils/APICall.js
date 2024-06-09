import axios from 'axios'

async function APICall(link) {
    let startingIndexOfID, ID = ''

    if(link.search('.com') !== -1) {
        startingIndexOfID = link.search("/watch")
        startingIndexOfID += 9
        for(let i = 0; i < 11; i++)
            ID += link[startingIndexOfID + i]
    }
    else if(link.search('.be') !== -1) {
        startingIndexOfID = link.search(".be") + 4
        for(let i = 0; i < 11; i++) 
            ID += link[startingIndexOfID + i]
    }
    else return {response: 'ERROR', id: '-1'}

    const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: { id: ID},
        headers: {
            'x-rapidapi-key': '7264c0698emsh8e04d51884fb66ep1a08f0jsnd21ad7509f71',
            'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
        }
    }
    
    try {
        let status = ''

        while(status !== 'ok') {
            const response = await axios.request(options)
            status = response.data.status

            if(status === 'ok')
                return {response: response.data, id: ID}
        }
    } catch (error) {
        console.error(error)
    }
}

export default APICall