const tableLog = (message) => {
    let line = message;
    const regex = /./gi;
    line = '─' + line.replace(regex, '─') + '─';
    console.log('┌' + line + '┐\n' + '│ ' + message + ' │\n└' + line + '┘');
};

module.exports = tableLog;
