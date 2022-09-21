

const user1 = { "_id": "u120", "fullname": "yoav", "username": "yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" }
const user2 = { "_id": "u121", "fullname": "roni", "username": "roni", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" }
const user3 = { "_id": "u122", "fullname": "omer", "username": "omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" }
const user4 = { "_id": "u100", "fullname": "taal Tarasdgblus", "username": "taltal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" }
const user5 = { "_id": "u101", "fullname": "tabu Tarablus", "username": "tabu123", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
const user6 = { "_id": "u102", "fullname": "lenny Tarablus", "username": "lenon", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" }
const user7 = { "_id": "u103", "fullname": "Abi Abambi", "username": "bambi", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" }
const user8 = { "_id": "u104", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
const user9 = { "_id": "u105", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
const user10 = { "_id": "u106", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
const user11 = { "_id": "u107", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }




const board1 = {
    "_id": "b101",
    "title": "labbbbels",
    "isStarred": false,
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u103",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "customBackgrounds": [],
    "style": {
        backgroundImage: 'url(https://images.unsplash.com/photo-1662705510599-dcd4eb70c745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
    }
    ,
    "labels": [
        {
            "id": "l101",
            "title": "",
            "color": "#5AAC44"
        },
        {
            "id": "l102",
            "title": "",
            "color": "#E6C60D;"
        },
        {
            "id": "l103",
            "title": "",
            "color": "#E79217"
        },
        {
            "id": "l104",
            "title": "",
            "color": "#CF513D"
        },
        {
            "id": "l105",
            "title": "",
            "color": "#CD8DE5"
        },
        {
            "id": "l106",
            "title": "",
            "color": "#5BA4CF"
        }
    ],
    "members": [
        { "_id": "u122", "fullname": "omer", "username": "omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "taal Tarasdgblus", "username": "taltal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" },
        { "_id": "u101", "fullname": "tabu Tarablus", "username": "tabu123", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
    ],
    "groups": [
        {
            "id": "g101",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c101",
                    "labelIds": [],
                    "title": "Replace logo",
                },
                {
                    "id": "c102",
                    "labelIds": [],
                    "title": "Add Samples",
                }
            ],
            "style": {}
        },
        {
            "id": "g102",
            "title": "Group 2",
            "tasks": [
                {
                    "id": "c103",
                    "labelIds": [],
                    "title": "Do that",
                    "archivedAt": 1589983468418,
                }
            ],
            "style": {}
        }
    ],
    "activities": [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "labelIds": [],
                "title": "Replace Logo",
            }
        }
    ],
}
const board2 = {
    "_id": "b102",
    "title": "Robot dev proj",
    "isStarred": true,
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u103",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "style": {
        backgroundImage: 'url(https://images.unsplash.com/photo-1662705510599-dcd4eb70c745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
    },
    "labels": [
        {
            "id": "l101",
            "title": "",
            "color": "#5AAC44"
        },
        {
            "id": "l102",
            "title": "",
            "color": "#E6C60D"
        },
        {
            "id": "l103",
            "title": "",
            "color": "#E79217"
        },
        {
            "id": "l104",
            "title": "",
            "color": "#CF513D"
        },
        {
            "id": "l105",
            "title": "",
            "color": "#CD8DE5"
        },
        {
            "id": "l106",
            "title": "",
            "color": "#5BA4CF"
        }
    ],
    "members": [
        { "_id": "u121", "fullname": "roni", "username": "roni", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "taal Tarasdgblus", "username": "taltal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" },
        { "_id": "u102", "fullname": "lenny Tarablus", "username": "lenon", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" },
        { "_id": "u107", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
    ],
    "groups": [
        {
            "id": "g10431",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c10431",
                    "title": "Replace logo",
                    "labelIds": ["l101", "l102"],

                },
                {
                    "id": "c102121",
                    "title": "Add Samples",
                    "labelIds": ["l101", "l102"],
                }
            ],
            "style": {}
        },
        {
            "id": "g1042",
            "title": "Group 2",
            "tasks": [
                {
                    "id": "c1033",
                    "title": "Do that",
                    "labelIds": ["l101", "l102"],
                }
            ],
            "style": {}
        }, {
            "id": "g1031",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c1012",
                    "title": "Replace logo",
                    "labelIds": ["l101", "l102"],
                },
                {
                    "id": "c1011",
                    "title": "Add Samples",
                    "labelIds": ["l101", "l102"],
                }
            ],
            "style": {}
        }, {
            "id": "g120",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c401",
                    "labelIds": [],
                    "title": "Replace logo",
                },
                {
                    "id": "c402",
                    "labelIds": [],
                    "title": "Add Samples",
                }
            ],
            "style": {}
        }, {
            "id": "g110",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c205",
                    "labelIds": [],
                    "title": "Replace logo",
                },
                {
                    "id": "c204",
                    "labelIds": [],
                    "title": "Add Samples",
                }, {
                    "id": "c202",
                    "labelIds": [],
                    "title": "Replace logo",
                }, {
                    "id": "c203",
                    "labelIds": [],
                    "title": "Replace logo",
                }, {
                    "id": "c201",
                    "labelIds": [],
                    "title": "Replace logo",
                },
            ],
            "style": {}
        },
    ],
    "activities": [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "labelIds": [],
                "title": "Replace Logo",
            }
        }
    ],
}
const board3 = {
    "_id": "b103",
    "title": "Robot dev proj",
    "isStarred": false,
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u103",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "style": {
        backgroundImage: 'url(https://images.unsplash.com/photo-1662705510599-dcd4eb70c745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
    },
    "labels": [
        {
            "id": "l101",
            "title": "Done",
            "color": "#61bd4f"
        },
        {
            "id": "l102",
            "title": "Progress",
            "color": "#61bd33"
        }
    ],
    "members": [
        { "_id": "u120", "fullname": "yoav", "username": "yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u121", "fullname": "roni", "username": "roni", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u101", "fullname": "tabu Tarablus", "username": "tabu123", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" },
        { "_id": "u105", "fullname": "Roni Mazor", "username": "roniron", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" },
    ],
    "groups": [
        {
            "id": "g101",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [
                {
                    "id": "c101",
                    "labelIds": [],
                    "title": "Replace logo",
                },
                {
                    "id": "c102",
                    "labelIds": [],
                    "title": "Add Samples",
                }
            ],
            "style": {}
        },
        {
            "id": "g102",
            "title": "Group 2",
            "tasks": [
                {
                    "id": "c103",
                    "title": "Do that",
                    "labelIds": [],
                    "archivedAt": 1589983468418,
                }
            ],
            "style": {}
        }
    ],
    "activities": [
        {
            "id": "a101",
            "txt": "Changed Color",
            "createdAt": 154514,
            "byMember": {
                "_id": "u103",
                "fullname": "Abi Abambi",
                "imgUrl": "http://some-img"
            },
            "task": {
                "id": "c101",
                "labelIds": [],
                "title": "Replace Logo",
            }
        }
    ],
}

export const boards = [
    { ...board1 },
    { ...board2 },
    { ...board3 },
]

export const users = [
    { ...user1 },
    { ...user2 },
    { ...user3 },
    { ...user4 },
    { ...user5 },
    { ...user6 },
    { ...user7 },
    { ...user8 },
    { ...user9 },
    { ...user10 },
    { ...user11 }
]