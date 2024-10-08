import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import erpSoftware from "../../Assets/Projects/erp-software.png";
import chatApp from "../../Assets/Projects/chat-app.png";
import shodaApp from "../../Assets/Projects/betit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erpSoftware}
              title="Computer-Aided Facility Management Software(ERP)"
              description="This project aims to streamline the management of hospital facilities by improving asset tracking, space utilization, and maintenance scheduling. The system helps monitor and maintain medical equipment, optimize the use of hospital spaces, and automate maintenance tasks."
              demoLink="http://host.tranetech.ae:7200/app/dashboards/default"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              title="Real-Time Chat Application"
              description="Integrating Firebase and Stripe for seamless payment processing and subscription management, including real-time message translation and automated billing. Users can choose between free and Pro plans, manage memberships, and enjoy enhanced security and administrative features."
              demoLink="https://saas-chat-app-nextjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shodaApp}
              title="3D e-commerce landing page"
              description="Betit is a sleek and modern e-commerce landing page for a fictional soda brand. It features eye-catching 3D animations and smooth scroll effects to create an engaging user experience. Built with Next.js for fast performance and react-three-fiber for 3D models, the site is styled using Tailwind CSS to ensure a clean, responsive design."
              demoLink="https://betit.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
