export function tgLog(text){
    fetch('https://api.telegram.org/bot1746529330:AAFzNlyUdWt5OaVriq3AkYVBHAsBJII8slw/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id:391796080,
            text:text
        })
    })
}
