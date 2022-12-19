
async function restCall() {
    return 1
}

function restCall1() {
    return Promise.resolve(1)
}

function restCall2() {
    return new Promise(resolve => {
        resolve(1)
    })
}

function restCall3() {
    return "aaaa"
}


function caller() {
    return restCall()
        .then(() => {
            return restCall1
        })
        .then(() => {
            return restCall2()
        })
        .then(() => {
            return restCall3()
        })
}

function caller3() {
    return restCall()
        .then(restCall1)
        .then(restCall2)
        .then(restCall3)
        .then(async () => {
            await restCall2()
        })
}

async function caller3() {
    await restCall()
    await restCall1()
    await restCall2
    return restCall3()
}


class IFetcher {
    async fetch() {}
}

class Fetcher extends IFetcher {
    fetch() {
        return Promise.resolve()
    }
}