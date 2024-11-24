const Logger = require("./logger.js")
const logger = new Logger();

// listener kayıt et

// event'i tetikle

logger.on("connection", function(args){
    console.log("bağlantı kuruldu.", args);
});

logger.log("ahmetresulkuru login oldu");