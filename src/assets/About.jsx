import React from "react";
import { Checkbox } from '@mantine/core';

function About() {
  return (
    <>
      <h1>This is about page</h1>
      <Checkbox
      defaultChecked
      label="I agree to sell my privacy"
      color="rgba(181, 118, 118, 1)"
    />
    </>
  );
}

export default About;

// import React from 'react'
// import { Button } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';

// import { TextInput } from '@mantine/core';
// import { Pagination } from '@mantine/core';

// function About() {
//   return (
//     <>
//       <h1>Hello world</h1>
//       <Button variant="filled">Button</Button>

//             <div className="flex justify-center">
//              <Carousel withIndicators height={200}>
//             <Carousel.Slide>1</Carousel.Slide>
//             <Carousel.Slide>2</Carousel.Slide>
//             <Carousel.Slide>3</Carousel.Slide>
//             {/* ...other slides */}
//           </Carousel>
//           </div>

//           <TextInput
//             size="md"
//             radius="md"
//             label="Input label"
//             withAsterisk
//             description="Input description"
//             placeholder="Input placeholder"
//           />

//           <Pagination total={10} />;
//     </>
//   )
// }

// export default About
