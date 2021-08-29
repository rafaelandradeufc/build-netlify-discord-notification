import channels from '../../channels'

export class ChannelsUtil {

    public static selectChannel(app_name:string):string{
    
        let channel_url = '';

        channels.forEach(function (value) {
            if(value.app === app_name){
                channel_url = value.channel_url;
            }
          }); 
    
        return channel_url;
    }
}