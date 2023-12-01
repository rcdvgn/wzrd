import axios from 'axios';
import { webpack } from "../modules-fund/modules-fund"

export default function getRecs({ accessToken, parameters, modo }){
    
    return webpack(modo);
};
