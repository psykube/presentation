// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#326ce5'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Psykube
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} fit bold>
            A simple yet powerful way to deploy applications to kubernetes
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Image src="https://www.gravatar.com/avatar/ca94b06e32f746968f0aec970a702a0c?s=300" />
          <Heading size={5} textColor="secondary">
            Jason Waldrip
          </Heading>
          <Text textColor="secondary">
            CTO
          </Text>
          <Image src="https://gigsmart.com/wp-content/themes/gigsmart/assets/images/gigsmart-logo.png" width={300} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary">
            Kubernetes is many things out of the box
          </Heading>
          <List>
            <ListItem>Powerful</ListItem>
            <ListItem>Configurable</ListItem>
            <ListItem>Scalable</ListItem>
            <ListItem>Resiliant</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Kubernetes is Still Hard for Developers</Quote>
            <Cite>Kubernetes Blog, November 2017</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary">
            How do we make it easy for developers?
          </Heading>
          <Text>
            While many have tried to introduce best practices, developers thrive when they have the <b><i>right tools</i></b>.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">
            Introducing Psykube
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            A tool that make Kubernetes simple for developers!
          </Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            It's as simple as...
          </Heading>
          <CodePane source={`
            $ psykube init --host presentation.psykube.io --port http=3000 --registry-user=jwaldrip
            $ psykube apply
          `}/>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">
            ... but enough slides, lets code!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
