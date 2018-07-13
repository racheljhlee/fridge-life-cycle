/* GOALS

1. create a tool -- let's call it `getTime()` -- that gets the current time using `Date()` and returns the current year, month, day, hour, minute

2. use that tool to store the current time in a global variable called `globalTime`

3. create a tool -- let's call it `drawComposition()` -- that configures our composition based on `globalTime`

4. once the page has loaded, update our page in real time using `setInterval`

*/

// 2. global variable
var globalTime = getTime();
// console.log( 'year', globalTime.year );
// console.log( 'month', globalTime.month);

// wait for everything to load, then execute our script
window.onload = function(){

	// then initiate all of our code
	drawComposition(globalTime);

	var second = 1000;

	setInterval(function(){

		var globalTime = getTime();
		drawComposition(globalTime);
	}, second * 3 )

}

// 3. create a tool -- let's call it `drawComposition()` -- that configures our composition based on `globalTime`
function drawComposition(now) {
	
	// confirm the function is running
	console.log('drawComposition',now);

	// define an empty variable
	var container;

	// ________________________________________

	// SUNDAY (START)

	// 12AM-8:59AM ************
	// full fridge
	// b/w

	if (now.day == 0) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('sun calm state 1');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
		}
	}

	// 9AM-9:02AM **************
	// apples opacity change
	// color

	if (now.day == 0) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('sun alarm state 1');

				container = document.getElementById('apple-1').style.opacity = "0.2";
				container = document.getElementById('apple-2').style.opacity = "0.2";
			}
		}
	}

	// 9:03AM-11:59AM **********
	// apples gone, b/w


	if (now.day == 0) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('sun calm state 2');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
			}
		}
	}

	if (now.day == 0) {
		if (now.hour >= 10 && now.hour < 12 ) {
			console.log('sun calm state 2');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
		}
	}

	// 12PM-12:02PM *************
	// apples gone
	// blue can opacity change
	// color

	if (now.day == 0) {
		if (now.hour == 12) {
			if (now.minute <= 2) {
				console.log('sun alarm state 2');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0.2";

			}
		}
	}

	// 12:03PM-6:59PM ***********
	// apples, blue can gone
	// b/w

	if (now.day == 0) {
		if (now.hour == 12) {
			if (now.minute >= 3) {
				console.log('sun calm state 3');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";

				
			}
		}
	}

	if (now.day == 0) {
		if (now.hour >= 13 && now.hour < 19) {
			console.log('sun calm state 3');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
		}
	}

	// 7PM-7:02PM ***************
	// milk opacity change
	// apples, blue can gone
	// color

	if (now.day == 0) {
		if (now.hour == 19) {
			if (now.minute <= 2) {
				console.log('sun alarm state 3');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0.2";
			}
		}
	}

	// 7:03PM-11:59PM ***********
	// apples, milk, blue can gone
	// b/w

	if (now.day == 0) {
		if (now.hour == 19) {
			if (now.minute >= 3) {
				console.log('sun calm state 4');

				container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";

				
			}
		}
	}

	if (now.day == 0) {
		if (now.hour >= 20) {
			console.log('sun calm state 4');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
		}
	}

	// __________________________________________________________________________________

	// MONDAY

	// 12AM-8:59AM ************
	// apples, milk, blue can gone
	// b/w

	if (now.day == 1) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('mon calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can gone
	// large leftovers opacity change
	// color

	if (now.day == 1) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('mon alarm state 1');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
					container = document.getElementById('large-leftovers').style.opacity = "0.2";
				

			}
		}
	}

	// 9:03AM-11:59AM **********
	// apples, milk, blue can, large leftovers gone
	// b/w

	if (now.day == 1) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('mon calm state 2');
				
				container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
					container = document.getElementById('large-leftovers').style.opacity = "0";

			}
		}
	}

	if (now.day == 1) {
		if (now.hour >= 10 && now.hour < 12 ) {
			console.log('mon calm state 2');

				container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
					container = document.getElementById('large-leftovers').style.opacity = "0";
			

		}
	}

	// 12PM-12:02PM *************
	// eggs change opacity
	// apples, milk, blue can, large leftovers gone
	// color 

	if (now.day == 1) {
		if (now.hour == 12) {
			if (now.minute <= 2) {
				console.log('mon alarm state 2');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
					container = document.getElementById('eggs').style.opacity = "0.2";

				

			}
		}
	}

	// 12:03PM-11:59PM ***********
	// apples, milk, blue can, large leftovers, eggs gone
	// b/w


	if (now.day == 1) {
		if (now.hour == 12) {
			if (now.minute >= 3) {
				console.log('mon calm state 3');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
			}
		}
	}

	if (now.day == 1) {
		if (now.hour >=13) {
			console.log('mon calm state 3');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
		}
	}

	// __________________________________________________________________________________

	// TUESDAY

	// 12AM-8:59AM ************
	// apples, milk, blue can, large leftovers, eggs gone
	// b/w

	if (now.day == 2) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('tues calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can, large leftovers, eggs gone
	// juice opacity changes 
	// color

	if (now.day == 2) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('tues alarm state 1');
				
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
					container = document.getElementById('juice').style.opacity = "0.2";

			}
		}
	}

	// 9:03AM-11:59PM **********
	// apples, milk, blue can, large leftovers, eggs, juice gone
	// b/w

	if (now.day == 2) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('tues calm state 2');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";	
			}
		}
	}

	if (now.day == 2) {
		if (now.hour >= 10) {
			console.log('tues calm state 2');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
		}
	}

	
	// __________________________________________________________________________________

	// WEDNESDAY

	// 12AM-8:59AM ************
	// apples, milk, blue can, large leftovers, eggs, juice gone
	// b/w

	if (now.day == 3) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('wed calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can, large leftovers, eggs, juice gone
	// bananas opacity change
	// color


	if (now.day == 3) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('wed alarm state 1');
				
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
					container = document.getElementById('banana-1').style.opacity = "0.2";
					container = document.getElementById('banana-2').style.opacity = "0.2";
					container = document.getElementById('banana-3').style.opacity = "0.2";
			}
		}
	}

	// 9:03AM-11:59AM **********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas gone
	// b/w

	if (now.day == 3) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('wed calm state 2');

				container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
				container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
					container = document.getElementById('large-leftovers').style.opacity = "0";
					container = document.getElementById('eggs').style.opacity = "0";
					container = document.getElementById('juice').style.opacity = "0";
					container = document.getElementById('banana-1').style.opacity = "0";
					container = document.getElementById('banana-2').style.opacity = "0";
					container = document.getElementById('banana-3').style.opacity = "0";
			}
		}
	}

	if (now.day == 3) {
		if (now.hour >= 10 && now.hour < 12 ) {
			console.log('wed calm state 2');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
					container = document.getElementById('apple-1').style.opacity = "0";
					container = document.getElementById('apple-2').style.opacity = "0";
					container = document.getElementById('can-1').style.opacity = "0";
					container = document.getElementById('milk').style.opacity = "0";
					container = document.getElementById('large-leftovers').style.opacity = "0";
					container = document.getElementById('eggs').style.opacity = "0";
					container = document.getElementById('juice').style.opacity = "0";
					container = document.getElementById('banana-1').style.opacity = "0";
					container = document.getElementById('banana-2').style.opacity = "0";
					container = document.getElementById('banana-3').style.opacity = "0";
		}
	}

	// 12PM-12:02PM *************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas gone
	// carrot changes opacity
	// color

	if (now.day == 3) {
		if (now.hour == 12) {
			if (now.minute <= 2) {
				console.log('wed alarm state 2');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0.2";
			}
		}
	}

	// 12:03PM-6:59PM ***********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot gone
	// b/w

	if (now.day == 3) {
		if (now.hour == 12) {
			if (now.minute >= 3) {
				console.log('wed calm state 3');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
			}
		}
	}

	if (now.day == 3) {
		if (now.hour >= 13 && now.hour < 19) {
			console.log('wed calm state 3');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
		}
	}

	// 7PM-7:02PM ***************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot gone
	// orange opacity changes
	// color

	if (now.day == 3) {
		if (now.hour == 19) {
			if (now.minute <= 2) {
				console.log('wed alarm state 3');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
					container = document.getElementById('orange').style.opacity = "0.2";
			}
		}
	}

	// 7:03PM-11:59PM ***********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange gone
	// b/w

	if (now.day == 3) {
		if (now.hour == 19) {
			if (now.minute >= 3) {
				console.log('wed calm state 4');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
			}
		}
	}

	if (now.day == 3) {
		if (now.hour >= 20) {
			console.log('wed calm state 4');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
		}
	}

	// __________________________________________________________________________________

	// THURSDAY

	// 12AM-8:59AM ************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange gone
	// b/w

	if (now.day == 4) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('thurs calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange gone
	// small container opacity change
	// color

	if (now.day == 4) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('thurs alarm state 1');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
					container = document.getElementById('small-leftovers').style.opacity = "0.2";
			}
		}
	}

	// 9:03AM-11:59PM **********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers gone
	// b/w


	if (now.day == 4) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('thurs calm state 2');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
			}
		}
	}

	if (now.day == 4) {
		if (now.hour >= 10) {
			console.log('thurs calm state 2');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
		}
	}

	// __________________________________________________________________________________

	// FRIDAY

	// 12AM-8:59AM ************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers gone
	// b/w

	if (now.day == 5) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('fri calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers gone
	// green can opacity change
	// color

	if (now.day == 5) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('fri alarm state 1');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
					container = document.getElementById('green-can-1').style.opacity = "0.2";

			
			}
		}
	}

	// 9:03AM-11:59PM **********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can gone
	// b/w

	if (now.day == 5) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('fri calm state 2');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
			}
		}
	}

	if (now.day == 5) {
		if (now.hour >= 10) {
			console.log('fri calm state 2');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
		}
	}

	// __________________________________________________________________________________

	// SATURDAY (END)

	// 12AM-8:59AM ************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can gone
	// b/w

	if (now.day == 6) {
		if (now.hour >= 0 && now.hour < 9) {
			console.log('sat calm state 1');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
		}
	}

	// 9AM-9:02AM **************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can gone
	// water pitcher opacity changes
	// color

	if (now.day == 6) {
		if (now.hour == 9) {
			if (now.minute <= 2) {
				console.log('sat alarm state 1');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
					container = document.getElementById('water').style.opacity = "0.2";
			}
		}
	}

	// 9:03AM-11:59AM **********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can, water pitcher gone
	// b/w

	if (now.day == 6) {
		if (now.hour == 9) {
			if (now.minute >= 3) {
				console.log('sat calm state 2');

			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
			}
		}
	}

	if (now.day == 6) {
		if (now.hour >= 10 && now.hour < 12 ) {
			console.log('sat calm state 2');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
		}
	}

	// 12PM-12:02PM *************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can, water pitcher gone
	// cheese changes opacity
	// color

	if (now.day == 6) {
		if (now.hour == 12) {
			if (now.minute <= 2) {
				console.log('sat alarm state 2');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
					container = document.getElementById('cheese').style.opacity = "0.2";

			}
		}
	}

	// 12:03PM-6:59PM ***********
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can, water pitcher, cheese gone
	// b/w

	if (now.day == 6) {
		if (now.hour == 12) {
			if (now.minute >= 3) {
				console.log('sat calm state 3');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
				container = document.getElementById('cheese').style.opacity = "0";
			}
		}
	}

	if (now.day == 6) {
		if (now.hour >= 13 && now.hour < 19) {
			console.log('sat calm state 3');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
				container = document.getElementById('cheese').style.opacity = "0";
		}
	}

	// 7PM-7:02PM ***************
	// apples, milk, blue can, large leftovers, eggs, juice, bananas, carrot, orange, small leftovers, green can, water pitcher, cheese gone
	// tomato change opacity
	// color

	if (now.day == 6) {
		if (now.hour == 19) {
			if (now.minute <= 2) {
				console.log('sat alarm state 3');

				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
				container = document.getElementById('cheese').style.opacity = "0";
					container = document.getElementById('tomato').style.opacity = "0.2";
			}
		}
	}

	// 7:03PM-11:59PM ***********
	// fridge empty!
	// b/w

	if (now.day == 6) {
		if (now.hour == 19) {
			if (now.minute >= 3) {
				console.log('sat calm state 4');
				
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
				container = document.getElementById('cheese').style.opacity = "0";
				container = document.getElementById('tomato').style.opacity = "0";
			}
		}
	}

	if (now.day == 6) {
		if (now.hour >= 20) {
			console.log('sat calm state 4');
			
			container = document.getElementById('shelf-1-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-2-main').style.filter="grayscale(100%)";
			container = document.getElementById('shelf-3-main').style.filter="grayscale(100%)";
				container = document.getElementById('apple-1').style.opacity = "0";
				container = document.getElementById('apple-2').style.opacity = "0";
				container = document.getElementById('can-1').style.opacity = "0";
				container = document.getElementById('milk').style.opacity = "0";
				container = document.getElementById('large-leftovers').style.opacity = "0";
				container = document.getElementById('eggs').style.opacity = "0";
				container = document.getElementById('juice').style.opacity = "0";
				container = document.getElementById('banana-1').style.opacity = "0";
				container = document.getElementById('banana-2').style.opacity = "0";
				container = document.getElementById('banana-3').style.opacity = "0";
				container = document.getElementById('carrot').style.opacity = "0";
				container = document.getElementById('orange').style.opacity = "0";
				container = document.getElementById('small-leftovers').style.opacity = "0";
				container = document.getElementById('green-can-1').style.opacity = "0";
				container = document.getElementById('water').style.opacity = "0";
				container = document.getElementById('cheese').style.opacity = "0";
				container = document.getElementById('tomato').style.opacity = "0";
		}
	}

// ____________________________________________________________________________________________


	// if this drawComposition() function has two parts...
		// 1) outline the logic for how things get displayed 
		// 2) display them i.e., act on that logic 
	// put all my logic to work
	container.style.display = "block";

} // end drawComposition


// 1. create a tool -- let's call it `getTime()` -- that gets the current time using `Date()` and return the current year, month, day, hour, minute and second
function getTime() {


	// get absolute most current time and date
	var localTime = new Date();
	// make sure we got it
	console.log( localTime );
	// extract time & date info and store it in an object
	var theTime = {
		year : localTime.getFullYear(),
		month : localTime.getMonth(),
		date: localTime.getDate(),
		day : localTime.getDay(),
		hour : localTime.getHours(),
		minute : localTime.getMinutes(),
	};
	// make sure it's working
	// console.log( theTime );
	// return our time object
	return theTime;

} // end getTime()




