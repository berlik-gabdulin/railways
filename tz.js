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
        paths = [];
    console.log(roads);

    roads.sort((a, b) => {
        return a.cost - b.cost
    });

    let getLowestCost = roads.reduce((lowestCost, road) => {
        
        let lowestRoad = roads[0];
        lowestCost.push(lowestRoad);

        roads.forEach(road => {
            if (road.fromCity === lowestRoad.fromCity || road.toCity === lowestRoad.toCity) {
                roads.splice(roads.indexOf(road), 1);
            }
        })

        roads.splice(0, 1);

        console.log(`Road`, roads);
        console.log(`lowestCost`, lowestCost);

        return lowestCost
    }, []);

    let costSum = getLowestCost.reduce((sum, road) => {
        sum += road.cost;
        return sum
    }, 0)

    console.log(getLowestCost.length, costSum);

}
shedule();