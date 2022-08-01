import {v4 as uuidv4} from 'uuid'
import Principal from "../images/principal.jpg"


const projects_data = [

    {
        id: uuidv4(), 
        name: 'Qt Project',
        desc:
            "Description", 
        img: Principal,
    },

    {
        id: uuidv4(), 
        name: 'Graph Slam from Scratch',
        desc:
            "Description", 
        img: Principal,
    }
]

export default projects_data