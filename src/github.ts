export type IUser = {
    username?: string
    firstName?: string
    lastName?: string
    aliases?: string[]
    info?: IMiscInfo
    skills?: string[]
    projects?: IProject[]
}

export type IMiscInfo = {
    country: string
    org: string
    age: number
    likes: string[]
    hobbies: string[]
    reach: {
        [type: string]: {
            name: contact
            url?: string
            username: string
        }[]
    }
}

export interface IProject {
    name: string
    homepage: string
    language: string
    repo: string
    ongoing: boolean
}

export enum contact {
    WhatsApp = 'WA',
    Facebook = 'FB',
    Instagram = 'IG',
    Discord = 'GG'
}
