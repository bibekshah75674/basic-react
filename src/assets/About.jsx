import React from 'react'
import { Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { TextInput } from '@mantine/core';

function About() {
  return (
    <>
      <h1>Hello world</h1>
      <Button variant="filled">Button</Button>
            
            <div className="flex justify-center">
             <Carousel withIndicators height={200}>
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          </div>
      
          <TextInput
            size="md"
            radius="md"
            label="Input label"
            withAsterisk
            description="Input description"
            placeholder="Input placeholder"
          />  
    </>
  )
}

export default About
