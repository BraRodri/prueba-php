export const getIp = async (setIP) => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    setIP(data.ip);
}