const levels = [
    {
        level: '1',
        type: 'banner'
    },
    {
        lesson: "1",
        level: '1',
        title: 'Chapter 1',
        type: 'question'
    },
    {
        lesson: '2',
        level: '1',
        title: 'Chapter 2',
        type: 'question'
    },
    {
        lesson: '3',
        level: '1',
        title: 'Chapter 3',
        type: 'question'
    },
    {
        lesson: '4',
        level: '1',
        title: 'Chapter 4',
        type: 'question'
    },
    {
        lesson: '5',
        level: '1',
        title: 'Chapter 5',
        type: 'question'
    },
    {
        level: '2',
        type: 'banner'
    },
    {
        lesson: '7',
        level: '1',
        title: 'Chapter 7',
        type: 'question'
        
    },
    {
        lesson: '8',
        level: '1',
        title: 'Chapter 8',
        type: 'question'
    },
    {
        lesson: '9',
        level: '1',
        title: 'Chapter 9',
        type: 'question'
    },
    {
        lesson: '10',
        level: '1',
        title: 'Chapter 10',
        type: 'question'
    },
]

export const LEVEL1DATA = levels.map((level, index) => ({
    ...level, id: String(index+1), side: index % 2 == 0 ? 'left' : 'right'
}));