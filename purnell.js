function newWord() 
{
   var f = ["placeholdersorandomworkslolololo", "cool", "kanga", "gravity", "shrek", "adrian", "bear", "lawyer", "clown", "business", "ape", "big", "naked", "percy", "train", "funny", "admire", "thomas", "remy", "ethan"];
   var s = ["cabinets", "shrek", "thing", "clown", "apron", "train", "mother", "guy", "cabbage", "farts", "car", "dude", "choochoo", "butt", "fart", "butts", "farts", "cabinet", "clowns"]
	
	var fl = f.length;
	var sl = s.length;
	
	var fh = '#'+Math.floor(Math.random()*16777215).toString(16);
	var sh = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	var w1 = f[Math.floor((Math.random() * fl) + 1)].toString();
	var w2 = s[Math.floor((Math.random() * sl) + 1)].toString();
	
	if(w1 != w2)
	{
		document.getElementById("w1").innerHTML = w1;
		document.getElementById("w2").innerHTML = w2;
		document.getElementById("w1").style.color = fh;
		document.getElementById("w2").style.color = sh;
		document.getElementById("p2").style.color = fh;
		document.getElementById("p1").style.color = sh;
	}
	else
	{
		newWord();
	}
}
