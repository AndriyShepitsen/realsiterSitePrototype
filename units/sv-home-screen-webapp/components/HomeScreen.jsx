// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = {
  card: {
    minWidth: 275,
    minHeight: 400,
  },
}

class HomeScreen extends React.Component<
  { classes: Object, Viewer: Object },
  Object
> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  render() {
    const { classes, Viewer } = this.props

    let Agents = Viewer.Agents.edges.map(({ node }) => {
      return node
    })

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Home" />
          <CardContent>
            <h3>Office Agents</h3>
            <hr />
            <ol>
              {Agents.map((agent, key) => {
                return (
                  <li key={key}>
                    <span> {agent.FirstName} </span>
                    <span> {agent.LastName}</span>
                    <span> {agent.UserId}</span>
                  </li>
                )
              })}
            </ol>
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(HomeScreen),
  graphql`
    fragment HomeScreen_Viewer on Viewer {
      Agents(first: 5) {
        edges {
          node {
            id
            FirstName
            LastName
            UserId
          }
        }
      }
    }
  `
)
