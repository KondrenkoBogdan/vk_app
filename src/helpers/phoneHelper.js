// import $ from "jquery"
import * as $ from 'jquery'

var emojis = '👩‍❤️‍💋‍👩,👩‍👩‍👧‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👨‍❤️‍💋‍👨,👨‍👩‍👧‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👨‍👧‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👩‍❤️‍👩,👩‍👩‍👧,👩‍👩‍👦,👩‍👧‍👧,👩‍👧‍👦,👩‍👦‍👦,👨‍❤️‍👨,👨‍👩‍👧,👨‍👨‍👧,👨‍👨‍👦,👨‍👧‍👧,👨‍👧‍👦,👨‍👦‍👦,👩‍👧,👩‍👦,👨‍👧,👨‍👦,😂,❤️,♥️,😍,😭,😊,😒,😘,💕,☺️,😩,👌🏿,👌🏾,👌🏽,👌🏼,👌🏻,👌,😔,😏,😁,♻️,😉,👍🏿,👍🏾,👍🏽,👍🏼,👍🏻,👍,🙏🏿,🙏🏾,🙏🏽,🙏🏼,🙏🏻,🙏,😌,🎶,😳,🙌🏿,🙌🏾,🙌🏽,🙌🏼,🙌🏻,🙌,🙈,😢,😎,✌🏿,✌🏾,✌🏽,✌🏼,✌🏻,✌️,👀,😅,✨,😴,😄,💜,💔,💯,😑,💖,💙,😕,💁🏿‍♂️,💁🏾‍♂️,💁🏽‍♂️,💁🏼‍♂️,💁🏻‍♂️,💁‍♂️,💁🏿,💁🏾,💁🏽,💁🏼,💁🏻,💁,😜,😞,😋,😐,😪,👏🏿,👏🏾,👏🏽,👏🏼,👏🏻,👏,💘,💗,💞,⬅️,🙊,✋🏿,✋🏾,✋🏽,✋🏼,✋🏻,✋,💋,👉🏿,👉🏾,👉🏽,👉🏼,👉🏻,👉,🌸,😱,😈,🔥,😡,😃,🎉,👊🏿,👊🏾,👊🏽,👊🏼,👊🏻,👊,😫,📷,🌹,😝,💪🏿,💪🏾,💪🏽,💪🏼,💪🏻,💪,💀,☀️,💛,😤,🌚,😆,😓,👈🏿,👈🏾,👈🏽,👈🏼,👈🏻,👈,✔️,😻,😀,😷,💚,👋🏿,👋🏾,👋🏽,👋🏼,👋🏻,👋,😣,💓,▶️,👑,😚,😛,😥,😇,🎧,✅,😖,➡️,😠,😬,🌟,🔫,🙋🏿‍♂️,🙋🏾‍♂️,🙋🏽‍♂️,🙋🏼‍♂️,🙋🏻‍♂️,🙋‍♂️,🙋🏿,🙋🏾,🙋🏽,🙋🏼,🙋🏻,🙋,👎🏿,👎🏾,👎🏽,👎🏼,👎🏻,👎,1️⃣,💃🏿,💃🏾,💃🏽,💃🏼,💃🏻,💃,🎵,😶,2️⃣,💫,✊🏿,✊🏾,✊🏽,✊🏼,✊🏻,✊,👇🏿,👇🏾,👇🏽,👇🏼,👇🏻,👇,🔴,🙅🏿‍♂️,🙅🏾‍♂️,🙅🏽‍♂️,🙅🏼‍♂️,🙅🏻‍♂️,🙅‍♂️,🙅🏿,🙅🏾,🙅🏽,🙅🏼,🙅🏻,🙅,💥,↪️,↩️,©️,💭,👅,💩,😰,💎,🙆🏿‍♂️,🙆🏾‍♂️,🙆🏽‍♂️,🙆🏼‍♂️,🙆🏻‍♂️,🙆‍♂️,🙆🏿,🙆🏾,🙆🏽,🙆🏼,🙆🏻,🙆,🍕,😹,🌞,🍃,💦,🐧,💤,🚶🏿‍♀️,🚶🏾‍♀️,🚶🏽‍♀️,🚶🏼‍♀️,🚶🏻‍♀️,🚶‍♀️,🚶🏿,🚶🏾,🚶🏽,🚶🏼,🚶🏻,🚶,✈️,🎈,⭐️,🎀,☑️,😟,🔞,😨,🍀,🌺,🎤,👐🏿,👐🏾,👐🏽,👐🏼,👐🏻,👐,👻,◀️,🌴,‼️,💅🏿,💅🏾,💅🏽,💅🏼,💅🏻,💅,❌,👽,🙇🏿‍♀️,🙇🏾‍♀️,🙇🏽‍♀️,🙇🏼‍♀️,🙇🏻‍♀️,🙇‍♀️,🙇🏿,🙇🏾,🙇🏽,🙇🏼,🙇🏻,🙇,☁️,⚽️,👼🏿,👼🏾,👼🏽,👼🏼,👼🏻,👼,👯‍♂️,👯,❗️,❄️,☝🏿,☝🏾,☝🏽,☝🏼,☝🏻,☝️,😙,🌈,🌙,💟,💝,🎁,🍻,😧,🌍,🎥,⚓️,⚡️,♣️,✖️,🏃🏿‍♀️,🏃🏾‍♀️,🏃🏽‍♀️,🏃🏼‍♀️,🏃🏻‍♀️,🏃‍♀️,🏃🏿,🏃🏾,🏃🏽,🏃🏼,🏃🏻,🏃,🌻,🌎,💐,🐶,💰,🌿,👫,🍂,🌷,🎂,🐱,☕️,😵,👆🏿,👆🏾,👆🏽,👆🏼,👆🏻,👆,😮,😯,🏀,🎄,💍,🌝,😲,👭,💸,💏,😿,🙉,💨,🌵,♨️,☎️,🍁,👸🏿,👸🏾,👸🏽,👸🏼,👸🏻,👸,💆🏿‍♂️,💆🏾‍♂️,💆🏽‍♂️,💆🏼‍♂️,💆🏻‍♂️,💆‍♂️,💆🏿,💆🏾,💆🏽,💆🏼,💆🏻,💆,💌,🏆,🙍🏿‍♂️,🙍🏾‍♂️,🙍🏽‍♂️,🙍🏼‍♂️,🙍🏻‍♂️,🙍‍♂️,🙍🏿,🙍🏾,🙍🏽,🙍🏼,🙍🏻,🙍,🇺🇸,🎊,🌼,🔪,👄,🍟,🍩,😦,🌊,💣,🆗,🌀,🚀,☔️,💑,🍭,🎬,🐷,👿,🐝,😽,💢,🎼,🎅🏿,🎅🏾,🎅🏽,🎅🏼,🎅🏻,🎅,🌏,🏈,🎸,♦️,🐼,💬,🍓,😼,🍌,🍉,⛄️,😸,♠️,🔝,🍆,🔮,🍴,📲,📱,⛅️,⚠️,🙀,🔸,👶🏿,👶🏾,👶🏽,👶🏼,👶🏻,👶,🐾,👣,🍺,🍷,⭕️,📹,🐰,🍹,🚬,👾,🍑,🐍,🐢,🍒,😗,🐸,🌌,🚨,🐣,📕,🍬,🍔,🐻,🐯,🚗,⏩,🍦,🍍,🌾,💉,🚮,🍫,▪️,📺,💊,🐙,🎃,🍇,😺,💿,🍸,🍰,🎮,™️,⬇️,🚫,💄,🐳,📝,®️,🍪,🐬,🔊,👨🏿,👨🏾,👨🏽,👨🏼,👨🏻,👨,🐥,🐒,3️⃣,📚,👹,💂🏿‍♀️,💂🏾‍♀️,💂🏽‍♀️,💂🏼‍♀️,💂🏻‍♀️,💂‍♀️,💂🏿,💂🏾,💂🏽,💂🏼,💂🏻,💂,📢,✂️,👧🏿,👧🏾,👧🏽,👧🏼,👧🏻,👧,🎓,🇫🇷,⚾️,🚦,👩🏿,👩🏾,👩🏽,👩🏼,👩🏻,👩,🎆,🌠,🆘,🍄,😾,🛅,👠,🎯,🏊🏿‍♀️,🏊🏾‍♀️,🏊🏽‍♀️,🏊🏼‍♀️,🏊🏻‍♀️,🏊‍♀️,🏊🏿,🏊🏾,🏊🏽,🏊🏼,🏊🏻,🏊,🔑,👙,👪,✏️,🐘,💧,🌱,🍎,🆒,📞,💵,🏡,📖,💇🏿‍♂️,💇🏾‍♂️,💇🏽‍♂️,💇🏼‍♂️,💇🏻‍♂️,💇‍♂️,💇🏿,💇🏾,💇🏽,💇🏼,💇🏻,💇,💻,💡,❓,🔙,👦🏿,👦🏾,👦🏽,👦🏼,👦🏻,👦,🔐,🙎🏿‍♂️,🙎🏾‍♂️,🙎🏽‍♂️,🙎🏼‍♂️,🙎🏻‍♂️,🙎‍♂️,🙎🏿,🙎🏾,🙎🏽,🙎🏼,🙎🏻,🙎,🍊,↔️,🌅,🍗,🔵,🚘,🍧,🇮🇹,🐦,4️⃣,🇬🇧,🌛,👓,🐐,🌃,👵🏿,👵🏾,👵🏽,👵🏼,👵🏻,👵,⚫️,🌑,👬,⚪️,🛃,🐠,🏠,🔃,🌜,📍,🌕,👟,🍋,🍼,🎨,✉️,🍝,↘️,5️⃣,🎐,🍥,↗️,🌲,🆙,⬆️,🎭,👃🏿,👃🏾,👃🏽,👃🏼,👃🏻,👃,🐽,🐟,👳🏿‍♀️,👳🏾‍♀️,👳🏽‍♀️,👳🏼‍♀️,👳🏻‍♀️,👳‍♀️,👳🏿,👳🏾,👳🏽,👳🏼,👳🏻,👳,🐨,👂🏿,👂🏾,👂🏽,👂🏼,👂🏻,👂,✳️,🔹,🚿,↙️,🐛,🍜,🎩,👰🏿,👰🏾,👰🏽,👰🏼,👰🏻,👰,⛽️,🏁,🐴,⌚️,🐵,🚼,🆕,🆓,🎇,🌽,🎾,⏰,🔋,❕,🐺,🗿,🐮,📣,👴🏿,👴🏾,👴🏽,👴🏼,👴🏻,👴,👗,🔗,🐔,🍳,🐋,↖️,🌳,🍱,📌,🔜,🔁,🐉,🐹,⛳️,🏄🏿‍♀️,🏄🏾‍♀️,🏄🏽‍♀️,🏄🏼‍♀️,🏄🏻‍♀️,🏄‍♀️,🏄🏿,🏄🏾,🏄🏽,🏄🏼,🏄🏻,🏄,🐭,🌒,🚙,🅰️,⁉️,🈹,🔌,🌓,♋️,🔱,🍞,👮🏿‍♀️,👮🏾‍♀️,👮🏽‍♀️,👮🏼‍♀️,👮🏻‍♀️,👮‍♀️,👮🏿,👮🏾,👮🏽,👮🏼,👮🏻,👮,🍵,🎣,🌔,🚲,👤,🍚,📻,🐤,⤵️,🌘,↕️,🇪🇸,🌗,🔘,0️⃣,🐑,👱🏿‍♀️,👱🏾‍♀️,👱🏽‍♀️,👱🏼‍♀️,👱🏻‍♀️,👱‍♀️,👱🏿,👱🏾,👱🏽,👱🏼,👱🏻,👱,🌖,🔒,🍏,👺,➰,🚩,🔄,🐎,🍤,🌄,🌋,🐓,📥,💒,🍣,〰️,🍨,⏪,🍅,🐇,✴️,🔺,🔆,➕,👲🏿,👲🏾,👲🏽,👲🏼,👲🏻,👲,🏪,👥,🐞,🔻,🇩🇪,⤴️,📛,🛀🏿,🛀🏾,🛀🏽,🛀🏼,🛀🏻,🛀,⛔️,🐊,🌰,🐕,🐈,🔨,🍖,🐚,❇️,⛵️,6️⃣,🅱️,Ⓜ️,🐩,♒️,🍲,👖,🍯,🎹,🔓,✒️,🗽,💲,🏂,💮,👔,💠,♈️,🚺,🐜,♏️,🌇,⏳,🅾️,🐲,7️⃣,🐌,📀,👕,🎲,➖,🎎,♐️,🎱,🚌,🍮,🎌,〽️,🐫,🍛,🚂,🏥,🇯🇵,🔷,🎋,🔔,♌️,♊️,🍐,🔶,♉️,🌐,🚪,🕕,🚔,📩,🌂,🎷,⛪️,🚴🏿‍♀️,🚴🏾‍♀️,🚴🏽‍♀️,🚴🏼‍♀️,🚴🏻‍♀️,🚴‍♀️,🚴🏿,🚴🏾,🚴🏽,🚴🏼,🚴🏻,🚴,♓️,🍡,♑️,🏢,🚣🏿‍♀️,🚣🏾‍♀️,🚣🏽‍♀️,🚣🏼‍♀️,🚣🏻‍♀️,🚣‍♀️,🚣🏿,🚣🏾,🚣🏽,🚣🏼,🚣🏻,🚣,👒,👞,🏩,🗻,🐪,👜,⌛️,❎,🎺,🏫,🐄,🌆,👷🏿‍♀️,👷🏾‍♀️,👷🏽‍♀️,👷🏼‍♀️,👷🏻‍♀️,👷‍♀️,👷🏿,👷🏾,👷🏽,👷🏼,👷🏻,👷,🚽,🐖,❔,🔰,🎻,🔛,💳,🆔,㊙️,🎡,🎳,♎️,♍️,💈,👛,🎢,🐀,📅,🏉,🐏,🔼,🔲,📴,🗼,㊗️,👘,🇷🇺,🚢,🔎,🔍,🚒,🕦,🚓,🃏,🌉,📦,🚖,📆,🏇,🐅,8️⃣,👢,🚑,9️⃣,🔳,🐗,🎒,➿,💷,ℹ,🐂,🍙,🆚,🔚,🅿️,👡,⛺️,💺,🚕,◾️,💼,📰,🎪,🔯,🚹,🏰,🔦,🌁,⏫,🎍,🎫,🚁,💽,🚍,🍈,▫️,🏤,🔟,📓,🔕,🍢,🎏,🎠,🐡,📈,🍠,🎿,🕛,📶,🚧,#️⃣,◼️,📡,💶,👚,📒,🐆,🔅,🕒,🏬,🚚,🍶,🚃,🚤,🇰🇷,📼,🕐,⏬,🐃,🔽,💴,🔇,🎽,⬜️,♿️,🕑,📎,🏧,🎦,🔭,🎑,📘,◻️,📮,📧,🐁,🚄,🉐,🔩,🆖,🏨,🚾,🏮,🔂,📬,📉,📗,🚜,⛲️,🚇,📋,📵,🕓,🚭,⬛️,🎰,🕔,🛁,📜,🚉,🍘,🏦,🔧,🈯️,🚛,📄,⛎,📊,🚷,🇨🇳,📳,🕙,🕘,🚅,🚐,🚊,🕗,🈳,🚥,🚵🏿‍♀️,🚵🏾‍♀️,🚵🏽‍♀️,🚵🏼‍♀️,🚵🏻‍♀️,🚵‍♀️,🚵🏿,🚵🏾,🚵🏽,🚵🏼,🚵🏻,🚵,🔬,🏯,🔖,📑,👝,🆎,📃,🎴,🕚,📠,🕖,◽️,💱,🔉,💹,🆑,💾,🏣,🔈,🗾,🈺,🀄️,📨,📙,🚻,🈚️,🈶,📐,🚋,🈸,🚎,🈷️,🔢,📔,🈲,🈵,📯,🏭,🚸,🚆,📏,📟,🉑,🈴,🔏,🕜,🈂️,📤,🔀,📫,🚈,🕤,🚏,📂,📁,🚰,📇,🕝,🚝,🕧,🕥,🔤,📪,🕟,🚞,🚯,🕞,➗,🕢,🕠,🔠,📭,🔣,🚡,🕣,🕡,🔡,🚠,🈁,🛂,🚱,🚟,🛄,🚳,🏳️‍🌈,🕵🏿‍♀️,🕵🏾‍♀️,🕵🏽‍♀️,🕵🏼‍♀️,🕵🏻‍♀️,🕵️‍♀️,🕵🏿,🕵🏾,🕵🏽,🕵🏼,🕵🏻,☹️,☠️,🤗,🤖,🤕,🤔,🤓,🤒,🤑,🤐,🙄,🙃,🙂,🙁,🕵,🤘🏿,🤘🏾,🤘🏽,🤘🏼,🤘🏻,🖖🏿,🖖🏾,🖖🏽,🖖🏼,🖖🏻,🖕🏿,🖕🏾,🖕🏽,🖕🏼,🖕🏻,🖐🏿,🖐🏾,🖐🏽,🖐🏼,🖐🏻,✍🏿,✍🏾,✍🏽,✍🏼,✍🏻,🤘,✍️,🖖,🖕,🖐,🕶,👁‍🗨,👁,🏋🏿‍♀️,🏋🏾‍♀️,🏋🏽‍♀️,🏋🏼‍♀️,🏋🏻‍♀️,⛹🏿‍♀️,⛹🏾‍♀️,⛹🏽‍♀️,⛹🏼‍♀️,⛹🏻‍♀️,🏌️‍♀️,🏋️‍♀️,⛹️‍♀️,🏋🏿,🏋🏾,🏋🏽,🏋🏼,🏋🏻,⛹🏿,⛹🏾,⛹🏽,⛹🏼,⛹🏻,🕴,🏌,🏋,*️⃣,❣️,✡️,✝️,⚜️,⚛️,☸️,☯️,☮️,☪️,☦️,☣️,☢️,🛐,🗯,🕎,🕉,⚱️,⚰️,⚙️,⚗️,⚖️,⚔️,⌨️,🛢,🛡,🛠,🛏,🛎,🛍,🛌,🛋,🗳,🗡,🗞,🗝,🗜,🗓,🗒,🗑,🗄,🗃,🗂,🖼,🖲,🖱,🖨,🖥,🖍,🖌,🖋,🖊,🖇,🕹,🕳,🕰,🕯,📿,📽,📸,🏺,🏷,🏴,🏳,🎞,🎛,🎚,🎙,🌡,🛳,🛰,🛬,🛫,🛩,🛥,🛤,🛣,🗺,🕍,🕌,🕋,🏟,🏞,🏝,🏜,🏛,🏚,🏙,🏘,🏗,🏖,🏕,🏔,🏎,🏍,🏹,🏸,🏵,🏓,🏒,🏑,🏐,🏏,🏅,🎟,🎗,🎖,🧀,🍿,🍾,🍽,🌶,🌯,🌮,🌭,☘️,☄️,☃️,☂️,🦄,🦃,🦂,🦁,🦀,🕸,🕷,🕊,🐿,🌬,🌫,🌪,🌩,🌨,🌧,🌦,🌥,🌤,🗣,⏺,⏹,⏸,⏯,⏮,⏭,⛱,⛓,⛏,⚒,⏲,⏱,⛴,⛰,⛩,⛹,⛸,⛷,⛈,⛑,🇿🇼,🇿🇲,🇿🇦,🇾🇹,🇾🇪,🇽🇰,🇼🇸,🇼🇫,🇻🇺,🇻🇳,🇻🇮,🇻🇬,🇻🇪,🇻🇨,🇻🇦,🇺🇿,🇺🇾,🇺🇬,🇺🇦,🇹🇿,🇹🇼,🇹🇻,🇹🇹,🇹🇷,🇹🇴,🇹🇳,🇹🇲,🇹🇱,🇹🇰,🇹🇯,🇹🇭,🇹🇬,🇹🇫,🇹🇩,🇹🇨,🇸🇿,🇸🇾,🇸🇽,🇸🇻,🇸🇹,🇸🇸,🇸🇷,🇸🇴,🇸🇳,🇸🇲,🇸🇱,🇸🇰,🇸🇮,🇸🇭,🇸🇬,🇸🇪,🇸🇩,🇸🇨,🇸🇧,🇸🇦,🇷🇼,🇷🇸,🇷🇴,🇷🇪,🇶🇦,🇵🇾,🇵🇼,🇵🇹,🇵🇸,🇵🇷,🇵🇳,🇵🇲,🇵🇱,🇵🇰,🇵🇭,🇵🇬,🇵🇫,🇵🇪,🇵🇦,🇴🇲,🇳🇿,🇳🇺,🇳🇷,🇳🇵,🇳🇴,🇳🇱,🇳🇮,🇳🇬,🇳🇫,🇳🇪,🇳🇨,🇳🇦,🇲🇿,🇲🇾,🇲🇽,🇲🇼,🇲🇻,🇲🇺,🇲🇹,🇲🇸,🇲🇷,🇲🇶,🇲🇵,🇲🇴,🇲🇳,🇲🇲,🇲🇱,🇲🇰,🇲🇭,🇲🇬,🇲🇪,🇲🇩,🇲🇨,🇲🇦,🇱🇾,🇱🇻,🇱🇺,🇱🇹,🇱🇸,🇱🇷,🇱🇰,🇱🇮,🇱🇨,🇱🇧,🇱🇦,🇰🇿,🇰🇾,🇰🇼,🇰🇵,🇰🇳,🇰🇲,🇰🇮,🇰🇭,🇰🇬,🇰🇪,🇯🇴,🇯🇲,🇯🇪,🇮🇸,🇮🇷,🇮🇶,🇮🇴,🇮🇳,🇮🇲,🇮🇱,🇮🇪,🇮🇩,🇮🇨,🇭🇺,🇭🇹,🇭🇷,🇭🇳,🇭🇰,🇬🇾,🇬🇼,🇬🇺,🇬🇹,🇬🇸,🇬🇷,🇬🇶,🇬🇵,🇬🇳,🇬🇲,🇬🇱,🇬🇮,🇬🇭,🇬🇬,🇬🇫,🇬🇪,🇬🇩,🇬🇦,🇫🇴,🇫🇲,🇫🇰,🇫🇯,🇫🇮,🇪🇺,🇪🇹,🇪🇷,🇪🇭,🇪🇬,🇪🇪,🇪🇨,🇩🇿,🇩🇴,🇩🇲,🇩🇰,🇩🇯,🇨🇿,🇨🇾,🇨🇽,🇨🇼,🇨🇻,🇨🇺,🇨🇷,🇨🇴,🇨🇲,🇨🇱,🇨🇰,🇨🇮,🇨🇭,🇨🇬,🇨🇫,🇨🇩,🇨🇨,🇨🇦,🇧🇿,🇧🇾,🇧🇼,🇧🇹,🇧🇸,🇧🇷,🇧🇶,🇧🇴,🇧🇳,🇧🇲,🇧🇱,🇧🇯,🇧🇮,🇧🇭,🇧🇬,🇧🇫,🇧🇪,🇧🇩,🇧🇧,🇧🇦,🇦🇿,🇦🇽,🇦🇼,🇦🇺,🇦🇹,🇦🇸,🇦🇷,🇦🇶,🇦🇴,🇦🇲,🇦🇱,🇦🇮,🇦🇬,🇦🇫,🇦🇪,🇦🇩'.split(',');
var regx_arr=[];
var noExtra = function(s){return s.replace(/\ufe0f|\u200d/gm, '');}
var toSurrogatePairs = function(r){for(var t="",n=0;n<r.length;n++)t+="\\u"+("000"+r[n].charCodeAt(0).toString(16)).substr(-4);return t}
var toCodePoint = function(t){for(var n=[],r=0,o=0,h=0;h<t.length;)r=t.charCodeAt(h++),o?(n.push((65536+(o-55296<<10)+(r-56320)).toString(16)),o=0):r>=55296&&56319>=r?o=r:n.push(r.toString(16));return n.join("-")}
for (var i=0;i<emojis.length;i++){regx_arr.push(toSurrogatePairs(emojis[i]));};
var re = new RegExp('(' + regx_arr.join('|') + ')', 'g');
var ml_var_regexp = /#{(\w+)\(?(\d)?\)?([+|-]*)(\d*)}/g
regx_arr = null;
emojis = null;
var countries = {
    "+7": ["Kazakhstan (Қазақстан)", "kz", "7", '(812) 345-67-89', [3, 3, 2, 2], true],
    "7": ["Russia (Россия)", "ru", "7", "(912) 345-67-89", [3, 3, 2, 2], true, 8],
    "380": ["Ukraine (Україна)", "ua", "380", '98 123 4567', [2, 3, 4], true, 0],
    "93": ["Afghanistan (‫افغانستان‬‎)", "af", "93", undefined, undefined, false],
    "355": ["Albania (Shqipëri)", "al", "355", undefined, undefined, false],
    "213": ["Algeria (‫الجزائر‬‎)", "dz", "213", undefined, undefined, false],
    "1684": ["American Samoa", "as", "1684", undefined, undefined, false],
    "376": ["Andorra", "ad", "376", undefined, undefined, false],
    "244": ["Angola", "ao", "244", undefined, undefined, false],
    "1264": ["Anguilla", "ai", "1264", undefined, undefined, false],
    "1268": ["Antigua and Barbuda", "ag", "1268", undefined, undefined, false],
    "54": ["Argentina", "ar", "54", undefined, undefined, false],
    "374": ["Armenia (Հայաստան)", "am", "374", undefined, undefined, true],
    "297": ["Aruba", "aw", "297", undefined, undefined, false],
    "61": ["Australia", "au", "61", undefined, undefined, false],
    "43": ["Austria (Österreich)", "at", "43", undefined, undefined, false],
    "994": ["Azerbaijan (Azərbaycan)", "az", "994", undefined, undefined, true],
    "1242": ["Bahamas", "bs", "1242",undefined, undefined, false],
    "973": ["Bahrain (‫البحرين‬‎)", "bh", "973", undefined, undefined, false],
    "880": ["Bangladesh (বাংলাদেশ)", "bd", "880",undefined, undefined, false],
    "1246": ["Barbados", "bb", "1246",undefined, undefined, false],
    "375": ["Belarus (Беларусь)", "by", "375",undefined, undefined, true],
    "32": ["Belgium (België)", "be", "32",undefined, undefined, false],
    "501": ["Belize", "bz", "501",undefined, undefined, false],
    "229": ["Benin (Bénin)", "bj", "229",undefined, undefined, false],
    "1441": ["Bermuda", "bm", "1441",undefined, undefined, false],
    "975": ["Bhutan (འབྲུག)", "bt", "975",undefined, undefined, false],
    "591": ["Bolivia", "bo", "591",undefined, undefined, false],
    "387": ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387",undefined, undefined, false],
    "267": ["Botswana", "bw", "267",undefined, undefined, false],
    "55": ["Brazil (Brasil)", "br", "55",undefined, undefined, false],
    "246": ["British Indian Ocean Territory", "io", "246",undefined, undefined, false],
    "1284": ["British Virgin Islands", "vg", "1284",undefined, undefined, false],
    "673": ["Brunei", "bn", "673",undefined, undefined, false],
    "359": ["Bulgaria (България)", "bg", "359",undefined, undefined, true],
    "226": ["Burkina Faso", "bf", "226",undefined, undefined, false],
    "257": ["Burundi (Uburundi)", "bi", "257",undefined, undefined, false],
    "855": ["Cambodia (កម្ពុជា)", "kh", "855",undefined, undefined, false],
    "237": ["Cameroon (Cameroun)", "cm", "237",undefined, undefined, false],
    "238": ["Cape Verde (Kabu Verdi)", "cv", "238",undefined, undefined, false],
    "599": ["Caribbean Netherlands", "bq", "599",undefined, undefined, false],
    "1345": ["Cayman Islands", "ky", "1345",undefined, undefined, false],
    "236": ["Central African Republic (République centrafricaine)", "cf", "236",undefined, undefined, false],
    "235": ["Chad (Tchad)", "td", "235",undefined, undefined, false],
    "56": ["Chile", "cl", "56",undefined, undefined, false],
    "86": ["China (中国)", "cn", "86",undefined, undefined, false],
    "57": ["Colombia", "co", "57",undefined, undefined, false],
    "269": ["Comoros (‫جزر القمر‬‎)", "km", "269",undefined, undefined, false],
    "243": ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243",undefined, undefined, false],
    "242": ["Congo (Republic) (Congo-Brazzaville)", "cg", "242",undefined, undefined, false],
    "682": ["Cook Islands", "ck", "682",undefined, undefined, false],
    "506": ["Costa Rica", "cr", "506",undefined, undefined, false],
    "225": ["Côte d’Ivoire", "ci", "225",undefined, undefined, false],
    "385": ["Croatia (Hrvatska)", "hr", "385",undefined, undefined, false],
    "53": ["Cuba", "cu", "53",undefined, undefined, false],
    "357": ["Cyprus (Κύπρος)", "cy", "357",undefined, undefined, true],
    "420": ["Czech Republic (Česká republika)", "cz", "420",undefined, undefined, true],
    "45": ["Denmark (Danmark)", "dk", "45",undefined, undefined, false],
    "253": ["Djibouti", "dj", "253",undefined, undefined, false],
    "1767": ["Dominica", "dm", "1767",undefined, undefined, false],
    "593": ["Ecuador", "ec", "593",undefined, undefined, false],
    "20": ["Egypt (‫مصر‬‎)", "eg", "20",undefined, undefined, true],
    "503": ["El Salvador", "sv", "503",undefined, undefined, false],
    "240": ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240",undefined, undefined, false],
    "291": ["Eritrea", "er", "291",undefined, undefined, false],
    "372": ["Estonia (Eesti)", "ee", "372",undefined, undefined, true],
    "251": ["Ethiopia", "et", "251",undefined, undefined, false],
    "500": ["Falkland Islands (Islas Malvinas)", "fk", "500",undefined, undefined, false],
    "298": ["Faroe Islands (Føroyar)", "fo", "298",undefined, undefined, false],
    "679": ["Fiji", "fj", "679",undefined, undefined, false],
    "358": ["Finland (Suomi)", "fi", "358",undefined, undefined, false],
    "33": ["France", "fr", "33",undefined, undefined, false],
    "594": ["French Guiana (Guyane française)", "gf", "594",undefined, undefined, false],
    "689": ["French Polynesia (Polynésie française)", "pf", "689",undefined, undefined, false],
    "241": ["Gabon", "ga", "241",undefined, undefined, false],
    "220": ["Gambia", "gm", "220",undefined, undefined, false],
    "995": ["Georgia (საქართველო)", "ge", "995",undefined, undefined, true],
    "49": ["Germany (Deutschland)", "de", "49",undefined, undefined, false],
    "233": ["Ghana (Gaana)", "gh", "233",undefined, undefined, false],
    "350": ["Gibraltar", "gi", "350",undefined, undefined, false],
    "30": ["Greece (Ελλάδα)", "gr", "30",undefined, undefined, false],
    "299": ["Greenland (Kalaallit Nunaat)", "gl", "299",undefined, undefined, false],
    "1473": ["Grenada", "gd", "1473",undefined, undefined, false],
    "590": ["Guadeloupe", "gp", "590",undefined, undefined, false],
    "1671": ["Guam", "gu", "1671",undefined, undefined, false],
    "502": ["Guatemala", "gt", "502",undefined, undefined, false],
    "224": ["Guinea (Guinée)", "gn", "224",undefined, undefined, false],
    "245": ["Guinea-Bissau (Guiné Bissau)", "gw", "245",undefined, undefined, false],
    "592": ["Guyana", "gy", "592",undefined, undefined, false],
    "509": ["Haiti", "ht", "509",undefined, undefined, false],
    "504": ["Honduras", "hn", "504",undefined, undefined, true],
    "852": ["Hong Kong (香港)", "hk", "852",undefined, undefined, false],
    "36": ["Hungary (Magyarország)", "hu", "36",undefined, undefined, true],
    "354": ["Iceland (Ísland)", "is", "354",undefined, undefined, false],
    "91": ["India (भारत)", "in", "91",undefined, undefined, false],
    "62": ["Indonesia", "id", "62",undefined, undefined, false],
    "98": ["Iran (‫ایران‬‎)", "ir", "98",undefined, undefined, true],
    "964": ["Iraq (‫العراق‬‎)", "iq", "964",undefined, undefined, true],
    "353": ["Ireland", "ie", "353",undefined, undefined, false],
    "972": ["Israel (‫ישראל‬‎)", "il", "972",undefined, undefined, true],
    "39": ["Italy (Italia)", "it", "39",undefined, undefined, false],
    "1876": ["Jamaica", "jm", "1876",undefined, undefined, false],
    "81": ["Japan (日本)", "jp", "81",undefined, undefined, false],
    "962": ["Jordan (‫الأردن‬‎)", "jo", "962",undefined, undefined, false],
    "254": ["Kenya", "ke", "254",undefined, undefined, false],
    "686": ["Kiribati", "ki", "686",undefined, undefined, false],
    "965": ["Kuwait (‫الكويت‬‎)", "kw", "965",undefined, undefined, false],
    "996": ["Kyrgyzstan (Кыргызстан)", "kg", "996",undefined, undefined, true],
    "856": ["Laos (ລາວ)", "la", "856",undefined, undefined, false],
    "371": ["Latvia (Latvija)", "lv", "371",undefined, undefined, true],
    "961": ["Lebanon (‫لبنان‬‎)", "lb", "961",undefined, undefined, false],
    "266": ["Lesotho", "ls", "266",undefined, undefined, false],
    "231": ["Liberia", "lr", "231",undefined, undefined, false],
    "218": ["Libya (‫ليبيا‬‎)", "ly", "218",undefined, undefined, true],
    "423": ["Liechtenstein", "li", "423",undefined, undefined, false],
    "370": ["Lithuania (Lietuva)", "lt", "370",undefined, undefined, false],
    "352": ["Luxembourg", "lu", "352",undefined, undefined, false],
    "853": ["Macau (澳門)", "mo", "853",undefined, undefined, false],
    "389": ["Macedonia (FYROM) (Македонија)", "mk", "389"],
    "261": ["Madagascar (Madagasikara)", "mg", "261",undefined, undefined, false],
    "265": ["Malawi", "mw", "265",undefined, undefined, false],
    "60": ["Malaysia", "my", "60",undefined, undefined, false],
    "960": ["Maldives", "mv", "960",undefined, undefined, false],
    "223": ["Mali", "ml", "223",undefined, undefined, false],
    "356": ["Malta", "mt", "356",undefined, undefined, false],
    "692": ["Marshall Islands", "mh", "692",undefined, undefined, false],
    "596": ["Martinique", "mq", "596",undefined, undefined, false],
    "222": ["Mauritania (‫موريتانيا‬‎)", "mr", "222",undefined, undefined, false],
    "230": ["Mauritius (Moris)", "mu", "230",undefined, undefined, false],
    "52": ["Mexico (México)", "mx", "52",undefined, undefined, false],
    "691": ["Micronesia", "fm", "691",undefined, undefined, false],
    "373": ["Moldova (Republica Moldova)", "md", "373",undefined, undefined, true],
    "377": ["Monaco", "mc", "377",undefined, undefined, false],
    "976": ["Mongolia (Монгол)", "mn", "976",undefined, undefined, true],
    "382": ["Montenegro (Crna Gora)", "me", "382",undefined, undefined, false],
    "1664": ["Montserrat", "ms", "1664",undefined, undefined, false],
    "212": ["Morocco (‫المغرب‬‎)", "ma", "212",undefined, undefined, false],
    "258": ["Mozambique (Moçambique)", "mz", "258",undefined, undefined, false],
    "95": ["Myanmar (Burma) (မြန်မာ)", "mm", "95",undefined, undefined, false],
    "264": ["Namibia (Namibië)", "na", "264",undefined, undefined, false],
    "674": ["Nauru", "nr", "674",undefined, undefined, false],
    "977": ["Nepal (नेपाल)", "np", "977",undefined, undefined, false],
    "31": ["Netherlands (Nederland)", "nl", "31",undefined, undefined, false],
    "687": ["New Caledonia (Nouvelle-Calédonie)", "nc", "687",undefined, undefined, false],
    "64": ["New Zealand", "nz", "64",undefined, undefined, false],
    "505": ["Nicaragua", "ni", "505",undefined, undefined, false],
    "227": ["Niger (Nijar)", "ne", "227",undefined, undefined, false],
    "234": ["Nigeria", "ng", "234",undefined, undefined, false],
    "683": ["Niue", "nu", "683",undefined, undefined, false],
    "672": ["Norfolk Island", "nf", "672",undefined, undefined, false],
    "850": ["North Korea (조선 민주주의 인민 공화국)", "kp", "850",undefined, undefined, false],
    "1670": ["Northern Mariana Islands", "mp", "1670",undefined, undefined, false],
    "47": ["Norway (Norge)", "no", "47",undefined, undefined, false],
    "968": ["Oman (‫عُمان‬‎)", "om", "968",undefined, undefined, false],
    "92": ["Pakistan (‫پاکستان‬‎)", "pk", "92",undefined, undefined, true],
    "680": ["Palau", "pw", "680",undefined, undefined, false],
    "970": ["Palestine (‫فلسطين‬‎)", "ps", "970",undefined, undefined, false],
    "507": ["Panama (Panamá)", "pa", "507",undefined, undefined, false],
    "675": ["Papua New Guinea", "pg", "675",undefined, undefined, false],
    "595": ["Paraguay", "py", "595",undefined, undefined, false],
    "51": ["Peru (Perú)", "pe", "51",undefined, undefined, false],
    "63": ["Philippines", "ph", "63",undefined, undefined, false],
    "48": ["Poland (Polska)", "pl", "48",undefined, undefined, true],
    "351": ["Portugal", "pt", "351",undefined, undefined, false],
    "974": ["Qatar (‫قطر‬‎)", "qa", "974",undefined, undefined, false],
    "262": ["Réunion (La Réunion)", "re", "262",undefined, undefined, false],
    "40": ["Romania (România)", "ro", "40",undefined, undefined, true],
    "250": ["Rwanda", "rw", "250",undefined, undefined, false],
    "290": ["Saint Helena", "sh", "290",undefined, undefined, false],
    "1869": ["Saint Kitts and Nevis", "kn", "1869",undefined, undefined, false],
    "1758": ["Saint Lucia", "lc", "1758",undefined, undefined, false],
    "508": ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508",undefined, undefined, false],
    "1784": ["Saint Vincent and the Grenadines", "vc", "1784",undefined, undefined, false],
    "685": ["Samoa", "ws", "685",undefined, undefined, false],
    "378": ["San Marino", "sm", "378",undefined, undefined, false],
    "239": ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239",undefined, undefined, false],
    "966": ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966",undefined, undefined, true],
    "221": ["Senegal (Sénégal)", "sn", "221",undefined, undefined, false],
    "381": ["Serbia (Србија)", "rs", "381",undefined, undefined, true],
    "248": ["Seychelles", "sc", "248",undefined, undefined, false],
    "232": ["Sierra Leone", "sl", "232",undefined, undefined, false],
    "65": ["Singapore", "sg", "65",undefined, undefined, false],
    "1721": ["Sint Maarten", "sx", "1721",undefined, undefined, false],
    "421": ["Slovakia (Slovensko)", "sk", "421",undefined, undefined, true],
    "386": ["Slovenia (Slovenija)", "si", "386",undefined, undefined, true],
    "677": ["Solomon Islands", "sb", "677",undefined, undefined, false],
    "252": ["Somalia (Soomaaliya)", "so", "252",undefined, undefined, false],
    "27": ["South Africa", "za", "27",undefined, undefined, false],
    "82": ["South Korea (대한민국)", "kr", "82",undefined, undefined, false],
    "211": ["South Sudan (‫جنوب السودان‬‎)", "ss", "211",undefined, undefined, false],
    "34": ["Spain (España)", "es", "34",undefined, undefined, false],
    "94": ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94",undefined, undefined, false],
    "249": ["Sudan (‫السودان‬‎)", "sd", "249",undefined, undefined, true],
    "597": ["Suriname", "sr", "597",undefined, undefined, false],
    "268": ["Swaziland", "sz", "268",undefined, undefined, false],
    "46": ["Sweden (Sverige)", "se", "46",undefined, undefined, false],
    "41": ["Switzerland (Schweiz)", "ch", "41",undefined, undefined, false],
    "963": ["Syria (‫سوريا‬‎)", "sy", "963",undefined, undefined, true],
    "886": ["Taiwan (台灣)", "tw", "886",undefined, undefined, false],
    "992": ["Tajikistan", "tj", "992",undefined, undefined, false],
    "255": ["Tanzania", "tz", "255",undefined, undefined, false],
    "66": ["Thailand (ไทย)", "th", "66",undefined, undefined, false],
    "670": ["Timor-Leste", "tl", "670",undefined, undefined, false],
    "228": ["Togo", "tg", "228",undefined, undefined, false],
    "690": ["Tokelau", "tk", "690",undefined, undefined, false],
    "676": ["Tonga", "to", "676",undefined, undefined, false],
    "1868": ["Trinidad and Tobago", "tt", "1868",undefined, undefined, false],
    "216": ["Tunisia (‫تونس‬‎)", "tn", "216",undefined, undefined, false],
    "90": ["Turkey (Türkiye)", "tr", "90",undefined, undefined, false],
    "993": ["Turkmenistan", "tm", "993",undefined, undefined, true],
    "1649": ["Turks and Caicos Islands", "tc", "1649",undefined, undefined, false],
    "688": ["Tuvalu", "tv", "688",undefined, undefined, false],
    "1340": ["U.S. Virgin Islands", "vi", "1340",undefined, undefined, false],
    "256": ["Uganda", "ug", "256",undefined, undefined, false],
    "971": ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971",undefined, undefined, true],
    "44": ["United Kingdom", "gb", "44",undefined, undefined, true],
    "1": ["United States", "us", "1",undefined, undefined, true],
    "598": ["Uruguay", "uy", "598",undefined, undefined, false],
    "998": ["Uzbekistan (Oʻzbekiston)", "uz", "998",undefined, undefined, true],
    "678": ["Vanuatu", "vu", "678",undefined, undefined, false],
    "58": ["Venezuela", "ve", "58",undefined, undefined, true],
    "84": ["Vietnam (Việt Nam)", "vn", "84",undefined, undefined, true],
    "681": ["Wallis and Futuna", "wf", "681",undefined, undefined, false],
    "967": ["Yemen (‫اليمن‬‎)", "ye", "967",undefined, undefined, false],
    "260": ["Zambia", "zm", "260",undefined, undefined, false],
    "263": ["Zimbabwe", "zw", "263",undefined, undefined, false]
}
var letter_code = [
    ['a', '🇦'],
    ['b', '🇧'],
    ['c', '🇨'],
    ['d', '🇩'],
    ['e', '🇪'],
    ['f', '🇫'],
    ['g', '🇬'],
    ['h', '🇭'],
    ['i', '🇮'],
    ['j', '🇯'],
    ['k', '🇰'],
    ['l', '🇱'],
    ['m', '🇲'],
    ['n', '🇳'],
    ['o', '🇴'],
    ['p', '🇵'],
    ['q', '🇶'],
    ['r', '🇷'],
    ['s', '🇸'],
    ['t', '🇹'],
    ['u', '🇺'],
    ['v', '🇻'],
    ['w', '🇼'],
    ['x', '🇽'],
    ['y', '🇾'],
    ['z', '🇿']
];
var prev_pat_num = 1
var html_to_append = ""
var mnths = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']

