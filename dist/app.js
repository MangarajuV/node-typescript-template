"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const routes_1 = __importDefault(require("./routes"));
console.log("======================================\nsecrects file executed =============================\n ");
if (fs_1.default.existsSync(".env")) {
    console.log("Using .env file to supply config environment variables");
    dotenv_1.default.config({ path: ".env" });
}
else {
    console.log("Using .env.example file to supply config environment variables");
    dotenv_1.default.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
// Create Express server
console.log("process.env.port in app.ts ", process.env.PORT);
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map