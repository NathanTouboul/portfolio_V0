import * as React from "react"
import ProjectImg from "../images/principal.jpg"
import styled from 'styled-components';

import { Link } from "gatsby"



const ProjectItemStyles = styled.div`
  .projectItem__img {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
    width: 100%;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    display: inline-block;
    border: 100px solid var(--gray-2);

    img {
      padding-top:5%;
      padding-bottom:5%;
      padding-left:5%;
      padding-right:5%;
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
    
  }
  .projectItem__info a{
    text-align:left;
    text-decoration:none;

  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
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