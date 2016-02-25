var peopleArray = [];

var scott = new Person('Scott', "Director of Instruction", "$10,000", 5);
var mark = new Person('Mark', "Prez", "$10,000,000", 2);
var ryan = new Person('Ryan', "Software Engineer / Instructor", "$100,000", 6);

$(document).ready(function(){
	for(var i = 0; i < peopleArray.length; i++){
		appendDom(peopleArray[i]);
	}
});

function Person(name, position, salary, rating){
	this.name = name;
	this.position = position;
	this.salary = salary;
	this.rating = rating;
	peopleArray.push(this);
}

function appendDom(object){
	$('.container').append('<div class="person"></div>');

	var $el = $('.container').children().last();

	$el.append('<p>' + object.name + '</p>');
	$el.append('<p>' + object.position + '</p>');
	$el.append('<p>' + object.salary + '</p>');
	$el.append('<p>' + object.rating + '</p>');
}

//NOT SPECIAL
// $
//SUPER SPECIAL
// $()
