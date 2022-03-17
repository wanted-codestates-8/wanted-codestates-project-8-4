import { get } from 'api'
import { atom, selector } from 'recoil'

interface ISector {
  id: number
  sector_kr: string
  sector_en: string
  type: string
  title: string
  url: string
  script_kr: string
  script_en: string
  sort: number
}

export interface IContent {
  id: number
  sector_id: number
  title: string
  body: string
  image: string
  link: string
  upload_date: string
  like_cnt: number
  like_top: number
  liked: boolean
}

export interface IState {
  sector: {
    opinion: ISector
    youtube: ISector
    insight: ISector
  }
  content: {
    opinion: IContent[]
    youtube: IContent[]
    insight: IContent[]
  }
}

export const TYPE: (keyof IState['sector'])[] = [
  'opinion',
  'youtube',
  'insight',
]

const stateWithAsyncDefault = selector({
  key: 'AsyncDefault',
  get: async () => {
    const data = await get()

    const newSector = data.sector.reduce(
      (prev: IState['sector'], sec: ISector, index: number) => ({
        ...prev,
        [TYPE[index]]: sec,
      }),
      {}
    )

    const newContent: IState['content'] = {
      opinion: [],
      youtube: [],
      insight: [],
    }

    data.content.forEach((content: IContent) => {
      newContent[TYPE[content.sector_id - 1]].push(content)
    })

    return {
      sector: newSector,
      content: newContent,
    }
  },
})

export const appState = atom<IState>({
  key: 'appState',
  default: stateWithAsyncDefault,
})

export const tabState = atom<keyof IState['sector']>({
  key: 'tabState',
  default: 'opinion',
})

export const sectorSelector = selector<ISector>({
  key: 'sectorSelector',
  get: ({ get }) => get(appState).sector[get(tabState)],
})

export const contentSelector = selector<IContent[]>({
  key: 'contentSelector',
  get: ({ get }) => get(appState).content[get(tabState)],
  set: ({ set, get }, newContent) => {
    set(appState, (prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [get(tabState)]: newContent,
      },
    }))
  },
})

export const likedIdListState = atom<number[]>({
  key: 'likedIdListState',
  default: [],
})
