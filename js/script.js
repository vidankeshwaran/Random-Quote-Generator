
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "சமதர்ம சமுதாயம் மலர வன்முறை தேவையில்லை! அனைவருக்கும் கல்வியும் உழைப்புக்கான வாய்ப்பும் தந்தால் போதுமானது",
	source: "தமிழக முன்னாள் முதல்வர் காமராஜர் "
	},
	{
	quote: "சிந்தனைதான் அறிவை வளர்க்கும்; அறிவுதான் மனித வாழ்வை உயர்த்தும்.",
	source: "தந்தை பெரியார்"
	},
	{
	quote: "நீ என்னை உன் அடிமை என்று நினைக்கும் போது.. உன்னை அழிக்கும் ஆயுதமாக நான் மாறிவிடுவது என் கடமை.",
	source: "டாக்டர் அம்பேத்கர்"
	},
	{
	quote: "போட்டியும் பொறாமையும் பொய் சிரிப்பும் நிறைந்த இந்த உலகத்தில் நமது பாதையில் நாம் நேராக நடந்து செல்ல நமக்கு துணையாக இருக்க கூடியது கல்வி மட்டுமே..",
	source: "அறிஞர் அண்ணா"
	},
	{
	quote: "கொண்டாடப்பட வேண்டிய இரண்டு விஷயங்கள், முதலாவது உங்கள் முதுமை, இரண்டாவது உங்கள் முதிர்ச்சி.",
	source: "தந்தை பெரியார்"
	},
	{
	quote: "மலர்களின் வாசம் காற்று வீசும் திசையில் மட்டுமே போகும்.ஆனால் ஒருவர் செய்யும் தர்மமோ நாலாதிசையும் செல்லும்.",
	source: "சாணக்கியர்"
	},
	{
	quote: "எப்போதும் என் அடையாளத்தை யாருக்காகவும் விட்டு கொடுக்க மாட்டேன்",
	source: "தந்தை பெரியார்",  
	},
	{
	quote:  "சிறந்த வரலாறுகளைப் படித்தால் தான் இளம் மனதில் புது முறுக்கு ஏற்படும்..", 
	source: "அறிஞர் அண்ணா"
	},
	{
	quote: "திறமையுள்ளவரின் முன்னேற்றத்தை யாராலும் தடுக்க முடியாது.",
	source: "சாணக்கியர்",  
	},
	{
	quote: "ஒரு லட்சியத்தை எடுத்துக்கொள்ளுங்கள் அதை அடைவதற்காக விடா முயற்சியுடன் உழைத்து முன்னேறுங்கள்.",
	source: "டாக்டர் அம்பேத்கர்",
	},
	{
	quote: "இலட்சியத்தை அடைவதற்காக கஷ்ட நஷ்டம் என்ற விலையைக் கொடுத்தே ஆகவேண்டும்.",
	source: "தந்தை பெரியார்"
	},
	
	{
	quote: "எல்லோரும் பயணிக்கிறார்கள் என்று நீயும் பின்தொடராதே உனக்கான பாதையை நீயே தேர்ந்தெடு...",
	source: "தமிழ் மோட்டிவேஷனல்"
	},
	{
	quote: "கல்வியே சிறந்த நண்பன். நன்கு கற்றவனுக்கு செல்லும் இடமெல்லாம் மரியாதை உண்டு. கல்வியானது இளமையையும் அழகையும் வீழ்த்திவிடும்.",
	source: "சாணக்கியர்"
	},
	{
	quote: "அறிவை தேடி ஓடுங்கள். நாளைய வரலாறு உங்கள் நிழலாக தேடி ஓடி வரும்.",
	source: "டாக்டர் அம்பேத்கர்"  
	},
	{
	quote: "தனியாக இருக்கும் போது சிந்தனை செய்வதில் கவனம் செலுத்துங்கள்.. கூட்டத்தோடு இருக்கும் போது வார்த்தைகளில் கவனமாக இருங்கள்.",
	source: "பசும்பொன் முத்துராமலிங்க தேவர்"
	},
	
	{

	quote: "தமிழ் ஒருவனை சாந்தப்படுத்துவது மட்டும் அல்ல.. தமிழ் ஒருவனுக்கு ரௌத்திரத்தையும் பழக்கும்.",
	source: "மகாகவி பாரதி"
	},
	
	{
	quote: "பாராட்டும் புகழும் குவியும் போது குட்டையான வாசலுக்குள், குனிந்து செல்வது போன்ற அடக்கம் வேண்டும். இல்லையேல் நெற்றியடி கிடைக்கும்..!.",
	source: "கலைஞர் கருணாநிதி"
	},
	{
	quote: "இதயத்தை பொறுத்ததே இனிய சுதந்திரம்.",
	source: "ஜவஹர்லால் நேரு", 
	},
	{
	quote: "நீ விரும்பாத துன்பமே உனக்கு வரும் போது… நீ விரும்பிய இன்பம் உன்னை வந்து சேராதா…? நல்லது நினை..நல்லதே நடக்கும்.",
	source: "கிருஷ்ணர்"
	},
	{
	quote: "அச்சம் தவிர் கற்ற தொழுகு நேர்படப் பேசு நையப் புடை கோல்கைக் கொண்டு வாழ்",
	source: "மகாகவி பாரதி"
	},
	{
	quote: "எண்ணிய அனைத்தும் ஈடேறும் எண்ணங்கள் தூய்மையாக இருக்கும் பட்சத்தில்",
	source: "கிருஷ்ணர்"
	},
	{
	quote: "மனிதனை உயர்ந்தவர் தாழ்ந்தவர் என ஒழுக்கத்தின் பெயரால் மட்டுமே மரியாதை கொடுக்க வேண்டுமே தவிர சாதியை வைத்து அல்ல",
	source: "பசும்பொன் முத்துராமலிங்க தேவர்"
	},
	
	{
	quote: "நீங்கள் இந்த உலகை மாற்ற விரும்பினால், உங்களிலிருந்து தொடங்குங்கள்.",
	source: "மகாத்மா காந்தி"
	},
	
	{
	quote: "பறப்பதற்கு வசதிகள் இருந்தாலும் தரையில் இருக்கவும் கற்றுக்கொள்...சிறகுகளை இழந்தாலும் வருந்தமாட்டாய்",
	source: "தமிழ் மோட்டிவேஷனல்"
	},
	{
	quote: "புத்தகத்தில் உலகைப் படித்தால் அறிவு செழிக்கும்..உலகத்தையே புத்தகமாய் படித்தால் அனுபவம் தழைக்கும்...",
	source: "கலைஞர் கருணாநிதி"
	},
	{
	quote: "எல்லோருடைய வாழ்க்கையும் வரலாறு ஆவதில்லை. வரலாறாய் ஆனவர்கள் தனக்காக வாழ்ந்ததில்லை",
	source: "தமிழக முன்னாள் முதல்வர் காமராஜர்"
	},
	{
	quote: "நற்பண்பு இல்லாத அறிவு ஆபத்தானது. அறிவில்லாத நற்பண்பு பயனற்றது.",
	source: "ஜவஹர்லால் நேரு"
	},
	{
	quote: "கல்லைக் கடவுளாக்கும் மந்திரங்கள் ஏன் மனிதனை மற்ற மனிதனுக்குச் சமத்துவமான மனிதனாக்கக்கூடாது?",
	source: "தந்தை பெரியார்",
	},
	{
	quote: "கூட்டத்தில் நிற்பது எளிதானது ஆனால் தனியாக நிற்பதற்கு தைரியம் வேண்டும்.",
	source: "மகாத்மா காந்தி"
	}
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
