/*  
    Objective: Create a 3D Engine
    Tasks: 
        1. Add a new Vector
        2. Subtract a Vector
        3. Get Magnitude of a Vector
        4. Normalize a Vector(Unit Vector)
        5. Get the Dot Product of a Vector
        6. Get the Cross Product of a Vector
*/

// Adding vectors:
// //Get input from user - Ignore till hard coded version is completed
const addVector = (vector1, vector2) =>
{
    let x = vector1[0] + vector2[0];
    let y = vector1[1] + vector2[1];
    let z = vector1[2] + vector2[2];

    return [x, y, z];
}

// console.log(addVector([1, 2, 3], [4, 5, 6]));

// Subtracting vectors:
// HINT: same as addition but just working with negative values
const subtractVectors = (vector1, vector2) =>
{
    let x = vector1[0] + vector2[0];
    let y = vector1[1] + vector2[1];
    let z = vector1[2] + vector2[2];

    return x;
}

// console.log(subtractVectors([-2, 0, 0], [3, 0, 0]));


// Calculate the magnitude of a vector:
const calculateMagnitude = (vector) =>
{

    let magnitude = Math.sqrt(Math.pow(2, vector[0]) + Math.pow(2, vector[1]) + Math.pow(2, vector[2]));

    return magnitude;
}

// Unit Vector:
const calculateUnitVector = (calculateMagnitude, vector) =>
{
    let magnitude = calculateMagnitude(vector);
    let unitVector =
    {
        x: vector[0]/ magnitude,
        y: vector[1] / magnitude,
        z: vector[2] / magnitude
    }

    return unitVector;
};


// Dot product:
const dotProductCalculation = (calculateMagnitude, vector1, vector2) =>
{
    let vector1Magnitude = calculateMagnitude(vector1);
    let vector2Magnitude = calculateMagnitude(vector2);

    let dotProductValue =  vector1Magnitude * vector2Magnitude * Math.cos(30);

    return dotProductValue;
}












function foo(x, y, z)
{
    console.log('This is foo: ' + x.value + y + z);
}

let x = {
    value: 2
}

// foo(x, 2, 3);

function testFuncArg(func, x)
{
    func(x);
}

function func(x){
    console.log('Hi from func: ' + x);
}

// testFuncArg(func, 3);




