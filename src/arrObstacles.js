const maxHeight = 300
//-----------------------------------------------------SQUARES-------------------------------------------------------------

let arrSquareObstacles = [
    {posX: 760, posY: maxHeight - 50},  //4
    {posX: 835, posY: maxHeight - 50},   {posX: 835, posY: maxHeight - 75},//6
    {posX: 910, posY: maxHeight - 50},   {posX: 910, posY: maxHeight - 75},   {posX: 910, posY: maxHeight - 100},//8
    {posX: 1300, posY: maxHeight - 50},  {posX: 1325, posY: maxHeight - 50},  {posX: 1350, posY: maxHeight - 50},  {posX: 1375, posY: maxHeight - 50},  {posX: 1400, posY: maxHeight - 50},   {posX: 1425, posY: maxHeight - 50},  {posX: 1450, posY: maxHeight - 50},//10
    {posX: 1525, posY: maxHeight - 50},  {posX: 1550, posY: maxHeight - 50},  {posX: 1575, posY: maxHeight - 50},  {posX: 1600, posY: maxHeight - 50},  {posX: 1625, posY: maxHeight - 50},  //12
    {posX: 1700, posY: maxHeight - 75},  {posX: 1775, posY: maxHeight - 100}, {posX: 1850, posY: maxHeight - 125}, {posX: 1925, posY: maxHeight - 150}, //13 - SUBIDA DE CUADRADOS
    {posX: 2000, posY: maxHeight - 125}, {posX: 2025, posY: maxHeight - 125}, {posX: 2050, posY: maxHeight - 125}, {posX: 2075, posY: maxHeight - 125}, {posX: 2100, posY: maxHeight - 125}, //14.1
    {posX: 2125, posY: maxHeight - 125}, {posX: 2150, posY: maxHeight - 125}, {posX: 2175, posY: maxHeight - 125}, {posX: 2200, posY: maxHeight - 125}, {posX: 2225, posY: maxHeight - 125},  {posX: 2250, posY: maxHeight - 125}, //14.2
    {posX: 2100, posY: maxHeight - 175}, {posX: 2125, posY: maxHeight - 175},   //15.2
    {posX: 2275, posY: maxHeight - 100}, {posX: 2300, posY: maxHeight - 100}, {posX: 2325, posY: maxHeight - 100}, {posX: 2350, posY: maxHeight - 100}, {posX: 2375, posY: maxHeight - 100},  {posX: 2400, posY: maxHeight - 100}, {posX: 2425, posY: maxHeight - 100}, {posX: 2450, posY: maxHeight - 100}, //16
    {posX: 2325, posY: maxHeight - 155}, {posX: 2350, posY: maxHeight - 155}, {posX: 2375, posY: maxHeight - 155}, {posX: 2400, posY: maxHeight - 155}, //17
    {posX: 2475, posY: maxHeight - 125}, {posX: 2500, posY: maxHeight - 125}, {posX: 2525, posY: maxHeight - 125}, {posX: 2550, posY: maxHeight - 125}, //18
    {posX: 2575, posY: maxHeight - 75},  {posX: 2600, posY: maxHeight - 75},  {posX: 2625, posY: maxHeight - 75},  {posX: 2650, posY: maxHeight - 75},  {posX: 2675, posY: maxHeight - 75},   {posX: 2700, posY: maxHeight - 75},//19
    {posX: 2775, posY: maxHeight - 100}, {posX: 2850, posY: maxHeight - 125}, {posX: 2925, posY: maxHeight - 150}, {posX: 3000, posY: maxHeight - 175},  //20
    {posX: 3075, posY: maxHeight - 200}, {posX: 3100, posY: maxHeight - 200}, {posX: 3125, posY: maxHeight - 200}, {posX: 3150, posY: maxHeight - 200}, {posX: 3175, posY: maxHeight - 200},  {posX: 3200, posY: maxHeight - 200}, //21.1
    {posX: 3225, posY: maxHeight - 200}, {posX: 3250, posY: maxHeight - 200}, {posX: 3275, posY: maxHeight - 200},

// ------------------------------------------------------SECOND PART----------------------------------

    {posX: 3325, posY: maxHeight - 150}, {posX: 3375, posY: maxHeight - 100}, // 1   BAJADA
    {posX: 3425, posY: maxHeight - 75},  {posX: 3450, posY: maxHeight - 75},  {posX: 3475, posY: maxHeight - 75},  {posX: 3500, posY: maxHeight - 75}, {posX: 3525, posY: maxHeight - 75},  {posX: 3550, posY: maxHeight - 75}, //2
    {posX: 3575, posY: maxHeight - 50},  {posX: 3600, posY: maxHeight - 50},  {posX: 3625, posY: maxHeight - 50},  {posX: 3650, posY: maxHeight - 50}, {posX: 3675, posY: maxHeight - 50}, /*pick*/  {posX: 3750, posY: maxHeight - 50},  {posX: 3775, posY: maxHeight - 50},  {posX: 3800, posY: maxHeight - 50}, //3.1
    {posX: 3825, posY: maxHeight - 50},  {posX: 3850, posY: maxHeight - 50},  {posX: 3875, posY: maxHeight - 50},  {posX: 3900, posY: maxHeight - 50},  {posX: 3925, posY: maxHeight - 50}, //3.2   
    {posX: 4000, posY: maxHeight - 75},  {posX: 4075, posY: maxHeight - 100},  {posX: 4150, posY: maxHeight - 125},  {posX: 4225, posY: maxHeight - 150},  {posX: 4300, posY: maxHeight - 175},  //4 SUBIDA
    {posX: 4350, posY: maxHeight - 125}, {posX: 4375, posY: maxHeight - 125},  //5
    {posX: 4425, posY: maxHeight - 175}, //6 salto
    {posX: 4475, posY: maxHeight - 125}, {posX: 4500, posY: maxHeight - 125}, // 7 plataforma 2
    {posX: 4550, posY: maxHeight - 175},  {posX: 4575, posY: maxHeight - 175},  {posX: 4600, posY: maxHeight - 175},  {posX: 4625, posY: maxHeight - 175},  {posX: 4650, posY: maxHeight - 175}, {posX: 4675, posY: maxHeight - 175}, // 8.1 subida y plataforma larga con pinchos
    {posX: 4700, posY: maxHeight - 175},  {posX: 4725, posY: maxHeight - 175},  {posX: 4750, posY: maxHeight - 175},  {posX: 4775, posY: maxHeight - 175}, // 8.2 subida y plataforma larga con pinchos
    {posX: 4825, posY: maxHeight - 125},  {posX: 4875, posY: maxHeight - 75}, //  9 bajada al suelo
    {posX: 5050, posY: maxHeight - 50},   {posX: 5075, posY: maxHeight - 50},  {posX: 5100, posY: maxHeight - 50},   {posX: 5125, posY: maxHeight - 50},  {posX: 5150, posY: maxHeight - 50},  {posX: 5175, posY: maxHeight - 50},  {posX: 5200, posY: maxHeight - 50}, {posX: 5225, posY: maxHeight - 50},  {posX: 5250, posY: maxHeight - 50},// 11 plataforma
    {posX: 5325, posY: maxHeight - 50},   {posX: 5325, posY: maxHeight - 75}, //12.1 subida como en el principio
    {posX: 5400, posY: maxHeight - 50},   {posX: 5400, posY: maxHeight - 75}, {posX: 5400, posY: maxHeight - 100}, //12.2 subida como en el principio
    {posX: 5475, posY: maxHeight - 50},   {posX: 5475, posY: maxHeight - 75}, {posX: 5475, posY: maxHeight - 100},  {posX: 5475, posY: maxHeight - 125},//12.3 subida como en el principio
    {posX: 5550, posY: maxHeight - 50},   {posX: 5550, posY: maxHeight - 75}, {posX: 5550, posY: maxHeight - 100},  {posX: 5550, posY: maxHeight - 125},  {posX: 5550, posY: maxHeight - 150}, //12.4 subida como en el principio
    {posX: 5625, posY: maxHeight - 50},   {posX: 5625, posY: maxHeight - 75}, {posX: 5625, posY: maxHeight - 100},  {posX: 5625, posY: maxHeight - 125},  {posX: 5625, posY: maxHeight - 150}, {posX: 5625, posY: maxHeight - 175}, //12.5 subida como en el principio




]





