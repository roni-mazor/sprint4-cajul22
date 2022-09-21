

const user1 = { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" }
const user2 = { "_id": "u121", "fullname": "Sheldon barry", "username": "Sheldon", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" }
const user3 = { "_id": "u122", "fullname": "Omer Rafaeli", "username": "Omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" }
const user4 = { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" }
const user5 = { "_id": "u101", "fullname": "Helen Dora", "username": "Heleni", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "http://res.cloudinary.com/duvl8dbu9/image/upload/v1662981650/qf57iuporlxueuicl7sn.jpg" }
const user6 = { "_id": "u102", "fullname": "lenny Terry", "username": "TerryBomb", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" }
const user7 = { "_id": "u103", "fullname": "Abbi Abambi", "username": "Abbs", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?b=1&k=20&m=1154642632&s=612x612&w=0&h=StstyxyDdiJQgUSTlaWv2ITXSMb029KzXijHtsaTQEg=" }
const user8 = { "_id": "u104", "fullname": "Tomer Levi", "username": "Tomer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630691/ahdrpmyycxwmeqncicgk.jpg" }
const user9 = { "_id": "u105", "fullname": "Josh boyers", "username": "Josh", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630434/aucf8mtnn69h5axcnf4i.png" }
const user10 = { "_id": "u106", "fullname": "Eran Telem", "username": "Eran123", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "/static/media/guest-img.4a000e6c2f82b9781b22d2b01718e785.svg" }
const user11 = { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
const user12 = { "_id": "u108", "fullname": "Dana Goren", "username": "Dana", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" }
const user13 = { "_id": "u109", "fullname": "Itamar Sahar", "username": "Itamar", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJw_xK_EUrn7JEsErZjeRKRPpsraXIsvLeLK-xRM=s96-c" }
const user14 = { "_id": "u110", "fullname": "Josh bar", "username": "Josh", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" }
const user15 = { "_id": "u111", "fullname": "Alex Delcore", "username": "Alex", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630602/ks10to0ysyefdddgh8ur.jpg" }
const user16 = { "_id": "u112", "fullname": "Mila Lambert", "username": "Mil", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" }
const user17 = { "_id": "u113", "fullname": "Torry Telem", "username": "Torry", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" }




const board1 = {
    "_id": "b101",
    "title": "Happy Hour",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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
    "title": "Volunteering",
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
        { "_id": "u122", "fullname": "Omer Rafaeli", "username": "Omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u104", "fullname": "Tomer Levi", "username": "Tomer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630691/ahdrpmyycxwmeqncicgk.jpg" },
        { "_id": "u108", "fullname": "Dana Goren", "username": "Dana", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" },
        { "_id": "u112", "fullname": "Mila Lambert", "username": "Mil", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" },
        { "_id": "u113", "fullname": "Torry Telem", "username": "Torry", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" }
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
    "title": "App Ideas",
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
        { "_id": "u122", "fullname": "Omer Rafaeli", "username": "Omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u102", "fullname": "lenny Terry", "username": "TerryBomb", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" },
        { "_id": "u103", "fullname": "Abbi Abambi", "username": "Abbs", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?b=1&k=20&m=1154642632&s=612x612&w=0&h=StstyxyDdiJQgUSTlaWv2ITXSMb029KzXijHtsaTQEg=" },
        { "_id": "u105", "fullname": "Josh boyers", "username": "Josh", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630434/aucf8mtnn69h5axcnf4i.png" }
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
                    "title": "happy hour",
                    "labelIds": [],
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

const board4 = {
    "_id": "b101",
    "title": "Future Plans",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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

const board5 = {
    "_id": "b101",
    "title": "Diat with Friends",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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

const board6 = {
    "_id": "b101",
    "title": "My Blog",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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

const board7 = {
    "_id": "b101",
    "title": "My Todos",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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

const board8 = {
    "_id": "b101",
    "title": "Doggy Sitting",
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
        { "_id": "u120", "fullname": "Yoav Sher", "username": "Yoav", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u100", "fullname": "tal Tarbelsi", "username": "Tal", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://media.istockphoto.com/photos/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera-picture-id1305462732?b=1&k=20&m=1305462732&s=170667a&w=0&h=PrX1YvXLF8QwgvTmcqG6BFqe9ugwNb_rtsLi38R9pFs=" },
        { "_id": "u107", "fullname": "Jonatan Ben Zeev", "username": "Johnny", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://lh3.googleusercontent.com/a/AATXAJybBPep-OyEAoCRaZ54KNgPMeiuzJfUiEOs2Icz=s96-c" }
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

const board9 = {
    "_id": "b102",
    "title": "Our App",
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
        { "_id": "u122", "fullname": "Omer Rafaeli", "username": "Omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u104", "fullname": "Tomer Levi", "username": "Tomer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630691/ahdrpmyycxwmeqncicgk.jpg" },
        { "_id": "u108", "fullname": "Dana Goren", "username": "Dana", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" },
        { "_id": "u112", "fullname": "Mila Lambert", "username": "Mil", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" },
        { "_id": "u113", "fullname": "Torry Telem", "username": "Torry", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" }
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

const board10 = {
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
        { "_id": "u122", "fullname": "Omer Rafaeli", "username": "Omer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png" },
        { "_id": "u104", "fullname": "Tomer Levi", "username": "Tomer", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://res.cloudinary.com/skello-dev-learning/image/upload/v1643630691/ahdrpmyycxwmeqncicgk.jpg" },
        { "_id": "u108", "fullname": "Dana Goren", "username": "Dana", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" },
        { "_id": "u112", "fullname": "Mila Lambert", "username": "Mil", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" },
        { "_id": "u113", "fullname": "Torry Telem", "username": "Torry", "password": "123", "score": 10000, "isAdmin": true, "imgUrl": "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" }
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
export const boards = [
    { ...board1 },
    { ...board2 },
    { ...board3 },
    // { ...board4 },
    // { ...board5 },
    // { ...board6 },
    // { ...board7 },
    // { ...board8 },
    // { ...board9 },
    // { ...board10 },

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
    { ...user11 },
    { ...user12 },
    { ...user13 },
    { ...user14 },
    { ...user15 },
    { ...user16 },
    { ...user17 },

]