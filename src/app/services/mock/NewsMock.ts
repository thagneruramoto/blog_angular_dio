import { LanguageEnum } from "../enums/language.enum";
import { News } from "../models/news.model";

export const NewsMock: News[] = [
    {
        description: "Você está familiarizado com FreeAndNil() , mas você o usa? Com que frequência? Você está usando certo? Tal como acontece com a maioria das coisas no desenvolvimento de software, é um tópico complicado. Então vamos ver o que os especialistas têm a dizer. Vamos debater os detalhes em uma discussão amigável com alguns de seus MVPs favoritos." +
            "Esta postagem no blog incluirá o replay, slides e muito mais após o webinar.",
        language: LanguageEnum.Delphi,
        image: "https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2022/06/Delphi-Developer-Debate-FreeAndNil-9012156.jpg?resize=1140%2C694&ssl=1",
        title: "FreeAndNil() – Debate do desenvolvedor Delphi"
    },
    {
        description: "Em 2022 aumentamos o número de perguntas que nos ajudaram a ter uma visão mais abrangente das oportunidades do Angular. Somos gratos a todos os mais de 12 mil desenvolvedores que compartilharam seus comentários conosco! Na seção abaixo, você aprenderá mais sobre os resultados e como eles se conectam ao nosso roteiro.",
        language: LanguageEnum.Angular,
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IqSLoydVQwWsVmlchl5B4A.png",
        title: "Angular Developer Survey Resumo dos resultados de 2022"
    },
    {
        description: `O C# 10 adiciona os seguintes recursos e aprimoramentos à linguagem C#:
            -Estruturas de registro
            -Aprimoramentos de tipos de estrutura
            -Manipuladores de cadeia de caracteres interpolada
            -Diretivas global using
            -Declaração de namespace com escopo de arquivo
            -Padrões de propriedade estendida
            -Aprimoramentos nas expressões lambda
            -Permissão de cadeias de caracteres interpoladas const
            -Tipos de registro podem selar ToString()
            -Atribuição definida aprimorada
            -Permissão de atribuição e declaração na mesma desconstrução
            -Permissão do atributo AsyncMethodBuilder em métodos
            -Atributo CallerArgumentExpression
            -Pragma #line aprimorado
            -Ciclo de aviso 6

        O C# 10 tem suporte no .NET 6. Para obter mais informações, confira Controle de versão da linguagem C#.        
        Você pode baixar o SDK mais recente do .NET 6 na página de downloads do .NET. Você também pode baixar o Visual Studio 2022, que inclui o SDK do .NET 6.`,
        language: LanguageEnum.CSharp,
        image: "data:image/png;base64,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",
        title: "Novidades do C# 10"
    },
    {
        description: `Abril foi um mês movimentado e cheio de acontecimentos, com muitas atualizações e muitas novidades empolgantes no mundo do Kotlin. Acompanhe todos os destaques em nosso resumo.

        Pesquisa de usuários Kotlin Multiplatform 
        Se você é um desenvolvedor Kotlin, queremos ouvir você! No momento, estamos conduzindo uma pesquisa Kotlin Multiplatform para coletar insights que nos ajudarão a moldar o futuro do Kotlin Multiplatform. Preencha a pesquisa e contribua para uma melhor experiência do desenvolvedor!
        
        Ao participar, você não apenas nos ajudará com nossa pesquisa, mas também terá a chance de ganhar uma assinatura de um ano do JetBrains All Products Pack ou um vale-presente de US$ 100 da Amazon .`,
        language: LanguageEnum.Kotlin,
        image: "https://blog.jetbrains.com/wp-content/uploads/2023/05/DSGN-16469-11-02.png",
        title: "Kotlin News: lançamento 1.8.20, KotlinConf Keynote, mascote redesenhado, Kotlin Foundation News e muito mais"
    },

]