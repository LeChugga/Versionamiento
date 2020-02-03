import { createAppContainer  } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {Home, Configuration  } from "./Pages/Auth";

const MyDrawerNavigation = createDrawerNavigator({
    home:{
        screen: Home,
    },
    Configuration : {
        screen : Configuration,
        
    }
    
});
const IndexApp = createAppContainer(MyDrawerNavigation);
export default IndexApp