export class Discord {

public static buildSucess(branch: string, prod_link:string, build_id:string) {

    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/oBPXx0D.png',
        content: '',
        embeds: [{
            title: 'Build gerada com sucesso ✅',
            description :'',
            color: 0x00ff2a,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Link de Produção', value: prod_link, inline: false},
 
            ],
            footer: {
                text: '28/08/2021'
            }
            
            
        }]
    };
}
    
}
