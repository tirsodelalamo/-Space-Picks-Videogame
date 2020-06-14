const maxHeight = 300
//-----------------------------------------------------SQUARES-------------------------------------------------------------

let arrSquareObstacles = [
    {posX: 760, posY: maxHeight - 50},  //4
    {posX: 835, posY: maxHeight - 50},   {posX: 835, posY: maxHeight - 75},//6
    {posX: 910, posY: maxHeight - 50},   {posX: 910, posY: maxHeight - 75},   {posX: 910, posY: maxHeight - 100},//8
    {posX: 1300, posY: maxHeight - 50},  {posX: 1325, posY: maxHeight - 50},  {posX: 1350, posY: maxHeight - 50},  {posX: 1375, posY: maxHeight - 50},  {posX: 1400, posY: maxHeight - 50},   {posX: 1425, posY: maxHeight - 50},  {posX: 1450, posY: maxHeight - 50},//10
    {posX: 1525, posY: maxHeight - 50},  {posX: 1550, posY: maxHeight - 50},  {posX: 1575, posY: maxHeight - 50},  {posX: 1600, posY: maxHeight - 50},  {posX: 1625, posY: maxHeight - 50},   {posX: 1650, posY: maxHeight - 50}, //12
    {posX: 1725, posY: maxHeight - 75},  {posX: 1800, posY: maxHeight - 100}, {posX: 1875, posY: maxHeight - 125}, {posX: 1950, posY: maxHeight - 150}, //13 - SUBIDA DE CUADRADOS
    {posX: 2000, posY: maxHeight - 125}, {posX: 2025, posY: maxHeight - 125}, {posX: 2050, posY: maxHeight - 125}, {posX: 2075, posY: maxHeight - 125}, {posX: 2100, posY: maxHeight - 125}, //14.1
    {posX: 2125, posY: maxHeight - 125}, {posX: 2150, posY: maxHeight - 125}, {posX: 2175, posY: maxHeight - 125}, {posX: 2200, posY: maxHeight - 125}, {posX: 2225, posY: maxHeight - 125},  {posX: 2250, posY: maxHeight - 125}, //14.2
    {posX: 2100, posY: maxHeight - 175}, {posX: 2125, posY: maxHeight - 175},   //15.2
    {posX: 2275, posY: maxHeight - 100}, {posX: 2300, posY: maxHeight - 100}, {posX: 2325, posY: maxHeight - 100}, {posX: 2350, posY: maxHeight - 100}, {posX: 2375, posY: maxHeight - 100},  {posX: 2400, posY: maxHeight - 100}, {posX: 2425, posY: maxHeight - 100}, {posX: 2450, posY: maxHeight - 100}, //16
    {posX: 2325, posY: maxHeight - 155}, {posX: 2350, posY: maxHeight - 155}, {posX: 2375, posY: maxHeight - 155}, {posX: 2400, posY: maxHeight - 155}, //17
    {posX: 2475, posY: maxHeight - 125}, {posX: 2500, posY: maxHeight - 125}, {posX: 2525, posY: maxHeight - 125}, {posX: 2550, posY: maxHeight - 125}, //18
    {posX: 2575, posY: maxHeight - 75},  {posX: 2600, posY: maxHeight - 75},  {posX: 2625, posY: maxHeight - 75},  {posX: 2650, posY: maxHeight - 75},  {posX: 2675, posY: maxHeight - 75},   {posX: 2700, posY: maxHeight - 75},//19
    {posX: 2775, posY: maxHeight - 100}, {posX: 2850, posY: maxHeight - 125}, {posX: 2925, posY: maxHeight - 150}, {posX: 3000, posY: maxHeight - 175},  //20
    {posX: 3075, posY: maxHeight - 200}, {posX: 3100, posY: maxHeight - 200}, {posX: 3125, posY: maxHeight - 200}, {posX: 3150, posY: maxHeight - 200}, {posX: 3175, posY: maxHeight - 200},  {posX: 3200, posY: maxHeight - 200}, //21.1
    {posX: 3225, posY: maxHeight - 200}, {posX: 3250, posY: maxHeight - 200}, {posX: 3275, posY: maxHeight - 200}

]





// ----------------------------------------------------TRIANGLES-----------------------------------------------------------
// heightMAX : 650 
let arrTriangleObstacles = [{posX: 350, posY: maxHeight - 50}, //1
    {posX: 535, posY: maxHeight - 50},   {posX: 560, posY: maxHeight - 50}, //2
    {posX: 715, posY: maxHeight - 50},   {posX: 735, posY: maxHeight - 50}, //3
    {posX: 1100, posY: maxHeight - 50},  {posX: 1125, posY: maxHeight - 50}, //9
    {posX: 1575, posY: maxHeight - 75}, //12
    {posX: 2075, posY: maxHeight - 150}, {posX: 2100, posY: maxHeight - 150}, {posX: 2125, posY: maxHeight - 150}, {posX: 2150, posY: maxHeight - 150}, //15.1
    {posX: 2325, posY: maxHeight - 180}, {posX: 2350, posY: maxHeight - 180}, {posX: 2375, posY: maxHeight - 180}, {posX: 2400, posY: maxHeight - 180},//17
    {posX: 2550, posY: maxHeight - 150}, //18
    {posX: 2575, posY: maxHeight - 100}, //19


]




//-------------------------------------------------------PICKS--------------------------------------------------------------

let arrPicksObstacles = [{posX: 785, posY: maxHeight - 50},//5
    {posX: 860, posY: maxHeight - 50},//7
    {posX: 1475, posY: maxHeight - 50} //11
   
]