// ----------------------------------------------------TRIANGLES-----------------------------------------------------------
// heightMAX : 650 
let arrTriangleObstacles = [{posX: 350, posY: maxHeight - 50}, //1
    {posX: 535, posY: maxHeight - 50},   {posX: 560, posY: maxHeight - 50}, //2
    {posX: 715, posY: maxHeight - 50},   {posX: 735, posY: maxHeight - 50}, //3
    {posX: 1075, posY: maxHeight - 50},  {posX: 1100, posY: maxHeight - 50}, //9
    {posX: 1575, posY: maxHeight - 75}, //12
    {posX: 2075, posY: maxHeight - 150}, {posX: 2100, posY: maxHeight - 150}, {posX: 2125, posY: maxHeight - 150}, {posX: 2150, posY: maxHeight - 150}, //15.1
    {posX: 2325, posY: maxHeight - 180}, {posX: 2350, posY: maxHeight - 180}, {posX: 2375, posY: maxHeight - 180}, {posX: 2400, posY: maxHeight - 180},//17
    {posX: 2550, posY: maxHeight - 150}, //18
    {posX: 2575, posY: maxHeight - 100}, //19
  

    // ------------------------------------------------------SECOND PART----------------------------------

    {posX: 3500, posY: maxHeight - 100}, // 2
    {posX: 3875, posY: maxHeight - 75}, //3.2
    {posX: 4650, posY: maxHeight - 200}, {posX: 4675, posY: maxHeight - 200}, // 8 PLATAFORMA CON PINCHOS
    {posX: 4900, posY: maxHeight - 50},  {posX: 4925, posY: maxHeight - 50}, {posX: 4950, posY: maxHeight - 50},// 10 pinchos en el suelo
    {posX: 5200, posY: maxHeight - 75}, // 11 pinchos plataforma


]




//-------------------------------------------------------PICKS--------------------------------------------------------------

let arrPicksObstacles = [{posX: 785, posY: maxHeight - 50},//5
    {posX: 860, posY: maxHeight - 50},//7
    {posX: 1475, posY: maxHeight - 50}, //11


    // ------------------------------------------------------SECOND PART----------------------------------
   
    {posX: 3700, posY: maxHeight - 50},
    {posX: 5275, posY: maxHeight - 50}, // 12 pinchos subida
    {posX: 5350, posY: maxHeight - 50}, // 12 pinchos subida 
    {posX: 5425, posY: maxHeight - 50}, // 12 pinchos subida
    {posX: 5500, posY: maxHeight - 50}, // 12 pinchos subida
    {posX: 5575, posY: maxHeight - 50}, // 12 pinchos subida

]


