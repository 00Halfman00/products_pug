const express = require('express');
const app = express();
const bodyParser = require('body-parser');


///////////////////////   gets  all the middleware routes /////////////////////
const { adminRoute } = require('./router/admin');
const { shopRoute } = require('./router/shop');
const { get404 } = require('./controllers/404');

/////////////////////      sets the app to read pug templates
app.set('view engine', 'pug');

////////////////////////////// parses data from browser and serves css and js files in public directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

/////////////////////////////// using the middleware routes ///////////////////
app.use('/admin', adminRoute);
app.use(shopRoute);
app.use(get404);


//////////////////////////// using network services through a port: internet/intranet routing
app.listen(3000);

//////////////////////         MVC            //////////////////////////
