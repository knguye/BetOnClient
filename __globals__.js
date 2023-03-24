import {GiAmericanFootballBall, GiAnchor, GiAstronautHelmet, GiBananaPeeled, GiBasketballBall, GiBattleAxe, GiBeerStein, GiBison} from 'react-icons/gi'
import Ionicons from '@expo/vector-icons/Ionicons';

const production = {
    serverDomain: 'https://bet-on-server.onrender.com'
}

const development = {
    serverDomain: 'http://192.168.0.108:3001'
}

// TODO: Delete this before production
const dummyUser = {
    id: 'test',
    email: 'test@test.com',
    username: 't_fiander',
    fullname: 'Tom Fiander',
    phone_number: '5555555555',
    img_url: ''
}

/*
const teamIcons = {
    'beer': <GiBeerStein/>,
    'football': <GiAmericanFootballBall/>,
    'anchor': <GiAnchor/>,
    'astronaut': <GiAstronautHelmet/>,
    'banana': <GiBananaPeeled/>,
    'basketball': <GiBasketballBall/>,
    'axe': <GiBattleAxe/>,
    'bison': <GiBison/>,
}
*/

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

const teamIcons = {
    'beer': 'beer',
    'football': 'football-ball',
    'anchor': 'anchor',
    'astronaut': 'user-astronaut',
    'basketball': 'basketball-ball',
    'dog': 'dog',
    'cat': 'cat',
}

const teamNames = ['Kevin', 'Tom', 'Shaun', 'Bryce', 'Anthony', 'Jill', 'Emily', 'Chris'];

function generateBet(betNum) {
    var bet = {
        id: `test_bet${betNum}`,
        owner_id: 'test',
        title: `Bet #${betNum}`,
        description: 'This is a test bet',
        bet_info: 
            {
                type: 'Moneyline',
                isCustomWager: false,
                teamsWithOdds: [
                    {
                        name: teamNames[Math.floor(Math.random() * teamNames.length)],
                        odds: (Math.random() * 5.0).toFixed(2),
                        icon: randomProperty(teamIcons),
                    },
                    {
                        name: teamNames[Math.floor(Math.random() * teamNames.length)],
                        odds: (Math.random() * 5.0).toFixed(2),
                        icon: randomProperty(teamIcons),
                    }
                ],
            },
        created_at: Date.now(),
        last_edited: Date.now(),
        expiry_datetime: Date.now() + (5 * 24 * 60 * 60 * 1000),
    };

    return bet;
}

const dummyBets = [
    generateBet(1), generateBet(2), generateBet(3), generateBet(4),
]

export { production, development, dummyUser, dummyBets, teamIcons };