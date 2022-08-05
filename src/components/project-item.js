import * as React from "react"
import ProjectImg from "../images/principal.jpg"
import styled from 'styled-components';

import { Link } from "gatsby"



const ProjectItemStyles = styled.div`
  .projectItem__img {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 32vw;
    border-radius: 5px;
    overflow: hidden;
    padding-top: 5%;

    box-shadow: 0px 1px 17px 11px rgba(0,0,0,0.75);

    img {
      box-shadow: 0px 1px 17px 11px rgba(0,0,0,0.75);
      padding:1%;
      height: 90%;
      width: 90%;
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
    color:black;
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
      height: 350px;
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