
(() => {
	let TypingSpeed = 100;
//	let NxtMsgDelay = 1000;
	let CharacterPos = 0;
	let MsgBuffer = "";
	let MsgIndex = 0;
	let delay;
	let id = document.getElementById("typing-text5");
	let messages =
[
	"Mail :)"
]

	const StartTyping = () => {
		if (CharacterPos != messages[MsgIndex].length) {
			MsgBuffer += messages[MsgIndex].charAt(CharacterPos);
			id.value = MsgBuffer+(CharacterPos != messages[MsgIndex].length-1 ? "_":"");
			delay = TypingSpeed;
			id.scrollTop = id.scrollHeight; 
		} else {
			delay = NxtMsgDelay;
			MsgBuffer   = "";
			CharacterPos = -1;
			if (MsgIndex!= messages.length-1){
				MsgIndex++;
			}else {
				MsgIndex = 0;
			}
		}
		CharacterPos++;
		setTimeout(StartTyping, delay);
	}
	StartTyping();
})();
