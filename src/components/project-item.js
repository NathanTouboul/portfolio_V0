import * as React from "react"
import ProjectImg from "../images/principal.jpg"
import styled from 'styled-components';

import { Link } from "gatsby"



const ProjectItemStyles = styled.div`

  .projectItem__img {
    display: flex;
    justify-content: center;
    align-items:center;
    height: 30vh;
    width: 22.5vw;
    border-radius: 5%;
    overflow: hidden;
    padding-top: 5%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    box-shadow: 0px 1px 5px 3px rgba(255,255,255,0.75);
    background-color: var(--secondary-text-color);

    img {
      height: 100%;
      width: 100%;
      opacity: 0.75;
      border-radius: 5%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: var(--secondary-text-color);
    text-transform: capitalize;
    font-weight: bold;    

  }
  .projectItem__info a{
    text-align:left;
    text-decoration:none;
  }
  .projectItem__desc {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 45vw;
    }

    .projectItem__info {
      padding-left: 0;
      padding-right: 0;
    }
    .projectItem__title {
      padding-right: 0;
      padding-left: 0;
      font-size:4vw;

    }
    .projectItem__desc {
      padding-right:0;
      font-size:3vw;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Description',
  link = '#'
}) {
  return (
    <ProjectItemStyles>

      <Link to={link} className="projectItem__img" target="_blank" rel="noreferrer">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to={link} target="_blank" rel="noreferrer">
          <h3 className="projectItem__title">{title}</h3>
        </Link>

        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}