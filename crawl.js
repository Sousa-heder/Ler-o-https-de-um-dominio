function normalizeURL(urlString){
    const ulrObj = new URL(urlString)
    const hostPath = `${ulrObj.hostname}${ulrObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    }
    return hostPath

}

module.exports = {
    normalizeURL  }