const Hapi = require(`hapi`);
const Routes = require ('./Routes');

const server = Hapi.Server({
    host: `localhost`,
    port: 3000
});
server.route(Routes);

async function start() {
    try {
        await server.start()
    } catch (err) {
        console.log(err);
        process.exit(1);
    }    
    console.log(`Server running at:` , server.info.uri);
}

start();