import { SET_CONFIG } from "./ActionsTypes";

import { ApiConfig } from "../../../Api";

/**
 * @desc : Set config on redux 
 */

const setConfig = () => ({
    type: SET_CONFIG,
    payload: ApiConfig.getConfig()
        .then(res => res)
});

export {
    setConfig
} 