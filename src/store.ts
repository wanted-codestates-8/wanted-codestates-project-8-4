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

interface IContent {
  id: number
  sector_id: number
  title: string
  body: string
  image: string
  link: string
  upload_date: string
  like_cnt: number
  like_top: number
}

interface IState {
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

export const TYPE = ['opinion', 'youtube', 'insight']

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
      newContent[
        TYPE[content.sector_id - 1] as 'opinion' | 'youtube' | 'insight'
      ].push(content)
    })

    const newData = {
      sector: newSector,
      content: newContent,
    }

    return newData
  },
})

export const appState = atom<IState>({
  key: 'AppState',
  default: stateWithAsyncDefault,
})

export const tabState = atom<string>({
  key: 'Tab',
  default: 'opinion',
})

export const sectorSelector = selector<ISector>({
  key: 'SectorSelector',
  get: ({ get }) =>
    get(appState).sector[get(tabState) as 'opinion' | 'youtube' | 'insight'],
})

export const contentSelector = selector<IContent[]>({
  key: 'ContentSelector',
  get: ({ get }) =>
    get(appState).content[get(tabState) as 'opinion' | 'youtube' | 'insight'],
})
