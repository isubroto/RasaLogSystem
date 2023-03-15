let serverurl="";
function setUrl(url) {
    serverurl=url;
}
function getUrl() {
    return serverurl;
}
export {setUrl as default, getUrl}