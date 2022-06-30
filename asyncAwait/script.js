function request(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            type === 'a' ? resolve('resolve') : reject('reject');
        }, timeout);
    })
}

async function getData() {
    try {
        let res1 = await request('a');
    } catch (error) {
        console.log('error', error)
    }

    try {
        let res2 = await request('a');
    } catch (error) {
        console.log('error', error)
    }

    try {
        let res3 = await request('a');
    } catch (error) {
        console.log('error', error)
    }
}

getData();