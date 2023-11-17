export const isVaildUrl = (url) => {
    const urlAddressPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.[^\s]{2,}(\/|$)/;
    return urlAddressPattern.test(url);
}


