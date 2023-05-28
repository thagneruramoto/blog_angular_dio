import { LanguageEnum } from "../enums/language.enum"

export class News {
    language: LanguageEnum | undefined
    title: string = ""
    description: string = ""
    image: string = ""
}