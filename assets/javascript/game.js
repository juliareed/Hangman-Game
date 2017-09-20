// Set variables
var can_play = true;
var words = new Array("REDSOX", "WHITESOX", "INDIANS", "TIGERS", "ASTROS", "ROYALS", "ANGELS", "TWINS", "YANKEES", "ATHLETICS", "MARINERS", "RAYS", "RANGERS", "BLUEJAYS", "NATIONALS", "CARDINALS", "GIANTS", "PADRES", "PIRATES", "PHILLIES", "METS", "BREWERS", "MARLINS", "DODGERS", "ROCKIES", "REDS", "CUBS", "BRAVES", "DIAMONDBACKS");
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;


// Start game, computer chooses word
function selectLetter(l)
{
if (can_play == false)
{
return;
}
 
if (used_letters.indexOf(l) != -1)
{
return;
}
 
used_letters += l;
document.game.usedLetters.value = used_letters;
 
// Player guesses correct letter
if (to_guess.indexOf(l) != -1)
{
pos = 0;
temp_mask = display_word;
 
while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);         
end = pos + 1;
 
start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);
 
temp_mask = start_text + l + end_text;
pos = end;
}
 
display_word = temp_mask;
document.game.displayWord.value = display_word;
 
if (display_word.indexOf("#") == -1)
{

// Player wins
alert("FLY THE W!");
can_play = false;
}
}
else
{

// Player guesses incorrect letter
wrong_guesses += 1;
eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
 
if (wrong_guesses == 10)
{

// Player loses
alert("Maybe next season!");
can_play = false;
}
}
}

// Game reset
function reset()
{
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
wrong_guesses = 0;
document.hm.src="hmstart.gif";
}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
 
// Masked word appears as letters are guessed
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}
 
function createMask(m)
{
mask = "";
word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
mask += "#";
}
return mask;
}