const createBrowserHistory = require("history").createBrowserHistory;

const browserHistory = createBrowserHistory({ basename: '/' });

export default browserHistory;
