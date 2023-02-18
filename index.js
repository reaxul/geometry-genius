// triangle area
document.getElementById('triangle-btn').addEventListener('click',function(){
let triangleAreas=0.5 * calculate('t1','t2');
let triangleArea=triangleAreas.toFixed(2);
setResult(triangleArea,'Triangle');
})

// rectangle area
document.getElementById('rectangle-btn').addEventListener('click',function(){
    let rectangleAreas=calculate('r1','r2');
    let rectangleArea=rectangleAreas.toFixed(2);
    setResult(rectangleArea,'Rectangle');
})

// Parallelogram area
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    let parallelogramAreas=calculate('p1','p2');
    let parallelogramArea=parallelogramAreas.toFixed(2);
    setResult(parallelogramArea, "Parallelogram")
})

// Rhombus area 
document.getElementById('rhombus-btn').addEventListener('click',function(){
    let rhombusAreas=0.5*calculate('rm1','rm2');
    let rhombusArea=rhombusAreas.toFixed(2);
    setResult(rhombusArea,'Rhombus')
})

// Pentagon area 
document.getElementById('pentagon-btn').addEventListener('click',function(){
    let pentagonAreas=0.5*calculate('pt1','pt2');
    let pentagonArea=pentagonAreas.toFixed(2);
    setResult(pentagonArea,'Pentagon')
})

// Ellipse area 
document.getElementById('ellipse-btn').addEventListener('click',function(){
    let ellipseAreas=3.14*calculate('e1','e2');
    let ellipseArea=ellipseAreas.toFixed(2);
    setResult(ellipseArea,'Ellipse');
})


