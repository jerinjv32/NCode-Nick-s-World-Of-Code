const levels = [
  {
    level: '1',
    type: 'banner',
    details: 'At this level you will be learning the fundamentals of Python. Basic input/output, syntax, variables and condition checking.'
  },
  {
    lesson: '1',
    level: '1',
    title: 'print() function',
    type: 'question',

  },
  {
    lesson: '2',
    level: '1',
    title: 'Intro to Variables',
    type: 'question',

  },
  {
    lesson: '3',
    level: '1',
    title: 'Python Arithmetics',
    type: 'question',

  },
  {
    lesson: '4',
    level: '1',
    title: 'Chapter 4',
    type: 'question',

  },
  {
    lesson: '5',
    level: '1',
    title: 'Chapter 5',
    type: 'question',

  },
  {
    level: '2',
    type: 'banner',
    details: 'This level contains loops, arrays and introduction to DSA.'
  },
  {
    lesson: '6',
    level: '1',
    title: 'Chapter 6',
    type: 'question',

  },
  {
    lesson: '7',
    level: '1',
    title: 'Chapter 7',
    type: 'question',


  },
  {
    lesson: '8',
    level: '1',
    title: 'Chapter 8',
    type: 'question',

  },
  {
    lesson: '9',
    level: '1',
    title: 'Chapter 9',
    type: 'question',


  },
  {
    lesson: '10',
    level: '1',
    title: 'Chapter 10',
    type: 'question',


  },
]

export const LEVEL1DATA = levels.map((level, index) => ({
  ...level,
  id: String(index + 1),
  side: index % 2 == 0 ? 'left' : 'right'
}));
