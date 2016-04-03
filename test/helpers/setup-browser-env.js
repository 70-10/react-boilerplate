global.document = require("jsdom").jsdom("<html><body><div id=\"app\"></div></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;
global.location = window.location;