function get_flag(country_code) {
    letter_code.forEach(function (item) {
        let rexExp = new RegExp(item[0], "g")
        country_code = country_code.replace(rexExp, item[1])
    })
    return country_code
}

function resize_input() {
    $('.input-phone-wrapper .form-control.phone_input').css("padding-left", $('.select-mask__trigger').width() + 10)
}

function get_country_arr(str) {
    let item = countries[str]
    if (item == undefined) {
        if (str.length <= 1) {
            return undefined
        }
        return get_country_arr(str.slice(0, str.length - 1))
    } else {
        return item
    }
}

function phone_enter(flag, ident, placeholder) {
    $('.select_mask_country').html(flag)
    $('.select_mask_code').text(ident)
    $('.phone_input').attr("placeholder", placeholder)
    resize_input()
}

function not_valid(t) {
    let select_mask = $('.select-mask')
    let phone_input = $('.phone_input')
    t.val(t.val().replace(/[^0-9 || +]/g, ""))
    select_mask.css("transition", "0.1s");
    select_mask.css("background", "#fbcbcb");
    phone_input.css("transition", "0.1s");
    phone_input.css("background", "#fbcbcb");
    setTimeout(function () {
        select_mask.css("background", "white")
        phone_input.css("background", "white")
    }, 100)
}
function emojiParser (txt, path, alt, eclass, ext){
    return txt.replace(re, function (a, b) {
        var r = '<img draggable="false"';
        r += (eclass)?' class="'+eclass+'"':'';
        r += (alt)?' alt="'+b+'"':'';
        r += ' src="'+path+toCodePoint(noExtra(b))+'.'+ext+'">';
        return r;
    });
}
function init_phone_input(){
    (function($) {
        $.Emoji = function(element, options) {
            var plugin = this,
                $element = $(element),
                element = element,
                defaults = {
                    path:'https://salebot.pro/images/emoji_picker/apple40/',
                    class: 'emoji',
                    alt: true,
                    ext: 'png'
                }
            plugin.settings = {};
            plugin.init = function() {
                plugin.settings = $.extend({}, defaults, options);
                $element.html(emojiParser($element.html(), plugin.settings.path, plugin.settings.alt, plugin.settings.class, plugin.settings.ext));
            }
            plugin.init();
        }

        $.fn.Emoji = function(options) {
            return this.each(function() {
                if (undefined == $(this).data('Emoji')) {
                    var plugin = new $.Emoji(this, options);
                    $(this).data('Emoji', plugin);
                }
            });
        }
    })($);
    $(".select_mask_country").html(get_flag($(".phone_select_country").text()))
    let cc = Object.values(countries).filter(function(i){
        let trigger = $(".phone_select_type").text()
        if(trigger == "popular"){
            return i[5]
        }else {
            return trigger == "simple";
        }
    })
    if(cc.length == 0){
        cc = []
        JSON.parse($(".phone_select_type").text()).forEach(function(i){
            cc.push(countries[i])
        })
    }
    cc.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }).forEach(i => {
        html_to_append += '<div class="select-mask__item"><div class="select_mask_description">' + get_flag(i[1]) + i[0] + ('+' + i[2]) + '</div><div class="hidden country_flag">' + get_flag(i[1]) + '</div><div class="hidden ident">' + '+' + i[2] + '</div><div class="hidden placeholder">' + (i[3] != undefined ? i[3] : "09812345678") + '</div></div>'
    })
    $(".select-mask__select").append(html_to_append)
    $('.select-mask').Emoji()
    $('.phone_input').on("input", function (e) {
        if ($('.phone_input').val().match(/[^0-9 || +]/g) != null) {
            not_valid($('.phone_input'))
        }
        if ($('.phone_input').val().split("+").length > 1) {
            let item = get_country_arr($('.phone_input').val().replace(/ /g, "").split("+")[1])
            if (item != undefined) {
                let placeholder = item[3] != undefined ? item[3] : "09812345678"
                $('.phone_input').val($('.phone_input').val().split("+" + item[2])[1])
                phone_enter(emojiParser(get_flag(item[1]), 'https://salebot.pro/images/emoji_picker/apple40/', true, "emoji", "png"), "+" + item[2], placeholder)
            }
        }
        let item = countries[$('.select_mask_code').text().split("+")[1]]
        let total_count = 0
        if(item[6] != undefined &&
            $('.phone_input').val().length > 1 &&
            $('.phone_input').val().startsWith(item[6])){
            $('.phone_input').val($('.phone_input').val().substr(1))
        }
        let l = $('.phone_input').val().replace(/ /g, "").length
        if (item[4] != undefined) {
            item[4].forEach(function (i) {
                total_count += i
            })
            if (l <= total_count) {
                let pat = item[4]
                let pat_num;
                if (l < pat[0]) {
                    pat_num = 1
                } else if (l < (pat[0] + pat[1])) {
                    pat_num = 2
                } else if (l < (pat[0] + pat[1] + pat[2])) {
                    pat_num = 3
                } else if (l < (pat[0] + pat[1] + pat[2] + pat[3])) {
                    pat_num = 4
                } else if (l < (pat[0] + pat[1] + pat[2] + pat[3] + pat[4])) {
                    pat_num = 5
                }
                if (prev_pat_num < pat_num) {
                    $('.phone_input').val($('.phone_input').val() + " ")
                }
                prev_pat_num = pat_num
            } else {
                total_count += $('.phone_input').val().split(" ").length - 1
                $('.phone_input').val($('.phone_input').val().slice(0,total_count))
                not_valid($('.phone_input'))
            }
        } else {
            total_count = 13 - $(".select_mask_code").text().length
            if (l > total_count) {
                total_count += $('.phone_input').val().split(" ").length - 1
                $('.phone_input').val($('.phone_input').val().slice(0,total_count))
                not_valid($('.phone_input'))
            }
        }
    })
    $(".select-mask__trigger").click(function () {
        console.log("qweqwewq")
        $('.select-mask__select').show()
    })
    $(".select-mask__item").click(function () {
        let flag = $(this).find('.country_flag').html()
        let ident = $(this).find('.ident').text()
        let placeholder = $(this).find('.placeholder').text()
        phone_enter(flag, ident, placeholder)
    })
    $(document).mouseup(function (e) {
        $('.select-mask__select').hide()
    })
    resize_input()
}
var zeroAdder = function (num) {
    //добавляет нули для названия нового файла
    let trigger = num.toLocaleString()
    if (trigger.length == 1) {
        return "0" + trigger
    } else {
        return trigger
    }
}
export function initPhoneInput () {
    if($(".phone_phone_input_container").length > 0){
        init_phone_input()
    }
}
var if_regexp = /#{if\((\w)([<|>|=])(\d+),(.+?)(?:,(.+?))?\)}/g
function space_destroyer(all){
    let res = all.replace(/\s/g, "")
    if(res.startsWith("#{if")){
        return res.replace(if_regexp, parser)
    }else{
        return res.replace(ml_var_regexp, time_return)
    }
}
function parser(all, arg_type, arg_simb, arg, if_str, else_str){
    let arg_type_value;
    arg = parseInt(arg)
    switch(arg_type){
        case "h":
            arg_type_value = new Date().getHours()
            break
        case "d":
            arg_type_value = new Date().getDate()
            break
        default:
            return all
    }
    if((arg_simb == ">" && arg_type_value > arg) || (arg_simb == "<" && arg_type_value < arg) || (arg_simb == "=" && arg_type_value == arg)){
        return `#{${if_str}}`.replace(/#{.+?}/g, space_destroyer)
    }else if(else_str != undefined){
        return `#{${else_str}}`.replace(/#{.+?}/g, space_destroyer)
    }
    return ""
}
function time_return(all, type, argument, simb, value){
    let now = new Date()
    if (type == "current_date") {
        if(simb != "" && simb == "+"){
            now = new Date(+now + parseInt(value * 3600 * 24 * 1000))
        }else if(simb != "" && simb == "-"){
            now = new Date(+now - parseInt(value * 3600 * 24 * 1000))
        }
        return `${zeroAdder(now.getDate())}.${zeroAdder(now.getMonth()+1)}.${now.getFullYear()}`
    } else if(type == "current_date_ru") {
        if(simb != "" && simb == "+"){
            now = new Date(+now + parseInt(value * 3600 * 24 * 1000))
        }else if(simb != "" && simb == "-"){
            now = new Date(+now - parseInt(value * 3600 * 24 * 1000))
        }
        return `${zeroAdder(now.getDate())} ${mnths[now.getMonth()]}`
    } else if(type == "current_time") {
        if(simb != "" && simb == "+"){
            now = new Date(+now + parseInt(value * 60 * 1000))
        }else if(simb != "" && simb == "-"){
            now = new Date(+now - parseInt(value * 60 * 1000))
        }
        return `${zeroAdder(now.getHours())}:${zeroAdder(now.getMinutes())}`
    } else if(type.startsWith("weekday_date")) {
        let day_index = parseInt(argument) != 7 ? parseInt(argument) : 0
        let now = +new Date()
        for(let i=0; i<=7;i++){
            let date = new Date(now)
            if(date.getDay() == day_index){
                return `${zeroAdder(date.getDate())} ${mnths[date.getMonth()]}`
            }else{
                now = now + (3600 * 24 * 1000)
            }
        }
    }
    return all
}

export function timeFormat () {
    let elms_arr = [$('.description_new'), $('.subtitle'), $('.name-bot'), $('.description'), $(".title"), $(".ml_title")]
    elms_arr.forEach(function(i){
        i.html(i.text().replace(/#{.+?}/g, space_destroyer))
    })
    document.title = document.title.replace(/#{.+?}/g, space_destroyer)
}
