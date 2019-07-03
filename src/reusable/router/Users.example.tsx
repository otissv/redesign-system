import React from 'react';
import { Flex } from '../../Flex';
import { Link } from './Link';

import { Router } from './Router';

export default function Users({ routes }: any) {
  return (
    <>
      Users Page
      <Flex direction="row">
        <Flex direction="column" css="width: 200px;">
          <Link to="/router/users/1">User1</Link>
          <Link to="/router/users/2">User2</Link>
        </Flex>
        <Router className="Router" routes={routes} />
      </Flex>
    </>
  );
}
