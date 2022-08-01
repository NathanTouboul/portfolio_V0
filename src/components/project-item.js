import * as React from "react"
import projectImg from "../images/principal.jpg"
import { Link } from "gatsby"


export default function ProjectItem() {

    return (
        <div>
            <Link to="https://github.com/NathanTouboul/PathPlanning" className="projectItem__img">
                <img src={projectImg} alt="project img"/>
            </Link>
            
            <div className="projectItem__info">
                <Link to="#">
                    <h3 className="projectItem__title">Qt Project</h3>
                </Link>
                <p className="projectItem__desc">
                    Description
                </p>

            </div>

        </div>


        )
}