import { normalize } from 'normalizr'
import * as schema from './schema'

describe('schema', () => {
  it('should normalize amiiboList', () => {
    const input = {
      amiibo: [
        {
          amiiboSeries: 'Super Smash Bros.',
          character: 'Mario',
          gameSeries: 'Super Mario',
          head: '00000000',
          image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
          name: 'Mario',
          release: {
            au: '2014-11-29',
            eu: '2014-11-28',
            jp: '2014-12-06',
            na: '2014-11-21',
          },
          tail: '00000002',
          type: 'Figure',
        },
      ],
    }
    const { entities } = normalize(input.amiibo, schema.amiiboList)
    const output = {
      amiiboList: {
        '00000002': {
          amiiboSeries: 'Super Smash Bros.',
          character: 'Mario',
          gameSeries: 'Super Mario',
          head: '00000000',
          image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
          name: 'Mario',
          release: {
            au: '2014-11-29',
            eu: '2014-11-28',
            jp: '2014-12-06',
            na: '2014-11-21',
          },
          tail: '00000002',
          type: 'Figure',
        },
      },
    }

    expect(entities).toEqual(output)
  })
})
