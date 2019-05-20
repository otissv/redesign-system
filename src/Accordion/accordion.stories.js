import React, { Fragment } from 'react'

import { ThemeProvider } from '../Theme'
import { accordion } from './index'
import { accordionButton } from './AccordionButton'
import { accordionContent } from './AccordionContent'
import { accordionItem } from './AccordionItem'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Accordion', module)

const Accordion = accordion``
const AccordionItem = accordionItem``
const AccordionButton = accordionButton``
const AccordionContent = accordionContent``

stories
  .add(
    'Default - Accordion',
    withInfo(`
  
      ~~~js
      <Accordion  active="1">
          {({ itemProps, buttonProps, contentProps }) => (
            <Fragment>
              <AccordionItem {...itemProps} uid="1">
                {() => (
                  <Fragment>
                    <AccordionButton {...buttonProps}
                      toggleProps={{
                        opened: { icon: 'chevron-down' },
                        closed: { icon: 'chevron-right' }
                      }}
                    >
                      Item 1
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>

              <AccordionItem {...itemProps} uid="2">
                {props => (
                  <Fragment>
                    <AccordionButton {...buttonProps}
                      iconOpenPros={{ icon: 'chevron-right' }}
                      iconClosePros={{ icon: 'chevron-down' }}
                    >
                      Item 2
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>

              <AccordionItem {...itemProps} uid="3">
                {props => (
                  <Fragment>
                    <AccordionButton {...buttonProps}
                      iconOpenPros={{ icon: 'chevron-right' }}
                      iconClosePros={{ icon: 'chevron-down' }}
                    >
                      Item 3
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>
            </Fragment>
          )}
        </Accordion>
      ~~~

    `)(() => (
      <ThemeProvider>
        <Accordion active="1">
          {({ itemProps, buttonProps, contentProps }) => (
            <Fragment>
              <AccordionItem {...itemProps} uid="1">
                {() => (
                  <Fragment>
                    <AccordionButton
                      {...buttonProps}
                      toggleProps={{
                        opened: { icon: 'chevron-down' },
                        closed: { icon: 'chevron-right' },
                      }}
                    >
                      Item 1
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>

              <AccordionItem {...itemProps} uid="2">
                {props => (
                  <Fragment>
                    <AccordionButton
                      {...buttonProps}
                      iconOpenPros={{ icon: 'chevron-right' }}
                      iconClosePros={{ icon: 'chevron-down' }}
                    >
                      Item 2
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>

              <AccordionItem {...itemProps} uid="3">
                {props => (
                  <Fragment>
                    <AccordionButton
                      {...buttonProps}
                      iconOpenPros={{ icon: 'chevron-right' }}
                      iconClosePros={{ icon: 'chevron-down' }}
                    >
                      Item 3
                    </AccordionButton>
                    <AccordionContent {...contentProps}>
                      Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </AccordionContent>
                  </Fragment>
                )}
              </AccordionItem>
            </Fragment>
          )}
        </Accordion>
      </ThemeProvider>
    ))
  )

  .add(
    'Dynamic - Accordion',
    withInfo(`
  
      ~~~js
      <Accordion
        active="1"
        items={[
          {
            uid: '1',
            title: 'Dynamic Item 1',
            content:
              'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
          {
            uid: '2',
            title: 'Dynamic Item 2',
            content:
              'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
          {
            uid: '3',
            title: 'Dynamic Item 3',
            content:
              'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
        ]}
      />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Accordion
          active="1"
          items={[
            {
              uid: '1',
              title: 'Dynamic Item 1',
              content:
                'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
            {
              uid: '2',
              title: 'Dynamic Item 2',
              content:
                'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
            {
              uid: '3',
              title: 'Dynamic Item 3',
              content:
                'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
          ]}
        />
      </ThemeProvider>
    ))
  )

  .add(
    'Posistion - Accordion',
    withInfo(`
  
      ~~~js
      <Accordion
        pos="left"
        active="1"
        items={[
          {
            uid: '1',
            title: 'Item 1',
            content:
              'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
          {
            uid: '2',
            title: 'Item 2',
            content:
              'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
          {
            uid: '3',
            title: 'Item 3',
            content:
              'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',
          },
        ]}
      />
      ~~~

    `)(() => (
      <ThemeProvider>
        <Accordion
          pos="left"
          active="1"
          items={[
            {
              uid: '1',
              title: 'Item 1',
              content:
                'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
            {
              uid: '2',
              title: 'Item 2',
              content:
                'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
            {
              uid: '3',
              title: 'Item 3',
              content:
                'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',
            },
          ]}
        />
      </ThemeProvider>
    ))
  )
