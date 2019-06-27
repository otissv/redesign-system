import React, { Fragment } from 'react';
import { Flex, WrapEnum } from '../../Flex';
import Container from '../../Container/Container';

import { useTheme } from '../../ThemeContext';
import { swatches } from './color.swatches';

export function ColoPalette() {
  const {
    theme: { color },
  } = useTheme();

  return (
    <Fragment>
      <Flex
        wrap={WrapEnum.wrap}
        css={`
          max-width: 768px;
        `}
      >
        {Object.keys(swatches).map(key =>
          key == '__filemeta' ? null : (
            <Container
              key={key}
              css={`
                text-align: center;
                margin: 5px;
              `}
              marginBottom={4}
            >
              <Flex
                elevate={5}
                css={`
                  width: 100px;
                  margin: 24px auto 8px auto;
                `}
              >
                <Container
                  css={`
                    background: ${color[key]};
                    height: 100px;
                    width: 100px;
                  `}
                />
              </Flex>
              {color[key]}
              <br />
              {key}
            </Container>
          )
        )}
      </Flex>
    </Fragment>
  );
}

export function ColorSwatch({
  label,
  color1,
  color2,
}: {
  [key: string]: string;
}) {
  const {
    theme: { color },
  } = useTheme();
  return (
    <Container
      css={`
        text-align: center;
        margin: 5px;
      `}
      marginBottom={4}
    >
      <Flex
        elevate={5}
        css={`
          width: 100px;
          margin: 24px auto 8px auto;
        `}
      >
        <Container
          css={`
            background: ${color[color1]};
            height: 100px;
            width: 50px;
          `}
        />
        <Container
          css={`
            background: ${color[color2 || color1]}
            height: 100px;
            width: 50px;
            display: inline-block
            `}
        />
      </Flex>
      <br />
      {label}
    </Container>
  );
}
