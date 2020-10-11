let robot = {
    element: document.getElementById('robot'),
    x: 0,
    y: 495,
    sirka: 135,
    vyska: 105,
    rychlost: 10
}

let sane = {
    element: document.getElementById('sane'),
    x: 0,
    y: 10,
    sirka: 165,
    vyska: 104,
    rychlost: 3
}

function umistiObjekt (herniObjekt) {
    herniObjekt.element.style.left = herniObjekt.x + 'px';
    herniObjekt.element.style.top = herniObjekt.y + 'px';

}


//robot.x = 50;
//robot.y = 200,
//umistiObjekt(robot);


