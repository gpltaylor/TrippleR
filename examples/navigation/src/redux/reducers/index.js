import settingsReducer from "./settingsReducer";
import { rrrReducer } from "trippler";

export default {
    settingsReducer,
    rrr: rrrReducer // It's vital this is called "rrr" 
}