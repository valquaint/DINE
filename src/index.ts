import * as winston from 'winston';

const mainTransport = new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize({
            level: true,
            colors: {
                info: "blue",
                debug: "orange",
                error: "red"
            }
        }),
        winston.format.splat(),
        winston.format.simple()
    )
})
winston.add(mainTransport);

winston.info("DINE is starting...");
const trueArgs = process.argv.slice(2).map(arg => arg.toUpperCase());
const FLAGS = {
    DEBUG : trueArgs.indexOf("DEBUG") > -1 ? true : false,
    DEVELOPMENT : (trueArgs.indexOf("DEVELOPMENT") > -1 || process.env.development) ? true : false,
};

(FLAGS.DEBUG || FLAGS.DEVELOPMENT) ? winston.info("DINE is in development or debug mode. Logging will be verbose."):mainTransport.silent = true;

(FLAGS.DEBUG) ? console.table(FLAGS) : null;

// TODO: Create event emitter class

// TODO: Create plugin handler class

// TODO: Create command handler class

// TODO: Create API handler class

// TODO: Create front end class

// TODO: Create database

// TODO: Create message handler class