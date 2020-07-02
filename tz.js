// Find Lowest Cost Shedule

function shedule() {
    let citiesCount = 4,
        roadsCount = 4,
        roads = [{
            id: 1,
            fromCity: 1,
            toCity: 2,
            cost: 1
        },
        {
            id: 2,
            fromCity: 1,
            toCity: 3,
            cost: 2
        },
        {
            id: 3,
            fromCity: 3,
            toCity: 4,
            cost: 2
        },
        {
            id: 4,
            fromCity: 2,
            toCity: 4,
            cost: 2
        }
        ],
        paths = [],
        pathID = 0;

    roads.sort((a, b) => {
        return a.cost - b.cost
    });


    let getLowestCost = roads.reduce((lowestCost, road) => {

        let lowestRoad = roads[0],
            path = {};
        lowestCost.push(lowestRoad);

        path.id = lowestRoad.id;
        path.cities = [];
        path.cities.push(lowestRoad.fromCity);
        path.cities.push(lowestRoad.toCity);
        path.cities = [...new Set(path.cities)];
        path.id = lowestRoad.id;

        paths.push(path);
        pathID++;

        roads.forEach(curRoad => {
            if (curRoad.fromCity === lowestRoad.fromCity || curRoad.toCity === lowestRoad.toCity) {
                roads.splice(roads.indexOf(curRoad), 1);
            }
        })

        roads.splice(0, 1);

        return lowestCost
    }, []);

    let costSum = getLowestCost.reduce((sum, road) => {
        sum += road.cost;
        return sum
    }, 0)

    console.log(getLowestCost.length, costSum);
    paths.forEach(() => {
        
        console.log(this.cities.length)
    })

}
shedule();