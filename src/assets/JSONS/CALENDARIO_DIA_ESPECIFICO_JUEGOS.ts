const CALEND1 = JSON.parse(` {
<<<<<<< HEAD
  "copyright": "Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt",
  "totalItems": 18,
  "totalEvents": 0,
  "totalGames": 18,
  "totalGamesInProgress": 0,
  "dates": [{
    "date": "2019-03-09",
    "totalItems": 18,
    "totalEvents": 0,
    "totalGames": 18,
    "totalGamesInProgress": 0,
    "games": [{
      "gamePk": 565019,
      "link": "/api/v1/game/565019/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 6,
            "losses": 8,
            "pct": ".429"
          },
          "score": 0,
          "team": {
            "id": 121,
            "name": "New York Mets",
            "link": "/api/v1/teams/121",
            "season": 2019,
            "venue": {
              "id": 3289,
              "name": "Citi Field",
              "link": "/api/v1/venues/3289"
            },
            "teamCode": "nyn",
            "fileCode": "nym",
            "abbreviation": "NYM",
            "teamName": "Mets",
            "locationName": "New York",
            "firstYearOfPlay": "1962",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 204,
              "name": "National League East",
              "link": "/api/v1/divisions/204"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "NY Mets",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 554430,
            "fullName": "Zack Wheeler",
            "link": "/api/v1/people/554430",
            "firstName": "Zachary",
            "lastName": "Wheeler",
            "primaryNumber": "45",
            "birthDate": "1990-05-30",
            "currentAge": 28,
            "birthCity": "Smyrna",
            "birthStateProvince": "GA",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 195,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Zack",
            "middleName": "Harrison",
            "boxscoreName": "Wheeler",
            "nickName": "Wheels",
            "draftYear": 2009,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 5,
                "runs": 5,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 1,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 5,
                "atBats": 13,
                "caughtStealing": 0,
                "stolenBases": 2,
                "stolenBasePercentage": "1.000",
                "era": "10.13",
                "inningsPitched": "2.2",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 3,
                "whip": "2.63",
                "outs": 8,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 1,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.50",
                "strikeoutsPer9Inn": "3.38",
                "walksPer9Inn": "6.75",
                "hitsPer9Inn": "16.88",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2013-06-18",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Zack Wheeler",
            "nameSlug": "zack-wheeler-554430",
            "firstLastName": "Zack Wheeler",
            "lastFirstName": "Wheeler, Zack",
            "lastInitName": "Wheeler, Z",
            "initLastName": "Z Wheeler",
            "fullFMLName": "Zachary Harrison Wheeler",
            "fullLFMName": "Wheeler, Zachary Harrison",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 6,
            "losses": 8,
            "pct": ".429"
          },
          "score": 0,
          "team": {
            "id": 111,
            "name": "Boston Red Sox",
            "link": "/api/v1/teams/111",
            "season": 2019,
            "venue": {
              "id": 3,
              "name": "Fenway Park",
              "link": "/api/v1/venues/3"
            },
            "teamCode": "bos",
            "fileCode": "bos",
            "abbreviation": "BOS",
            "teamName": "Red Sox",
            "locationName": "Boston",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Boston",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 593958,
            "fullName": "Eduardo Rodriguez",
            "link": "/api/v1/people/593958",
            "firstName": "Eduardo",
            "lastName": "Rodriguez",
            "primaryNumber": "57",
            "birthDate": "1993-04-07",
            "currentAge": 25,
            "birthCity": "Valencia",
            "birthCountry": "Venezuela",
            "height": "6' 2",
            "weight": 220,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Eduardo",
            "middleName": "Jose",
            "boxscoreName": "Rodriguez, E",
            "nickName": "El Gualo",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 6,
                "runs": 2,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 5,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 6,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "4.50",
                "inningsPitched": "4.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.75",
                "outs": 12,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "5.00",
                "strikeoutsPer9Inn": "11.25",
                "walksPer9Inn": "2.25",
                "hitsPer9Inn": "13.50",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2015-05-28",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "L",
              "description": "Left"
            },
            "nameFirstLast": "Eduardo Rodriguez",
            "nameSlug": "eduardo-rodriguez-593958",
            "firstLastName": "Eduardo Rodriguez",
            "lastFirstName": "Rodriguez, Eduardo",
            "lastInitName": "Rodriguez, E",
            "initLastName": "E Rodriguez",
            "fullFMLName": "Eduardo Jose Rodriguez",
            "fullLFMName": "Rodriguez, Eduardo Jose",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 4309,
        "name": "JetBlue Park",
        "link": "/api/v1/venues/4309"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&orgid=21665&pid=8651356"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&orgid=21665&pid=8651356"
        }
      }],
      "content": {
        "link": "/api/v1/game/565019/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 63220493,
              "contentId": "64591376-4fa9-4347-90de-63921eadccda",
              "mediaId": "d8531605-c3bf-4cb8-8a64-7d847df8e94c",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "111",
              "callLetters": "NESN",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 140532082,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 63220493,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "WEEI 93.7",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 63220493,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "NESN",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 63220493,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 140532082,
              "contentId": "4d836a7e-49dc-4210-8b79-abfc060f7c72",
              "mediaId": "6d50089c-2928-43f1-8d4d-a8914ec13be4",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "111",
              "callLetters": "WEEI",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565019-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566172,
      "link": "/api/v1/game/566172/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 7,
            "losses": 6,
            "pct": ".538"
          },
          "score": 0,
          "team": {
            "id": 142,
            "name": "Minnesota Twins",
            "link": "/api/v1/teams/142",
            "season": 2019,
            "venue": {
              "id": 3312,
              "name": "Target Field",
              "link": "/api/v1/venues/3312"
            },
            "teamCode": "min",
            "fileCode": "min",
            "abbreviation": "MIN",
            "teamName": "Twins",
            "locationName": "Minneapolis",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 202,
              "name": "American League Central",
              "link": "/api/v1/divisions/202"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Minnesota",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 527048,
            "fullName": "Martin Perez",
            "link": "/api/v1/people/527048",
            "firstName": "Martin",
            "lastName": "Perez",
            "primaryNumber": "33",
            "birthDate": "1991-04-04",
            "currentAge": 27,
            "birthCity": "Guanare",
            "birthCountry": "Venezuela",
            "height": "6' 0",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Martin",
            "boxscoreName": "Pérez, M",
            "nickName": "El De Las Matas",
            "pronunciation": "mahr-TEEN PAIR-ehz",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 2,
                "groundOuts": 8,
                "runs": 2,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 4,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 5,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "3.60",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.00",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2012-06-27",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "L",
              "description": "Left"
            },
            "nameFirstLast": "Martin Perez",
            "nameSlug": "martin-perez-527048",
            "firstLastName": "Martin Pérez",
            "lastFirstName": "Pérez, Martin",
            "lastInitName": "Pérez, M",
            "initLastName": "M Pérez",
            "fullFMLName": "Martin Pérez",
            "fullLFMName": "Pérez, Martin",
            "strikeZoneTop": 3.371,
            "strikeZoneBottom": 1.535
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 7,
            "losses": 7,
            "pct": ".500"
          },
          "score": 0,
          "team": {
            "id": 134,
            "name": "Pittsburgh Pirates",
            "link": "/api/v1/teams/134",
            "season": 2019,
            "venue": {
              "id": 31,
              "name": "PNC Park",
              "link": "/api/v1/venues/31"
            },
            "teamCode": "pit",
            "fileCode": "pit",
            "abbreviation": "PIT",
            "teamName": "Pirates",
            "locationName": "Pittsburgh",
            "firstYearOfPlay": "1882",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Pittsburgh",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605280,
            "fullName": "Clay Holmes",
            "link": "/api/v1/people/605280",
            "firstName": "Clayton",
            "lastName": "Holmes",
            "primaryNumber": "52",
            "birthDate": "1993-03-27",
            "currentAge": 25,
            "birthCity": "Dothan",
            "birthStateProvince": "AL",
            "birthCountry": "USA",
            "height": "6' 5",
            "weight": 225,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Clay",
            "middleName": "W.",
            "boxscoreName": "Holmes, C",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 4,
                "gamesStarted": 2,
                "groundOuts": 3,
                "runs": 2,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 5,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 14,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "4.50",
                "inningsPitched": "4.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.75",
                "outs": 12,
                "gamesPitched": 4,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 1,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 5,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.80",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "11.25",
                "hitsPer9Inn": "4.50",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-04-06",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Clay Holmes",
            "nameSlug": "clay-holmes-605280",
            "firstLastName": "Clay Holmes",
            "lastFirstName": "Holmes, Clay",
            "lastInitName": "Holmes, C",
            "initLastName": "C Holmes",
            "fullFMLName": "Clayton W. Holmes",
            "fullLFMName": "Holmes, Clayton W.",
            "strikeZoneTop": 3.575,
            "strikeZoneBottom": 1.681
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2526,
        "name": "LECOM Park",
        "link": "/api/v1/venues/2526"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "http://mpv.tickets.com/?orgId=20375&agency=MLBST_MPV&pid=8634987#/event"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "http://mpv.tickets.com/?orgId=20375&agency=MLBST_MPV&pid=8634987#/event"
        }
      }],
      "content": {
        "link": "/api/v1/game/566172/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 268377086,
              "contentId": "a69aa882-153a-4a90-90d9-fafe8c3dd338",
              "mediaId": "f6533a11-1dff-444c-ac8b-40a3d04fb7fb",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "134",
              "callLetters": "ATTP",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 268377086,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "ATT SportsNet-PIT",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 268377086,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 53149393,
              "contentId": "8cd4069e-451f-487c-996c-094695fcf647",
              "mediaId": "47bde682-eb28-4ef8-8d6b-48a14e8fe60c",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "142",
              "callLetters": "WCCO",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566172-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566655,
      "link": "/api/v1/game/566655/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 8,
            "losses": 5,
            "pct": ".615"
          },
          "score": 0,
          "team": {
            "id": 110,
            "name": "Baltimore Orioles",
            "link": "/api/v1/teams/110",
            "season": 2019,
            "venue": {
              "id": 2,
              "name": "Oriole Park at Camden Yards",
              "link": "/api/v1/venues/2"
            },
            "teamCode": "bal",
            "fileCode": "bal",
            "abbreviation": "BAL",
            "teamName": "Orioles",
            "locationName": "Baltimore",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Baltimore",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605164,
            "fullName": "Dylan Bundy",
            "link": "/api/v1/people/605164",
            "firstName": "Dylan",
            "lastName": "Bundy",
            "primaryNumber": "37",
            "birthDate": "1992-11-15",
            "currentAge": 26,
            "birthCity": "Tulsa",
            "birthStateProvince": "OK",
            "birthCountry": "USA",
            "height": "6' 1",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Dylan",
            "middleName": "Matthew",
            "boxscoreName": "Bundy",
            "nickName": "Dilly",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 3,
                "runs": 4,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 2,
                "strikeOuts": 5,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 9,
                "atBats": 23,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "7.20",
                "inningsPitched": "5.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 4,
                "whip": "1.80",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 7,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "16.20",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2012-09-23",
            "batSide": {
              "code": "S",
              "description": "Switch"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Dylan Bundy",
            "nameSlug": "dylan-bundy-605164",
            "firstLastName": "Dylan Bundy",
            "lastFirstName": "Bundy, Dylan",
            "lastInitName": "Bundy, D",
            "initLastName": "D Bundy",
            "fullFMLName": "Dylan Matthew Bundy",
            "fullLFMName": "Bundy, Dylan Matthew",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": true,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 6,
            "losses": 8,
            "pct": ".429"
          },
          "score": 0,
          "team": {
            "id": 139,
            "name": "Tampa Bay Rays",
            "link": "/api/v1/teams/139",
            "season": 2019,
            "venue": {
              "id": 12,
              "name": "Tropicana Field",
              "link": "/api/v1/venues/12"
            },
            "teamCode": "tba",
            "fileCode": "tb",
            "abbreviation": "TB",
            "teamName": "Rays",
            "locationName": "Tampa Bay",
            "firstYearOfPlay": "1998",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Tampa Bay",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 552640,
            "fullName": "Andrew Kittredge",
            "link": "/api/v1/people/552640",
            "firstName": "Andrew",
            "lastName": "Kittredge",
            "primaryNumber": "36",
            "birthDate": "1990-03-17",
            "currentAge": 28,
            "birthCity": "Spokane",
            "birthStateProvince": "WA",
            "birthCountry": "USA",
            "height": "6' 1",
            "weight": 235,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Andrew",
            "boxscoreName": "Kittredge",
            "draftYear": 2008,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 5,
                "gamesStarted": 1,
                "groundOuts": 7,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 1,
                "atBats": 19,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "0.00",
                "inningsPitched": "6.0",
                "wins": 0,
                "losses": 0,
                "saves": 1,
                "saveOpportunities": 1,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "0.50",
                "outs": 18,
                "gamesPitched": 5,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 1,
                "pickoffs": 0,
                "airOuts": 7,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "2.00",
                "strikeoutsPer9Inn": "6.00",
                "walksPer9Inn": "3.00",
                "hitsPer9Inn": "1.50",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2017-07-18",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Andrew Kittredge",
            "nameSlug": "andrew-kittredge-552640",
            "firstLastName": "Andrew Kittredge",
            "lastFirstName": "Kittredge, Andrew",
            "lastInitName": "Kittredge, A",
            "initLastName": "A Kittredge",
            "fullFMLName": "Andrew Kittredge",
            "fullLFMName": "Kittredge, Andrew",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2534,
        "name": "Charlotte Sports Park",
        "link": "/api/v1/venues/2534"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&pid=8653755"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&pid=8653755"
        }
      }],
      "content": {
        "link": "/api/v1/game/566655/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 100125683,
              "contentId": "a83c7890-ae85-4d99-9c42-c50bcb68ed9b",
              "mediaId": "2199c013-2b33-4ae8-b8a1-4766f988dfc1",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "139",
              "callLetters": "FS SUN",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 34192414,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 100125683,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "WDAE 620 AM /95.3 FM",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 100125683,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "Fox Sports Sun",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 100125683,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 34192414,
              "contentId": "43c88723-db34-4d51-91ea-f7a8c1379990",
              "mediaId": "4ea07f9e-8d24-410e-ae48-c93da5d74ba2",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "110",
              "callLetters": "MLB.com",
              "language": "en"
            }, {
              "id": 105273757,
              "contentId": "c8b3817b-caec-48f0-af9b-b1a5f9616554",
              "mediaId": "596b8845-cb07-4dd5-b824-fd908ab0e7e5",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "139",
              "callLetters": "WDAE",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566655-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565501,
      "link": "/api/v1/game/565501/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 8,
            "losses": 6,
            "pct": ".571"
          },
          "score": 0,
          "team": {
            "id": 144,
            "name": "Atlanta Braves",
            "link": "/api/v1/teams/144",
            "season": 2019,
            "venue": {
              "id": 4705,
              "name": "SunTrust Park",
              "link": "/api/v1/venues/4705"
            },
            "teamCode": "atl",
            "fileCode": "atl",
            "abbreviation": "ATL",
            "teamName": "Braves",
            "locationName": "Atlanta",
            "firstYearOfPlay": "1871",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 204,
              "name": "National League East",
              "link": "/api/v1/divisions/204"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Atlanta",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 656794,
            "fullName": "Sean Newcomb",
            "link": "/api/v1/people/656794",
            "firstName": "Sean",
            "lastName": "Newcomb",
            "primaryNumber": "15",
            "birthDate": "1993-06-12",
            "currentAge": 25,
            "birthCity": "Brockton",
            "birthStateProvince": "MA",
            "birthCountry": "USA",
            "height": "6' 5",
            "weight": 255,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Sean",
            "middleName": "William",
            "boxscoreName": "Newcomb",
            "nickName": "Newk",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 7,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 3,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 15,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "0.00",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "1.00",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "1.33",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "5.40",
                "hitsPer9Inn": "3.60",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 1,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2017-06-10",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "L",
              "description": "Left"
            },
            "nameFirstLast": "Sean Newcomb",
            "nameSlug": "sean-newcomb-656794",
            "firstLastName": "Sean Newcomb",
            "lastFirstName": "Newcomb, Sean",
            "lastInitName": "Newcomb, S",
            "initLastName": "S Newcomb",
            "fullFMLName": "Sean William Newcomb",
            "fullLFMName": "Newcomb, Sean William",
            "strikeZoneTop": 3.575,
            "strikeZoneBottom": 1.681
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 7,
            "losses": 8,
            "pct": ".467"
          },
          "score": 0,
          "team": {
            "id": 116,
            "name": "Detroit Tigers",
            "link": "/api/v1/teams/116",
            "season": 2019,
            "venue": {
              "id": 2394,
              "name": "Comerica Park",
              "link": "/api/v1/venues/2394"
            },
            "teamCode": "det",
            "fileCode": "det",
            "abbreviation": "DET",
            "teamName": "Tigers",
            "locationName": "Detroit",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 202,
              "name": "American League Central",
              "link": "/api/v1/divisions/202"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Detroit",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605242,
            "fullName": "Michael Fulmer",
            "link": "/api/v1/people/605242",
            "firstName": "Michael",
            "lastName": "Fulmer",
            "primaryNumber": "32",
            "birthDate": "1993-03-15",
            "currentAge": 25,
            "birthCity": "Oklahoma City",
            "birthStateProvince": "OK",
            "birthCountry": "USA",
            "height": "6' 3",
            "weight": 246,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Michael",
            "middleName": "Joseph",
            "boxscoreName": "Fulmer, M",
            "nickName": "The Plumber",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 4,
                "runs": 5,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 2,
                "strikeOuts": 3,
                "baseOnBalls": 3,
                "intentionalWalks": 0,
                "hits": 7,
                "atBats": 22,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "9.00",
                "inningsPitched": "5.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 5,
                "whip": "2.00",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 8,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "1.00",
                "strikeoutsPer9Inn": "5.40",
                "walksPer9Inn": "5.40",
                "hitsPer9Inn": "12.60",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-04-29",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Michael Fulmer",
            "nameSlug": "michael-fulmer-605242",
            "firstLastName": "Michael Fulmer",
            "lastFirstName": "Fulmer, Michael",
            "lastInitName": "Fulmer, M",
            "initLastName": "M Fulmer",
            "fullFMLName": "Michael Joseph Fulmer",
            "fullLFMName": "Fulmer, Michael Joseph",
            "strikeZoneTop": 3.49,
            "strikeZoneBottom": 1.601
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2511,
        "name": "Publix Field at Joker Marchant Stadium",
        "link": "/api/v1/venues/2511"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=25241&agency=MLBST&pid=8658134"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=25241&agency=MLBST&pid=8658134"
        }
      }],
      "content": {
        "link": "/api/v1/game/565501/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 257841505,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 257841505,
              "contentId": "78c1a075-5504-4a15-8f8f-3e523174403a",
              "mediaId": "61f6cb15-c996-48fb-93db-ebb03578b032",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "116",
              "callLetters": "97.1",
              "language": "en"
            }, {
              "id": 252675500,
              "contentId": "e4741ea5-d037-4636-8c3c-51410d565d67",
              "mediaId": "0ffffee7-96fa-490b-9ce4-d4d9ff27d8a4",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "144",
              "callLetters": "WCNN",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565501-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566559,
      "link": "/api/v1/game/566559/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 7,
            "losses": 6,
            "pct": ".538"
          },
          "score": 0,
          "team": {
            "id": 117,
            "name": "Houston Astros",
            "link": "/api/v1/teams/117",
            "season": 2019,
            "venue": {
              "id": 2392,
              "name": "Minute Maid Park",
              "link": "/api/v1/venues/2392"
            },
            "teamCode": "hou",
            "fileCode": "hou",
            "abbreviation": "HOU",
            "teamName": "Astros",
            "locationName": "Houston",
            "firstYearOfPlay": "1962",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Houston",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 543521,
            "fullName": "Collin McHugh",
            "link": "/api/v1/people/543521",
            "firstName": "Collin",
            "lastName": "McHugh",
            "primaryNumber": "31",
            "birthDate": "1987-06-19",
            "currentAge": 31,
            "birthCity": "Napierville",
            "birthStateProvince": "IL",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 190,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Collin",
            "middleName": "Alexander",
            "boxscoreName": "McHugh",
            "nickName": "Mu Q",
            "draftYear": 2008,
            "pronunciation": "mik-hyoo",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 1,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 4,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "9.00",
                "inningsPitched": "1.0",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "2.00",
                "outs": 3,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 1,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "0.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "18.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2012-08-23",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Collin McHugh",
            "nameSlug": "collin-mchugh-543521",
            "firstLastName": "Collin McHugh",
            "lastFirstName": "McHugh, Collin",
            "lastInitName": "McHugh, C",
            "initLastName": "C McHugh",
            "fullFMLName": "Collin Alexander McHugh",
            "fullLFMName": "McHugh, Collin Alexander",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": false,
          "seriesNumber": 13,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 6,
            "losses": 6,
            "pct": ".500"
          },
          "score": 0,
          "team": {
            "id": 138,
            "name": "St. Louis Cardinals",
            "link": "/api/v1/teams/138",
            "season": 2019,
            "venue": {
              "id": 2889,
              "name": "Busch Stadium",
              "link": "/api/v1/venues/2889"
            },
            "teamCode": "sln",
            "fileCode": "stl",
            "abbreviation": "STL",
            "teamName": "Cardinals",
            "locationName": "St. Louis",
            "firstYearOfPlay": "1892",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "St. Louis",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 425794,
            "fullName": "Adam Wainwright",
            "link": "/api/v1/people/425794",
            "firstName": "Adam",
            "lastName": "Wainwright",
            "primaryNumber": "50",
            "birthDate": "1981-08-30",
            "currentAge": 37,
            "birthCity": "Brunswick",
            "birthStateProvince": "GA",
            "birthCountry": "USA",
            "height": "6' 7",
            "weight": 235,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Adam",
            "middleName": "Parrish",
            "boxscoreName": "Wainwright",
            "nickName": "Waino",
            "draftYear": 2000,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 4,
                "runs": 2,
                "doubles": 2,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 4,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 5,
                "atBats": 19,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "3.60",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.20",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 6,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "4.00",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "1.80",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2005-09-11",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Adam Wainwright",
            "nameSlug": "adam-wainwright-425794",
            "firstLastName": "Adam Wainwright",
            "lastFirstName": "Wainwright, Adam",
            "lastInitName": "Wainwright, A",
            "initLastName": "A Wainwright",
            "fullFMLName": "Adam Parrish Wainwright",
            "fullLFMName": "Wainwright, Adam Parrish",
            "strikeZoneTop": 3.756,
            "strikeZoneBottom": 1.746
          },
          "splitSquad": false,
          "seriesNumber": 14,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2520,
        "name": "Roger Dean Chevrolet Stadium",
        "link": "/api/v1/venues/2520"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&orgId=48749&pid=8644755"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&orgId=48749&pid=8644755"
        }
      }],
      "content": {
        "link": "/api/v1/game/566559/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 82575271,
              "contentId": "0071bef4-d91a-47b0-ad91-d536e5203fb8",
              "mediaId": "fdb3e4ab-abd7-430c-9e3e-aade0a8ab21a",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "138",
              "callLetters": "FSMW",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 219562559,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 82575271,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "FS-M+",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 82575271,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "KMOX 1120",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 82575271,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 219562559,
              "contentId": "0c576b61-e393-4c73-ad92-d2a9b6a4e741",
              "mediaId": "295db6aa-a0a6-4652-afdc-d1da4e010cc4",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "117",
              "callLetters": "KBME",
              "language": "en"
            }, {
              "id": 141916631,
              "contentId": "201552bd-2926-470c-add7-5dfc5e99f7c7",
              "mediaId": "4d077d90-9e8e-4a94-86c6-dafef512fe9c",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "138",
              "callLetters": "KMOX",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566559-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 2,
      "seriesGameNumber": 2,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 567050,
      "link": "/api/v1/game/567050/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T18:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 7,
            "losses": 6,
            "pct": ".538"
          },
          "score": 0,
          "team": {
            "id": 141,
            "name": "Toronto Blue Jays",
            "link": "/api/v1/teams/141",
            "season": 2019,
            "venue": {
              "id": 14,
              "name": "Rogers Centre",
              "link": "/api/v1/venues/14"
            },
            "teamCode": "tor",
            "fileCode": "tor",
            "abbreviation": "TOR",
            "teamName": "Blue Jays",
            "locationName": "Toronto",
            "firstYearOfPlay": "1977",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Toronto",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 533167,
            "fullName": "Matt Shoemaker",
            "link": "/api/v1/people/533167",
            "firstName": "Matthew",
            "lastName": "Shoemaker",
            "primaryNumber": "34",
            "birthDate": "1986-09-27",
            "currentAge": 32,
            "birthCity": "Wyandotte",
            "birthStateProvince": "MI",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 225,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Matt",
            "middleName": "David",
            "boxscoreName": "Shoemaker",
            "nickName": "Shoe",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 5,
                "runs": 3,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 2,
                "strikeOuts": 6,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 3,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "5.79",
                "inningsPitched": "4.2",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 3,
                "whip": "0.86",
                "outs": 14,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 1,
                "pickoffs": 0,
                "airOuts": 4,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "6.00",
                "strikeoutsPer9Inn": "11.57",
                "walksPer9Inn": "1.93",
                "hitsPer9Inn": "5.79",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2013-09-20",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Matt Shoemaker",
            "nameSlug": "matt-shoemaker-533167",
            "firstLastName": "Matt Shoemaker",
            "lastFirstName": "Shoemaker, Matt",
            "lastInitName": "Shoemaker, M",
            "initLastName": "M Shoemaker",
            "fullFMLName": "Matthew David Shoemaker",
            "fullLFMName": "Shoemaker, Matthew David",
            "strikeZoneTop": 3.65,
            "strikeZoneBottom": 1.67
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 8,
            "losses": 5,
            "pct": ".615"
          },
          "score": 0,
          "team": {
            "id": 143,
            "name": "Philadelphia Phillies",
            "link": "/api/v1/teams/143",
            "season": 2019,
            "venue": {
              "id": 2681,
              "name": "Citizens Bank Park",
              "link": "/api/v1/venues/2681"
            },
            "teamCode": "phi",
            "fileCode": "phi",
            "abbreviation": "PHI",
            "teamName": "Phillies",
            "locationName": "Philadelphia",
            "firstYearOfPlay": "1883",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 204,
              "name": "National League East",
              "link": "/api/v1/divisions/204"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Philadelphia",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 453562,
            "fullName": "Jake Arrieta",
            "link": "/api/v1/people/453562",
            "firstName": "Jacob",
            "lastName": "Arrieta",
            "primaryNumber": "49",
            "birthDate": "1986-03-06",
            "currentAge": 32,
            "birthCity": "Farmington",
            "birthStateProvince": "MO",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 225,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Jake",
            "middleName": "Joseph",
            "boxscoreName": "Arrieta",
            "nickName": "Snake",
            "draftYear": 2007,
            "pronunciation": "air-ieta",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 2,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 9,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "0.00",
                "inningsPitched": "3.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "0.00",
                "outs": 9,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "12.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "0.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2010-06-10",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Jake Arrieta",
            "nameSlug": "jake-arrieta-453562",
            "firstLastName": "Jake Arrieta",
            "lastFirstName": "Arrieta, Jake",
            "lastInitName": "Arrieta, J",
            "initLastName": "J Arrieta",
            "fullFMLName": "Jacob Joseph Arrieta",
            "fullLFMName": "Arrieta, Jacob Joseph",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2700,
        "name": "Spectrum Field",
        "link": "/api/v1/venues/2700"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20396&agency=MLBST&pid=8635987"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20396&agency=MLBST&pid=8635987"
        }
      }],
      "content": {
        "link": "/api/v1/game/567050/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 115043923,
              "contentId": "9b7bba85-45bd-46d0-abbb-e4abec6a4026",
              "mediaId": "c9bfd016-ecbb-43e7-919d-4b7bf7666fb2",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "AWAY",
              "mediaFeedSubType": "141",
              "callLetters": "RSN",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }, {
              "id": 58273409,
              "contentId": "15835c02-2585-4b4f-bd5d-a914d5a2308a",
              "mediaId": "153578f1-b23f-4681-94fe-3765b787eeb3",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "143",
              "callLetters": "NBCSP",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 115043923,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "RSN",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 115043923,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "SN590",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 115043923,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }, {
              "id": 58273409,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "94 WIP",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 58273409,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "NBCSP",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 58273409,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 9889371,
              "contentId": "dc7203c3-6034-4269-8130-55b92b48c501",
              "mediaId": "dc05af47-37f9-4365-93e9-fa50874284ea",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "141",
              "callLetters": "SN590",
              "language": "en"
            }, {
              "id": 265609436,
              "contentId": "5a58dd2b-483d-477f-b4d5-d13352822573",
              "mediaId": "55e02905-78e9-4acd-9a83-d03a0e0c6766",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "143",
              "callLetters": "WIP",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-567050-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565308,
      "link": "/api/v1/game/565308/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 5,
            "losses": 7,
            "pct": ".417"
          },
          "score": 0,
          "team": {
            "id": 115,
            "name": "Colorado Rockies",
            "link": "/api/v1/teams/115",
            "season": 2019,
            "venue": {
              "id": 19,
              "name": "Coors Field",
              "link": "/api/v1/venues/19"
            },
            "teamCode": "col",
            "fileCode": "col",
            "abbreviation": "COL",
            "teamName": "Rockies",
            "locationName": "Denver",
            "firstYearOfPlay": "1992",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Colorado",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 608566,
            "fullName": "German Marquez",
            "link": "/api/v1/people/608566",
            "firstName": "German",
            "lastName": "Marquez",
            "primaryNumber": "48",
            "birthDate": "1995-02-22",
            "currentAge": 24,
            "birthCity": "San Felix",
            "birthCountry": "Venezuela",
            "height": "6' 1",
            "weight": 225,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "German",
            "middleName": "Andres",
            "boxscoreName": "Márquez",
            "nickName": "Marquee",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 6,
                "runs": 3,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 4,
                "baseOnBalls": 3,
                "intentionalWalks": 0,
                "hits": 7,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "5.40",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 3,
                "whip": "2.00",
                "outs": 15,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 2,
                "pickoffs": 0,
                "airOuts": 2,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "1.33",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "5.40",
                "hitsPer9Inn": "12.60",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2016-09-08",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "German Marquez",
            "nameSlug": "german-marquez-608566",
            "firstLastName": "German Márquez",
            "lastFirstName": "Márquez, German",
            "lastInitName": "Márquez, G",
            "initLastName": "G Márquez",
            "fullFMLName": "German Andres Márquez",
            "fullLFMName": "Márquez, German Andres",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": true,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 7,
            "losses": 7,
            "pct": ".500"
          },
          "score": 0,
          "team": {
            "id": 114,
            "name": "Cleveland Indians",
            "link": "/api/v1/teams/114",
            "season": 2019,
            "venue": {
              "id": 5,
              "name": "Progressive Field",
              "link": "/api/v1/venues/5"
            },
            "teamCode": "cle",
            "fileCode": "cle",
            "abbreviation": "CLE",
            "teamName": "Indians",
            "locationName": "Cleveland",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 202,
              "name": "American League Central",
              "link": "/api/v1/divisions/202"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Cleveland",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 669456,
            "fullName": "Shane Bieber",
            "link": "/api/v1/people/669456",
            "firstName": "Shane",
            "lastName": "Bieber",
            "primaryNumber": "57",
            "birthDate": "1995-05-31",
            "currentAge": 23,
            "birthCity": "Orange",
            "birthStateProvince": "CA",
            "birthCountry": "USA",
            "height": "6' 3",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Shane",
            "middleName": "Robert",
            "boxscoreName": "Bieber",
            "nickName": "Not Justin",
            "draftYear": 2016,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 6,
                "runs": 1,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 5,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 17,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "1.80",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.40",
                "outs": 15,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 4,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "3.60",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-05-31",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Shane Bieber",
            "nameSlug": "shane-bieber-669456",
            "firstLastName": "Shane Bieber",
            "lastFirstName": "Bieber, Shane",
            "lastInitName": "Bieber, S",
            "initLastName": "S Bieber",
            "fullFMLName": "Shane Robert Bieber",
            "fullLFMName": "Bieber, Shane Robert",
            "strikeZoneTop": 3.49,
            "strikeZoneBottom": 1.601
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 3834,
        "name": "Goodyear Ballpark",
        "link": "/api/v1/venues/3834"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/1900557D04ED66A0"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/1900557D04ED66A0"
        }
      }],
      "content": {
        "link": "/api/v1/game/565308/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 240957753,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 240957753,
              "contentId": "d26d9507-f3d0-46c3-966e-8912e76509b3",
              "mediaId": "d74c01dc-75cb-411e-a416-7d437eb752e7",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "115",
              "callLetters": "KOA",
              "language": "en"
            }, {
              "id": 65750354,
              "contentId": "bac0bb9f-edc3-4f89-9eba-a37ee5f2cb38",
              "mediaId": "915c2445-29c5-4b19-aad7-ee68f864204e",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "114",
              "callLetters": "WTAM",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565308-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565116,
      "link": "/api/v1/game/565116/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 9,
            "losses": 6,
            "pct": ".600"
          },
          "score": 0,
          "team": {
            "id": 108,
            "name": "Los Angeles Angels",
            "link": "/api/v1/teams/108",
            "season": 2019,
            "venue": {
              "id": 1,
              "name": "Angel Stadium",
              "link": "/api/v1/venues/1"
            },
            "teamCode": "ana",
            "fileCode": "ana",
            "abbreviation": "LAA",
            "teamName": "Angels",
            "locationName": "Anaheim",
            "firstYearOfPlay": "1961",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "LA Angels",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 656288,
            "fullName": "Griffin Canning",
            "link": "/api/v1/people/656288",
            "firstName": "Griffin",
            "lastName": "Canning",
            "primaryNumber": "47",
            "birthDate": "1996-05-11",
            "currentAge": 22,
            "birthCity": "Mission Viejo",
            "birthStateProvince": "CA",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 180,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Griffin",
            "middleName": "Alexander",
            "boxscoreName": "Canning",
            "draftYear": 2017,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 0,
                "groundOuts": 2,
                "runs": 3,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 2,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 3,
                "atBats": 10,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "11.57",
                "inningsPitched": "2.1",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 1,
                "blownSaves": 0,
                "earnedRuns": 3,
                "whip": "1.71",
                "outs": 7,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "2.00",
                "strikeoutsPer9Inn": "7.71",
                "walksPer9Inn": "3.86",
                "hitsPer9Inn": "11.57",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Griffin Canning",
            "nameSlug": "griffin-canning-656288",
            "firstLastName": "Griffin Canning",
            "lastFirstName": "Canning, Griffin",
            "lastInitName": "Canning, G",
            "initLastName": "G Canning",
            "fullFMLName": "Griffin Alexander Canning",
            "fullLFMName": "Canning, Griffin Alexander",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": true,
          "seriesNumber": 17,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 9,
            "losses": 6,
            "pct": ".600"
          },
          "score": 0,
          "team": {
            "id": 112,
            "name": "Chicago Cubs",
            "link": "/api/v1/teams/112",
            "season": 2019,
            "venue": {
              "id": 17,
              "name": "Wrigley Field",
              "link": "/api/v1/venues/17"
            },
            "teamCode": "chn",
            "fileCode": "chc",
            "abbreviation": "CHC",
            "teamName": "Cubs",
            "locationName": "Chicago",
            "firstYearOfPlay": "1874",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Chi Cubs",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 621219,
            "fullName": "Alec Mills",
            "link": "/api/v1/people/621219",
            "firstName": "Alec",
            "lastName": "Mills",
            "primaryNumber": "24",
            "birthDate": "1991-11-30",
            "currentAge": 27,
            "birthCity": "Clarksville",
            "birthStateProvince": "TN",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 190,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Alec",
            "middleName": "Thomas",
            "boxscoreName": "Mills",
            "draftYear": 2012,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 2,
                "groundOuts": 5,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 4,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 4,
                "atBats": 15,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "2.25",
                "inningsPitched": "4.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "1.25",
                "outs": 12,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 2,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "4.00",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "2.25",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-05-18",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Alec Mills",
            "nameSlug": "alec-mills-621219",
            "firstLastName": "Alec Mills",
            "lastFirstName": "Mills, Alec",
            "lastInitName": "Mills, A",
            "initLastName": "A Mills",
            "fullFMLName": "Alec Thomas Mills",
            "fullLFMName": "Mills, Alec Thomas",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": true,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 4629,
        "name": "Sloan Park",
        "link": "/api/v1/venues/4629"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20394&agency=MLBST&pid=8651011"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20394&agency=MLBST&pid=8651011"
        }
      }],
      "content": {
        "link": "/api/v1/game/565116/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 102191161,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 102191161,
              "contentId": "45cb45da-c2a7-4c65-b0c1-a6694f06c1d4",
              "mediaId": "14b9be25-40a2-4fb5-8cf4-211f3e3794fa",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "112",
              "callLetters": "MLB.com",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565116-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566751,
      "link": "/api/v1/game/566751/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 5,
            "losses": 8,
            "pct": ".385"
          },
          "score": 0,
          "team": {
            "id": 145,
            "name": "Chicago White Sox",
            "link": "/api/v1/teams/145",
            "season": 2019,
            "venue": {
              "id": 4,
              "name": "Guaranteed Rate Field",
              "link": "/api/v1/venues/4"
            },
            "teamCode": "cha",
            "fileCode": "cws",
            "abbreviation": "CWS",
            "teamName": "White Sox",
            "locationName": "Chicago",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 202,
              "name": "American League Central",
              "link": "/api/v1/divisions/202"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Chi White Sox",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 625643,
            "fullName": "Reynaldo Lopez",
            "link": "/api/v1/people/625643",
            "firstName": "Reynaldo",
            "lastName": "Lopez",
            "primaryNumber": "40",
            "birthDate": "1994-01-04",
            "currentAge": 25,
            "birthCity": "San Pedro de Macoris",
            "birthCountry": "Dominican Republic",
            "height": "6' 1",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Reynaldo",
            "middleName": "Starling",
            "boxscoreName": "López, R",
            "nickName": "Rey",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 7,
                "runs": 6,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 5,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 9,
                "atBats": 22,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "10.13",
                "inningsPitched": "5.1",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 6,
                "whip": "2.06",
                "outs": 16,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 1,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "2.50",
                "strikeoutsPer9Inn": "8.44",
                "walksPer9Inn": "3.38",
                "hitsPer9Inn": "15.19",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-07-19",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Reynaldo Lopez",
            "nameSlug": "reynaldo-lopez-625643",
            "firstLastName": "Reynaldo López",
            "lastFirstName": "López, Reynaldo",
            "lastInitName": "López, R",
            "initLastName": "R López",
            "fullFMLName": "Reynaldo Starling López",
            "fullLFMName": "López, Reynaldo Starling",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 4,
            "losses": 8,
            "pct": ".333"
          },
          "score": 0,
          "team": {
            "id": 140,
            "name": "Texas Rangers",
            "link": "/api/v1/teams/140",
            "season": 2019,
            "venue": {
              "id": 13,
              "name": "Globe Life Park in Arlington",
              "link": "/api/v1/venues/13"
            },
            "teamCode": "tex",
            "fileCode": "tex",
            "abbreviation": "TEX",
            "teamName": "Rangers",
            "locationName": "Arlington",
            "firstYearOfPlay": "1961",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Texas",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 450172,
            "fullName": "Edinson Volquez",
            "link": "/api/v1/people/450172",
            "firstName": "Edinson",
            "lastName": "Volquez",
            "primaryNumber": "36",
            "birthDate": "1983-07-03",
            "currentAge": 35,
            "birthCity": "Barahona",
            "birthCountry": "Dominican Republic",
            "height": "6' 0",
            "weight": 220,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Edinson",
            "boxscoreName": "Vólquez",
            "nickName": "Steady Eddie",
            "pronunciation": "EHD-in-sin VOHL-kehz",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 3,
                "groundOuts": 5,
                "runs": 4,
                "doubles": 2,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 3,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 5,
                "atBats": 14,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "12.00",
                "inningsPitched": "3.0",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 4,
                "whip": "1.67",
                "outs": 9,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 1,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "15.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2005-08-30",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Edinson Volquez",
            "nameSlug": "edinson-volquez-450172",
            "firstLastName": "Edinson Vólquez",
            "lastFirstName": "Vólquez, Edinson",
            "lastInitName": "Vólquez, E",
            "initLastName": "E Vólquez",
            "fullFMLName": "Edinson Vólquez",
            "fullLFMName": "Vólquez, Edinson",
            "strikeZoneTop": 3.65,
            "strikeZoneBottom": 1.7
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2603,
        "name": "Surprise Stadium",
        "link": "/api/v1/venues/2603"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=48569&agency=MLBST&pid=8636875"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=48569&agency=MLBST&pid=8636875"
        }
      }],
      "content": {
        "link": "/api/v1/game/566751/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 229498896,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 229498896,
              "contentId": "996a32a4-1b6a-41db-99b0-b4f7f65cba13",
              "mediaId": "d7506c43-417a-4d2c-ba58-5f430ab7befa",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "140",
              "callLetters": "105.3 Fan",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566751-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565790,
      "link": "/api/v1/game/565790/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 7,
            "losses": 5,
            "pct": ".583"
          },
          "team": {
            "id": 136,
            "name": "Seattle Mariners",
            "link": "/api/v1/teams/136",
            "season": 2019,
            "venue": {
              "id": 680,
              "name": "T-Mobile Park",
              "link": "/api/v1/venues/680"
            },
            "teamCode": "sea",
            "fileCode": "sea",
            "abbreviation": "SEA",
            "teamName": "Mariners",
            "locationName": "Seattle",
            "firstYearOfPlay": "1977",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Seattle",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 657024,
            "fullName": "Erik Swanson",
            "link": "/api/v1/people/657024",
            "firstName": "Erik",
            "lastName": "Swanson",
            "primaryNumber": "50",
            "birthDate": "1993-09-04",
            "currentAge": 25,
            "birthCity": "Terrace Park",
            "birthStateProvince": "OH",
            "birthCountry": "USA",
            "height": "6' 3",
            "weight": 235,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Erik",
            "boxscoreName": "Swanson",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 0,
                "groundOuts": 2,
                "runs": 4,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 1,
                "baseOnBalls": 4,
                "intentionalWalks": 0,
                "hits": 1,
                "atBats": 6,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "5.40",
                "inningsPitched": "1.2",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "3.00",
                "outs": 5,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.25",
                "strikeoutsPer9Inn": "5.40",
                "walksPer9Inn": "21.60",
                "hitsPer9Inn": "5.40",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Erik Swanson",
            "nameSlug": "erik-swanson-657024",
            "firstLastName": "Erik Swanson",
            "lastFirstName": "Swanson, Erik",
            "lastInitName": "Swanson, E",
            "initLastName": "E Swanson",
            "fullFMLName": "Erik Swanson",
            "fullLFMName": "Swanson, Erik",
            "strikeZoneTop": 3.49,
            "strikeZoneBottom": 1.601
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 7,
            "losses": 6,
            "pct": ".538"
          },
          "team": {
            "id": 119,
            "name": "Los Angeles Dodgers",
            "link": "/api/v1/teams/119",
            "season": 2019,
            "venue": {
              "id": 22,
              "name": "Dodger Stadium",
              "link": "/api/v1/venues/22"
            },
            "teamCode": "lan",
            "fileCode": "la",
            "abbreviation": "LAD",
            "teamName": "Dodgers",
            "locationName": "Los Angeles",
            "firstYearOfPlay": "1884",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "LA Dodgers",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 628317,
            "fullName": "Kenta Maeda",
            "link": "/api/v1/people/628317",
            "firstName": "Kenta",
            "lastName": "Maeda",
            "primaryNumber": "18",
            "birthDate": "1988-04-11",
            "currentAge": 30,
            "birthCity": "Osaka",
            "birthCountry": "Japan",
            "height": "6' 1",
            "weight": 184,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Kenta",
            "boxscoreName": "Maeda",
            "nickName": "Maeken",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 3,
                "runs": 3,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 5,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 11,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "9.00",
                "inningsPitched": "3.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 3,
                "whip": "1.00",
                "outs": 9,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "5.00",
                "strikeoutsPer9Inn": "15.00",
                "walksPer9Inn": "3.00",
                "hitsPer9Inn": "6.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-04-06",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Kenta Maeda",
            "nameSlug": "kenta-maeda-628317",
            "firstLastName": "Kenta Maeda",
            "lastFirstName": "Maeda, Kenta",
            "lastInitName": "Maeda, K",
            "initLastName": "K Maeda",
            "fullFMLName": "Kenta Maeda",
            "fullLFMName": "Maeda, Kenta",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 119,
              "name": "Los Angeles Dodgers",
              "link": "/api/v1/teams/119"
            }
          },
          "away": {
            "team": {
              "id": 136,
              "name": "Seattle Mariners",
              "link": "/api/v1/teams/136"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 3809,
        "name": "Camelback Ranch",
        "link": "/api/v1/venues/3809"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "http://purchase.tickets.com/buy/MLBEventInfo?orgid=46549&agency=MLBST&pid=8638541"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "http://purchase.tickets.com/buy/MLBEventInfo?orgid=46549&agency=MLBST&pid=8638541"
        }
      }],
      "content": {
        "link": "/api/v1/game/565790/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 30346921,
              "contentId": "120ebb49-278b-455b-b796-f2f3d5285f66",
              "mediaId": "15790970-eb5a-4556-b703-dbbff072a7e1",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "119",
              "callLetters": "SNLA",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 30346921,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "KTNQ 1020",
              "renditionName": "Radio Española",
              "language": "ES"
            }, {
              "id": 30346921,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "SportsNet LA",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 30346921,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 179975705,
              "contentId": "d2a4549d-363d-414e-99a9-50915a5fad70",
              "mediaId": "df61f251-914f-4fa7-a078-d9c477af8e06",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "136",
              "callLetters": "710",
              "language": "en"
            }, {
              "id": 64124190,
              "contentId": "bb0a1692-0630-4a06-bde4-bb5be142083d",
              "mediaId": "492490df-531e-4ebb-ae59-6121295eae2e",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "119",
              "callLetters": "KTNQ",
              "language": "es"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565790-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566080,
      "link": "/api/v1/game/566080/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 6,
            "losses": 8,
            "pct": ".429"
          },
          "team": {
            "id": 158,
            "name": "Milwaukee Brewers",
            "link": "/api/v1/teams/158",
            "season": 2019,
            "venue": {
              "id": 32,
              "name": "Miller Park",
              "link": "/api/v1/venues/32"
            },
            "teamCode": "mil",
            "fileCode": "mil",
            "abbreviation": "MIL",
            "teamName": "Brewers",
            "locationName": "Milwaukee",
            "firstYearOfPlay": "1969",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Milwaukee",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605540,
            "fullName": "Brandon Woodruff",
            "link": "/api/v1/people/605540",
            "firstName": "Brandon",
            "lastName": "Woodruff",
            "primaryNumber": "53",
            "birthDate": "1993-02-10",
            "currentAge": 26,
            "birthCity": "Tupelo",
            "birthStateProvince": "MS",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 215,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Brandon",
            "middleName": "Kyle",
            "boxscoreName": "Woodruff",
            "nickName": "Woody",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 2,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 3,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 3,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "0.00",
                "inningsPitched": "1.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "3.00",
                "outs": 3,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "0.00",
                "walksPer9Inn": "27.00",
                "hitsPer9Inn": "0.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2017-08-04",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Brandon Woodruff",
            "nameSlug": "brandon-woodruff-605540",
            "firstLastName": "Brandon Woodruff",
            "lastFirstName": "Woodruff, Brandon",
            "lastInitName": "Woodruff, B",
            "initLastName": "B Woodruff",
            "fullFMLName": "Brandon Kyle Woodruff",
            "fullLFMName": "Woodruff, Brandon Kyle",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": true,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 8,
            "losses": 6,
            "pct": ".571"
          },
          "team": {
            "id": 133,
            "name": "Oakland Athletics",
            "link": "/api/v1/teams/133",
            "season": 2019,
            "venue": {
              "id": 10,
              "name": "Oakland Coliseum",
              "link": "/api/v1/venues/10"
            },
            "teamCode": "oak",
            "fileCode": "oak",
            "abbreviation": "OAK",
            "teamName": "Athletics",
            "locationName": "Oakland",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Oakland",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 664196,
            "fullName": "Tanner Anderson",
            "link": "/api/v1/people/664196",
            "firstName": "Tanner",
            "lastName": "Anderson",
            "primaryNumber": "53",
            "birthDate": "1993-05-27",
            "currentAge": 25,
            "birthCity": "Boynton Beach",
            "birthStateProvince": "FL",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 203,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Tanner",
            "middleName": "Ackley",
            "boxscoreName": "Anderson",
            "draftYear": 2015,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 0,
                "groundOuts": 8,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 9,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 6,
                "atBats": 24,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "1.50",
                "inningsPitched": "6.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "1.00",
                "outs": 18,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 1,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "13.50",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-07-02",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Tanner Anderson",
            "nameSlug": "tanner-anderson-664196",
            "firstLastName": "Tanner Anderson",
            "lastFirstName": "Anderson, Tanner",
            "lastInitName": "Anderson, T",
            "initLastName": "T Anderson",
            "fullFMLName": "Tanner Ackley Anderson",
            "fullLFMName": "Anderson, Tanner Ackley",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 133,
              "name": "Oakland Athletics",
              "link": "/api/v1/teams/133"
            }
          },
          "away": {
            "team": {
              "id": 158,
              "name": "Milwaukee Brewers",
              "link": "/api/v1/teams/158"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 2507,
        "name": "Hohokam Stadium",
        "link": "/api/v1/venues/2507"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/myticketsmobile/?orgid=20404&agency=MLBST_MPV&pid=8628012"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/myticketsmobile/?orgid=20404&agency=MLBST_MPV&pid=8628012"
        }
      }],
      "content": {
        "link": "/api/v1/game/566080/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 90862476,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 90862476,
              "contentId": "7b66e7b3-a00d-425a-8d93-aff4ba906e49",
              "mediaId": "b4af781c-599d-4277-b97e-2361a39b7c98",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "158",
              "callLetters": "WTMJ",
              "language": "en"
            }, {
              "id": 209408345,
              "contentId": "34124539-af26-499b-b643-2bc852b1625f",
              "mediaId": "24718574-0f04-42c9-af0a-2cc60e8f9ac6",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "133",
              "callLetters": "KTRB 860",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566080-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566460,
      "link": "/api/v1/game/566460/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 9,
            "losses": 6,
            "pct": ".600"
          },
          "score": 0,
          "team": {
            "id": 112,
            "name": "Chicago Cubs",
            "link": "/api/v1/teams/112",
            "season": 2019,
            "venue": {
              "id": 17,
              "name": "Wrigley Field",
              "link": "/api/v1/venues/17"
            },
            "teamCode": "chn",
            "fileCode": "chc",
            "abbreviation": "CHC",
            "teamName": "Cubs",
            "locationName": "Chicago",
            "firstYearOfPlay": "1874",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Chi Cubs",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 430935,
            "fullName": "Cole Hamels",
            "link": "/api/v1/people/430935",
            "firstName": "Colbert",
            "lastName": "Hamels",
            "primaryNumber": "35",
            "birthDate": "1983-12-27",
            "currentAge": 35,
            "birthCity": "San Diego",
            "birthStateProvince": "CA",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 205,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Cole",
            "middleName": "Michael",
            "boxscoreName": "Hamels",
            "nickName": "Hollywood",
            "draftYear": 2002,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 4,
                "runs": 0,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 7,
                "caughtStealing": 1,
                "stolenBases": 0,
                "stolenBasePercentage": ".000",
                "era": "0.00",
                "inningsPitched": "2.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "1.00",
                "outs": 6,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "0.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2006-05-12",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "L",
              "description": "Left"
            },
            "nameFirstLast": "Cole Hamels",
            "nameSlug": "cole-hamels-430935",
            "firstLastName": "Cole Hamels",
            "lastFirstName": "Hamels, Cole",
            "lastInitName": "Hamels, C",
            "initLastName": "C Hamels",
            "fullFMLName": "Colbert Michael Hamels",
            "fullLFMName": "Hamels, Colbert Michael",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": true,
          "seriesNumber": 17,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 5,
            "losses": 7,
            "pct": ".417"
          },
          "score": 0,
          "team": {
            "id": 137,
            "name": "San Francisco Giants",
            "link": "/api/v1/teams/137",
            "season": 2019,
            "venue": {
              "id": 2395,
              "name": "Oracle Park",
              "link": "/api/v1/venues/2395"
            },
            "teamCode": "sfn",
            "fileCode": "sf",
            "abbreviation": "SF",
            "teamName": "Giants",
            "locationName": "San Francisco",
            "firstYearOfPlay": "1883",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "San Francisco",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605446,
            "fullName": "Dereck Rodriguez",
            "link": "/api/v1/people/605446",
            "firstName": "Ivan",
            "lastName": "Rodriguez",
            "primaryNumber": "57",
            "birthDate": "1992-06-05",
            "currentAge": 26,
            "birthCity": "Arlington",
            "birthStateProvince": "TX",
            "birthCountry": "USA",
            "height": "6' 1",
            "weight": 215,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Dereck",
            "middleName": "Dereck",
            "boxscoreName": "Rodríguez, D",
            "nickName": "D-Rod",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 3,
                "runs": 2,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 3,
                "baseOnBalls": 4,
                "intentionalWalks": 0,
                "hits": 4,
                "atBats": 17,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "3.86",
                "inningsPitched": "4.2",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.71",
                "outs": 14,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 7,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.75",
                "strikeoutsPer9Inn": "5.79",
                "walksPer9Inn": "7.71",
                "hitsPer9Inn": "7.71",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-05-29",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Dereck Rodriguez",
            "nameSlug": "dereck-rodriguez-605446",
            "firstLastName": "Dereck Rodríguez",
            "lastFirstName": "Rodríguez, Dereck",
            "lastInitName": "Rodríguez, D",
            "initLastName": "D Rodríguez",
            "fullFMLName": "Ivan Dereck Rodríguez",
            "fullLFMName": "Rodríguez, Ivan Dereck",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2532,
        "name": "Scottsdale Stadium",
        "link": "/api/v1/venues/2532"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "http://mpv.tickets.com/?orgid=20395&agency=MLBST_MPV&pid=8642520"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "http://mpv.tickets.com/?orgid=20395&agency=MLBST_MPV&pid=8642520"
        }
      }],
      "content": {
        "link": "/api/v1/game/566460/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 40105549,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 40105549,
              "contentId": "defa6246-2b8e-41c5-97f9-3a328a2ee680",
              "mediaId": "c9d4e4c9-d8a9-453d-ad96-50f4134278e2",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "137",
              "callLetters": "KNBR",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 2,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566460-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 564822,
      "link": "/api/v1/game/564822/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:10:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 10,
            "losses": 5,
            "pct": ".667"
          },
          "score": 0,
          "team": {
            "id": 118,
            "name": "Kansas City Royals",
            "link": "/api/v1/teams/118",
            "season": 2019,
            "venue": {
              "id": 7,
              "name": "Kauffman Stadium",
              "link": "/api/v1/venues/7"
            },
            "teamCode": "kca",
            "fileCode": "kc",
            "abbreviation": "KC",
            "teamName": "Royals",
            "locationName": "Kansas City",
            "firstYearOfPlay": "1969",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 202,
              "name": "American League Central",
              "link": "/api/v1/divisions/202"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Kansas City",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 596001,
            "fullName": "Jakob Junis",
            "link": "/api/v1/people/596001",
            "firstName": "Jakob",
            "lastName": "Junis",
            "primaryNumber": "65",
            "birthDate": "1992-09-16",
            "currentAge": 26,
            "birthCity": "Sterling",
            "birthStateProvince": "IL",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 225,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Jakob",
            "middleName": "Benjamin Lee",
            "boxscoreName": "Junis",
            "nickName": "June Bug",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "-.--",
                "inningsPitched": "0.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "-",
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "-.--",
                "walksPer9Inn": "-.--",
                "hitsPer9Inn": "-.--",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2017-04-12",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Jakob Junis",
            "nameSlug": "jakob-junis-596001",
            "firstLastName": "Jakob Junis",
            "lastFirstName": "Junis, Jakob",
            "lastInitName": "Junis, J",
            "initLastName": "J Junis",
            "fullFMLName": "Jakob Benjamin Lee Junis",
            "fullLFMName": "Junis, Jakob Benjamin Lee",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 5,
            "losses": 7,
            "pct": ".417"
          },
          "score": 0,
          "team": {
            "id": 109,
            "name": "Arizona Diamondbacks",
            "link": "/api/v1/teams/109",
            "season": 2019,
            "venue": {
              "id": 15,
              "name": "Chase Field",
              "link": "/api/v1/venues/15"
            },
            "teamCode": "ari",
            "fileCode": "ari",
            "abbreviation": "ARI",
            "teamName": "D-backs",
            "locationName": "Phoenix",
            "firstYearOfPlay": "1998",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Arizona",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 596133,
            "fullName": "Luke Weaver",
            "link": "/api/v1/people/596133",
            "firstName": "Luke",
            "lastName": "Weaver",
            "primaryNumber": "24",
            "birthDate": "1993-08-21",
            "currentAge": 25,
            "birthCity": "DeLand",
            "birthStateProvince": "FL",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 170,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Luke",
            "middleName": "Allen",
            "boxscoreName": "Weaver",
            "nickName": "Dream",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 5,
                "runs": 1,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 3,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 11,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "3.00",
                "inningsPitched": "3.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.67",
                "outs": 9,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 1,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "9.00",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "6.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-08-13",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Luke Weaver",
            "nameSlug": "luke-weaver-596133",
            "firstLastName": "Luke Weaver",
            "lastFirstName": "Weaver, Luke",
            "lastInitName": "Weaver, L",
            "initLastName": "L Weaver",
            "fullFMLName": "Luke Allen Weaver",
            "fullLFMName": "Weaver, Luke Allen",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": true,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 4249,
        "name": "Salt River Fields at Talking Stick",
        "link": "/api/v1/venues/4249"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/1900558BC5294940"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/1900558BC5294940"
        }
      }],
      "content": {
        "link": "/api/v1/game/564822/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 175668612,
              "contentId": "958af04f-2e8a-48f9-9345-185e6ef6d188",
              "mediaId": "012a9a62-da03-4c13-b30b-26970163ea81",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "109",
              "callLetters": "FSAZ",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }, {
              "id": 266671838,
              "contentId": "04c07e0d-7371-444e-94ed-552008641513",
              "mediaId": "5feff7f9-d00f-4fcf-8fa5-8ed65bd435bc",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "AWAY",
              "mediaFeedSubType": "118",
              "callLetters": "FSKC",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 175668612,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "98.7 FM Arizona&#x27;s Sports Station",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 175668612,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "FS-A",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 175668612,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }, {
              "id": 266671838,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "MLB.com",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 266671838,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "FSKC",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 266671838,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 168745275,
              "contentId": "d74bc81b-b9bd-4dd3-9095-b289c93adb8f",
              "mediaId": "c1bc79a5-c59e-49ca-8eba-362eac93d82c",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "109",
              "callLetters": "98.7 FM",
              "language": "en"
            }, {
              "id": 113885477,
              "contentId": "6f27f7c4-d5cd-47cd-9d3a-235c953ee409",
              "mediaId": "a0fcf884-2493-462a-94a4-f1d435757f9e",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "118",
              "callLetters": "MLB.com",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "P",
      "tiebreaker": "N",
      "calendarEventID": "14-564822-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 585915,
      "link": "/api/v1/game/585915/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T20:10:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 6,
            "losses": 8,
            "pct": ".429"
          },
          "team": {
            "id": 158,
            "name": "Milwaukee Brewers",
            "link": "/api/v1/teams/158",
            "season": 2019,
            "venue": {
              "id": 32,
              "name": "Miller Park",
              "link": "/api/v1/venues/32"
            },
            "teamCode": "mil",
            "fileCode": "mil",
            "abbreviation": "MIL",
            "teamName": "Brewers",
            "locationName": "Milwaukee",
            "firstYearOfPlay": "1969",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Milwaukee",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 458708,
            "fullName": "Josh Tomlin",
            "link": "/api/v1/people/458708",
            "firstName": "Joshua",
            "lastName": "Tomlin",
            "primaryNumber": "38",
            "birthDate": "1984-10-19",
            "currentAge": 34,
            "birthCity": "Tyler",
            "birthStateProvince": "TX",
            "birthCountry": "USA",
            "height": "6' 1",
            "weight": 190,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Josh",
            "middleName": "Aubry",
            "boxscoreName": "Tomlin",
            "nickName": "Scrubs",
            "draftYear": 2006,
            "pronunciation": "tom-lynn",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 2,
                "groundOuts": 4,
                "runs": 7,
                "doubles": 4,
                "triples": 0,
                "homeRuns": 3,
                "strikeOuts": 3,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 9,
                "atBats": 26,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "10.50",
                "inningsPitched": "6.0",
                "wins": 1,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 7,
                "whip": "1.50",
                "outs": 18,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 1,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 9,
                "rbi": 0,
                "winPercentage": ".500",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "4.50",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "13.50",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2010-07-27",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Josh Tomlin",
            "nameSlug": "josh-tomlin-458708",
            "firstLastName": "Josh Tomlin",
            "lastFirstName": "Tomlin, Josh",
            "lastInitName": "Tomlin, J",
            "initLastName": "J Tomlin",
            "fullFMLName": "Joshua Aubry Tomlin",
            "fullLFMName": "Tomlin, Joshua Aubry",
            "strikeZoneTop": 3.411,
            "strikeZoneBottom": 1.565
          },
          "splitSquad": true,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 9,
            "losses": 6,
            "pct": ".600"
          },
          "team": {
            "id": 108,
            "name": "Los Angeles Angels",
            "link": "/api/v1/teams/108",
            "season": 2019,
            "venue": {
              "id": 1,
              "name": "Angel Stadium",
              "link": "/api/v1/venues/1"
            },
            "teamCode": "ana",
            "fileCode": "ana",
            "abbreviation": "LAA",
            "teamName": "Angels",
            "locationName": "Anaheim",
            "firstYearOfPlay": "1961",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 200,
              "name": "American League West",
              "link": "/api/v1/divisions/200"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "LA Angels",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 502239,
            "fullName": "Trevor Cahill",
            "link": "/api/v1/people/502239",
            "firstName": "Trevor",
            "lastName": "Cahill",
            "primaryNumber": "53",
            "birthDate": "1988-03-01",
            "currentAge": 31,
            "birthCity": "Oceanside",
            "birthStateProvince": "CA",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 230,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Trevor",
            "middleName": "John",
            "boxscoreName": "Cahill",
            "nickName": "T.C.",
            "draftYear": 2006,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 3,
                "runs": 7,
                "doubles": 1,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 3,
                "intentionalWalks": 0,
                "hits": 6,
                "atBats": 19,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "13.50",
                "inningsPitched": "4.2",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 7,
                "whip": "1.93",
                "outs": 14,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 7,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "1.33",
                "strikeoutsPer9Inn": "7.71",
                "walksPer9Inn": "5.79",
                "hitsPer9Inn": "11.57",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2009-04-07",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Trevor Cahill",
            "nameSlug": "trevor-cahill-502239",
            "firstLastName": "Trevor Cahill",
            "lastFirstName": "Cahill, Trevor",
            "lastInitName": "Cahill, T",
            "initLastName": "T Cahill",
            "fullFMLName": "Trevor John Cahill",
            "fullLFMName": "Cahill, Trevor John",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": true,
          "seriesNumber": 18,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 108,
              "name": "Los Angeles Angels",
              "link": "/api/v1/teams/108"
            }
          },
          "away": {
            "team": {
              "id": 158,
              "name": "Milwaukee Brewers",
              "link": "/api/v1/teams/158"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 2500,
        "name": "Tempe Diablo Stadium",
        "link": "/api/v1/venues/2500"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&pid=8667239"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://mpv.tickets.com/?agency=MLBST_MPV&pid=8667239"
        }
      }],
      "content": {
        "link": "/api/v1/game/585915/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 259469398,
              "contentId": "33df42f5-802a-4e91-b29d-9680bf523c71",
              "mediaId": "8f4161e1-9b88-42ef-a8f8-20c6b49e6404",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "AWAY",
              "mediaFeedSubType": "158",
              "callLetters": "FSWI",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }, {
              "id": 146288596,
              "contentId": "fda01543-e1f1-4957-9254-911b1df35888",
              "mediaId": "6a4483e6-1b0a-4b01-ab80-a929095cd3e4",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "108",
              "callLetters": "FSW",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 259469398,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }, {
              "id": 259469398,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "FSWI",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 172019176,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 146288596,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "FS-W",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 146288596,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "KLAA 830",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 146288596,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 172019176,
              "contentId": "a18a6731-6f38-4301-bebb-9a3cf9e096d9",
              "mediaId": "63e05c29-2128-4f91-8519-56b3cd6bc3a2",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "108",
              "callLetters": "KLAA",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 2,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-585915-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "day",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 564921,
      "link": "/api/v1/game/564921/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T23:05:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "P",
        "detailedState": "Pre-Game",
        "statusCode": "P",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 6,
            "losses": 6,
            "pct": ".500"
          },
          "score": 0,
          "team": {
            "id": 147,
            "name": "New York Yankees",
            "link": "/api/v1/teams/147",
            "season": 2019,
            "venue": {
              "id": 3313,
              "name": "Yankee Stadium",
              "link": "/api/v1/venues/3313"
            },
            "teamCode": "nya",
            "fileCode": "nyy",
            "abbreviation": "NYY",
            "teamName": "Yankees",
            "locationName": "Bronx",
            "firstYearOfPlay": "1903",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "NY Yankees",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 570666,
            "fullName": "Luis Cessa",
            "link": "/api/v1/people/570666",
            "firstName": "Luis",
            "lastName": "Cessa",
            "primaryNumber": "85",
            "birthDate": "1992-04-25",
            "currentAge": 26,
            "birthCity": "Cordoba",
            "birthStateProvince": "Veracruz",
            "birthCountry": "Mexico",
            "height": "6' 0",
            "weight": 210,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Luis",
            "middleName": "Enrique",
            "boxscoreName": "Cessa",
            "nickName": "Quique",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 1,
                "groundOuts": 3,
                "runs": 1,
                "doubles": 3,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 6,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 4,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "1.80",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 1,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.80",
                "outs": 15,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 5,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "10.80",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "7.20",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2016-04-08",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Luis Cessa",
            "nameSlug": "luis-cessa-570666",
            "firstLastName": "Luis Cessa",
            "lastFirstName": "Cessa, Luis",
            "lastInitName": "Cessa, L",
            "initLastName": "L Cessa",
            "fullFMLName": "Luis Enrique Cessa",
            "fullLFMName": "Cessa, Luis Enrique",
            "strikeZoneTop": 3.371,
            "strikeZoneBottom": 1.535
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 8,
            "losses": 5,
            "pct": ".615"
          },
          "score": 0,
          "team": {
            "id": 110,
            "name": "Baltimore Orioles",
            "link": "/api/v1/teams/110",
            "season": 2019,
            "venue": {
              "id": 2,
              "name": "Oriole Park at Camden Yards",
              "link": "/api/v1/venues/2"
            },
            "teamCode": "bal",
            "fileCode": "bal",
            "abbreviation": "BAL",
            "teamName": "Orioles",
            "locationName": "Baltimore",
            "firstYearOfPlay": "1901",
            "league": {
              "id": 103,
              "name": "American League",
              "link": "/api/v1/league/103"
            },
            "division": {
              "id": 201,
              "name": "American League East",
              "link": "/api/v1/divisions/201"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Baltimore",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 605276,
            "fullName": "David Hess",
            "link": "/api/v1/people/605276",
            "firstName": "David",
            "lastName": "Hess",
            "primaryNumber": "41",
            "birthDate": "1993-07-10",
            "currentAge": 25,
            "birthCity": "Tullahoma",
            "birthStateProvince": "TN",
            "birthCountry": "USA",
            "height": "6' 2",
            "weight": 180,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "David",
            "middleName": "James",
            "boxscoreName": "Hess",
            "nickName": "Hesser",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 1,
                "gamesStarted": 1,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "numberOfPitches": 0,
                "inningsPitched": "0.0",
                "saveOpportunities": 0,
                "earnedRuns": 0,
                "battersFaced": 0,
                "outs": 0,
                "gamesPitched": 1,
                "completeGames": 0,
                "shutouts": 0,
                "pitchesThrown": 0,
                "balls": 0,
                "strikes": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "gamesFinished": 0,
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 4,
                "gamesStarted": 2,
                "groundOuts": 7,
                "runs": 2,
                "doubles": 2,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 4,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 6,
                "atBats": 26,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "2.57",
                "inningsPitched": "7.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 2,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.14",
                "outs": 21,
                "gamesPitched": 4,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 9,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "2.00",
                "strikeoutsPer9Inn": "5.14",
                "walksPer9Inn": "2.57",
                "hitsPer9Inn": "7.71",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-05-12",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "David Hess",
            "nameSlug": "david-hess-605276",
            "firstLastName": "David Hess",
            "lastFirstName": "Hess, David",
            "lastInitName": "Hess, D",
            "initLastName": "D Hess",
            "fullFMLName": "David James Hess",
            "fullLFMName": "Hess, David James",
            "strikeZoneTop": 3.467,
            "strikeZoneBottom": 1.589
          },
          "splitSquad": true,
          "seriesNumber": 17,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "currentInning": 1,
        "currentInningOrdinal": "1st",
        "inningState": "Top",
        "inningHalf": "Top",
        "isTopInning": true,
        "scheduledInnings": 9,
        "innings": [{
          "num": 1,
          "ordinalNum": "1st",
          "home": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        }],
        "teams": {
          "home": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          },
          "away": {
            "runs": 0,
            "hits": 0,
            "errors": 0,
            "leftOnBase": 0
          }
        },
        "defense": {},
        "offense": {},
        "balls": 0,
        "strikes": 0,
        "outs": 0
      },
      "venue": {
        "id": 2508,
        "name": "Ed Smith Stadium",
        "link": "/api/v1/venues/2508"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/0D005631E37CDDAA"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://www.ticketmaster.com/event/0D005631E37CDDAA"
        }
      }],
      "content": {
        "link": "/api/v1/game/564921/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 44476403,
              "contentId": "8e395485-31c7-48ef-b70b-a60057b90934",
              "mediaId": "159e8789-86ce-465b-b5c0-6535161c6c12",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "110",
              "callLetters": "MASN",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 99561778,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 44476403,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "MASN",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 44476403,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "Orioles Radio Network",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 44476403,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 99561778,
              "contentId": "66bd1844-936c-4523-b102-8b11c43b2dcf",
              "mediaId": "c7c0cb65-f62e-4d8f-99a5-24b3a0d13287",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "110",
              "callLetters": "BAL Radio",
              "language": "en"
            }, {
              "id": 120399584,
              "contentId": "c86a82e0-9979-47bf-854f-b7d1a44c1640",
              "mediaId": "d3a122d5-b6d2-41fa-84f9-c9935275c60f",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "147",
              "callLetters": "WFAN",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 2,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-564921-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "night",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {
        "noHitter": false,
        "perfectGame": false
      },
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565887,
      "link": "/api/v1/game/565887/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-09T23:35:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 5,
            "losses": 10,
            "pct": ".333"
          },
          "team": {
            "id": 146,
            "name": "Miami Marlins",
            "link": "/api/v1/teams/146",
            "season": 2019,
            "venue": {
              "id": 4169,
              "name": "Marlins Park",
              "link": "/api/v1/venues/4169"
            },
            "teamCode": "mia",
            "fileCode": "mia",
            "abbreviation": "MIA",
            "teamName": "Marlins",
            "locationName": "Miami",
            "firstYearOfPlay": "1992",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 204,
              "name": "National League East",
              "link": "/api/v1/divisions/204"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Miami",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 641154,
            "fullName": "Pablo Lopez",
            "link": "/api/v1/people/641154",
            "firstName": "Pablo",
            "lastName": "Lopez",
            "primaryNumber": "49",
            "birthDate": "1996-03-07",
            "currentAge": 22,
            "birthCity": "Cabimas",
            "birthCountry": "Venezuela",
            "height": "6' 3",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Pablo",
            "middleName": "Jose",
            "boxscoreName": "López, P",
            "nickName": "Pache",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 0,
                "groundOuts": 8,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 1,
                "intentionalWalks": 0,
                "hits": 3,
                "atBats": 18,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "1.80",
                "inningsPitched": "5.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.80",
                "outs": 15,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 3,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "4.00",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "1.80",
                "hitsPer9Inn": "5.40",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-06-30",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Pablo Lopez",
            "nameSlug": "pablo-lopez-641154",
            "firstLastName": "Pablo López",
            "lastFirstName": "López, Pablo",
            "lastInitName": "López, P",
            "initLastName": "P López",
            "fullFMLName": "Pablo Jose López",
            "fullLFMName": "López, Pablo Jose",
            "strikeZoneTop": 3.49,
            "strikeZoneBottom": 1.601
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 7,
            "losses": 6,
            "pct": ".538"
          },
          "team": {
            "id": 120,
            "name": "Washington Nationals",
            "link": "/api/v1/teams/120",
            "season": 2019,
            "venue": {
              "id": 3309,
              "name": "Nationals Park",
              "link": "/api/v1/venues/3309"
            },
            "teamCode": "was",
            "fileCode": "was",
            "abbreviation": "WSH",
            "teamName": "Nationals",
            "locationName": "Washington",
            "firstYearOfPlay": "1969",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 204,
              "name": "National League East",
              "link": "/api/v1/divisions/204"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Washington",
            "springLeague": {
              "id": 115,
              "name": "Grapefruit League",
              "link": "/api/v1/league/115",
              "abbreviation": "GL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 434671,
            "fullName": "Anibal Sanchez",
            "link": "/api/v1/people/434671",
            "firstName": "Anibal",
            "lastName": "Sanchez",
            "primaryNumber": "19",
            "birthDate": "1984-02-27",
            "currentAge": 35,
            "birthCity": "Maracay",
            "birthCountry": "Venezuela",
            "height": "6' 0",
            "weight": 205,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Anibal",
            "middleName": "Alejandro",
            "boxscoreName": "Sánchez, An",
            "nickName": "Alejo",
            "pronunciation": "Ah-KNEE-bahl",
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 6,
                "runs": 2,
                "doubles": 2,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 1,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 4,
                "atBats": 14,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "4.50",
                "inningsPitched": "4.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 2,
                "whip": "1.50",
                "outs": 12,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 5,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.50",
                "strikeoutsPer9Inn": "2.25",
                "walksPer9Inn": "4.50",
                "hitsPer9Inn": "9.00",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 1,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2006-06-25",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Anibal Sanchez",
            "nameSlug": "anibal-sanchez-434671",
            "firstLastName": "Aníbal Sánchez",
            "lastFirstName": "Sánchez, Aníbal",
            "lastInitName": "Sánchez, A",
            "initLastName": "A Sánchez",
            "fullFMLName": "Aníbal Alejandro Sánchez",
            "fullLFMName": "Sánchez, Aníbal Alejandro",
            "strikeZoneTop": 3.371,
            "strikeZoneBottom": 1.535
          },
          "splitSquad": false,
          "seriesNumber": 14,
          "springLeague": {
            "id": 115,
            "name": "Grapefruit League",
            "link": "/api/v1/league/115",
            "abbreviation": "GL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 120,
              "name": "Washington Nationals",
              "link": "/api/v1/teams/120"
            }
          },
          "away": {
            "team": {
              "id": 146,
              "name": "Miami Marlins",
              "link": "/api/v1/teams/146"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 5000,
        "name": "FITTEAM Ballpark of the Palm Beaches",
        "link": "/api/v1/venues/5000"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=22793&agency=MLBST&pid=8625335"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=22793&agency=MLBST&pid=8625335"
        }
      }],
      "content": {
        "link": "/api/v1/game/565887/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 214227224,
              "contentId": "ad74b467-e651-425c-b364-c5fad3c4e580",
              "mediaId": "04570add-1292-4915-a95a-4c20587aebb5",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "120",
              "callLetters": "MASN",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 57291069,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 214227224,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "106.7 The Fan",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 214227224,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "MASN",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 214227224,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 57291069,
              "contentId": "db15c2ff-69e9-412f-b9e7-381f1be94781",
              "mediaId": "1e3d3b64-8c0b-4948-81d9-92973f6e9684",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "146",
              "callLetters": "WINZ",
              "language": "en"
            }, {
              "id": 173717973,
              "contentId": "7c6f206f-6763-4f6a-ba72-ce4d88ea482f",
              "mediaId": "98d44383-f73c-4151-8210-5a3e08f69ca0",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "146",
              "callLetters": "WAQI",
              "language": "es"
            }, {
              "id": 2805928,
              "contentId": "cfe2a362-9a18-4a8a-9789-fb249f3fbf66",
              "mediaId": "29f9a1ac-29d1-4a36-a9bd-b10f6a93fc1b",
              "mediaState": "MEDIA_OFF",
              "type": "HOME",
              "mediaFeedSubType": "120",
              "callLetters": "106.7",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565887-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "night",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 565404,
      "link": "/api/v1/game/565404/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-10T00:10:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 5,
            "losses": 7,
            "pct": ".417"
          },
          "team": {
            "id": 109,
            "name": "Arizona Diamondbacks",
            "link": "/api/v1/teams/109",
            "season": 2019,
            "venue": {
              "id": 15,
              "name": "Chase Field",
              "link": "/api/v1/venues/15"
            },
            "teamCode": "ari",
            "fileCode": "ari",
            "abbreviation": "ARI",
            "teamName": "D-backs",
            "locationName": "Phoenix",
            "firstYearOfPlay": "1998",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Arizona",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 664199,
            "fullName": "Taylor Clarke",
            "link": "/api/v1/people/664199",
            "firstName": "Taylor",
            "lastName": "Clarke",
            "primaryNumber": "72",
            "birthDate": "1993-05-13",
            "currentAge": 25,
            "birthCity": "Ashburn",
            "birthStateProvince": "VA",
            "birthCountry": "USA",
            "height": "6' 4",
            "weight": 200,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Taylor",
            "middleName": "James",
            "boxscoreName": "Clarke",
            "draftYear": 2015,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 1,
                "groundOuts": 7,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 1,
                "strikeOuts": 2,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 3,
                "atBats": 14,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "2.25",
                "inningsPitched": "4.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.75",
                "outs": 12,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 2,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "4.50",
                "walksPer9Inn": "0.00",
                "hitsPer9Inn": "6.75",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Taylor Clarke",
            "nameSlug": "taylor-clarke-664199",
            "firstLastName": "Taylor Clarke",
            "lastFirstName": "Clarke, Taylor",
            "lastInitName": "Clarke, T",
            "initLastName": "T Clarke",
            "fullFMLName": "Taylor James Clarke",
            "fullLFMName": "Clarke, Taylor James",
            "strikeZoneTop": 3.549,
            "strikeZoneBottom": 1.627
          },
          "splitSquad": true,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 5,
            "losses": 7,
            "pct": ".417"
          },
          "team": {
            "id": 115,
            "name": "Colorado Rockies",
            "link": "/api/v1/teams/115",
            "season": 2019,
            "venue": {
              "id": 19,
              "name": "Coors Field",
              "link": "/api/v1/venues/19"
            },
            "teamCode": "col",
            "fileCode": "col",
            "abbreviation": "COL",
            "teamName": "Rockies",
            "locationName": "Denver",
            "firstYearOfPlay": "1992",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Colorado",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 656546,
            "fullName": "Jeff Hoffman",
            "link": "/api/v1/people/656546",
            "firstName": "Jeffrey",
            "lastName": "Hoffman",
            "primaryNumber": "34",
            "birthDate": "1993-01-08",
            "currentAge": 26,
            "birthCity": "Latham",
            "birthStateProvince": "NY",
            "birthCountry": "USA",
            "height": "6' 5",
            "weight": 227,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Jeff",
            "middleName": "Robert",
            "boxscoreName": "Hoffman",
            "nickName": "Hoff",
            "draftYear": 2014,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 3,
                "gamesStarted": 0,
                "groundOuts": 3,
                "runs": 4,
                "doubles": 2,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 3,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 5,
                "atBats": 22,
                "caughtStealing": 0,
                "stolenBases": 1,
                "stolenBasePercentage": "1.000",
                "era": "6.00",
                "inningsPitched": "6.0",
                "wins": 0,
                "losses": 1,
                "saves": 0,
                "saveOpportunities": 1,
                "holds": 0,
                "blownSaves": 1,
                "earnedRuns": 4,
                "whip": "1.17",
                "outs": 18,
                "gamesPitched": 3,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 12,
                "rbi": 0,
                "winPercentage": ".000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "1.50",
                "strikeoutsPer9Inn": "4.50",
                "walksPer9Inn": "3.00",
                "hitsPer9Inn": "7.50",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 1
              }
            }],
            "mlbDebutDate": "2016-08-20",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Jeff Hoffman",
            "nameSlug": "jeff-hoffman-656546",
            "firstLastName": "Jeff Hoffman",
            "lastFirstName": "Hoffman, Jeff",
            "lastInitName": "Hoffman, J",
            "initLastName": "J Hoffman",
            "fullFMLName": "Jeffrey Robert Hoffman",
            "fullLFMName": "Hoffman, Jeffrey Robert",
            "strikeZoneTop": 3.575,
            "strikeZoneBottom": 1.681
          },
          "splitSquad": true,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 115,
              "name": "Colorado Rockies",
              "link": "/api/v1/teams/115"
            }
          },
          "away": {
            "team": {
              "id": 109,
              "name": "Arizona Diamondbacks",
              "link": "/api/v1/teams/109"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 2701,
        "name": "Estadio de Beisbol Monterrey",
        "link": "/api/v1/venues/2701"
      },
      "content": {
        "link": "/api/v1/game/565404/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": []
          }, {
            "title": "MLBTV-Audio",
            "items": []
          }, {
            "title": "Audio",
            "items": [{
              "id": 190378278,
              "contentId": "8ca4c6c1-2a33-4a43-8c69-e82127ce4047",
              "mediaId": "ecf80bba-da0c-4f46-9e95-b9e36fd32263",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "109",
              "callLetters": "KHOV",
              "language": "es"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 2,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-565404-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "night",
      "description": "in Monterrey",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }, {
      "gamePk": 566267,
      "link": "/api/v1/game/566267/feed/live",
      "gameType": "S",
      "season": "2019",
      "gameDate": "2019-03-10T01:40:00Z",
      "status": {
        "abstractGameState": "Preview",
        "codedGameState": "S",
        "detailedState": "Scheduled",
        "statusCode": "S",
        "abstractGameCode": "P"
      },
      "teams": {
        "away": {
          "leagueRecord": {
            "wins": 4,
            "losses": 8,
            "pct": ".333"
          },
          "team": {
            "id": 113,
            "name": "Cincinnati Reds",
            "link": "/api/v1/teams/113",
            "season": 2019,
            "venue": {
              "id": 2602,
              "name": "Great American Ball Park",
              "link": "/api/v1/venues/2602"
            },
            "teamCode": "cin",
            "fileCode": "cin",
            "abbreviation": "CIN",
            "teamName": "Reds",
            "locationName": "Cincinnati",
            "firstYearOfPlay": "1882",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 205,
              "name": "National League Central",
              "link": "/api/v1/divisions/205"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "Cincinnati",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 543243,
            "fullName": "Sonny Gray",
            "link": "/api/v1/people/543243",
            "firstName": "Sonny",
            "lastName": "Gray",
            "primaryNumber": "54",
            "birthDate": "1989-11-07",
            "currentAge": 29,
            "birthCity": "Nashville",
            "birthStateProvince": "TN",
            "birthCountry": "USA",
            "height": "5' 10",
            "weight": 192,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Sonny",
            "middleName": "Douglas",
            "boxscoreName": "Gray, S",
            "nickName": "Pickles",
            "draftYear": 2011,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 0,
                "gamesStarted": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "atBats": 0,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "-.--",
                "inningsPitched": "0.0",
                "wins": 0,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 0,
                "whip": "-",
                "outs": 0,
                "gamesPitched": 0,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 0,
                "rbi": 0,
                "winPercentage": ".---",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "0.00",
                "strikeoutsPer9Inn": "-.--",
                "walksPer9Inn": "-.--",
                "hitsPer9Inn": "-.--",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2013-07-10",
            "batSide": {
              "code": "R",
              "description": "Right"
            },
            "pitchHand": {
              "code": "R",
              "description": "Right"
            },
            "nameFirstLast": "Sonny Gray",
            "nameSlug": "sonny-gray-543243",
            "firstLastName": "Sonny Gray",
            "lastFirstName": "Gray, Sonny",
            "lastInitName": "Gray, S",
            "initLastName": "S Gray",
            "fullFMLName": "Sonny Douglas Gray",
            "fullLFMName": "Gray, Sonny Douglas",
            "strikeZoneTop": 3.301,
            "strikeZoneBottom": 1.504
          },
          "splitSquad": false,
          "seriesNumber": 15,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        },
        "home": {
          "leagueRecord": {
            "wins": 8,
            "losses": 5,
            "pct": ".615"
          },
          "team": {
            "id": 135,
            "name": "San Diego Padres",
            "link": "/api/v1/teams/135",
            "season": 2019,
            "venue": {
              "id": 2680,
              "name": "Petco Park",
              "link": "/api/v1/venues/2680"
            },
            "teamCode": "sdn",
            "fileCode": "sd",
            "abbreviation": "SD",
            "teamName": "Padres",
            "locationName": "San Diego",
            "firstYearOfPlay": "1969",
            "league": {
              "id": 104,
              "name": "National League",
              "link": "/api/v1/league/104"
            },
            "division": {
              "id": 203,
              "name": "National League West",
              "link": "/api/v1/divisions/203"
            },
            "sport": {
              "id": 1,
              "link": "/api/v1/sports/1",
              "name": "Major League Baseball"
            },
            "shortName": "San Diego",
            "springLeague": {
              "id": 114,
              "name": "Cactus League",
              "link": "/api/v1/league/114",
              "abbreviation": "CL"
            },
            "allStarStatus": "N",
            "active": true
          },
          "probablePitcher": {
            "id": 664192,
            "fullName": "Joey Lucchesi",
            "link": "/api/v1/people/664192",
            "firstName": "Joseph",
            "lastName": "Lucchesi",
            "primaryNumber": "37",
            "birthDate": "1993-06-06",
            "currentAge": 25,
            "birthCity": "Newark",
            "birthStateProvince": "CA",
            "birthCountry": "USA",
            "height": "6' 5",
            "weight": 204,
            "active": true,
            "primaryPosition": {
              "code": "1",
              "name": "Pitcher",
              "type": "Pitcher",
              "abbreviation": "P"
            },
            "useName": "Joey",
            "middleName": "George",
            "boxscoreName": "Lucchesi",
            "nickName": "Joey Fuego",
            "draftYear": 2016,
            "stats": [{
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "gameLog"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {}
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "hitting"
              },
              "stats": {
                "gamesPlayed": 0,
                "flyOuts": 0,
                "groundOuts": 0,
                "runs": 0,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 0,
                "baseOnBalls": 0,
                "intentionalWalks": 0,
                "hits": 0,
                "hitByPitch": 0,
                "avg": ".000",
                "atBats": 0,
                "obp": ".000",
                "slg": ".000",
                "ops": ".000",
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "groundIntoDoublePlay": 0,
                "groundIntoTriplePlay": 0,
                "totalBases": 0,
                "rbi": 0,
                "leftOnBase": 0,
                "sacBunts": 0,
                "sacFlies": 0,
                "catchersInterference": 0,
                "pickoffs": 0
              }
            }, {
              "type": {
                "displayName": "statsSingleSeason"
              },
              "group": {
                "displayName": "pitching"
              },
              "stats": {
                "gamesPlayed": 2,
                "gamesStarted": 2,
                "groundOuts": 5,
                "runs": 1,
                "doubles": 0,
                "triples": 0,
                "homeRuns": 0,
                "strikeOuts": 4,
                "baseOnBalls": 2,
                "intentionalWalks": 0,
                "hits": 2,
                "atBats": 17,
                "caughtStealing": 0,
                "stolenBases": 0,
                "stolenBasePercentage": ".---",
                "era": "1.80",
                "inningsPitched": "5.0",
                "wins": 1,
                "losses": 0,
                "saves": 0,
                "saveOpportunities": 0,
                "holds": 0,
                "blownSaves": 0,
                "earnedRuns": 1,
                "whip": "0.80",
                "outs": 15,
                "gamesPitched": 2,
                "completeGames": 0,
                "shutouts": 0,
                "hitBatsmen": 0,
                "wildPitches": 0,
                "pickoffs": 0,
                "airOuts": 6,
                "rbi": 0,
                "winPercentage": "1.000",
                "gamesFinished": 0,
                "strikeoutWalkRatio": "2.00",
                "strikeoutsPer9Inn": "7.20",
                "walksPer9Inn": "3.60",
                "hitsPer9Inn": "3.60",
                "inheritedRunners": 0,
                "inheritedRunnersScored": 0,
                "catchersInterference": 0,
                "sacBunts": 0,
                "sacFlies": 0
              }
            }],
            "mlbDebutDate": "2018-03-30",
            "batSide": {
              "code": "L",
              "description": "Left"
            },
            "pitchHand": {
              "code": "L",
              "description": "Left"
            },
            "nameFirstLast": "Joey Lucchesi",
            "nameSlug": "joey-lucchesi-664192",
            "firstLastName": "Joey Lucchesi",
            "lastFirstName": "Lucchesi, Joey",
            "lastInitName": "Lucchesi, J",
            "initLastName": "J Lucchesi",
            "fullFMLName": "Joseph George Lucchesi",
            "fullLFMName": "Lucchesi, Joseph George",
            "strikeZoneTop": 3.575,
            "strikeZoneBottom": 1.681
          },
          "splitSquad": false,
          "seriesNumber": 16,
          "springLeague": {
            "id": 114,
            "name": "Cactus League",
            "link": "/api/v1/league/114",
            "abbreviation": "CL"
          }
        }
      },
      "linescore": {
        "innings": [],
        "teams": {
          "home": {
            "team": {
              "id": 135,
              "name": "San Diego Padres",
              "link": "/api/v1/teams/135"
            }
          },
          "away": {
            "team": {
              "id": 113,
              "name": "Cincinnati Reds",
              "link": "/api/v1/teams/113"
            }
          }
        },
        "defense": {},
        "offense": {}
      },
      "venue": {
        "id": 2530,
        "name": "Peoria Stadium",
        "link": "/api/v1/venues/2530"
      },
      "tickets": [{
        "ticketType": "wired",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=27671&agency=MLBST&pid=8637874"
        }
      }, {
        "ticketType": "mobile",
        "ticketLinks": {
          "home": "https://purchase.tickets.com/buy/MLBEventInfo?orgid=27671&agency=MLBST&pid=8637874"
        }
      }],
      "content": {
        "link": "/api/v1/game/566267/content",
        "editorial": {},
        "media": {
          "epg": [{
            "title": "MLBTV",
            "items": [{
              "id": 38776075,
              "contentId": "d336ac8b-232a-44fc-a070-26086760c3d5",
              "mediaId": "71292d8b-ab76-4cef-ac79-0a7da65cb4ac",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "HOME",
              "mediaFeedSubType": "135",
              "callLetters": "FSSD",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }, {
              "id": 251368856,
              "contentId": "2c93ad0f-5558-4802-9b9d-b39e3667a3e7",
              "mediaId": "7c59f258-a510-477f-8ca1-de2905148f61",
              "mediaState": "MEDIA_OFF",
              "mediaFeedType": "AWAY",
              "mediaFeedSubType": "113",
              "callLetters": "FSO",
              "foxAuthRequired": false,
              "tbsAuthRequired": false,
              "espnAuthRequired": false,
              "fs1AuthRequired": false,
              "mlbnAuthRequired": false,
              "freeGame": false
            }]
          }, {
            "title": "MLBTV-Audio",
            "items": [{
              "id": 38776075,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "FSSD",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 38776075,
              "type": "",
              "mediaFeedType": "HOME",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }, {
              "id": 251368856,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "WLW 700",
              "renditionName": "English Radio",
              "language": "EN"
            }, {
              "id": 251368856,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "FS-O",
              "renditionName": "English",
              "language": "EN"
            }, {
              "id": 251368856,
              "type": "",
              "mediaFeedType": "AWAY",
              "description": "PARK",
              "renditionName": "Natural Sound",
              "language": "EN"
            }]
          }, {
            "title": "Audio",
            "items": [{
              "id": 122959436,
              "contentId": "ede842e8-6065-4132-a591-c5f31b0f897b",
              "mediaId": "f8f55850-d124-44fb-b81b-ebc361df54b6",
              "mediaState": "MEDIA_OFF",
              "type": "AWAY",
              "mediaFeedSubType": "113",
              "callLetters": "WLW",
              "language": "en"
            }]
          }],
          "epgAlternate": [{
            "items": [],
            "title": "Extended Highlights"
          }, {
            "items": [],
            "title": "Daily Recap"
          }],
          "freeGame": false,
          "enhancedGame": false
        },
        "highlights": {},
        "summary": {
          "hasPreviewArticle": false,
          "hasRecapArticle": false,
          "hasWrapArticle": false
        },
        "gameNotes": {}
      },
      "gameNumber": 1,
      "publicFacing": true,
      "doubleHeader": "N",
      "gamedayType": "Y",
      "tiebreaker": "N",
      "calendarEventID": "14-566267-2019-03-09",
      "seasonDisplay": "2019",
      "dayNight": "night",
      "scheduledInnings": 9,
      "gamesInSeries": 1,
      "seriesGameNumber": 1,
      "seriesDescription": "Spring Training",
      "flags": {},
      "recordSource": "S",
      "ifNecessary": "N",
      "ifNecessaryDescription": "Normal Game"
    }],
    "events": []
  }]
=======
  "copyright" : "Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt",
  "totalItems" : 14,
  "totalEvents" : 0,
  "totalGames" : 14,
  "totalGamesInProgress" : 5,
  "dates" : [ {
    "date" : "2019-03-12",
    "totalItems" : 14,
    "totalEvents" : 0,
    "totalGames" : 14,
    "totalGamesInProgress" : 5,
    "games" : [ {
      "gamePk" : 565020,
      "link" : "/api/v1/game/565020/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T17:05:00Z",
      "status" : {
        "abstractGameState" : "Live",
        "codedGameState" : "I",
        "detailedState" : "In Progress",
        "statusCode" : "I",
        "abstractGameCode" : "L"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 9,
            "pct" : ".471"
          },
          "score" : 2,
          "team" : {
            "id" : 116,
            "name" : "Detroit Tigers",
            "link" : "/api/v1/teams/116",
            "season" : 2019,
            "venue" : {
              "id" : 2394,
              "name" : "Comerica Park",
              "link" : "/api/v1/venues/2394"
            },
            "teamCode" : "det",
            "fileCode" : "det",
            "abbreviation" : "DET",
            "teamName" : "Tigers",
            "locationName" : "Detroit",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Detroit",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 596057,
            "fullName" : "Daniel Norris",
            "link" : "/api/v1/people/596057",
            "firstName" : "Daniel",
            "lastName" : "Norris",
            "primaryNumber" : "44",
            "birthDate" : "1993-04-25",
            "currentAge" : 25,
            "birthCity" : "Johnson City",
            "birthStateProvince" : "TN",
            "birthCountry" : "USA",
            "height" : "6' 2",
            "weight" : 185,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Daniel",
            "middleName" : "David",
            "boxscoreName" : "Norris, Da",
            "nickName" : "D. No",
            "draftYear" : 2011,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 2,
                "groundOuts" : 4,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 3,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 14,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 24,
                "inningsPitched" : "3.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 15,
                "outs" : 9,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 24,
                "balls" : 4,
                "strikes" : 20,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 3,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 3,
                "flyOuts" : 2,
                "groundOuts" : 7,
                "runs" : 3,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 3,
                "strikeOuts" : 7,
                "baseOnBalls" : 5,
                "intentionalWalks" : 0,
                "hits" : 8,
                "atBats" : 18,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "3.52",
                "inningsPitched" : "7.2",
                "wins" : 0,
                "losses" : 1,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 1,
                "blownSaves" : 0,
                "earnedRuns" : 3,
                "whip" : "1.70",
                "outs" : 23,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 10,
                "rbi" : 0,
                "winPercentage" : ".000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "1.40",
                "strikeoutsPer9Inn" : "8.22",
                "walksPer9Inn" : "5.87",
                "hitsPer9Inn" : "9.39",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2014-09-05",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Daniel Norris",
            "nameSlug" : "daniel-norris-596057",
            "firstLastName" : "Daniel Norris",
            "lastFirstName" : "Norris, Daniel",
            "lastInitName" : "Norris, D",
            "initLastName" : "D Norris",
            "fullFMLName" : "Daniel David Norris",
            "fullLFMName" : "Norris, Daniel David",
            "strikeZoneTop" : 3.467,
            "strikeZoneBottom" : 1.589
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 6,
            "losses" : 10,
            "pct" : ".375"
          },
          "score" : 0,
          "team" : {
            "id" : 111,
            "name" : "Boston Red Sox",
            "link" : "/api/v1/teams/111",
            "season" : 2019,
            "venue" : {
              "id" : 3,
              "name" : "Fenway Park",
              "link" : "/api/v1/venues/3"
            },
            "teamCode" : "bos",
            "fileCode" : "bos",
            "abbreviation" : "BOS",
            "teamName" : "Red Sox",
            "locationName" : "Boston",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Boston",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 456034,
            "fullName" : "David Price",
            "link" : "/api/v1/people/456034",
            "firstName" : "David",
            "lastName" : "Price",
            "primaryNumber" : "10",
            "birthDate" : "1985-08-26",
            "currentAge" : 33,
            "birthCity" : "Murfreesboro",
            "birthStateProvince" : "TN",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 215,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "David",
            "middleName" : "Taylor",
            "boxscoreName" : "Price",
            "nickName" : "Slim Dunkin",
            "draftYear" : 2007,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 3,
                "runs" : 2,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 4,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 2,
                "atBats" : 10,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 28,
                "inningsPitched" : "3.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 2,
                "battersFaced" : 12,
                "outs" : 9,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 28,
                "balls" : 10,
                "strikes" : 18,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 1,
                "rbi" : 2,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 3,
                "runs" : 2,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 4,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 2,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "6.00",
                "inningsPitched" : "3.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 2,
                "whip" : "1.33",
                "outs" : 9,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 1,
                "rbi" : 2,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.00",
                "strikeoutsPer9Inn" : "12.00",
                "walksPer9Inn" : "6.00",
                "hitsPer9Inn" : "6.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2008-09-14",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "David Price",
            "nameSlug" : "david-price-456034",
            "firstLastName" : "David Price",
            "lastFirstName" : "Price, David",
            "lastInitName" : "Price, D",
            "initLastName" : "D Price",
            "fullFMLName" : "David Taylor Price",
            "fullLFMName" : "Price, David Taylor",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 6,
        "currentInningOrdinal" : "6th",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 2
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 1,
            "leftOnBase" : 0
          }
        }, {
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 2
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 2
          },
          "away" : {
            "runs" : 2,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 4,
          "ordinalNum" : "4th",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 3
          }
        }, {
          "num" : 5,
          "ordinalNum" : "5th",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 6,
          "ordinalNum" : "6th",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 4,
            "errors" : 0,
            "leftOnBase" : 6
          },
          "away" : {
            "runs" : 2,
            "hits" : 3,
            "errors" : 1,
            "leftOnBase" : 5
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 2
      },
      "venue" : {
        "id" : 4309,
        "name" : "JetBlue Park",
        "link" : "/api/v1/venues/4309"
      },
      "content" : {
        "link" : "/api/v1/game/565020/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 260865280,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 260865280,
              "contentId" : "f1667d50-ba10-4dda-a2e9-6aaf7a93fbf9",
              "mediaId" : "82d344a5-18ec-40c0-92e4-6842dd4975c1",
              "mediaState" : "MEDIA_ON",
              "type" : "HOME",
              "mediaFeedSubType" : "111",
              "callLetters" : "WEEI",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-565020-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 2,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 567352,
      "link" : "/api/v1/game/567352/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T17:05:00Z",
      "status" : {
        "abstractGameState" : "Live",
        "codedGameState" : "I",
        "detailedState" : "In Progress",
        "statusCode" : "I",
        "abstractGameCode" : "L"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 9,
            "pct" : ".471"
          },
          "score" : 0,
          "team" : {
            "id" : 121,
            "name" : "New York Mets",
            "link" : "/api/v1/teams/121",
            "season" : 2019,
            "venue" : {
              "id" : 3289,
              "name" : "Citi Field",
              "link" : "/api/v1/venues/3289"
            },
            "teamCode" : "nyn",
            "fileCode" : "nym",
            "abbreviation" : "NYM",
            "teamName" : "Mets",
            "locationName" : "New York",
            "firstYearOfPlay" : "1962",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "NY Mets",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 594798,
            "fullName" : "Jacob deGrom",
            "link" : "/api/v1/people/594798",
            "firstName" : "Jacob",
            "lastName" : "deGrom",
            "primaryNumber" : "48",
            "birthDate" : "1988-06-19",
            "currentAge" : 30,
            "birthCity" : "DeLand",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 4",
            "weight" : 180,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Jacob",
            "middleName" : "Anthony",
            "boxscoreName" : "deGrom",
            "nickName" : "Jake",
            "draftYear" : 2010,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 1,
                "groundOuts" : 4,
                "runs" : 2,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 6,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 6,
                "atBats" : 20,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 33,
                "inningsPitched" : "5.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 2,
                "battersFaced" : 20,
                "outs" : 15,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 33,
                "balls" : 1,
                "strikes" : 32,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 2,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 4,
                "flyOuts" : 1,
                "groundOuts" : 9,
                "runs" : 5,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 15,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 11,
                "atBats" : 25,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "3.75",
                "inningsPitched" : "12.0",
                "wins" : 1,
                "losses" : 1,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 5,
                "whip" : "1.08",
                "outs" : 36,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 1,
                "pickoffs" : 0,
                "airOuts" : 11,
                "rbi" : 2,
                "winPercentage" : ".500",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "7.50",
                "strikeoutsPer9Inn" : "11.25",
                "walksPer9Inn" : "1.50",
                "hitsPer9Inn" : "8.25",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "mlbDebutDate" : "2014-05-15",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Jacob deGrom",
            "nameSlug" : "jacob-degrom-594798",
            "firstLastName" : "Jacob deGrom",
            "lastFirstName" : "deGrom, Jacob",
            "lastInitName" : "deGrom, J",
            "initLastName" : "J deGrom",
            "fullFMLName" : "Jacob Anthony deGrom",
            "fullLFMName" : "deGrom, Jacob Anthony",
            "strikeZoneTop" : 3.549,
            "strikeZoneBottom" : 1.627
          },
          "splitSquad" : false,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 7,
            "losses" : 10,
            "pct" : ".412"
          },
          "score" : 2,
          "team" : {
            "id" : 146,
            "name" : "Miami Marlins",
            "link" : "/api/v1/teams/146",
            "season" : 2019,
            "venue" : {
              "id" : 4169,
              "name" : "Marlins Park",
              "link" : "/api/v1/venues/4169"
            },
            "teamCode" : "mia",
            "fileCode" : "mia",
            "abbreviation" : "MIA",
            "teamName" : "Marlins",
            "locationName" : "Miami",
            "firstYearOfPlay" : "1992",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Miami",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 456051,
            "fullName" : "Hector Noesi",
            "link" : "/api/v1/people/456051",
            "firstName" : "Hector",
            "lastName" : "Noesi",
            "primaryNumber" : "48",
            "birthDate" : "1987-01-26",
            "currentAge" : 32,
            "birthCity" : "Esperanza",
            "birthCountry" : "Dominican Republic",
            "height" : "6' 3",
            "weight" : 205,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Hector",
            "boxscoreName" : "Noesi",
            "pronunciation" : "no-EH-see",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 0,
                "groundOuts" : 7,
                "runs" : 5,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 4,
                "strikeOuts" : 5,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 7,
                "atBats" : 25,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "6.35",
                "inningsPitched" : "5.2",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 4,
                "whip" : "1.41",
                "outs" : 17,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 7,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "5.00",
                "strikeoutsPer9Inn" : "7.94",
                "walksPer9Inn" : "1.59",
                "hitsPer9Inn" : "11.12",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 1,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2011-05-18",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Hector Noesi",
            "nameSlug" : "hector-noesi-456051",
            "firstLastName" : "Hector Noesi",
            "lastFirstName" : "Noesi, Hector",
            "lastInitName" : "Noesi, H",
            "initLastName" : "H Noesi",
            "fullFMLName" : "Hector Noesi",
            "fullLFMName" : "Noesi, Hector",
            "strikeZoneTop" : 3.49,
            "strikeZoneBottom" : 1.601
          },
          "splitSquad" : false,
          "seriesNumber" : 17,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 6,
        "currentInningOrdinal" : "6th",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "runs" : 0,
            "hits" : 3,
            "errors" : 0,
            "leftOnBase" : 2
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "runs" : 2,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 4,
          "ordinalNum" : "4th",
          "home" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 5,
          "ordinalNum" : "5th",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 6,
          "ordinalNum" : "6th",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 2,
            "hits" : 6,
            "errors" : 0,
            "leftOnBase" : 3
          },
          "away" : {
            "runs" : 0,
            "hits" : 3,
            "errors" : 0,
            "leftOnBase" : 2
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 1,
        "strikes" : 0,
        "outs" : 2
      },
      "venue" : {
        "id" : 2520,
        "name" : "Roger Dean Chevrolet Stadium",
        "link" : "/api/v1/venues/2520"
      },
      "content" : {
        "link" : "/api/v1/game/567352/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 198339056,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 198339056,
              "contentId" : "82ae202e-5c56-4703-9815-849bd18b520d",
              "mediaId" : "f046070d-ea90-4f98-9148-10ce375ba192",
              "mediaState" : "MEDIA_ON",
              "type" : "HOME",
              "mediaFeedSubType" : "146",
              "callLetters" : "WINZ",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-567352-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 566173,
      "link" : "/api/v1/game/566173/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T17:05:00Z",
      "status" : {
        "abstractGameState" : "Live",
        "codedGameState" : "I",
        "detailedState" : "In Progress",
        "statusCode" : "I",
        "abstractGameCode" : "L"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 8,
            "pct" : ".500"
          },
          "score" : 3,
          "team" : {
            "id" : 142,
            "name" : "Minnesota Twins",
            "link" : "/api/v1/teams/142",
            "season" : 2019,
            "venue" : {
              "id" : 3312,
              "name" : "Target Field",
              "link" : "/api/v1/venues/3312"
            },
            "teamCode" : "min",
            "fileCode" : "min",
            "abbreviation" : "MIN",
            "teamName" : "Twins",
            "locationName" : "Minneapolis",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Minnesota",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 624427,
            "fullName" : "Stephen Gonsalves",
            "link" : "/api/v1/people/624427",
            "firstName" : "Stephen",
            "lastName" : "Gonsalves",
            "primaryNumber" : "59",
            "birthDate" : "1994-07-08",
            "currentAge" : 24,
            "birthCity" : "San Diego",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 213,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Stephen",
            "middleName" : "William",
            "boxscoreName" : "Gonsalves",
            "draftYear" : 2013,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 4,
                "groundOuts" : 2,
                "runs" : 4,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 3,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 13,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 27,
                "inningsPitched" : "3.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 3,
                "battersFaced" : 15,
                "outs" : 9,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 27,
                "balls" : 8,
                "strikes" : 19,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 1,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "flyOuts" : 4,
                "groundOuts" : 8,
                "runs" : 6,
                "doubles" : 4,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 7,
                "baseOnBalls" : 4,
                "intentionalWalks" : 0,
                "hits" : 10,
                "atBats" : 20,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "5.63",
                "inningsPitched" : "8.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 5,
                "whip" : "1.75",
                "outs" : 24,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 9,
                "rbi" : 1,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "1.75",
                "strikeoutsPer9Inn" : "7.88",
                "walksPer9Inn" : "4.50",
                "hitsPer9Inn" : "11.25",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "mlbDebutDate" : "2018-08-20",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Stephen Gonsalves",
            "nameSlug" : "stephen-gonsalves-624427",
            "firstLastName" : "Stephen Gonsalves",
            "lastFirstName" : "Gonsalves, Stephen",
            "lastInitName" : "Gonsalves, S",
            "initLastName" : "S Gonsalves",
            "fullFMLName" : "Stephen William Gonsalves",
            "fullLFMName" : "Gonsalves, Stephen William",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 7,
            "losses" : 10,
            "pct" : ".412"
          },
          "score" : 4,
          "team" : {
            "id" : 134,
            "name" : "Pittsburgh Pirates",
            "link" : "/api/v1/teams/134",
            "season" : 2019,
            "venue" : {
              "id" : 31,
              "name" : "PNC Park",
              "link" : "/api/v1/venues/31"
            },
            "teamCode" : "pit",
            "fileCode" : "pit",
            "abbreviation" : "PIT",
            "teamName" : "Pirates",
            "locationName" : "Pittsburgh",
            "firstYearOfPlay" : "1882",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Pittsburgh",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 592791,
            "fullName" : "Jameson Taillon",
            "link" : "/api/v1/people/592791",
            "firstName" : "Jameson",
            "lastName" : "Taillon",
            "primaryNumber" : "50",
            "birthDate" : "1991-11-18",
            "currentAge" : 27,
            "birthCity" : "Lakeland",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 230,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Jameson",
            "middleName" : "Lee",
            "boxscoreName" : "Taillon",
            "nickName" : "Jamo",
            "draftYear" : 2010,
            "pronunciation" : "TIE-own",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "flyOuts" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "atBats" : 1,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 5,
                "groundOuts" : 5,
                "runs" : 3,
                "doubles" : 5,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 2,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 5,
                "atBats" : 17,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 22,
                "inningsPitched" : "4.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 3,
                "battersFaced" : 17,
                "outs" : 12,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 22,
                "balls" : 1,
                "strikes" : 21,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 5,
                "rbi" : 3,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "flyOuts" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 1,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 5,
                "groundOuts" : 5,
                "runs" : 3,
                "doubles" : 5,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 2,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 5,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "6.75",
                "inningsPitched" : "4.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 3,
                "whip" : "1.25",
                "outs" : 12,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 5,
                "rbi" : 3,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "0.00",
                "strikeoutsPer9Inn" : "4.50",
                "walksPer9Inn" : "0.00",
                "hitsPer9Inn" : "11.25",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2016-06-08",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Jameson Taillon",
            "nameSlug" : "jameson-taillon-592791",
            "firstLastName" : "Jameson Taillon",
            "lastFirstName" : "Taillon, Jameson",
            "lastInitName" : "Taillon, J",
            "initLastName" : "J Taillon",
            "fullFMLName" : "Jameson Lee Taillon",
            "fullLFMName" : "Taillon, Jameson Lee",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 6,
        "currentInningOrdinal" : "6th",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "runs" : 1,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 2,
            "hits" : 2,
            "errors" : 1,
            "leftOnBase" : 0
          }
        }, {
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "runs" : 1,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 1,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 4,
          "ordinalNum" : "4th",
          "home" : {
            "runs" : 2,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 5,
          "ordinalNum" : "5th",
          "home" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 2
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 6,
          "ordinalNum" : "6th",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 4,
            "hits" : 7,
            "errors" : 0,
            "leftOnBase" : 5
          },
          "away" : {
            "runs" : 3,
            "hits" : 5,
            "errors" : 1,
            "leftOnBase" : 2
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 2526,
        "name" : "LECOM Park",
        "link" : "/api/v1/venues/2526"
      },
      "content" : {
        "link" : "/api/v1/game/566173/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 88442599,
              "contentId" : "655be9ad-4bb8-4672-82bd-3022655a0d9d",
              "mediaId" : "a59557b4-a0da-4095-8b91-b9dd2f0c9b51",
              "mediaState" : "MEDIA_ON",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "134",
              "callLetters" : "ATTP",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 88442599,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "ATT SportsNet-PIT",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 88442599,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "KDKA-FM 93.7",
              "renditionName" : "English Radio",
              "language" : "EN"
            }, {
              "id" : 88442599,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 220223077,
              "contentId" : "a1471dd2-de06-40a8-b5b9-409e825f4f8b",
              "mediaId" : "256ba675-2d01-437b-b398-586fc1f3d12c",
              "mediaState" : "MEDIA_ON",
              "type" : "HOME",
              "mediaFeedSubType" : "134",
              "callLetters" : "KDKA",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false,
          "hasHighlightsVideo" : true
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-566173-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 567149,
      "link" : "/api/v1/game/567149/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T17:05:00Z",
      "status" : {
        "abstractGameState" : "Live",
        "codedGameState" : "I",
        "detailedState" : "In Progress",
        "statusCode" : "I",
        "abstractGameCode" : "L"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 7,
            "losses" : 8,
            "pct" : ".467"
          },
          "score" : 0,
          "team" : {
            "id" : 138,
            "name" : "St. Louis Cardinals",
            "link" : "/api/v1/teams/138",
            "season" : 2019,
            "venue" : {
              "id" : 2889,
              "name" : "Busch Stadium",
              "link" : "/api/v1/venues/2889"
            },
            "teamCode" : "sln",
            "fileCode" : "stl",
            "abbreviation" : "STL",
            "teamName" : "Cardinals",
            "locationName" : "St. Louis",
            "firstYearOfPlay" : "1892",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "St. Louis",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 571945,
            "fullName" : "Miles Mikolas",
            "link" : "/api/v1/people/571945",
            "firstName" : "Miles",
            "lastName" : "Mikolas",
            "primaryNumber" : "39",
            "birthDate" : "1988-08-23",
            "currentAge" : 30,
            "birthCity" : "Jupiter",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 220,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Miles",
            "middleName" : "Tice",
            "boxscoreName" : "Mikolas",
            "nickName" : "Mik",
            "draftYear" : 2009,
            "pronunciation" : "MIY-koh-lahs",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 4,
                "groundOuts" : 8,
                "runs" : 4,
                "doubles" : 3,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 2,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 8,
                "atBats" : 22,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 31,
                "inningsPitched" : "5.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 4,
                "battersFaced" : 22,
                "outs" : 15,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 31,
                "balls" : 3,
                "strikes" : 28,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 4,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "flyOuts" : 4,
                "groundOuts" : 16,
                "runs" : 4,
                "doubles" : 3,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 3,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 13,
                "atBats" : 18,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "3.60",
                "inningsPitched" : "10.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 4,
                "whip" : "1.40",
                "outs" : 30,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 8,
                "rbi" : 4,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "3.00",
                "strikeoutsPer9Inn" : "2.70",
                "walksPer9Inn" : "0.90",
                "hitsPer9Inn" : "11.70",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2012-05-05",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Miles Mikolas",
            "nameSlug" : "miles-mikolas-571945",
            "firstLastName" : "Miles Mikolas",
            "lastFirstName" : "Mikolas, Miles",
            "lastInitName" : "Mikolas, M",
            "initLastName" : "M Mikolas",
            "fullFMLName" : "Miles Tice Mikolas",
            "fullLFMName" : "Mikolas, Miles Tice",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 17,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 10,
            "losses" : 7,
            "pct" : ".588"
          },
          "score" : 4,
          "team" : {
            "id" : 144,
            "name" : "Atlanta Braves",
            "link" : "/api/v1/teams/144",
            "season" : 2019,
            "venue" : {
              "id" : 4705,
              "name" : "SunTrust Park",
              "link" : "/api/v1/venues/4705"
            },
            "teamCode" : "atl",
            "fileCode" : "atl",
            "abbreviation" : "ATL",
            "teamName" : "Braves",
            "locationName" : "Atlanta",
            "firstYearOfPlay" : "1871",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Atlanta",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 669060,
            "fullName" : "Bryse Wilson",
            "link" : "/api/v1/people/669060",
            "firstName" : "Bryse",
            "lastName" : "Wilson",
            "primaryNumber" : "66",
            "birthDate" : "1997-12-20",
            "currentAge" : 21,
            "birthCity" : "Durham",
            "birthStateProvince" : "NC",
            "birthCountry" : "USA",
            "height" : "6' 1",
            "weight" : 225,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Bryse",
            "middleName" : "Everett",
            "boxscoreName" : "Wilson, B",
            "draftYear" : 2016,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 4,
                "groundOuts" : 3,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 5,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 1,
                "atBats" : 13,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 29,
                "inningsPitched" : "4.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 15,
                "outs" : 12,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 29,
                "balls" : 5,
                "strikes" : 24,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 3,
                "flyOuts" : 4,
                "groundOuts" : 12,
                "runs" : 2,
                "doubles" : 1,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 9,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 7,
                "atBats" : 23,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "1.86",
                "inningsPitched" : "9.2",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 2,
                "whip" : "0.83",
                "outs" : 29,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 8,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "9.00",
                "strikeoutsPer9Inn" : "8.38",
                "walksPer9Inn" : "0.93",
                "hitsPer9Inn" : "6.52",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2018-08-20",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Bryse Wilson",
            "nameSlug" : "bryse-wilson-669060",
            "firstLastName" : "Bryse Wilson",
            "lastFirstName" : "Wilson, Bryse",
            "lastInitName" : "Wilson, B",
            "initLastName" : "B Wilson",
            "fullFMLName" : "Bryse Everett Wilson",
            "fullLFMName" : "Wilson, Bryse Everett",
            "strikeZoneTop" : 3.411,
            "strikeZoneBottom" : 1.565
          },
          "splitSquad" : false,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 6,
        "currentInningOrdinal" : "6th",
        "inningState" : "Bottom",
        "inningHalf" : "Bottom",
        "isTopInning" : false,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "runs" : 2,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 4,
          "ordinalNum" : "4th",
          "home" : {
            "runs" : 1,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 5,
          "ordinalNum" : "5th",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 6,
          "ordinalNum" : "6th",
          "home" : {
            "runs" : 1,
            "hits" : 3,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 2
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 4,
            "hits" : 8,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 4,
            "errors" : 0,
            "leftOnBase" : 6
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 1
      },
      "venue" : {
        "id" : 2504,
        "name" : "Champion Stadium",
        "link" : "/api/v1/venues/2504"
      },
      "content" : {
        "link" : "/api/v1/game/567149/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 198562034,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 198562034,
              "contentId" : "3c6521a9-6959-40ca-bbd7-fcff9f1a5e35",
              "mediaId" : "3acafcf0-a6ae-4b88-8f89-a09e56c5f798",
              "mediaState" : "MEDIA_ON",
              "type" : "AWAY",
              "mediaFeedSubType" : "138",
              "callLetters" : "MLB.com",
              "language" : "en"
            }, {
              "id" : 127762448,
              "contentId" : "f1e1be6d-a550-4431-968e-887beabdf03c",
              "mediaId" : "34483f75-baa2-4a6e-a207-4e85f39b495f",
              "mediaState" : "MEDIA_ON",
              "type" : "HOME",
              "mediaFeedSubType" : "144",
              "callLetters" : "WIFN",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-567149-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 566857,
      "link" : "/api/v1/game/566857/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T17:07:00Z",
      "status" : {
        "abstractGameState" : "Live",
        "codedGameState" : "I",
        "detailedState" : "In Progress",
        "statusCode" : "I",
        "abstractGameCode" : "L"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 9,
            "pct" : ".471"
          },
          "score" : 0,
          "team" : {
            "id" : 139,
            "name" : "Tampa Bay Rays",
            "link" : "/api/v1/teams/139",
            "season" : 2019,
            "venue" : {
              "id" : 12,
              "name" : "Tropicana Field",
              "link" : "/api/v1/venues/12"
            },
            "teamCode" : "tba",
            "fileCode" : "tb",
            "abbreviation" : "TB",
            "teamName" : "Rays",
            "locationName" : "Tampa Bay",
            "firstYearOfPlay" : "1998",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Tampa Bay",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 621056,
            "fullName" : "Hunter Wood",
            "link" : "/api/v1/people/621056",
            "firstName" : "Hunter",
            "lastName" : "Wood",
            "primaryNumber" : "44",
            "birthDate" : "1993-08-12",
            "currentAge" : 25,
            "birthCity" : "Rogers",
            "birthStateProvince" : "AR",
            "birthCountry" : "USA",
            "height" : "6' 1",
            "weight" : 175,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Hunter",
            "middleName" : "Blake",
            "boxscoreName" : "Wood, H",
            "nickName" : "Woody",
            "draftYear" : 2013,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 1,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 2,
                "atBats" : 4,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 6,
                "inningsPitched" : "1.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 4,
                "outs" : 3,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 6,
                "balls" : 0,
                "strikes" : 6,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 1,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 5,
                "gamesStarted" : 0,
                "groundOuts" : 8,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 4,
                "baseOnBalls" : 3,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 18,
                "caughtStealing" : 0,
                "stolenBases" : 1,
                "stolenBasePercentage" : "1.000",
                "era" : "0.00",
                "inningsPitched" : "6.1",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "1.11",
                "outs" : 19,
                "gamesPitched" : 5,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 6,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "1.33",
                "strikeoutsPer9Inn" : "5.68",
                "walksPer9Inn" : "4.26",
                "hitsPer9Inn" : "5.68",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2017-05-30",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Hunter Wood",
            "nameSlug" : "hunter-wood-621056",
            "firstLastName" : "Hunter Wood",
            "lastFirstName" : "Wood, Hunter",
            "lastInitName" : "Wood, H",
            "initLastName" : "H Wood",
            "fullFMLName" : "Hunter Blake Wood",
            "fullLFMName" : "Wood, Hunter Blake",
            "strikeZoneTop" : 3.411,
            "strikeZoneBottom" : 1.565
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 9,
            "losses" : 6,
            "pct" : ".600"
          },
          "score" : 0,
          "team" : {
            "id" : 141,
            "name" : "Toronto Blue Jays",
            "link" : "/api/v1/teams/141",
            "season" : 2019,
            "venue" : {
              "id" : 14,
              "name" : "Rogers Centre",
              "link" : "/api/v1/venues/14"
            },
            "teamCode" : "tor",
            "fileCode" : "tor",
            "abbreviation" : "TOR",
            "teamName" : "Blue Jays",
            "locationName" : "Toronto",
            "firstYearOfPlay" : "1977",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Toronto",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 592717,
            "fullName" : "Aaron Sanchez",
            "link" : "/api/v1/people/592717",
            "firstName" : "Aaron",
            "lastName" : "Sanchez",
            "primaryNumber" : "41",
            "birthDate" : "1992-07-01",
            "currentAge" : 26,
            "birthCity" : "Barstow",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 4",
            "weight" : 210,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Aaron",
            "middleName" : "Jacob",
            "boxscoreName" : "Sanchez, Aa",
            "nickName" : "Sanchize",
            "draftYear" : 2010,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "flyOuts" : 1,
                "groundOuts" : 5,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 3,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 1,
                "atBats" : 13,
                "caughtStealing" : 1,
                "stolenBases" : 0,
                "numberOfPitches" : 24,
                "inningsPitched" : "4.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 14,
                "outs" : 12,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 24,
                "balls" : 5,
                "strikes" : 19,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "flyOuts" : 1,
                "groundOuts" : 12,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 7,
                "baseOnBalls" : 4,
                "intentionalWalks" : 0,
                "hits" : 2,
                "atBats" : 14,
                "caughtStealing" : 2,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".000",
                "era" : "0.00",
                "inningsPitched" : "8.2",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "0.69",
                "outs" : 26,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 6,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "1.75",
                "strikeoutsPer9Inn" : "7.27",
                "walksPer9Inn" : "4.15",
                "hitsPer9Inn" : "2.08",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2014-07-23",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Aaron Sanchez",
            "nameSlug" : "aaron-sanchez-592717",
            "firstLastName" : "Aaron Sanchez",
            "lastFirstName" : "Sanchez, Aaron",
            "lastInitName" : "Sanchez, A",
            "initLastName" : "A Sanchez",
            "fullFMLName" : "Aaron Jacob Sanchez",
            "fullLFMName" : "Sanchez, Aaron Jacob",
            "strikeZoneTop" : 3.549,
            "strikeZoneBottom" : 1.627
          },
          "splitSquad" : false,
          "seriesNumber" : 17,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 6,
        "currentInningOrdinal" : "6th",
        "inningState" : "Middle",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 2,
          "ordinalNum" : "2nd",
          "home" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 3
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 1,
            "leftOnBase" : 0
          }
        }, {
          "num" : 3,
          "ordinalNum" : "3rd",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        }, {
          "num" : 4,
          "ordinalNum" : "4th",
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 1,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 2
          }
        }, {
          "num" : 5,
          "ordinalNum" : "5th",
          "home" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 0,
            "leftOnBase" : 1
          },
          "away" : {
            "runs" : 0,
            "hits" : 1,
            "errors" : 0,
            "leftOnBase" : 1
          }
        }, {
          "num" : 6,
          "ordinalNum" : "6th",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 5,
            "errors" : 1,
            "leftOnBase" : 5
          },
          "away" : {
            "runs" : 0,
            "hits" : 2,
            "errors" : 1,
            "leftOnBase" : 3
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 3
      },
      "venue" : {
        "id" : 2536,
        "name" : "Dunedin Stadium",
        "link" : "/api/v1/venues/2536"
      },
      "content" : {
        "link" : "/api/v1/game/566857/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 50636499,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 50636499,
              "contentId" : "524db55d-6e76-419c-91d4-5b03e53a5dc9",
              "mediaId" : "ddc0ebe8-5f3f-430b-b6b2-ddb7b9f57c7d",
              "mediaState" : "MEDIA_ON",
              "type" : "HOME",
              "mediaFeedSubType" : "141",
              "callLetters" : "SN590",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-566857-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 565696,
      "link" : "/api/v1/game/565696/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T20:05:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 6,
            "losses" : 10,
            "pct" : ".375"
          },
          "score" : 0,
          "team" : {
            "id" : 145,
            "name" : "Chicago White Sox",
            "link" : "/api/v1/teams/145",
            "season" : 2019,
            "venue" : {
              "id" : 4,
              "name" : "Guaranteed Rate Field",
              "link" : "/api/v1/venues/4"
            },
            "teamCode" : "cha",
            "fileCode" : "cws",
            "abbreviation" : "CWS",
            "teamName" : "White Sox",
            "locationName" : "Chicago",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Chi White Sox",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 608334,
            "fullName" : "Carson Fulmer",
            "link" : "/api/v1/people/608334",
            "firstName" : "Carson",
            "lastName" : "Fulmer",
            "primaryNumber" : "51",
            "birthDate" : "1993-12-13",
            "currentAge" : 25,
            "birthCity" : "Lakeland",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 0",
            "weight" : 195,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Carson",
            "middleName" : "Springer",
            "boxscoreName" : "Fulmer, C",
            "draftYear" : 2015,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 6,
                "gamesStarted" : 1,
                "groundOuts" : 7,
                "runs" : 8,
                "doubles" : 2,
                "triples" : 1,
                "homeRuns" : 2,
                "strikeOuts" : 9,
                "baseOnBalls" : 4,
                "intentionalWalks" : 0,
                "hits" : 9,
                "atBats" : 34,
                "caughtStealing" : 0,
                "stolenBases" : 2,
                "stolenBasePercentage" : "1.000",
                "era" : "9.00",
                "inningsPitched" : "8.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 8,
                "whip" : "1.63",
                "outs" : 24,
                "gamesPitched" : 6,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 1,
                "pickoffs" : 0,
                "airOuts" : 9,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.25",
                "strikeoutsPer9Inn" : "10.13",
                "walksPer9Inn" : "4.50",
                "hitsPer9Inn" : "10.13",
                "inheritedRunners" : 2,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2016-07-17",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Carson Fulmer",
            "nameSlug" : "carson-fulmer-608334",
            "firstLastName" : "Carson Fulmer",
            "lastFirstName" : "Fulmer, Carson",
            "lastInitName" : "Fulmer, C",
            "initLastName" : "C Fulmer",
            "fullFMLName" : "Carson Springer Fulmer",
            "fullLFMName" : "Fulmer, Carson Springer",
            "strikeZoneTop" : 3.371,
            "strikeZoneBottom" : 1.535
          },
          "splitSquad" : true,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 11,
            "losses" : 8,
            "pct" : ".579"
          },
          "score" : 0,
          "team" : {
            "id" : 118,
            "name" : "Kansas City Royals",
            "link" : "/api/v1/teams/118",
            "season" : 2019,
            "venue" : {
              "id" : 7,
              "name" : "Kauffman Stadium",
              "link" : "/api/v1/venues/7"
            },
            "teamCode" : "kca",
            "fileCode" : "kc",
            "abbreviation" : "KC",
            "teamName" : "Royals",
            "locationName" : "Kansas City",
            "firstYearOfPlay" : "1969",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Kansas City",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 641745,
            "fullName" : "Brad Keller",
            "link" : "/api/v1/people/641745",
            "firstName" : "Brad",
            "lastName" : "Keller",
            "primaryNumber" : "56",
            "birthDate" : "1995-07-27",
            "currentAge" : 23,
            "birthCity" : "Flowery Branch",
            "birthStateProvince" : "GA",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 230,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Brad",
            "middleName" : "Michael",
            "boxscoreName" : "Keller",
            "nickName" : "B. K.",
            "draftYear" : 2013,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "groundOuts" : 5,
                "runs" : 3,
                "doubles" : 3,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 6,
                "baseOnBalls" : 3,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 18,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "5.40",
                "inningsPitched" : "5.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 3,
                "whip" : "1.40",
                "outs" : 15,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 3,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.00",
                "strikeoutsPer9Inn" : "10.80",
                "walksPer9Inn" : "5.40",
                "hitsPer9Inn" : "7.20",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2018-03-29",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Brad Keller",
            "nameSlug" : "brad-keller-641745",
            "firstLastName" : "Brad Keller",
            "lastFirstName" : "Keller, Brad",
            "lastInitName" : "Keller, B",
            "initLastName" : "B Keller",
            "fullFMLName" : "Brad Michael Keller",
            "fullLFMName" : "Keller, Brad Michael",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 20,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 2603,
        "name" : "Surprise Stadium",
        "link" : "/api/v1/venues/2603"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=48570&agency=MLBST&pid=8636900"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=48570&agency=MLBST&pid=8636900"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/565696/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 147329618,
              "contentId" : "043614ed-f03a-478f-ac02-b3c1c19137f1",
              "mediaId" : "fd538824-7efd-4880-97d1-f516c8460ef0",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "118",
              "callLetters" : "FSKC",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 147329618,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "KCSP 610",
              "renditionName" : "English Radio",
              "language" : "EN"
            }, {
              "id" : 147329618,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "FSKC",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 147329618,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            }, {
              "id" : 107340799,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 107340799,
              "contentId" : "b044e43c-1ba4-4e7f-9173-ea2d1a2b4ac2",
              "mediaId" : "cc1dc382-641f-40d3-8cdf-4c50b3f85bff",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "118",
              "callLetters" : "KCSP",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-565696-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 567256,
      "link" : "/api/v1/game/567256/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T20:05:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 7,
            "losses" : 8,
            "pct" : ".467"
          },
          "score" : 0,
          "team" : {
            "id" : 136,
            "name" : "Seattle Mariners",
            "link" : "/api/v1/teams/136",
            "season" : 2019,
            "venue" : {
              "id" : 680,
              "name" : "T-Mobile Park",
              "link" : "/api/v1/venues/680"
            },
            "teamCode" : "sea",
            "fileCode" : "sea",
            "abbreviation" : "SEA",
            "teamName" : "Mariners",
            "locationName" : "Seattle",
            "firstYearOfPlay" : "1977",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Seattle",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 579328,
            "fullName" : "Yusei Kikuchi",
            "link" : "/api/v1/people/579328",
            "firstName" : "Yusei",
            "lastName" : "Kikuchi",
            "primaryNumber" : "18",
            "birthDate" : "1991-06-17",
            "currentAge" : 27,
            "birthCity" : "Morioka",
            "birthCountry" : "Japan",
            "height" : "6' 0",
            "weight" : 194,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Yusei",
            "boxscoreName" : "Kikuchi",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 4,
                "groundOuts" : 12,
                "runs" : 6,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 6,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 8,
                "atBats" : 33,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "4.00",
                "inningsPitched" : "9.0",
                "wins" : 2,
                "losses" : 1,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 4,
                "whip" : "1.11",
                "outs" : 27,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 1,
                "pickoffs" : 0,
                "airOuts" : 8,
                "rbi" : 0,
                "winPercentage" : ".670",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "3.00",
                "strikeoutsPer9Inn" : "6.00",
                "walksPer9Inn" : "2.00",
                "hitsPer9Inn" : "8.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Yusei Kikuchi",
            "nameSlug" : "yusei-kikuchi-579328",
            "firstLastName" : "Yusei Kikuchi",
            "lastFirstName" : "Kikuchi, Yusei",
            "lastInitName" : "Kikuchi, Y",
            "initLastName" : "Y Kikuchi",
            "fullFMLName" : "Yusei Kikuchi",
            "fullLFMName" : "Kikuchi, Yusei",
            "strikeZoneTop" : 3.371,
            "strikeZoneBottom" : 1.535
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 6,
            "losses" : 10,
            "pct" : ".375"
          },
          "score" : 0,
          "team" : {
            "id" : 145,
            "name" : "Chicago White Sox",
            "link" : "/api/v1/teams/145",
            "season" : 2019,
            "venue" : {
              "id" : 4,
              "name" : "Guaranteed Rate Field",
              "link" : "/api/v1/venues/4"
            },
            "teamCode" : "cha",
            "fileCode" : "cws",
            "abbreviation" : "CWS",
            "teamName" : "White Sox",
            "locationName" : "Chicago",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Chi White Sox",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 607074,
            "fullName" : "Carlos Rodon",
            "link" : "/api/v1/people/607074",
            "firstName" : "Carlos",
            "lastName" : "Rodon",
            "primaryNumber" : "55",
            "birthDate" : "1992-12-10",
            "currentAge" : 26,
            "birthCity" : "Miami",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 3",
            "weight" : 235,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Carlos",
            "middleName" : "Antonio",
            "boxscoreName" : "Rodón, C",
            "nickName" : "Los",
            "draftYear" : 2014,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "groundOuts" : 8,
                "runs" : 3,
                "doubles" : 1,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 5,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 24,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "3.86",
                "inningsPitched" : "7.0",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 3,
                "whip" : "0.86",
                "outs" : 21,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 7,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.50",
                "strikeoutsPer9Inn" : "6.43",
                "walksPer9Inn" : "2.57",
                "hitsPer9Inn" : "5.14",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2015-04-21",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Carlos Rodon",
            "nameSlug" : "carlos-rodon-607074",
            "firstLastName" : "Carlos Rodón",
            "lastFirstName" : "Rodón, Carlos",
            "lastInitName" : "Rodón, C",
            "initLastName" : "C Rodón",
            "fullFMLName" : "Carlos Antonio Rodón",
            "fullLFMName" : "Rodón, Carlos A",
            "strikeZoneTop" : 3.44,
            "strikeZoneBottom" : 1.57
          },
          "splitSquad" : true,
          "seriesNumber" : 20,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 3809,
        "name" : "Camelback Ranch",
        "link" : "/api/v1/venues/3809"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "http://purchase.tickets.com/buy/MLBEventInfo?orgid=20373&agency=MLBST&pid=8639504"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "http://purchase.tickets.com/buy/MLBEventInfo?orgid=20373&agency=MLBST&pid=8639504"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/567256/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 127833048,
              "contentId" : "9d06a0ec-d0a5-449e-9249-c94a035c28b4",
              "mediaId" : "63ed4e4d-7f1f-421c-bbcf-7fafced40ec1",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "145",
              "callLetters" : "MLB.com",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 127833048,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "MLB.com",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 127833048,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 125150549,
              "contentId" : "3a9e3aba-ea6f-40c9-9825-1de59d42e6e2",
              "mediaId" : "ef9e6b3a-50fb-4e9e-89ba-f247a4cd001b",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "136",
              "callLetters" : "710",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 2,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-567256-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "day",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 565888,
      "link" : "/api/v1/game/565888/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T22:35:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 9,
            "losses" : 7,
            "pct" : ".563"
          },
          "score" : 0,
          "team" : {
            "id" : 117,
            "name" : "Houston Astros",
            "link" : "/api/v1/teams/117",
            "season" : 2019,
            "venue" : {
              "id" : 2392,
              "name" : "Minute Maid Park",
              "link" : "/api/v1/venues/2392"
            },
            "teamCode" : "hou",
            "fileCode" : "hou",
            "abbreviation" : "HOU",
            "teamName" : "Astros",
            "locationName" : "Houston",
            "firstYearOfPlay" : "1962",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Houston",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 434378,
            "fullName" : "Justin Verlander",
            "link" : "/api/v1/people/434378",
            "firstName" : "Justin",
            "lastName" : "Verlander",
            "primaryNumber" : "35",
            "birthDate" : "1983-02-20",
            "currentAge" : 36,
            "birthCity" : "Manakin-Sabot",
            "birthStateProvince" : "VA",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 225,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Justin",
            "middleName" : "Brooks",
            "boxscoreName" : "Verlander",
            "nickName" : "J V",
            "draftYear" : 2004,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 4,
                "groundOuts" : 5,
                "runs" : 1,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 10,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 7,
                "atBats" : 31,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "1.08",
                "inningsPitched" : "8.1",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 1,
                "whip" : "1.08",
                "outs" : 25,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 10,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "5.00",
                "strikeoutsPer9Inn" : "10.80",
                "walksPer9Inn" : "2.16",
                "hitsPer9Inn" : "7.56",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 1,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2005-07-04",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Justin Verlander",
            "nameSlug" : "justin-verlander-434378",
            "firstLastName" : "Justin Verlander",
            "lastFirstName" : "Verlander, Justin",
            "lastInitName" : "Verlander, J",
            "initLastName" : "J Verlander",
            "fullFMLName" : "Justin Brooks Verlander",
            "fullLFMName" : "Verlander, Justin Brooks",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 16,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 8,
            "pct" : ".500"
          },
          "score" : 0,
          "team" : {
            "id" : 120,
            "name" : "Washington Nationals",
            "link" : "/api/v1/teams/120",
            "season" : 2019,
            "venue" : {
              "id" : 3309,
              "name" : "Nationals Park",
              "link" : "/api/v1/venues/3309"
            },
            "teamCode" : "was",
            "fileCode" : "was",
            "abbreviation" : "WSH",
            "teamName" : "Nationals",
            "locationName" : "Washington",
            "firstYearOfPlay" : "1969",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Washington",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 544931,
            "fullName" : "Stephen Strasburg",
            "link" : "/api/v1/people/544931",
            "firstName" : "Stephen",
            "lastName" : "Strasburg",
            "primaryNumber" : "37",
            "birthDate" : "1988-07-20",
            "currentAge" : 30,
            "birthCity" : "San Diego",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 235,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Stephen",
            "middleName" : "James",
            "boxscoreName" : "Strasburg",
            "nickName" : "Stras",
            "draftYear" : 2009,
            "pronunciation" : "STEE-vin STRAHS-berg",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 2,
                "gamesStarted" : 2,
                "groundOuts" : 6,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 7,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 2,
                "atBats" : 21,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "0.00",
                "inningsPitched" : "6.0",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "0.50",
                "outs" : 18,
                "gamesPitched" : 2,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 1,
                "pickoffs" : 0,
                "airOuts" : 6,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "7.00",
                "strikeoutsPer9Inn" : "10.50",
                "walksPer9Inn" : "1.50",
                "hitsPer9Inn" : "3.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2010-06-08",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Stephen Strasburg",
            "nameSlug" : "stephen-strasburg-544931",
            "firstLastName" : "Stephen Strasburg",
            "lastFirstName" : "Strasburg, Stephen",
            "lastInitName" : "Strasburg, S",
            "initLastName" : "S Strasburg",
            "fullFMLName" : "Stephen James Strasburg",
            "fullLFMName" : "Strasburg, Stephen James",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : false,
          "seriesNumber" : 17,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 5000,
        "name" : "FITTEAM Ballpark of the Palm Beaches",
        "link" : "/api/v1/venues/5000"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=22793&agency=MLBST&pid=8625336"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/565888/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 69599168,
              "contentId" : "878b92d2-a75e-4048-8e8b-68572d89e8ad",
              "mediaId" : "d3763db6-ea1b-4be0-b2b3-3bb9e574724a",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "AWAY",
              "mediaFeedSubType" : "117",
              "callLetters" : "ATTH",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 152507550,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 69599168,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "KBME 790",
              "renditionName" : "English Radio",
              "language" : "EN"
            }, {
              "id" : 69599168,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "ATT SportsNet-SW",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 69599168,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 152507550,
              "contentId" : "681a978a-de58-4710-a0b4-863b53d64939",
              "mediaId" : "b6783496-6c90-4f75-8186-da56964776ce",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "117",
              "callLetters" : "KBME",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-565888-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 567449,
      "link" : "/api/v1/game/567449/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-12T22:35:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 9,
            "losses" : 7,
            "pct" : ".563"
          },
          "score" : 0,
          "team" : {
            "id" : 110,
            "name" : "Baltimore Orioles",
            "link" : "/api/v1/teams/110",
            "season" : 2019,
            "venue" : {
              "id" : 2,
              "name" : "Oriole Park at Camden Yards",
              "link" : "/api/v1/venues/2"
            },
            "teamCode" : "bal",
            "fileCode" : "bal",
            "abbreviation" : "BAL",
            "teamName" : "Orioles",
            "locationName" : "Baltimore",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Baltimore",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 605541,
            "fullName" : "Mike Wright",
            "link" : "/api/v1/people/605541",
            "firstName" : "Dennis",
            "lastName" : "Wright Jr.",
            "primaryNumber" : "43",
            "birthDate" : "1990-01-03",
            "currentAge" : 29,
            "birthCity" : "Bennettsville",
            "birthStateProvince" : "SC",
            "birthCountry" : "USA",
            "height" : "6' 6",
            "weight" : 215,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Mike",
            "middleName" : "Michael",
            "boxscoreName" : "Wright",
            "nickName" : "Bird",
            "draftYear" : 2011,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 5,
                "gamesStarted" : 4,
                "groundOuts" : 11,
                "runs" : 0,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 7,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 9,
                "atBats" : 36,
                "caughtStealing" : 1,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".000",
                "era" : "0.00",
                "inningsPitched" : "10.0",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 1,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "1.10",
                "outs" : 30,
                "gamesPitched" : 5,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 9,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "3.50",
                "strikeoutsPer9Inn" : "6.30",
                "walksPer9Inn" : "1.80",
                "hitsPer9Inn" : "8.10",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2015-05-17",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Mike Wright",
            "nameSlug" : "mike-wright-605541",
            "firstLastName" : "Mike Wright",
            "lastFirstName" : "Wright, Mike",
            "lastInitName" : "Wright, D",
            "initLastName" : "D Wright",
            "fullFMLName" : "Dennis Michael Wright",
            "fullLFMName" : "Wright, Dennis Michael",
            "strikeZoneTop" : 3.656,
            "strikeZoneBottom" : 1.677
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 6,
            "pct" : ".571"
          },
          "score" : 0,
          "team" : {
            "id" : 147,
            "name" : "New York Yankees",
            "link" : "/api/v1/teams/147",
            "season" : 2019,
            "venue" : {
              "id" : 3313,
              "name" : "Yankee Stadium",
              "link" : "/api/v1/venues/3313"
            },
            "teamCode" : "nya",
            "fileCode" : "nyy",
            "abbreviation" : "NYY",
            "teamName" : "Yankees",
            "locationName" : "Bronx",
            "firstYearOfPlay" : "1903",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "NY Yankees",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 642528,
            "fullName" : "Jonathan Loaisiga",
            "link" : "/api/v1/people/642528",
            "firstName" : "Jonathan",
            "lastName" : "Loaisiga",
            "primaryNumber" : "67",
            "birthDate" : "1994-11-02",
            "currentAge" : 24,
            "birthCity" : "Managua",
            "birthCountry" : "Nicaragua",
            "height" : "5' 11",
            "weight" : 165,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Jonathan",
            "middleName" : "Stanley",
            "boxscoreName" : "Loaisiga",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 3,
                "groundOuts" : 7,
                "runs" : 5,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 8,
                "baseOnBalls" : 4,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 25,
                "caughtStealing" : 0,
                "stolenBases" : 1,
                "stolenBasePercentage" : "1.000",
                "era" : "6.43",
                "inningsPitched" : "7.0",
                "wins" : 1,
                "losses" : 1,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 5,
                "whip" : "1.14",
                "outs" : 21,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 6,
                "rbi" : 0,
                "winPercentage" : ".500",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.00",
                "strikeoutsPer9Inn" : "10.29",
                "walksPer9Inn" : "5.14",
                "hitsPer9Inn" : "5.14",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2018-06-15",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Jonathan Loaisiga",
            "nameSlug" : "jonathan-loaisiga-642528",
            "firstLastName" : "Jonathan Loaisiga",
            "lastFirstName" : "Loaisiga, Jonathan",
            "lastInitName" : "Loaisiga, J",
            "initLastName" : "J Loaisiga",
            "fullFMLName" : "Jonathan Stanley Loaisiga",
            "fullLFMName" : "Loaisiga, Jonathan Stanley",
            "strikeZoneTop" : 3.319,
            "strikeZoneBottom" : 1.513
          },
          "splitSquad" : false,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 2523,
        "name" : "George M. Steinbrenner Field",
        "link" : "/api/v1/venues/2523"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://www.mlb.com/app/ballpark/yankees/tickets/spring-training/2019-march-12"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://www.mlb.com/app/ballpark/yankees/tickets/spring-training/2019-march-12"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/567449/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 91548039,
              "contentId" : "bc164cec-e339-4ba8-83e2-374fd85eb1ac",
              "mediaId" : "c05c5e02-c51b-4078-8d9c-51b25387ecf4",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "147",
              "callLetters" : "YES",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 216670036,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 91548039,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "WFAN 660/101.9 FM",
              "renditionName" : "English Radio",
              "language" : "EN"
            }, {
              "id" : 91548039,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            }, {
              "id" : 91548039,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "YES",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 216670036,
              "contentId" : "075269e8-e3b9-4327-9798-ede4f2570040",
              "mediaId" : "6ccd6876-4547-4ef0-b539-ca912d07e777",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "110",
              "callLetters" : "BAL Radio",
              "language" : "en"
            }, {
              "id" : 82260162,
              "contentId" : "c97b2c9c-f239-4621-8a4c-dc84a9a0c165",
              "mediaId" : "29fa1306-1e63-47b0-9603-8ee081aabad8",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "147",
              "callLetters" : "WFAN",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-567449-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 565213,
      "link" : "/api/v1/game/565213/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-13T01:05:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 10,
            "losses" : 5,
            "pct" : ".667"
          },
          "score" : 0,
          "team" : {
            "id" : 135,
            "name" : "San Diego Padres",
            "link" : "/api/v1/teams/135",
            "season" : 2019,
            "venue" : {
              "id" : 2680,
              "name" : "Petco Park",
              "link" : "/api/v1/venues/2680"
            },
            "teamCode" : "sdn",
            "fileCode" : "sd",
            "abbreviation" : "SD",
            "teamName" : "Padres",
            "locationName" : "San Diego",
            "firstYearOfPlay" : "1969",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "San Diego",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 676606,
            "fullName" : "Nick Margevicius",
            "link" : "/api/v1/people/676606",
            "firstName" : "Nicholas",
            "lastName" : "Margevicius",
            "primaryNumber" : "90",
            "birthDate" : "1996-06-18",
            "currentAge" : 22,
            "birthCity" : "Cleveland",
            "birthStateProvince" : "OH",
            "birthCountry" : "USA",
            "height" : "6' 5",
            "weight" : 220,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Nick",
            "boxscoreName" : "Margevicius",
            "draftYear" : 2017,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "groundOuts" : 5,
                "runs" : 4,
                "doubles" : 1,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 9,
                "baseOnBalls" : 3,
                "intentionalWalks" : 0,
                "hits" : 6,
                "atBats" : 29,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "4.50",
                "inningsPitched" : "8.0",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 4,
                "whip" : "1.13",
                "outs" : 24,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 9,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "3.00",
                "strikeoutsPer9Inn" : "10.13",
                "walksPer9Inn" : "3.38",
                "hitsPer9Inn" : "6.75",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Nick Margevicius",
            "nameSlug" : "nick-margevicius-676606",
            "firstLastName" : "Nick Margevicius",
            "lastFirstName" : "Margevicius, Nick",
            "lastInitName" : "Margevicius, N",
            "initLastName" : "N Margevicius",
            "fullFMLName" : "Nicholas  Margevicius",
            "fullLFMName" : "Margevicius, Nicholas",
            "strikeZoneTop" : 3.575,
            "strikeZoneBottom" : 1.681
          },
          "splitSquad" : true,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 4,
            "losses" : 10,
            "pct" : ".286"
          },
          "score" : 0,
          "team" : {
            "id" : 113,
            "name" : "Cincinnati Reds",
            "link" : "/api/v1/teams/113",
            "season" : 2019,
            "venue" : {
              "id" : 2602,
              "name" : "Great American Ball Park",
              "link" : "/api/v1/venues/2602"
            },
            "teamCode" : "cin",
            "fileCode" : "cin",
            "abbreviation" : "CIN",
            "teamName" : "Reds",
            "locationName" : "Cincinnati",
            "firstYearOfPlay" : "1882",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Cincinnati",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 622491,
            "fullName" : "Luis Castillo",
            "link" : "/api/v1/people/622491",
            "firstName" : "Luis",
            "lastName" : "Castillo",
            "primaryNumber" : "58",
            "birthDate" : "1992-12-12",
            "currentAge" : 26,
            "birthCity" : "Bani",
            "birthCountry" : "Dominican Republic",
            "height" : "6' 2",
            "weight" : 190,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Luis",
            "middleName" : "Miguel",
            "boxscoreName" : "Castillo, L",
            "nickName" : "La Piedra",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 2,
                "groundOuts" : 4,
                "runs" : 9,
                "doubles" : 2,
                "triples" : 0,
                "homeRuns" : 2,
                "strikeOuts" : 7,
                "baseOnBalls" : 3,
                "intentionalWalks" : 0,
                "hits" : 9,
                "atBats" : 22,
                "caughtStealing" : 0,
                "stolenBases" : 1,
                "stolenBasePercentage" : "1.000",
                "era" : "17.36",
                "inningsPitched" : "4.2",
                "wins" : 0,
                "losses" : 2,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 9,
                "whip" : "2.57",
                "outs" : 14,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 3,
                "rbi" : 0,
                "winPercentage" : ".000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.33",
                "strikeoutsPer9Inn" : "13.50",
                "walksPer9Inn" : "5.79",
                "hitsPer9Inn" : "17.36",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "mlbDebutDate" : "2017-06-23",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Luis Castillo",
            "nameSlug" : "luis-castillo-622491",
            "firstLastName" : "Luis Castillo",
            "lastFirstName" : "Castillo, Luis",
            "lastInitName" : "Castillo, L",
            "initLastName" : "L Castillo",
            "fullFMLName" : "Luis Miguel Castillo",
            "fullLFMName" : "Castillo, Luis Miguel",
            "strikeZoneTop" : 3.467,
            "strikeZoneBottom" : 1.589
          },
          "splitSquad" : true,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 3834,
        "name" : "Goodyear Ballpark",
        "link" : "/api/v1/venues/3834"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://www.ticketmaster.com/event/1900557D04816680"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://www.ticketmaster.com/event/1900557D04816680"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/565213/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 129439261,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 129439261,
              "contentId" : "c0047a9e-fbd9-47a4-bad6-7b60bdb9dcaf",
              "mediaId" : "41b45804-01a8-4783-86b3-061f88130f28",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "113",
              "callLetters" : "WLW",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-565213-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 564824,
      "link" : "/api/v1/game/564824/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-13T01:40:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "S",
        "detailedState" : "Scheduled",
        "statusCode" : "S",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 6,
            "losses" : 10,
            "pct" : ".375"
          },
          "team" : {
            "id" : 140,
            "name" : "Texas Rangers",
            "link" : "/api/v1/teams/140",
            "season" : 2019,
            "venue" : {
              "id" : 13,
              "name" : "Globe Life Park in Arlington",
              "link" : "/api/v1/venues/13"
            },
            "teamCode" : "tex",
            "fileCode" : "tex",
            "abbreviation" : "TEX",
            "teamName" : "Rangers",
            "locationName" : "Arlington",
            "firstYearOfPlay" : "1961",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Texas",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 642558,
            "fullName" : "Ariel Jurado",
            "link" : "/api/v1/people/642558",
            "firstName" : "Ariel",
            "lastName" : "Jurado",
            "primaryNumber" : "57",
            "birthDate" : "1996-01-30",
            "currentAge" : 23,
            "birthCity" : "Aguadulce",
            "birthCountry" : "Panama",
            "height" : "6' 1",
            "weight" : 180,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Ariel",
            "middleName" : "Bolivar",
            "boxscoreName" : "Jurado",
            "nickName" : "Bartolito",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 1,
                "groundOuts" : 8,
                "runs" : 5,
                "doubles" : 3,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 4,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 11,
                "atBats" : 27,
                "caughtStealing" : 0,
                "stolenBases" : 1,
                "stolenBasePercentage" : "1.000",
                "era" : "7.50",
                "inningsPitched" : "6.0",
                "wins" : 0,
                "losses" : 2,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 5,
                "whip" : "2.17",
                "outs" : 18,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 4,
                "rbi" : 0,
                "winPercentage" : ".000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.00",
                "strikeoutsPer9Inn" : "6.00",
                "walksPer9Inn" : "3.00",
                "hitsPer9Inn" : "16.50",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2018-05-19",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Ariel Jurado",
            "nameSlug" : "ariel-jurado-642558",
            "firstLastName" : "Ariel Jurado",
            "lastFirstName" : "Jurado, Ariel",
            "lastInitName" : "Jurado, A",
            "initLastName" : "A Jurado",
            "fullFMLName" : "Ariel Bolivar Jurado",
            "fullLFMName" : "Jurado, Ariel Bolivar",
            "strikeZoneTop" : 3.411,
            "strikeZoneBottom" : 1.565
          },
          "splitSquad" : false,
          "seriesNumber" : 20,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 8,
            "losses" : 8,
            "pct" : ".500"
          },
          "team" : {
            "id" : 109,
            "name" : "Arizona Diamondbacks",
            "link" : "/api/v1/teams/109",
            "season" : 2019,
            "venue" : {
              "id" : 15,
              "name" : "Chase Field",
              "link" : "/api/v1/venues/15"
            },
            "teamCode" : "ari",
            "fileCode" : "ari",
            "abbreviation" : "ARI",
            "teamName" : "D-backs",
            "locationName" : "Phoenix",
            "firstYearOfPlay" : "1998",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Arizona",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 425844,
            "fullName" : "Zack Greinke",
            "link" : "/api/v1/people/425844",
            "firstName" : "Donald",
            "lastName" : "Greinke",
            "primaryNumber" : "21",
            "birthDate" : "1983-10-21",
            "currentAge" : 35,
            "birthCity" : "Orlando",
            "birthStateProvince" : "FL",
            "birthCountry" : "USA",
            "height" : "6' 2",
            "weight" : 200,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Zack",
            "middleName" : "Zackary",
            "boxscoreName" : "Greinke",
            "draftYear" : 2002,
            "pronunciation" : "GRAYN-kee",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 2,
                "gamesStarted" : 2,
                "groundOuts" : 4,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 4,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 1,
                "atBats" : 14,
                "caughtStealing" : 0,
                "stolenBases" : 1,
                "stolenBasePercentage" : "1.000",
                "era" : "0.00",
                "inningsPitched" : "4.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "0.75",
                "outs" : 12,
                "gamesPitched" : 2,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 5,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.00",
                "strikeoutsPer9Inn" : "9.00",
                "walksPer9Inn" : "4.50",
                "hitsPer9Inn" : "2.25",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2004-05-22",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Zack Greinke",
            "nameSlug" : "zack-greinke-425844",
            "firstLastName" : "Zack Greinke",
            "lastFirstName" : "Greinke, Zack",
            "lastInitName" : "Greinke, Z",
            "initLastName" : "Z Greinke",
            "fullFMLName" : "Donald Zackary Greinke",
            "fullLFMName" : "Greinke, Donald Zackary",
            "strikeZoneTop" : 3.467,
            "strikeZoneBottom" : 1.589
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "innings" : [ ],
        "teams" : {
          "home" : {
            "team" : {
              "id" : 109,
              "name" : "Arizona Diamondbacks",
              "link" : "/api/v1/teams/109"
            }
          },
          "away" : {
            "team" : {
              "id" : 140,
              "name" : "Texas Rangers",
              "link" : "/api/v1/teams/140"
            }
          }
        },
        "defense" : { },
        "offense" : { }
      },
      "venue" : {
        "id" : 4249,
        "name" : "Salt River Fields at Talking Stick",
        "link" : "/api/v1/venues/4249"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://www.ticketmaster.com/event/1900558BC3A84901"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://www.ticketmaster.com/event/1900558BC3A84901"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/564824/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 5213486,
              "contentId" : "787c9fc6-2fff-4153-a16f-ae5309bd43e3",
              "mediaId" : "f2460449-9d3e-4e89-a45e-3327e4e2fd9b",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "109",
              "callLetters" : "FSAZ",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 5213486,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "FS-A+",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 5213486,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 76998593,
              "contentId" : "75ef823c-7fec-4553-beb5-57cfe397c262",
              "mediaId" : "74262a6b-50b7-4300-b286-fb86650722b8",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "140",
              "callLetters" : "105.3 The Fan (delay)",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "P",
      "tiebreaker" : "N",
      "calendarEventID" : "14-564824-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : { },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 566268,
      "link" : "/api/v1/game/566268/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-13T01:40:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "S",
        "detailedState" : "Scheduled",
        "statusCode" : "S",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 10,
            "losses" : 8,
            "pct" : ".556"
          },
          "team" : {
            "id" : 133,
            "name" : "Oakland Athletics",
            "link" : "/api/v1/teams/133",
            "season" : 2019,
            "venue" : {
              "id" : 10,
              "name" : "Oakland Coliseum",
              "link" : "/api/v1/venues/10"
            },
            "teamCode" : "oak",
            "fileCode" : "oak",
            "abbreviation" : "OAK",
            "teamName" : "Athletics",
            "locationName" : "Oakland",
            "firstYearOfPlay" : "1901",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            },
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Oakland",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 605156,
            "fullName" : "Aaron Brooks",
            "link" : "/api/v1/people/605156",
            "firstName" : "Aaron",
            "lastName" : "Brooks",
            "primaryNumber" : "35",
            "birthDate" : "1990-04-27",
            "currentAge" : 28,
            "birthCity" : "Montclair",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 4",
            "weight" : 230,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Aaron",
            "middleName" : "Lee",
            "boxscoreName" : "Brooks",
            "draftYear" : 2011,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 2,
                "groundOuts" : 9,
                "runs" : 6,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 9,
                "baseOnBalls" : 4,
                "intentionalWalks" : 0,
                "hits" : 10,
                "atBats" : 35,
                "caughtStealing" : 1,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".000",
                "era" : "6.00",
                "inningsPitched" : "9.0",
                "wins" : 1,
                "losses" : 1,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 6,
                "whip" : "1.56",
                "outs" : 27,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 2,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 7,
                "rbi" : 0,
                "winPercentage" : ".500",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "2.25",
                "strikeoutsPer9Inn" : "9.00",
                "walksPer9Inn" : "4.00",
                "hitsPer9Inn" : "10.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2014-05-03",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Aaron Brooks",
            "nameSlug" : "aaron-brooks-605156",
            "firstLastName" : "Aaron Brooks",
            "lastFirstName" : "Brooks, Aaron",
            "lastInitName" : "Brooks, A",
            "initLastName" : "A Brooks",
            "fullFMLName" : "Aaron Lee Brooks",
            "fullLFMName" : "Brooks, Aaron Lee",
            "strikeZoneTop" : 3.78,
            "strikeZoneBottom" : 1.7
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 10,
            "losses" : 5,
            "pct" : ".667"
          },
          "team" : {
            "id" : 135,
            "name" : "San Diego Padres",
            "link" : "/api/v1/teams/135",
            "season" : 2019,
            "venue" : {
              "id" : 2680,
              "name" : "Petco Park",
              "link" : "/api/v1/venues/2680"
            },
            "teamCode" : "sdn",
            "fileCode" : "sd",
            "abbreviation" : "SD",
            "teamName" : "Padres",
            "locationName" : "San Diego",
            "firstYearOfPlay" : "1969",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "San Diego",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 656798,
            "fullName" : "Jacob Nix",
            "link" : "/api/v1/people/656798",
            "firstName" : "Jacob",
            "lastName" : "Nix",
            "primaryNumber" : "63",
            "birthDate" : "1996-01-09",
            "currentAge" : 23,
            "birthCity" : "Los Alamitos",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 4",
            "weight" : 220,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Jacob",
            "middleName" : "James",
            "boxscoreName" : "Nix",
            "draftYear" : 2015,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "groundOuts" : 3,
                "runs" : 4,
                "doubles" : 0,
                "triples" : 1,
                "homeRuns" : 0,
                "strikeOuts" : 4,
                "baseOnBalls" : 6,
                "intentionalWalks" : 0,
                "hits" : 4,
                "atBats" : 23,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "5.40",
                "inningsPitched" : "6.2",
                "wins" : 2,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 4,
                "whip" : "1.50",
                "outs" : 20,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 1,
                "pickoffs" : 0,
                "airOuts" : 13,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "0.67",
                "strikeoutsPer9Inn" : "5.40",
                "walksPer9Inn" : "8.10",
                "hitsPer9Inn" : "5.40",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "mlbDebutDate" : "2018-08-10",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Jacob Nix",
            "nameSlug" : "jacob-nix-656798",
            "firstLastName" : "Jacob Nix",
            "lastFirstName" : "Nix, Jacob",
            "lastInitName" : "Nix, J",
            "initLastName" : "J Nix",
            "fullFMLName" : "Jacob James Nix",
            "fullLFMName" : "Nix, Jacob James",
            "strikeZoneTop" : 3.549,
            "strikeZoneBottom" : 1.627
          },
          "splitSquad" : true,
          "seriesNumber" : 18,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "innings" : [ ],
        "teams" : {
          "home" : {
            "team" : {
              "id" : 135,
              "name" : "San Diego Padres",
              "link" : "/api/v1/teams/135"
            }
          },
          "away" : {
            "team" : {
              "id" : 133,
              "name" : "Oakland Athletics",
              "link" : "/api/v1/teams/133"
            }
          }
        },
        "defense" : { },
        "offense" : { }
      },
      "venue" : {
        "id" : 2530,
        "name" : "Peoria Stadium",
        "link" : "/api/v1/venues/2530"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=27671&agency=MLBST&pid=8637875"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=27671&agency=MLBST&pid=8637875"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/566268/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 42836015,
              "type" : "",
              "mediaFeedType" : "AWAY",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 42836015,
              "contentId" : "10be478c-daf7-4b91-a9c2-c6f5c8db81bb",
              "mediaId" : "777e01bd-ab99-4ee5-ba87-fbb81c41d75e",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "133",
              "callLetters" : "KTRB 860",
              "language" : "en"
            }, {
              "id" : 212546245,
              "contentId" : "9572649c-d70c-44ee-8c30-10513f1974ab",
              "mediaId" : "eb19d440-1b7e-4ebc-8bed-5d7b37226815",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "135",
              "callLetters" : "KWFN",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 2,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-566268-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : { },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 566462,
      "link" : "/api/v1/game/566462/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-13T02:05:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "S",
        "detailedState" : "Scheduled",
        "statusCode" : "S",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 10,
            "losses" : 8,
            "pct" : ".556"
          },
          "team" : {
            "id" : 158,
            "name" : "Milwaukee Brewers",
            "link" : "/api/v1/teams/158",
            "season" : 2019,
            "venue" : {
              "id" : 32,
              "name" : "Miller Park",
              "link" : "/api/v1/venues/32"
            },
            "teamCode" : "mil",
            "fileCode" : "mil",
            "abbreviation" : "MIL",
            "teamName" : "Brewers",
            "locationName" : "Milwaukee",
            "firstYearOfPlay" : "1969",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Milwaukee",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 605200,
            "fullName" : "Zach Davies",
            "link" : "/api/v1/people/605200",
            "firstName" : "Zachary",
            "lastName" : "Davies",
            "primaryNumber" : "27",
            "birthDate" : "1993-02-07",
            "currentAge" : 26,
            "birthCity" : "Puyallup",
            "birthStateProvince" : "WA",
            "birthCountry" : "USA",
            "height" : "6' 0",
            "weight" : 155,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Zach",
            "middleName" : "Ryan",
            "boxscoreName" : "Davies",
            "nickName" : "Couns",
            "draftYear" : 2011,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 4,
                "gamesStarted" : 2,
                "groundOuts" : 9,
                "runs" : 4,
                "doubles" : 3,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 4,
                "baseOnBalls" : 3,
                "intentionalWalks" : 0,
                "hits" : 7,
                "atBats" : 33,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "3.72",
                "inningsPitched" : "9.2",
                "wins" : 1,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 1,
                "holds" : 0,
                "blownSaves" : 1,
                "earnedRuns" : 4,
                "whip" : "1.03",
                "outs" : 29,
                "gamesPitched" : 4,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 14,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "1.33",
                "strikeoutsPer9Inn" : "3.72",
                "walksPer9Inn" : "2.79",
                "hitsPer9Inn" : "6.52",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 1
              }
            } ],
            "mlbDebutDate" : "2015-09-02",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Zach Davies",
            "nameSlug" : "zach-davies-605200",
            "firstLastName" : "Zach Davies",
            "lastFirstName" : "Davies, Zach",
            "lastInitName" : "Davies, Z",
            "initLastName" : "Z Davies",
            "fullFMLName" : "Zachary Ryan Davies",
            "fullLFMName" : "Davies, Zachary Ryan",
            "strikeZoneTop" : 3.371,
            "strikeZoneBottom" : 1.535
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 6,
            "losses" : 10,
            "pct" : ".375"
          },
          "team" : {
            "id" : 137,
            "name" : "San Francisco Giants",
            "link" : "/api/v1/teams/137",
            "season" : 2019,
            "venue" : {
              "id" : 2395,
              "name" : "Oracle Park",
              "link" : "/api/v1/venues/2395"
            },
            "teamCode" : "sfn",
            "fileCode" : "sf",
            "abbreviation" : "SF",
            "teamName" : "Giants",
            "locationName" : "San Francisco",
            "firstYearOfPlay" : "1883",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "San Francisco",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 518516,
            "fullName" : "Madison Bumgarner",
            "link" : "/api/v1/people/518516",
            "firstName" : "Madison",
            "lastName" : "Bumgarner",
            "primaryNumber" : "40",
            "birthDate" : "1989-08-01",
            "currentAge" : 29,
            "birthCity" : "Hickory",
            "birthStateProvince" : "NC",
            "birthCountry" : "USA",
            "height" : "6' 4",
            "weight" : 242,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Madison",
            "middleName" : "Kyle",
            "boxscoreName" : "Bumgarner",
            "nickName" : "Mad-Bum",
            "draftYear" : 2007,
            "pronunciation" : "MAD-i-suhn BUHM-gahr-ner",
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 3,
                "groundOuts" : 5,
                "runs" : 9,
                "doubles" : 4,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 8,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 13,
                "atBats" : 34,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "11.57",
                "inningsPitched" : "7.0",
                "wins" : 0,
                "losses" : 2,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 9,
                "whip" : "2.00",
                "outs" : 21,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 8,
                "rbi" : 0,
                "winPercentage" : ".000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "8.00",
                "strikeoutsPer9Inn" : "10.29",
                "walksPer9Inn" : "1.29",
                "hitsPer9Inn" : "16.71",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2009-09-08",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Madison Bumgarner",
            "nameSlug" : "madison-bumgarner-518516",
            "firstLastName" : "Madison Bumgarner",
            "lastFirstName" : "Bumgarner, Madison",
            "lastInitName" : "Bumgarner, M",
            "initLastName" : "M Bumgarner",
            "fullFMLName" : "Madison Kyle Bumgarner",
            "fullLFMName" : "Bumgarner, Madison Kyle",
            "strikeZoneTop" : 3.549,
            "strikeZoneBottom" : 1.627
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "innings" : [ ],
        "teams" : {
          "home" : {
            "team" : {
              "id" : 137,
              "name" : "San Francisco Giants",
              "link" : "/api/v1/teams/137"
            }
          },
          "away" : {
            "team" : {
              "id" : 158,
              "name" : "Milwaukee Brewers",
              "link" : "/api/v1/teams/158"
            }
          }
        },
        "defense" : { },
        "offense" : { }
      },
      "venue" : {
        "id" : 2532,
        "name" : "Scottsdale Stadium",
        "link" : "/api/v1/venues/2532"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "http://mpv.tickets.com/?orgid=20395&agency=MLBST_MPV&pid=8642522"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "http://mpv.tickets.com/?orgid=20395&agency=MLBST_MPV&pid=8642522"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/566462/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ {
              "id" : 250417175,
              "contentId" : "17c62853-8d57-43d5-a212-ee1438575f7f",
              "mediaId" : "c4da6f70-0909-469c-b9e3-c9f4072bde33",
              "mediaState" : "MEDIA_OFF",
              "mediaFeedType" : "HOME",
              "mediaFeedSubType" : "137",
              "callLetters" : "NBCSBA",
              "foxAuthRequired" : false,
              "tbsAuthRequired" : false,
              "espnAuthRequired" : false,
              "fs1AuthRequired" : false,
              "mlbnAuthRequired" : false,
              "freeGame" : false
            } ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 250417175,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "MLB.com",
              "renditionName" : "English Radio",
              "language" : "EN"
            }, {
              "id" : 250417175,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "NBCS BA",
              "renditionName" : "English",
              "language" : "EN"
            }, {
              "id" : 250417175,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "PARK",
              "renditionName" : "Natural Sound",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 123124552,
              "contentId" : "e0ef98d1-0247-437d-bf1b-f7474f2d0d4f",
              "mediaId" : "b0283285-c577-455a-88f1-2e2ce1a97d14",
              "mediaState" : "MEDIA_OFF",
              "type" : "AWAY",
              "mediaFeedSubType" : "158",
              "callLetters" : "MLB.com",
              "language" : "en"
            }, {
              "id" : 161721029,
              "contentId" : "c1ebf9b9-ed8f-472c-bab7-6d467f726724",
              "mediaId" : "b8f21971-961a-4a40-80ae-f9eb7faf0cb0",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "137",
              "callLetters" : "MLB.com",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 1,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-566462-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : { },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    }, {
      "gamePk" : 565117,
      "link" : "/api/v1/game/565117/feed/live",
      "gameType" : "S",
      "season" : "2019",
      "gameDate" : "2019-03-13T02:05:00Z",
      "status" : {
        "abstractGameState" : "Preview",
        "codedGameState" : "P",
        "detailedState" : "Pre-Game",
        "statusCode" : "P",
        "abstractGameCode" : "P"
      },
      "teams" : {
        "away" : {
          "leagueRecord" : {
            "wins" : 4,
            "losses" : 10,
            "pct" : ".286"
          },
          "score" : 0,
          "team" : {
            "id" : 113,
            "name" : "Cincinnati Reds",
            "link" : "/api/v1/teams/113",
            "season" : 2019,
            "venue" : {
              "id" : 2602,
              "name" : "Great American Ball Park",
              "link" : "/api/v1/venues/2602"
            },
            "teamCode" : "cin",
            "fileCode" : "cin",
            "abbreviation" : "CIN",
            "teamName" : "Reds",
            "locationName" : "Cincinnati",
            "firstYearOfPlay" : "1882",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Cincinnati",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 641816,
            "fullName" : "Tyler Mahle",
            "link" : "/api/v1/people/641816",
            "firstName" : "Tyler",
            "lastName" : "Mahle",
            "primaryNumber" : "30",
            "birthDate" : "1994-09-29",
            "currentAge" : 24,
            "birthCity" : "Newport Beach",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 3",
            "weight" : 210,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Tyler",
            "middleName" : "F.",
            "boxscoreName" : "Mahle",
            "draftYear" : 2013,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 1,
                "gamesStarted" : 1,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "atBats" : 0,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "numberOfPitches" : 0,
                "inningsPitched" : "0.0",
                "saveOpportunities" : 0,
                "earnedRuns" : 0,
                "battersFaced" : 0,
                "outs" : 0,
                "gamesPitched" : 1,
                "completeGames" : 0,
                "shutouts" : 0,
                "pitchesThrown" : 0,
                "balls" : 0,
                "strikes" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 0,
                "rbi" : 0,
                "gamesFinished" : 0,
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 2,
                "groundOuts" : 2,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 6,
                "baseOnBalls" : 2,
                "intentionalWalks" : 0,
                "hits" : 3,
                "atBats" : 12,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "0.00",
                "inningsPitched" : "3.0",
                "wins" : 0,
                "losses" : 0,
                "saves" : 0,
                "saveOpportunities" : 0,
                "holds" : 0,
                "blownSaves" : 0,
                "earnedRuns" : 0,
                "whip" : "1.67",
                "outs" : 9,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 0,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 1,
                "rbi" : 0,
                "winPercentage" : ".---",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "3.00",
                "strikeoutsPer9Inn" : "18.00",
                "walksPer9Inn" : "6.00",
                "hitsPer9Inn" : "9.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2017-08-27",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Tyler Mahle",
            "nameSlug" : "tyler-mahle-641816",
            "firstLastName" : "Tyler Mahle",
            "lastFirstName" : "Mahle, Tyler",
            "lastInitName" : "Mahle, T",
            "initLastName" : "T Mahle",
            "fullFMLName" : "Tyler F. Mahle",
            "fullLFMName" : "Mahle, Tyler F.",
            "strikeZoneTop" : 3.49,
            "strikeZoneBottom" : 1.601
          },
          "splitSquad" : true,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        },
        "home" : {
          "leagueRecord" : {
            "wins" : 11,
            "losses" : 7,
            "pct" : ".611"
          },
          "score" : 0,
          "team" : {
            "id" : 112,
            "name" : "Chicago Cubs",
            "link" : "/api/v1/teams/112",
            "season" : 2019,
            "venue" : {
              "id" : 17,
              "name" : "Wrigley Field",
              "link" : "/api/v1/venues/17"
            },
            "teamCode" : "chn",
            "fileCode" : "chc",
            "abbreviation" : "CHC",
            "teamName" : "Cubs",
            "locationName" : "Chicago",
            "firstYearOfPlay" : "1874",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            },
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            },
            "sport" : {
              "id" : 1,
              "link" : "/api/v1/sports/1",
              "name" : "Major League Baseball"
            },
            "shortName" : "Chi Cubs",
            "springLeague" : {
              "id" : 114,
              "name" : "Cactus League",
              "link" : "/api/v1/league/114",
              "abbreviation" : "CL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          "probablePitcher" : {
            "id" : 543022,
            "fullName" : "Tyler Chatwood",
            "link" : "/api/v1/people/543022",
            "firstName" : "Tyler",
            "lastName" : "Chatwood",
            "primaryNumber" : "21",
            "birthDate" : "1989-12-16",
            "currentAge" : 29,
            "birthCity" : "Redlands",
            "birthStateProvince" : "CA",
            "birthCountry" : "USA",
            "height" : "6' 0",
            "weight" : 185,
            "active" : true,
            "primaryPosition" : {
              "code" : "1",
              "name" : "Pitcher",
              "type" : "Pitcher",
              "abbreviation" : "P"
            },
            "useName" : "Tyler",
            "middleName" : "Cole",
            "boxscoreName" : "Chatwood",
            "nickName" : "Chatty",
            "draftYear" : 2008,
            "stats" : [ {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "gameLog"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : { }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "stats" : {
                "gamesPlayed" : 0,
                "flyOuts" : 0,
                "groundOuts" : 0,
                "runs" : 0,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 0,
                "strikeOuts" : 0,
                "baseOnBalls" : 0,
                "intentionalWalks" : 0,
                "hits" : 0,
                "hitByPitch" : 0,
                "avg" : ".000",
                "atBats" : 0,
                "obp" : ".000",
                "slg" : ".000",
                "ops" : ".000",
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "groundIntoDoublePlay" : 0,
                "groundIntoTriplePlay" : 0,
                "totalBases" : 0,
                "rbi" : 0,
                "leftOnBase" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0,
                "catchersInterference" : 0,
                "pickoffs" : 0
              }
            }, {
              "type" : {
                "displayName" : "statsSingleSeason"
              },
              "group" : {
                "displayName" : "pitching"
              },
              "stats" : {
                "gamesPlayed" : 3,
                "gamesStarted" : 1,
                "groundOuts" : 11,
                "runs" : 2,
                "doubles" : 0,
                "triples" : 0,
                "homeRuns" : 1,
                "strikeOuts" : 5,
                "baseOnBalls" : 1,
                "intentionalWalks" : 0,
                "hits" : 8,
                "atBats" : 29,
                "caughtStealing" : 0,
                "stolenBases" : 0,
                "stolenBasePercentage" : ".---",
                "era" : "2.25",
                "inningsPitched" : "8.0",
                "wins" : 1,
                "losses" : 0,
                "saves" : 1,
                "saveOpportunities" : 1,
                "holds" : 1,
                "blownSaves" : 0,
                "earnedRuns" : 2,
                "whip" : "1.13",
                "outs" : 24,
                "gamesPitched" : 3,
                "completeGames" : 0,
                "shutouts" : 0,
                "hitBatsmen" : 1,
                "wildPitches" : 0,
                "pickoffs" : 0,
                "airOuts" : 5,
                "rbi" : 0,
                "winPercentage" : "1.000",
                "gamesFinished" : 0,
                "strikeoutWalkRatio" : "5.00",
                "strikeoutsPer9Inn" : "5.63",
                "walksPer9Inn" : "1.13",
                "hitsPer9Inn" : "9.00",
                "inheritedRunners" : 0,
                "inheritedRunnersScored" : 0,
                "catchersInterference" : 0,
                "sacBunts" : 0,
                "sacFlies" : 0
              }
            } ],
            "mlbDebutDate" : "2011-04-11",
            "batSide" : {
              "code" : "R",
              "description" : "Right"
            },
            "pitchHand" : {
              "code" : "R",
              "description" : "Right"
            },
            "nameFirstLast" : "Tyler Chatwood",
            "nameSlug" : "tyler-chatwood-543022",
            "firstLastName" : "Tyler Chatwood",
            "lastFirstName" : "Chatwood, Tyler",
            "lastInitName" : "Chatwood, T",
            "initLastName" : "T Chatwood",
            "fullFMLName" : "Tyler Cole Chatwood",
            "fullLFMName" : "Chatwood, Tyler Cole",
            "strikeZoneTop" : 3.371,
            "strikeZoneBottom" : 1.535
          },
          "splitSquad" : false,
          "seriesNumber" : 19,
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          }
        }
      },
      "linescore" : {
        "currentInning" : 1,
        "currentInningOrdinal" : "1st",
        "inningState" : "Top",
        "inningHalf" : "Top",
        "isTopInning" : true,
        "scheduledInnings" : 9,
        "innings" : [ {
          "num" : 1,
          "ordinalNum" : "1st",
          "home" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        } ],
        "teams" : {
          "home" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          },
          "away" : {
            "runs" : 0,
            "hits" : 0,
            "errors" : 0,
            "leftOnBase" : 0
          }
        },
        "defense" : { },
        "offense" : { },
        "balls" : 0,
        "strikes" : 0,
        "outs" : 0
      },
      "venue" : {
        "id" : 4629,
        "name" : "Sloan Park",
        "link" : "/api/v1/venues/4629"
      },
      "tickets" : [ {
        "ticketType" : "wired",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20394&agency=MLBST&pid=8651012"
        }
      }, {
        "ticketType" : "mobile",
        "ticketLinks" : {
          "home" : "https://purchase.tickets.com/buy/MLBEventInfo?orgid=20394&agency=MLBST&pid=8651012"
        }
      } ],
      "content" : {
        "link" : "/api/v1/game/565117/content",
        "editorial" : { },
        "media" : {
          "epg" : [ {
            "title" : "MLBTV",
            "items" : [ ]
          }, {
            "title" : "MLBTV-Audio",
            "items" : [ {
              "id" : 233837353,
              "type" : "",
              "mediaFeedType" : "HOME",
              "description" : "",
              "renditionName" : "English",
              "language" : "EN"
            } ]
          }, {
            "title" : "Audio",
            "items" : [ {
              "id" : 233837353,
              "contentId" : "90bc3705-060a-4230-a4ad-80b23f831df7",
              "mediaId" : "8e8f397a-b9c5-4557-ae1c-701c4427278d",
              "mediaState" : "MEDIA_OFF",
              "type" : "HOME",
              "mediaFeedSubType" : "112",
              "callLetters" : "MLB.com",
              "language" : "en"
            } ]
          } ],
          "epgAlternate" : [ {
            "items" : [ ],
            "title" : "Extended Highlights"
          }, {
            "items" : [ ],
            "title" : "Daily Recap"
          } ],
          "freeGame" : false,
          "enhancedGame" : false
        },
        "highlights" : { },
        "summary" : {
          "hasPreviewArticle" : false,
          "hasRecapArticle" : false,
          "hasWrapArticle" : false
        },
        "gameNotes" : { }
      },
      "gameNumber" : 2,
      "publicFacing" : true,
      "doubleHeader" : "N",
      "gamedayType" : "Y",
      "tiebreaker" : "N",
      "calendarEventID" : "14-565117-2019-03-12",
      "seasonDisplay" : "2019",
      "dayNight" : "night",
      "scheduledInnings" : 9,
      "gamesInSeries" : 1,
      "seriesGameNumber" : 1,
      "seriesDescription" : "Spring Training",
      "flags" : {
        "noHitter" : false,
        "perfectGame" : false
      },
      "recordSource" : "S",
      "ifNecessary" : "N",
      "ifNecessaryDescription" : "Normal Game"
    } ],
    "events" : [ ]
  } ]
>>>>>>> c5796caf1334eed0a9b55d42cb32502a8aef9324
}`);
export default CALEND1;
