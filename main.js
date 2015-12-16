
var playerOneName = prompt('What is your Name Player who gets to the keyboard first?');
var playerTwoName = prompt('what is your Name Player who is slower than player 1?');
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);

var wholeBoard = "X"







// Win Check

function winCheckX(){
	debugger;
	if(sq1 == "X" && sq2 == "X" && sq3 == "X"){
		alert("X Wins!!")
	} 
	else if(sq4 == "X" && sq5 == "X" && sq6 == "X"){
		alert("X Wins!!")
	}
	else if(sq7 == "X" && sq8 == "X" && sq9 == "X"){
		alert("X Wins!!")
	}
	else if(sq1 == "X" && sq4 == "X" && sq7 == "X"){
		alert("X Wins!!")
	}
	else if(sq2 == "X" && sq5 == "X" && sq8 == "X"){
		alert("X Wins!!")
	}
	else if(sq3 == "X" && sq6 == "X" && sq9 == "X"){
		alert("X Wins!!")
	}
	else if(sq1 == "X" && sq5 == "X" && sq9 == "X"){
		alert("X Wins!!")
	}
	else if(sq3 == "X" && sq5 == "X" && sq7 == "X"){
		alert("X Wins!!")
	}
}


function winCheckO(){
	if(sq1 == "O" && sq2 == "O" && sq3 == "O"){
		alert("O Wins!!")
	} 
	else if(sq4 == "O" && sq5 == "O" && sq6 == "O"){
		alert("O Wins!!")
	}
	else if(sq7 == "O" && sq8 == "O" && sq9 == "O"){
		alert("O Wins!!")
	}
	else if(sq1 == "O" && sq4 == "O" && sq7 == "O"){
		alert("O Wins!!")
	}
	else if(sq2 == "O" && sq5 == "O" && sq8 == "O"){
		alert("O Wins!!")
	}
	else if(sq3 == "O" && sq6 == "O" && sq9 == "O"){
		alert("O Wins!!")
	}
	else if(sq1 == "O" && sq5 == "O" && sq9 == "O"){
		alert("O Wins!!")
	}
	else if(sq3 == "O" && sq5 == "O" && sq7 == "O"){
		alert("O Wins!!")
	}
}








for(var i = 0; i < boxes.length; i++) {
	var box = boxes[i];
	box.addEventListener('click', function() {
		if(this.innerHTML == "X" || this.innerHTML == "O"){
			alert("Hey you cannot do that Cheater Face!")
		} else {
			this.innerHTML = (wholeBoard == "X") ? "O" : "X"
			wholeBoard = (wholeBoard == "X") ? "O" : "X"
		}
		var sq1 = document.getElementById("sq1").innerHTML
		var sq2 = document.getElementById("sq2").innerHTML
		var sq3 = document.getElementById("sq3").innerHTML
		var sq4 = document.getElementById("sq4").innerHTML
		var sq5 = document.getElementById("sq5").innerHTML
		var sq6 = document.getElementById("sq6").innerHTML
		var sq7 = document.getElementById("sq7").innerHTML
		var sq8 = document.getElementById("sq8").innerHTML
		var sq9 = document.getElementById("sq9").innerHTML
		
		if(sq1 == "X" && sq2 == "X" && sq3 == "X"){
			alert("X Wins!!")
		} 
		else if(sq4 == "X" && sq5 == "X" && sq6 == "X"){
			alert("X Wins!!")
		}
		else if(sq7 == "X" && sq8 == "X" && sq9 == "X"){
			alert("X Wins!!")
		}
		else if(sq1 == "X" && sq4 == "X" && sq7 == "X"){
			alert("X Wins!!")
		}
		else if(sq2 == "X" && sq5 == "X" && sq8 == "X"){
			alert("X Wins!!")
		}
		else if(sq3 == "X" && sq6 == "X" && sq9 == "X"){
			alert("X Wins!!")
		}
		else if(sq1 == "X" && sq5 == "X" && sq9 == "X"){
			alert("X Wins!!")
		}
		else if(sq3 == "X" && sq5 == "X" && sq7 == "X"){
			alert("X Wins!!")
		}
		else if(sq1 == "O" && sq2 == "O" && sq3 == "O"){
			alert("O Wins!!")
		} 
		else if(sq4 == "O" && sq5 == "O" && sq6 == "O"){
			alert("O Wins!!")
		}
		else if(sq7 == "O" && sq8 == "O" && sq9 == "O"){
			alert("O Wins!!")
		}
		else if(sq1 == "O" && sq4 == "O" && sq7 == "O"){
			alert("O Wins!!")
		}
		else if(sq2 == "O" && sq5 == "O" && sq8 == "O"){
			alert("O Wins!!")
		}
		else if(sq3 == "O" && sq6 == "O" && sq9 == "O"){
			alert("O Wins!!")
		}
		else if(sq1 == "O" && sq5 == "O" && sq9 == "O"){
			alert("O Wins!!")
		}
		else if(sq3 == "O" && sq5 == "O" && sq7 == "O"){
			alert("O Wins!!")
		}
	});
}

var clear = document.getElementById('clear')
	
clear.addEventListener('click', function() {
	for(var i = 0; i < boxes.length; i++) {
		var box = boxes[i];
		box.innerHTML = "";	
	};
})



