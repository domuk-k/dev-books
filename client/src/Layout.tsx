import { Grid } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const Layout: React.FC<Props> = props => {
  return (
    <Grid
      templateColumns="90px auto"
      gap={3}
      width={[
        '100%', // 0-30em
        '100%', // 30em-48em
        '100%', // 48em-62em
        '85%', // 62em+
      ]}
      m="auto"
    >
      {props.children}
    </Grid>
  );
};

export default Layout;
