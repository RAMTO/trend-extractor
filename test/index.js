import * as assert from 'assert'
import extractTrend from '../src/index'

const testSamples = [
    {
        input: ['foo', 'bar', 'zar', 'foo'],
        expectedResult: [{ word: 'foo', reps: 2 }, { word: 'bar', reps: 1 }, { word: 'zar', reps: 1 }],
        description: 'should return [{ word: \'foo\', reps: 2 }, { word: \'bar\', reps: 1 }, { word: \'zar\', reps: 1 }] value when receiving [\'foo\', \'bar\', \'zar\', \'foo\']',
    },
    {
        input: ['1', '2', '3', '4', '2', '2', '1'],
        expectedResult: [{ word: '2', reps: 3 }, { word: '1', reps: 2 }, { word: '3', reps: 1 }, { word: '4', reps: 1 }],
        description: 'should return [{ word: \'2\', reps: 3 }, { word: \'1\', reps: 2 }, { word: \'3\', reps: 1 }, { word: \'4\', reps: 1 }] value when receiving [\'1\', \'2\', \'3\', \'4\', \'2\', \'2\', \'1\']',
    },
    {
        input: [1, 2, 3, 4, 2, 2, 1],
        expectedResult: [{ word: '2', reps: 3 }, { word: '1', reps: 2 }, { word: '3', reps: 1 }, { word: '4', reps: 1 }],
        description: 'should return [{ word: \'2\', reps: 3 }, { word: \'1\', reps: 2 }, { word: \'3\', reps: 1 }, { word: \'4\', reps: 1 }] value when receiving [1, 2, 3, 4, 2, 2, 1]',
    },
    {
        input: [],
        expectedResult: [],
        description: 'should return [] value when receiving []',
    },
    {
        input: 'abcadeab',
        expectedResult: [{ word: 'a', reps: 3 }, { word: 'b', reps: 2 }, { word: 'c', reps: 1 }, { word: 'd', reps: 1 }, { word: 'e', reps: 1 }],
        description: 'should return [{ word: \'a\', reps: 3 }, { word: \'b\', reps: 2 }, { word: \'c\', reps: 1 }, { word: \'d\', reps: 1 }, { word: \'e\', reps: 1 }] value when receiving abcadeab',
    },
    {
        input: 12313313,
        expectedResult: [{ word: '3', reps: 4 }, { word: '1', reps: 3 }, { word: '2', reps: 1 }],
        description: 'should return [{ word: \'3\', reps: 4 }, { word: \'1\', reps: 3 }, { word: \'2\', reps: 1 }] value when receiving 12313313',
    },
    {
        input: '',
        expectedResult: [],
        description: 'should return [] value when receiving ',
    },
    {
        input: null,
        expectedResult: [],
        description: 'should return [] value when receiving null',
    },
]

describe('Array', () => {
    testSamples.forEach((sample) => {
        it(sample.description, () => {
            assert.deepEqual(extractTrend(sample.input), sample.expectedResult)
        })
    })
})
