import date from 'date-and-time';
export class Discord {

public static buildSucceeded(app_name: string, branch: string, prod_link:string, build_id:string, context:string) {


    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/toblPi8.jpg',
        content: '',
        embeds: [{
            title: 'Build gerada com sucesso ✅',
            description :'',
            color: 0x00ff2a,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Aplicação', value: app_name, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Contexto', value: context, inline: false},
                {name: 'Link de Produção', value: prod_link, inline: false},
 
            ],
            footer: {
                text: date.format(new Date(), 'DD/MM/YYYY HH:mm:ss')
            }
            
            
        }]
    };
}

public static buildFailed(app_name: string, branch: string, build_id:string, context:string) {

    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/toblPi8.jpg',
        content: '',
        embeds: [{
            title: 'Build falhou 🛑',
            description :'',
            color: 0xff0000,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Aplicação', value: app_name, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Contexto', value: context, inline: false},
 
            ],
            footer: {
                text: date.format(new Date(), 'DD/MM/YYYY HH:mm:ss')
            }
            
            
        }]
    };
}

public static buildStarted(app_name: string, branch: string, build_id:string, context:string) {

    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/toblPi8.jpg',
        content: '',
        embeds: [{
            title: 'Build foi iniciada 🏁',
            description :'',
            color: 0x00b3ff,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Aplicação', value: app_name, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Contexto', value: context, inline: false},
 
            ],
            footer: {
                text: date.format(new Date(), 'DD/MM/YYYY HH:mm:ss')
            }
            
            
        }]
    };
}

public static buildLocked(app_name: string, branch: string, build_id:string, context:string) {

    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/toblPi8.jpg',
        content: '',
        embeds: [{
            title: 'Auto build bloqueado 🔒',
            description :'',
            color: 0xeeff00,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Aplicação', value: app_name, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Contexto', value: context, inline: false},
 
            ],
            footer: {
                text: date.format(new Date(), 'DD/MM/YYYY HH:mm:ss')
            }
            
            
        }]
    };
}

public static buildUnlocked(app_name: string, branch: string, build_id:string, context:string) {

    return {
        username: 'Buildbot',
        avatar_url: 'https://i.imgur.com/toblPi8.jpg',
        content: '',
        embeds: [{
            title: 'Auto build desbloqueado 🔓',
            description :'',
            color: 0x0040ff,
            fields:[
                {name: 'ID da build', value: build_id, inline: false},
                {name: 'Aplicação', value: app_name, inline: false},
                {name: 'Branch', value: branch, inline: false},
                {name: 'Contexto', value: context, inline: false},
 
            ],
            footer: {
                text: date.format(new Date(), 'DD/MM/YYYY HH:mm:ss')
            }
            
            
        }]
    };
}

}
