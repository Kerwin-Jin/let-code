import { useEffect, useState } from 'react'
interface IProblem {
  id: string
  title: string
  difficulty: number
  category: string
  status: string
  order: number
  videoId: string
}

export enum DifficultyType {
  Easy = 1,
  Medium = 2,
  Hard = 3,
}

export const DifficultyColorMap = {
  [DifficultyType.Easy]: 'text-green-500',
  [DifficultyType.Medium]: 'text-yellow-500',
  [DifficultyType.Hard]: 'text-red-500',
}

const mockData: IProblem[] = [
  {
    id: 'two-sum',
    order: 1,
    status: '未解决',
    title: 'Two Sum',
    difficulty: DifficultyType.Easy,
    category: 'Array',
    videoId: 'https://www.lodashjs.com/docs/lodash.round',
  },
  {
    id: 'reverse-linked-list',
    order: 2,
    status: '',
    title: 'Reverse Linked List',
    difficulty: DifficultyType.Hard,
    category: 'Linked List',
    videoId: '',
  },
  {
    id: 'jump-game',
    order: 3,
    status: '',
    title: 'Jump Game',
    difficulty: DifficultyType.Medium,
    category: 'Dynamic Programming',
    videoId: '',
  },
  {
    id: 'valid-parentheses',
    order: 4,
    status: '',
    title: 'Valid Parentheses',
    difficulty: DifficultyType.Easy,
    category: 'Stack',
    videoId: 'https://www.lodashjs.com/docs/lodash.round',
  },
  {
    id: 'search-a-2d-matrix',
    order: 5,
    status: '',
    title: 'Search a 2D Matrix',
    difficulty: DifficultyType.Medium,
    category: 'Binary Search',
    videoId: '',
  },
  {
    id: 'container-with-most-water',
    order: 6,
    status: '',
    title: 'Container With Most Water',
    difficulty: DifficultyType.Medium,
    category: 'Tow Pointers',
    videoId: '',
  },
  {
    id: 'merge-intervals',
    order: 7,
    status: '',
    title: 'Merge Intervals',
    difficulty: DifficultyType.Medium,
    category: 'intervals',
    videoId: 'https://www.lodashjs.com/docs/lodash.round',
  },
  {
    id: 'maximum-depth-of-binary-tree',
    order: 8,
    status: '',
    title: 'Maximum Depth of Binary Tree',
    difficulty: DifficultyType.Easy,
    category: 'Tree',
    videoId: '',
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    order: 9,
    status: '',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: DifficultyType.Easy,
    category: 'Array',
    videoId: '',
  },
  {
    id: 'subsets',
    order: 10,
    status: '',
    title: 'Subsets',
    difficulty: DifficultyType.Medium,
    category: 'Backtracking',
    videoId: '',
  },
]

let cachedData: IProblem[] = []

const GetData = (): Promise<IProblem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1000)
  })
}

export default function useProblemsData() {
  const [problemData, setProblemData] = useState<IProblem[]>([])

  const fetchData = async () => {
    if (cachedData.length > 0) {
      setProblemData(cachedData)
      return
    }
    const data = await GetData()
    cachedData = data
    setProblemData(cachedData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    problemData,
  }
}
