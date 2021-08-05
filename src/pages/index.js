import React from "react";
import { Container, FeatureImage, CardArray, Card } from "../components";

const IndexPage = () => (
  <Container>
    <FeatureImage/>
    <CardArray>
      <Card date="August, 4th, 2021" title="What is Lorem Ipsum?" excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie." slug="/test"/>
    </CardArray>
  </Container>
) 

export default IndexPage;