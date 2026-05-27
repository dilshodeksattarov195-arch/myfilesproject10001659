const notifyPenderConfig = { serverId: 9304, active: true };

const notifyPenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9304() {
    return notifyPenderConfig.active ? "OK" : "ERR";
}

console.log("Module notifyPender loaded successfully.");