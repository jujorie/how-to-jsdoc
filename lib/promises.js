
async function restCall() {
    return 1
}

function restCall1() {
    return Promise.resolve(1)
}

/**
 * 
 * @returns {Promise<Number>}
 */
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
            return restCall1()
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
}

async function caller3() {
    await restCall()
    await restCall1()
    await restCall2
    return restCall3()
}


class IFetcher {
    /**
     * This is a fetch method
     * @method
     * @public
     */
    async fetch() {}
}

class Fetcher extends IFetcher {
   
    async fetch() {
        return 1
    }
}