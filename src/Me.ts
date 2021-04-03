import { contact, IUser } from './github'

export default class ME implements IUser {
    public static firstName = 'Alen'
    public static lastName = 'Yohannan'
    public static username = 'AlenSaito1'
    public static aliases = ['Ban Takahiro']
    public static skills = ['TypeScript', 'JavaScript', 'NodeJS', 'C', 'EJS', 'Express', 'NoSQL']
    public static info = {
        age: 17,
        country: 'India',
        org: 'None',
        likes: ['TypeScript', 'Zelda Series', 'JJBA Series', 'Well.....'],
        hobbies: ['Manga', 'Shipping', 'Music'],
        reach: [
            {
                name: contact.Discord,
                username: 'Alen#4688'
            },
            {
                name: contact.WhatsApp,
                url: 'https://wa.me/+919744375687?text=Well...'
            }
        ]
    }
    public static projects = [
        {
            name: 'Wa-Sticker-Fomatter',
            homepage: 'https://www.npmjs.com/package/wa-sticker-formatter',
            repo: 'https://github.com/AlenSaito1/wa-sticker-formatter',
            language: 'TypeScript',
            ongoing: true
        },
        {
            name: 'mywaifulist-scraper',
            homepage: 'https://www.npmjs.com/package/mywaifulist-scraper',
            repo: 'https://github.com/AlenSaito1/mywaifulist-scraper',
            language: 'TypeScript',
            onging: true
        },
        {
            name: 'WhatsApp-Botto-Xre',
            homepage: 'https://github.com/SomnathDas/Whatsapp-Botto-Xre#readme',
            repo: 'https://github.com/SomnathDas/Whatsapp-Botto-Xre',
            language: 'TypeScript',
            onging: true
        }
    ]
}
