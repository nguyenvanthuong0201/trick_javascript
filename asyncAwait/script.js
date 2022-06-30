function request(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            type === 'a' ? resolve('resolve') : reject('reject');
        }, 2000);
    })
}

// lv1
async function leve1() {
    try {
        let res1 = await request('a');
        console.log('res1', res1)
    } catch (error) {
        console.log('error1', error)
    }

    try {
        let res2 = await request('b');
        console.log('res2', res2)
    } catch (error) {
        console.log('error2', error)
    }

    try {
        let res3 = await request('c');
        console.log('res3', res3)
    } catch (error) {
        console.log('error3', error)
    }
}

// lv2
async function leve2() {
    let res1 = await request('a').then((response) => console.log(response)).catch((err)=> console.log('err', err))
    let res2 = await request('b').then((response) => console.log(response)).catch((err)=> console.log('err', err))
    let res3 = await request('c').then((response) => console.log(response)).catch((err)=> console.log('err', err))
}

// lv3
const handerRequest = promise =>{
    return promise.then(data=>([undefined, data])).catch(err=>([err,undefined]))
}

async function leve3() {
    let err,result;
    [err,result] = await await handerRequest(request('a'));
    if(err){
        console.log('err1', err)
    }

    [err,result] = await await handerRequest(request('b'));
    if(err){
        console.log('err2', err)
    }

    [err,result] = await await handerRequest(request('c'));
    if(err){
        console.log('err3', err)
    }
}


// leve1();
// leve2();
leve3();