import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components';

import projects_data from "../assets/projects-data"
import ProjectItem from "../components/project-item"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css'


SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`

  .container__title{
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
  }
  .container__title h1{
    font-size:4vw;
    text-align: center;
    height: 0px
  }

  .projects__allItems {
    display: flex;
  }

  .swiper {
    width: 100%;
  }
  .swiper-container {
    padding-top: 5rem;
    max-width: 100%;
  }

  .swiper-slide {
    position:relative;
    color: white;
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 85vw;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 12vw;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Seo title="Project Page" />
    <ProjectSectionStyle>
      <div className="container">
        <div className="container__title">
        <h1 > MY RECENT PROJECTS</h1>
        </div>
        <div className="projects__allItems">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects_data.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>

    

  </Layout>

)


export default ProjectsPage 
