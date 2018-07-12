import _map from 'lodash/map'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container, Button, Header, Card, Image, Select, Message, Segment,
} from 'semantic-ui-react'

import withHomeProps from './withHomeProps'
import SelectLang from './SelectLang'

@withHomeProps
export default class Home extends Component {
  static propTypes = {
    entities: PropTypes.shape({
      characterList: PropTypes.objectOf(PropTypes.any).isRequired,
      amiiboList: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,

    characterList: PropTypes.shape({
      isGetting: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      errorMsg: PropTypes.string,
    }).isRequired,

    amiiboList: PropTypes.shape({
      isGetting: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      errorMsg: PropTypes.string,
    }).isRequired,

    fetchGetCharacterList: PropTypes.func.isRequired,
    fetchGetAmiiboList: PropTypes.func.isRequired,
    fetchGetAmiiboListCancel: PropTypes.func.isRequired,
  }

  state={}

  componentDidMount() {
    const {
      fetchGetCharacterList,
    } = this.props
    fetchGetCharacterList()
  }

  render() {
    const {
      selectedAmiibo,
    } = this.state
    const {
      entities, characterList, amiiboList, fetchGetAmiiboList,
      fetchGetAmiiboListCancel,
    } = this.props

    return (
      <Container style={{ paddingTop: '2rem' }}>
        <Header>
          react-intl support
        </Header>
        <SelectLang />
        <Header>
          Simple fetch
        </Header>
        <Select
          lazyLoad
          loading={characterList.isGetting}
          placeholder="Select amiibo"
          options={_map(entities.characterList, el => ({
            key: el.key,
            value: el.name,
            text: el.name,
          }))}
          onChange={(e, data) => this.setState({ selectedAmiibo: data.value })}
        />
        <Button
          onClick={() => {
            fetchGetAmiiboList({
              name: selectedAmiibo,
            })
          }}
        >
          Get Amiibo
        </Button>
        <Button
          onClick={() => {
            fetchGetAmiiboListCancel()
          }}
        >
         Cancel
        </Button>
        { amiiboList.error ? <Message header={amiiboList.errorMsg} negative /> : null }
        <Segment loading={amiiboList.isGetting}>
          <Card.Group>
            {
              _map(entities.amiiboList, amiibo => (
                <Card key={amiibo.tail}>
                  <Image src={amiibo.image} />
                  <Card.Content>
                    <Card.Header>
                      {amiibo.name}
                    </Card.Header>
                    <Card.Meta>
                      {amiibo.gameSeries}
                    </Card.Meta>
                    <Card.Description>
                      {amiibo.amiiboSeries}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))
            }
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}
