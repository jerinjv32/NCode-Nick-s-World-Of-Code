const levels = [
    {
        level: '1',
        type: 'banner',
    },
    {
        lesson: "1",
        level: '1',
        title: 'Chapter 1',
        type: 'question',
        unlocked: true,
        completed: false
    },
    {
        lesson: '2',
        level: '1',
        title: 'Chapter 2',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '3',
        level: '1',
        title: 'Chapter 3',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '4',
        level: '1',
        title: 'Chapter 4',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '5',
        level: '1',
        title: 'Chapter 5',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        level: '2',
        type: 'banner'
    },
    {
        lesson: '6',
        level: '1',
        title: 'Chapter 6',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '7',
        level: '1',
        title: 'Chapter 7',
        type: 'question',
        unlocked: false,
        completed: false

    },
    {
        lesson: '8',
        level: '1',
        title: 'Chapter 8',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '9',
        level: '1',
        title: 'Chapter 9',
        type: 'question',
        unlocked: false,
        completed: false
    },
    {
        lesson: '10',
        level: '1',
        title: 'Chapter 10',
        type: 'question',
        unlocked: false,
        completed: false
    },
]

export const LEVEL1DATA = levels.map((level, index) => ({
    ...level,
    id: String(index + 1),
    side: index % 2 == 0 ? 'left' : 'right'
}));