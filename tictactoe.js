let turn = 0;
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var playerXScore = 0;
var playerOScore = 0;

$('.button').click(function() {

// Validate the cell chosen is empty.
    if($(this).hasClass('ex') || $(this).hasClass('oh')) {
        $(this).css('background-color', 'red');
        setTimeout( () => {
            $(this).css('background-color', 'white');    
        }, 1000);
        return false;
    };

    // Validate the game is not over.
    if(checkWin('ex') || checkWin('oh')) {
        $(this).css('background-color', 'red');
        setTimeout( () => {
            $(this).css('background-color', 'white');    
        }, 1000);
        return false;
    }
      
// Alternate turns, adding Xs and Os.
    if (turn % 2 === 0) {
        $(this).addClass('ex');
        $('<span>X</span>').appendTo($(this));
        document.getElementById('playerTurn').innerHTML = "Player O's Turn";
    } else {    
        $(this).addClass('oh');
        $('<span>O</span>').appendTo($(this));
        document.getElementById('playerTurn').innerHTML = "Player X's Turn";        
    }
    
// Check for win or draw and alerts the user if true.
    if(checkWin('ex')){
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-success alert-dismissable fade show role = "alert">' + 'Player X Wins!' + 
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertPlaceholder.append(wrapper);
        playerXScore +=1;
    } else if (checkWin('oh')) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-success alert-dismissable fade show role = "alert">' + 'Player O Wins!' + 
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertPlaceholder.append(wrapper);
        playerOScore +=1;
    } else if (checkDraw()){
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-dark alert-dismissable fade show role = "alert">' + "Scratch! Cat's Game! Draw!" + 
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertPlaceholder.append(wrapper);
    }
    
    turn += 1;
    document.getElementById('playerX').innerHTML = `Player X Games Won: ${playerXScore}`;
    document.getElementById('playerO').innerHTML = `Player O Games Won: ${playerOScore}`;
});

// If a win is true, changes the background color to yellow of winning cells to yellow. 
function checkWin(letter) {
    if ($('.cell-1').hasClass(letter) && $('.cell-2').hasClass(letter) && $('.cell-3').hasClass(letter)) {
        $('.cell-1').css('background-color', 'yellow');
        $('.cell-2').css('background-color', 'yellow');
        $('.cell-3').css('background-color', 'yellow');
        return true
    } else if ($('.cell-4').hasClass(letter) && $('.cell-5').hasClass(letter) && $('.cell-6').hasClass(letter)) {
        $('.cell-4').css('background-color', 'yellow');
        $('.cell-5').css('background-color', 'yellow');
        $('.cell-6').css('background-color', 'yellow');
        return true
    } else if ($('.cell-7').hasClass(letter) && $('.cell-8').hasClass(letter) && $('.cell-9').hasClass(letter)) {
        $('.cell-7').css('background-color', 'yellow');
        $('.cell-8').css('background-color', 'yellow');
        $('.cell-9').css('background-color', 'yellow');
        return true
    } else if ($('.cell-1').hasClass(letter) && $('.cell-4').hasClass(letter) && $('.cell-7').hasClass(letter)) {
        $('.cell-1').css('background-color', 'yellow');
        $('.cell-4').css('background-color', 'yellow');
        $('.cell-7').css('background-color', 'yellow');
        return true
    } else if ($('.cell-2').hasClass(letter) && $('.cell-5').hasClass(letter) && $('.cell-8').hasClass(letter)) {
        $('.cell-2').css('background-color', 'yellow');
        $('.cell-5').css('background-color', 'yellow');
        $('.cell-8').css('background-color', 'yellow');
        return true
    } else if ($('.cell-3').hasClass(letter) && $('.cell-6').hasClass(letter) && $('.cell-9').hasClass(letter)) {
        $('.cell-3').css('background-color', 'yellow');
        $('.cell-6').css('background-color', 'yellow');
        $('.cell-9').css('background-color', 'yellow');
        return true
    } else if ($('.cell-1').hasClass(letter) && $('.cell-5').hasClass(letter) && $('.cell-9').hasClass(letter)) {
        $('.cell-1').css('background-color', 'yellow');
        $('.cell-5').css('background-color', 'yellow');
        $('.cell-9').css('background-color', 'yellow');
        return true
    } else if ($('.cell-3').hasClass(letter) && $('.cell-5').hasClass(letter) && $('.cell-7').hasClass(letter)) {
        $('.cell-3').css('background-color', 'yellow');
        $('.cell-5').css('background-color', 'yellow');
        $('.cell-7').css('background-color', 'yellow');
        return true
    }
}

// Checks if the board is full.
function checkDraw() {
    if (($('.cell-1').hasClass('ex') || $('.cell-1').hasClass('oh')) 
    && ($('.cell-2').hasClass('ex') || $('.cell-2').hasClass('oh')) 
    && ($('.cell-3').hasClass('ex') || $('.cell-3').hasClass('oh'))
    && ($('.cell-4').hasClass('ex') || $('.cell-4').hasClass('oh'))
    && ($('.cell-5').hasClass('ex') || $('.cell-5').hasClass('oh'))
    && ($('.cell-6').hasClass('ex') || $('.cell-6').hasClass('oh'))
    && ($('.cell-7').hasClass('ex') || $('.cell-7').hasClass('oh')) 
    && ($('.cell-8').hasClass('ex') || $('.cell-8').hasClass('oh'))
    && ($('.cell-9').hasClass('ex') || $('.cell-9').hasClass('oh')))  {
        return true
    }
}

// Resets the playing board, turn count, alert, and background color.
$('#reset').on('click', () => {
    turn = 0;
    document.getElementById('playerTurn').innerHTML = "Player X's Turn";
    document.getElementById('liveAlertPlaceholder').innerHTML = '';
    $(".button").removeClass('ex');
    $(".button").removeClass('oh'); 
    $('span').empty();
    
    $('.cell-1').css('background-color', 'white');
    $('.cell-2').css('background-color', 'white');
    $('.cell-3').css('background-color', 'white');
    $('.cell-4').css('background-color', 'white');
    $('.cell-5').css('background-color', 'white');
    $('.cell-6').css('background-color', 'white');
    $('.cell-7').css('background-color', 'white');
    $('.cell-8').css('background-color', 'white');
    $('.cell-9').css('background-color', 'white');
})

// Resets the games won counter.
$('#resetGamesWon').on('click', () => {
    playerXScore = 0;
    playerOScore = 0;
    document.getElementById('playerX').innerHTML = `Player X Games Won: ${playerXScore}`;
    document.getElementById('playerO').innerHTML = `Player O Games Won: ${playerOScore}`;
})