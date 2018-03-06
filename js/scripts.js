//scripts.js file

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(15, 20),
	triangle3Area = getTriangleArea(20, 25);

function getTriangleArea(a, h) {

	if (a<=0 || h<=0) {
		console.log('incorrect data')
		alert('incorrect data');
	} else {
	    return a*h/2
	}
}
console.log(getTriangleArea(10, 6));

console.log('Triangle1 Area = ' + triangle1Area);
console.log('Triangle2 Area = ' + triangle2Area);
console.log('Triangle3 Area = ' + triangle3Area);