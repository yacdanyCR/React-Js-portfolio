import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsComponent from '../Components/Cards/CardsComponent'
import Footer from '../Components/Footer/Footer'
import {MyProjects} from '../DBProjects/MyProjects'


export const ProjectsPage = ({ lang }) => {

    return (
        <Container className="mt-5">
            <Row>
                {MyProjects.map((el, key) => {
                    return (
                        <Col key={key}>
                            <CardsComponent project={el} lang={lang} />
                        </Col>
                    )
                })}
            </Row>
            <Footer/>
        </Container>
       
    )
}

export default ProjectsPage