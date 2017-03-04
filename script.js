$(document).ready(function() {
	
	//Game state
	var game = {
		state: true,
		win: false,
		player: "",
		computer: "",
		test: "test",
		count: 0
	};
	
	//User function.
	function userTurn(cell) {
			$(cell).unbind();
			$(cell).append('x');
			game.state = false;
			game.player = game.player + this;
			winnerPlayer();
			game.count++;
			draw();
	}
	
	//Computer function.
	function compTurn(cell) {
			$(cell).unbind();
			$(cell).append('o');
			game.state = true;
			game.computer = game.computer + cell;
			winnerComputer();
			game.count++;
			draw();
	}
	
	//Switches between users.
	function turns(cell) {
		if (game.state === true) {
			userTurn(cell);
		} else {
			compTurn(cell);
		}
	}
	
	//On click, calls turns().
	$('#one,#two,#three,#four,#five,#six,#seven,#eight,#nine').click(function() {	
		if (game.state === true) {
			//$(this).removeClass('cell');
			$(this).addClass('x');
		} else {
			//$(this).removeClass('cell');
			$(this).addClass('o');
		}
		turns(this);
	});
	
	//Determine if there is a draw through the count variable.
	function draw() {
		if (game.count === 9) {
			alert("Draw!");
		}
	}
	
	//Checks the class of each cell and returns a winner for player.
	function winnerPlayer() {
		if ($("#one").hasClass("x") && $('#two').hasClass('x') && $('#three').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#four").hasClass("x") && $('#five').hasClass('x') && $('#six').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#seven").hasClass("x") && $('#eight').hasClass('x') && $('#nine').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#one").hasClass("x") && $('#four').hasClass('x') && $('#seven').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#two").hasClass("x") && $('#five').hasClass('x') && $('#eight').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#three").hasClass("x") && $('#six').hasClass('x') && $('#nine').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#one").hasClass("x") && $('#five').hasClass('x') && $('#nine').hasClass('x')) {
			alert("Player One Wins!");
		} else if ($("#three").hasClass("x") && $('#five').hasClass('x') && $('#seven').hasClass('x')) {
			alert("Player One Wins!");
		}
	}
	
	//Checks the class of each cell and returns a winner for the computer.
	function winnerComputer() {
		if ($("#one").hasClass("o") && $('#two').hasClass('o') && $('#three').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#four").hasClass("o") && $('#five').hasClass('o') && $('#six').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#seven").hasClass("o") && $('#eight').hasClass('o') && $('#nine').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#one").hasClass("o") && $('#four').hasClass('o') && $('#seven').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#two").hasClass("o") && $('#five').hasClass('o') && $('#eight').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#three").hasClass("o") && $('#six').hasClass('o') && $('#nine').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#one").hasClass("o") && $('#five').hasClass('o') && $('#nine').hasClass('o')) {
			alert("Computer Wins!");
		} else if ($("#three").hasClass("o") && $('#five').hasClass('o') && $('#seven').hasClass('o')) {
			alert("Computer Wins!");
		}
	}
        
      
});













