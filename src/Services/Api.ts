const base_url = "http://test252.7agty.com";
export const image_url = base_url;

import AsyncStorage from '@react-native-community/async-storage';

// get request
export const get_request = async ({ target }) => {
    const url = `${base_url}/api/en/${target}`

    const access_token = await AsyncStorage.getItem('@TOKEN')
    console.log('access token>>>', access_token, url);
    try {
        const result = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
        return await result.json()
    } catch (err) {
        // toast('errorInConnection')
    }
}

// post request
export const post_request = async ({ target, body = {} }) => {
    const url = `${base_url}/api/en/${target}`;
    const access_token = await AsyncStorage.getItem('@TOKEN');

    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await result.json()
    } catch (err) {
        // toast('errorInConnection')
    }
}

export const put_request = async ({ target, body = {} }) => {
    const url = `${base_url}/api/en/${target}`;

    console.log('body>>>', JSON.stringify(body));
    try {
        const result = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await result.json()
    } catch (err) {
        // toast('errorInConnection')
    }
}


export const delete_request = async ({ target }) => {
    const url = `${base_url}/api/en/${target}`;
    console.log('url>>>', url);

    try {
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return await result.json()
    } catch (err) {
        // toast('errorInConnection')
    }
}