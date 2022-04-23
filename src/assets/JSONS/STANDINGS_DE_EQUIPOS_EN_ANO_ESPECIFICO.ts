const CALEND2 = JSON.parse(`{
    "copyright" : "Copyright 2019 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt",
    "records" : [ {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 200,
        "name" : "American League West",
        "nameShort" : "AL West",
        "link" : "/api/v1/divisions/200",
        "abbreviation" : "ALW",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566664,
                "link" : "/api/v1/game/566664/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:00:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 12,
                  "name" : "Tropicana Field",
                  "link" : "/api/v1/venues/12"
                },
                "content" : {
                  "link" : "/api/v1/game/566664/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566664-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "6",
        "wildCardRank" : "6",
        "sportRank" : "11",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
        "team" : {
          "id" : 108,
          "name" : "Los Angeles Angels",
          "link" : "/api/v1/teams/108",
          "season" : 2019,
          "venue" : {
            "id" : 1,
            "name" : "Angel Stadium",
            "link" : "/api/v1/venues/1"
          },
          "teamCode" : "ana",
          "fileCode" : "ana",
          "abbreviation" : "LAA",
          "teamName" : "Angels",
          "locationName" : "Anaheim",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566086,
                "link" : "/api/v1/game/566086/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:07:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 108,
                      "name" : "Los Angeles Angels",
                      "link" : "/api/v1/teams/108",
                      "season" : 2019,
                      "venue" : {
                        "id" : 1,
                        "name" : "Angel Stadium",
                        "link" : "/api/v1/venues/1"
                      },
                      "teamCode" : "ana",
                      "fileCode" : "ana",
                      "abbreviation" : "LAA",
                      "teamName" : "Angels",
                      "locationName" : "Anaheim",
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
                      "shortName" : "LA Angels",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 2,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 10,
                  "name" : "Oakland Coliseum",
                  "link" : "/api/v1/venues/10"
                },
                "content" : {
                  "link" : "/api/v1/game/566086/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566086-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Athletics home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "LA Angels",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "8",
        "wildCardRank" : "8",
        "sportRank" : "13",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-20",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566083,
                "link" : "/api/v1/game/566083/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-20T09:35:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2397,
                  "name" : "Tokyo Dome",
                  "link" : "/api/v1/venues/2397"
                },
                "content" : {
                  "link" : "/api/v1/game/566083/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566083-2019-03-20",
                "seasonDisplay" : "2019",
                "dayNight" : "night",
                "description" : "in Tokyo",
                "scheduledInnings" : 9,
                "gamesInSeries" : 2,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "11",
        "wildCardRank" : "11",
        "sportRank" : "20",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-20",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566083,
                "link" : "/api/v1/game/566083/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-20T09:35:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2397,
                  "name" : "Tokyo Dome",
                  "link" : "/api/v1/venues/2397"
                },
                "content" : {
                  "link" : "/api/v1/game/566083/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566083-2019-03-20",
                "seasonDisplay" : "2019",
                "dayNight" : "night",
                "description" : "in Tokyo",
                "scheduledInnings" : 9,
                "gamesInSeries" : 2,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "12",
        "wildCardRank" : "12",
        "sportRank" : "25",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566763,
                "link" : "/api/v1/game/566763/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 13,
                  "name" : "Globe Life Park in Arlington",
                  "link" : "/api/v1/venues/13"
                },
                "content" : {
                  "link" : "/api/v1/game/566763/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566763-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rangers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "14",
        "wildCardRank" : "14",
        "sportRank" : "28",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 201,
        "name" : "American League East",
        "nameShort" : "AL East",
        "link" : "/api/v1/divisions/201",
        "abbreviation" : "ALE",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567456,
                "link" : "/api/v1/game/567456/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3313,
                  "name" : "Yankee Stadium",
                  "link" : "/api/v1/venues/3313"
                },
                "content" : {
                  "link" : "/api/v1/game/567456/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567456-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Yankees home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "1",
        "wildCardRank" : "1",
        "sportRank" : "3",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566372,
                "link" : "/api/v1/game/566372/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T23:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 2,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 680,
                  "name" : "T-Mobile Park",
                  "link" : "/api/v1/venues/680"
                },
                "content" : {
                  "link" : "/api/v1/game/566372/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566372-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Mariners home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "2",
        "wildCardRank" : "2",
        "sportRank" : "4",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567456,
                "link" : "/api/v1/game/567456/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3313,
                  "name" : "Yankee Stadium",
                  "link" : "/api/v1/venues/3313"
                },
                "content" : {
                  "link" : "/api/v1/game/567456/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567456-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Yankees home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "10",
        "wildCardRank" : "10",
        "sportRank" : "19",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566664,
                "link" : "/api/v1/game/566664/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:00:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 12,
                  "name" : "Tropicana Field",
                  "link" : "/api/v1/venues/12"
                },
                "content" : {
                  "link" : "/api/v1/game/566664/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566664-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "13",
        "wildCardRank" : "13",
        "sportRank" : "27",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566864,
                "link" : "/api/v1/game/566864/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:37:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 14,
                  "name" : "Rogers Centre",
                  "link" : "/api/v1/venues/14"
                },
                "content" : {
                  "link" : "/api/v1/game/566864/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566864-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Blue Jays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "15",
        "wildCardRank" : "15",
        "sportRank" : "29",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 202,
        "name" : "American League Central",
        "nameShort" : "AL Central",
        "link" : "/api/v1/divisions/202",
        "abbreviation" : "ALC",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565702,
                "link" : "/api/v1/game/565702/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:15:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 7,
                  "name" : "Kauffman Stadium",
                  "link" : "/api/v1/venues/7"
                },
                "content" : {
                  "link" : "/api/v1/game/565702/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565702-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Royals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "3",
        "wildCardRank" : "3",
        "sportRank" : "6",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114",
          "season" : 2019,
          "venue" : {
            "id" : 5,
            "name" : "Progressive Field",
            "link" : "/api/v1/venues/5"
          },
          "teamCode" : "cle",
          "fileCode" : "cle",
          "abbreviation" : "CLE",
          "teamName" : "Indians",
          "locationName" : "Cleveland",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566962,
                "link" : "/api/v1/game/566962/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 114,
                      "name" : "Cleveland Indians",
                      "link" : "/api/v1/teams/114",
                      "season" : 2019,
                      "venue" : {
                        "id" : 5,
                        "name" : "Progressive Field",
                        "link" : "/api/v1/venues/5"
                      },
                      "teamCode" : "cle",
                      "fileCode" : "cle",
                      "abbreviation" : "CLE",
                      "teamName" : "Indians",
                      "locationName" : "Cleveland",
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
                      "shortName" : "Cleveland",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3312,
                  "name" : "Target Field",
                  "link" : "/api/v1/venues/3312"
                },
                "content" : {
                  "link" : "/api/v1/game/566962/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566962-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Twins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Cleveland",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "4",
        "wildCardRank" : "4",
        "sportRank" : "8",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566864,
                "link" : "/api/v1/game/566864/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:37:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 14,
                  "name" : "Rogers Centre",
                  "link" : "/api/v1/venues/14"
                },
                "content" : {
                  "link" : "/api/v1/game/566864/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566864-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Blue Jays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "5",
        "wildCardRank" : "5",
        "sportRank" : "10",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565702,
                "link" : "/api/v1/game/565702/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:15:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 7,
                  "name" : "Kauffman Stadium",
                  "link" : "/api/v1/venues/7"
                },
                "content" : {
                  "link" : "/api/v1/game/565702/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565702-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Royals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "7",
        "wildCardRank" : "7",
        "sportRank" : "12",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566962,
                "link" : "/api/v1/game/566962/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 114,
                      "name" : "Cleveland Indians",
                      "link" : "/api/v1/teams/114",
                      "season" : 2019,
                      "venue" : {
                        "id" : 5,
                        "name" : "Progressive Field",
                        "link" : "/api/v1/venues/5"
                      },
                      "teamCode" : "cle",
                      "fileCode" : "cle",
                      "abbreviation" : "CLE",
                      "teamName" : "Indians",
                      "locationName" : "Cleveland",
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
                      "shortName" : "Cleveland",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3312,
                  "name" : "Target Field",
                  "link" : "/api/v1/venues/3312"
                },
                "content" : {
                  "link" : "/api/v1/game/566962/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566962-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Twins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "9",
        "wildCardRank" : "9",
        "sportRank" : "17",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 205,
        "name" : "National League Central",
        "nameShort" : "NL Central",
        "link" : "/api/v1/divisions/205",
        "abbreviation" : "NLC",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566763,
                "link" : "/api/v1/game/566763/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 13,
                  "name" : "Globe Life Park in Arlington",
                  "link" : "/api/v1/venues/13"
                },
                "content" : {
                  "link" : "/api/v1/game/566763/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566763-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rangers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "3",
        "wildCardRank" : "3",
        "sportRank" : "5",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565220,
                "link" : "/api/v1/game/565220/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2602,
                  "name" : "Great American Ball Park",
                  "link" : "/api/v1/venues/2602"
                },
                "content" : {
                  "link" : "/api/v1/game/565220/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565220-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Reds home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "4",
        "wildCardRank" : "4",
        "sportRank" : "7",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567552,
                "link" : "/api/v1/game/567552/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T18:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 32,
                  "name" : "Miller Park",
                  "link" : "/api/v1/venues/32"
                },
                "content" : {
                  "link" : "/api/v1/game/567552/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567552-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Brewers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "8",
        "wildCardRank" : "8",
        "sportRank" : "16",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565220,
                "link" : "/api/v1/game/565220/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2602,
                  "name" : "Great American Ball Park",
                  "link" : "/api/v1/venues/2602"
                },
                "content" : {
                  "link" : "/api/v1/game/565220/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565220-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Reds home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "11",
        "wildCardRank" : "11",
        "sportRank" : "22",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567552,
                "link" : "/api/v1/game/567552/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T18:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 32,
                  "name" : "Miller Park",
                  "link" : "/api/v1/venues/32"
                },
                "content" : {
                  "link" : "/api/v1/game/567552/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567552-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Brewers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "14",
        "wildCardRank" : "14",
        "sportRank" : "26",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 203,
        "name" : "National League West",
        "nameShort" : "NL West",
        "link" : "/api/v1/divisions/203",
        "abbreviation" : "NLW",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565799,
                "link" : "/api/v1/game/565799/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 119,
                      "name" : "Los Angeles Dodgers",
                      "link" : "/api/v1/teams/119",
                      "season" : 2019,
                      "venue" : {
                        "id" : 22,
                        "name" : "Dodger Stadium",
                        "link" : "/api/v1/venues/22"
                      },
                      "teamCode" : "lan",
                      "fileCode" : "la",
                      "abbreviation" : "LAD",
                      "teamName" : "Dodgers",
                      "locationName" : "Los Angeles",
                      "firstYearOfPlay" : "1884",
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
                      "shortName" : "LA Dodgers",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 22,
                  "name" : "Dodger Stadium",
                  "link" : "/api/v1/venues/22"
                },
                "content" : {
                  "link" : "/api/v1/game/565799/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565799-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Dodgers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "1",
        "wildCardRank" : "1",
        "sportRank" : "1",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
        "team" : {
          "id" : 115,
          "name" : "Colorado Rockies",
          "link" : "/api/v1/teams/115",
          "season" : 2019,
          "venue" : {
            "id" : 19,
            "name" : "Coors Field",
            "link" : "/api/v1/venues/19"
          },
          "teamCode" : "col",
          "fileCode" : "col",
          "abbreviation" : "COL",
          "teamName" : "Rockies",
          "locationName" : "Denver",
          "firstYearOfPlay" : "1992",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567359,
                "link" : "/api/v1/game/567359/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 115,
                      "name" : "Colorado Rockies",
                      "link" : "/api/v1/teams/115",
                      "season" : 2019,
                      "venue" : {
                        "id" : 19,
                        "name" : "Coors Field",
                        "link" : "/api/v1/venues/19"
                      },
                      "teamCode" : "col",
                      "fileCode" : "col",
                      "abbreviation" : "COL",
                      "teamName" : "Rockies",
                      "locationName" : "Denver",
                      "firstYearOfPlay" : "1992",
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
                      "shortName" : "Colorado",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 4169,
                  "name" : "Marlins Park",
                  "link" : "/api/v1/venues/4169"
                },
                "content" : {
                  "link" : "/api/v1/game/567359/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567359-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Marlins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Colorado",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "5",
        "wildCardRank" : "5",
        "sportRank" : "9",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
        "team" : {
          "id" : 119,
          "name" : "Los Angeles Dodgers",
          "link" : "/api/v1/teams/119",
          "season" : 2019,
          "venue" : {
            "id" : 22,
            "name" : "Dodger Stadium",
            "link" : "/api/v1/venues/22"
          },
          "teamCode" : "lan",
          "fileCode" : "la",
          "abbreviation" : "LAD",
          "teamName" : "Dodgers",
          "locationName" : "Los Angeles",
          "firstYearOfPlay" : "1884",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565799,
                "link" : "/api/v1/game/565799/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 119,
                      "name" : "Los Angeles Dodgers",
                      "link" : "/api/v1/teams/119",
                      "season" : 2019,
                      "venue" : {
                        "id" : 22,
                        "name" : "Dodger Stadium",
                        "link" : "/api/v1/venues/22"
                      },
                      "teamCode" : "lan",
                      "fileCode" : "la",
                      "abbreviation" : "LAD",
                      "teamName" : "Dodgers",
                      "locationName" : "Los Angeles",
                      "firstYearOfPlay" : "1884",
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
                      "shortName" : "LA Dodgers",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 22,
                  "name" : "Dodger Stadium",
                  "link" : "/api/v1/venues/22"
                },
                "content" : {
                  "link" : "/api/v1/game/565799/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565799-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Dodgers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "LA Dodgers",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "6",
        "wildCardRank" : "6",
        "sportRank" : "14",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566275,
                "link" : "/api/v1/game/566275/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2680,
                  "name" : "Petco Park",
                  "link" : "/api/v1/venues/2680"
                },
                "content" : {
                  "link" : "/api/v1/game/566275/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566275-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Padres home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "12",
        "wildCardRank" : "12",
        "sportRank" : "23",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566275,
                "link" : "/api/v1/game/566275/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2680,
                  "name" : "Petco Park",
                  "link" : "/api/v1/venues/2680"
                },
                "content" : {
                  "link" : "/api/v1/game/566275/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566275-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Padres home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "13",
        "wildCardRank" : "13",
        "sportRank" : "24",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "regularSeason",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 204,
        "name" : "National League East",
        "nameShort" : "NL East",
        "link" : "/api/v1/divisions/204",
        "abbreviation" : "NLE",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567059,
                "link" : "/api/v1/game/567059/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 143,
                      "name" : "Philadelphia Phillies",
                      "link" : "/api/v1/teams/143",
                      "season" : 2019,
                      "venue" : {
                        "id" : 2681,
                        "name" : "Citizens Bank Park",
                        "link" : "/api/v1/venues/2681"
                      },
                      "teamCode" : "phi",
                      "fileCode" : "phi",
                      "abbreviation" : "PHI",
                      "teamName" : "Phillies",
                      "locationName" : "Philadelphia",
                      "firstYearOfPlay" : "1883",
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
                      "shortName" : "Philadelphia",
                      "springLeague" : {
                        "id" : 115,
                        "name" : "Grapefruit League",
                        "link" : "/api/v1/league/115",
                        "abbreviation" : "GL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2681,
                  "name" : "Citizens Bank Park",
                  "link" : "/api/v1/venues/2681"
                },
                "content" : {
                  "link" : "/api/v1/game/567059/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567059-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Phillies home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "1",
        "leagueRank" : "2",
        "wildCardRank" : "2",
        "sportRank" : "2",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567359,
                "link" : "/api/v1/game/567359/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 115,
                      "name" : "Colorado Rockies",
                      "link" : "/api/v1/teams/115",
                      "season" : 2019,
                      "venue" : {
                        "id" : 19,
                        "name" : "Coors Field",
                        "link" : "/api/v1/venues/19"
                      },
                      "teamCode" : "col",
                      "fileCode" : "col",
                      "abbreviation" : "COL",
                      "teamName" : "Rockies",
                      "locationName" : "Denver",
                      "firstYearOfPlay" : "1992",
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
                      "shortName" : "Colorado",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 4169,
                  "name" : "Marlins Park",
                  "link" : "/api/v1/venues/4169"
                },
                "content" : {
                  "link" : "/api/v1/game/567359/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567359-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Marlins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "2",
        "leagueRank" : "7",
        "wildCardRank" : "7",
        "sportRank" : "15",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565895,
                "link" : "/api/v1/game/565895/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3309,
                  "name" : "Nationals Park",
                  "link" : "/api/v1/venues/3309"
                },
                "content" : {
                  "link" : "/api/v1/game/565895/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565895-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Nationals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "3",
        "leagueRank" : "9",
        "wildCardRank" : "9",
        "sportRank" : "18",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
        "team" : {
          "id" : 143,
          "name" : "Philadelphia Phillies",
          "link" : "/api/v1/teams/143",
          "season" : 2019,
          "venue" : {
            "id" : 2681,
            "name" : "Citizens Bank Park",
            "link" : "/api/v1/venues/2681"
          },
          "teamCode" : "phi",
          "fileCode" : "phi",
          "abbreviation" : "PHI",
          "teamName" : "Phillies",
          "locationName" : "Philadelphia",
          "firstYearOfPlay" : "1883",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567059,
                "link" : "/api/v1/game/567059/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 143,
                      "name" : "Philadelphia Phillies",
                      "link" : "/api/v1/teams/143",
                      "season" : 2019,
                      "venue" : {
                        "id" : 2681,
                        "name" : "Citizens Bank Park",
                        "link" : "/api/v1/venues/2681"
                      },
                      "teamCode" : "phi",
                      "fileCode" : "phi",
                      "abbreviation" : "PHI",
                      "teamName" : "Phillies",
                      "locationName" : "Philadelphia",
                      "firstYearOfPlay" : "1883",
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
                      "shortName" : "Philadelphia",
                      "springLeague" : {
                        "id" : 115,
                        "name" : "Grapefruit League",
                        "link" : "/api/v1/league/115",
                        "abbreviation" : "GL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2681,
                  "name" : "Citizens Bank Park",
                  "link" : "/api/v1/venues/2681"
                },
                "content" : {
                  "link" : "/api/v1/game/567059/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567059-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Phillies home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Philadelphia",
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "divisionRank" : "4",
        "leagueRank" : "10",
        "wildCardRank" : "10",
        "sportRank" : "21",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565895,
                "link" : "/api/v1/game/565895/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3309,
                  "name" : "Nationals Park",
                  "link" : "/api/v1/venues/3309"
                },
                "content" : {
                  "link" : "/api/v1/game/565895/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565895-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Nationals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "divisionRank" : "5",
        "leagueRank" : "15",
        "wildCardRank" : "15",
        "sportRank" : "30",
        "gamesPlayed" : 0,
        "gamesBack" : "-",
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 0,
          "losses" : 0,
          "pct" : ".000"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "right",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "lastTen",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "day",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "grass",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "type" : "home",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "away",
            "pct" : ".000"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ]
        },
        "runsAllowed" : 0,
        "runsScored" : 0,
        "divisionChamp" : false,
        "divisionLeader" : true,
        "hasWildcard" : true,
        "clinched" : false,
        "eliminationNumber" : "-",
        "wildCardEliminationNumber" : "-",
        "wins" : 0,
        "losses" : 0,
        "runDifferential" : 0,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 200,
        "name" : "American League West",
        "nameShort" : "AL West",
        "link" : "/api/v1/divisions/200",
        "abbreviation" : "ALW",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:44.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-20",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566083,
                "link" : "/api/v1/game/566083/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-20T09:35:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2397,
                  "name" : "Tokyo Dome",
                  "link" : "/api/v1/venues/2397"
                },
                "content" : {
                  "link" : "/api/v1/game/566083/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566083-2019-03-20",
                "seasonDisplay" : "2019",
                "dayNight" : "night",
                "description" : "in Tokyo",
                "scheduledInnings" : 9,
                "gamesInSeries" : 2,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "3",
        "leagueRank" : "9",
        "springLeagueRank" : "7",
        "wildCardRank" : "9",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 7,
          "pct" : ".533"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 4,
            "type" : "home",
            "pct" : ".556"
          }, {
            "wins" : 3,
            "losses" : 3,
            "type" : "away",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "left",
            "pct" : ".667"
          }, {
            "wins" : 4,
            "losses" : 5,
            "type" : "right",
            "pct" : ".444"
          }, {
            "wins" : 8,
            "losses" : 7,
            "type" : "lastTen",
            "pct" : ".533"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".750"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 7,
            "type" : "day",
            "pct" : ".462"
          }, {
            "wins" : 2,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 8,
            "losses" : 7,
            "type" : "grass",
            "pct" : ".533"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 4,
            "type" : "home",
            "pct" : ".556"
          }, {
            "wins" : 3,
            "losses" : 3,
            "type" : "away",
            "pct" : ".500"
          } ],
          "leagueRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 3,
            "pct" : ".571",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 85,
        "runsScored" : 65,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 7,
        "runDifferential" : -20,
        "winningPercentage" : ".533"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-20",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566083,
                "link" : "/api/v1/game/566083/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-20T09:35:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2397,
                  "name" : "Tokyo Dome",
                  "link" : "/api/v1/venues/2397"
                },
                "content" : {
                  "link" : "/api/v1/game/566083/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566083-2019-03-20",
                "seasonDisplay" : "2019",
                "dayNight" : "night",
                "description" : "in Tokyo",
                "scheduledInnings" : 9,
                "gamesInSeries" : 2,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 2,
          "streakCode" : "L2"
        },
        "divisionRank" : "2",
        "leagueRank" : "7",
        "springLeagueRank" : "5",
        "wildCardRank" : "7",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 6,
          "pct" : ".538"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 3,
            "type" : "home",
            "pct" : ".625"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "away",
            "pct" : ".400"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "left",
            "pct" : ".500"
          }, {
            "wins" : 6,
            "losses" : 5,
            "type" : "right",
            "pct" : ".545"
          }, {
            "wins" : 7,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".538"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 4,
            "type" : "day",
            "pct" : ".600"
          }, {
            "wins" : 1,
            "losses" : 2,
            "type" : "night",
            "pct" : ".333"
          }, {
            "wins" : 7,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".538"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 3,
            "type" : "home",
            "pct" : ".625"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "away",
            "pct" : ".400"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 5,
            "losses" : 3,
            "pct" : ".625",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 67,
        "runsScored" : 83,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 6,
        "runDifferential" : 16,
        "winningPercentage" : ".538"
      }, {
        "team" : {
          "id" : 108,
          "name" : "Los Angeles Angels",
          "link" : "/api/v1/teams/108",
          "season" : 2019,
          "venue" : {
            "id" : 1,
            "name" : "Angel Stadium",
            "link" : "/api/v1/venues/1"
          },
          "teamCode" : "ana",
          "fileCode" : "ana",
          "abbreviation" : "LAA",
          "teamName" : "Angels",
          "locationName" : "Anaheim",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566086,
                "link" : "/api/v1/game/566086/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:07:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 108,
                      "name" : "Los Angeles Angels",
                      "link" : "/api/v1/teams/108",
                      "season" : 2019,
                      "venue" : {
                        "id" : 1,
                        "name" : "Angel Stadium",
                        "link" : "/api/v1/venues/1"
                      },
                      "teamCode" : "ana",
                      "fileCode" : "ana",
                      "abbreviation" : "LAA",
                      "teamName" : "Angels",
                      "locationName" : "Anaheim",
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
                      "shortName" : "LA Angels",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 2,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 10,
                  "name" : "Oakland Coliseum",
                  "link" : "/api/v1/venues/10"
                },
                "content" : {
                  "link" : "/api/v1/game/566086/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566086-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Athletics home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "LA Angels",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 4,
          "streakCode" : "L4"
        },
        "divisionRank" : "4",
        "leagueRank" : "10",
        "springLeagueRank" : "8",
        "wildCardRank" : "10",
        "gamesPlayed" : 17,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 9,
          "losses" : 8,
          "pct" : ".529"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 5,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "left",
            "pct" : ".250"
          }, {
            "wins" : 8,
            "losses" : 5,
            "type" : "right",
            "pct" : ".615"
          }, {
            "wins" : 8,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 9,
            "losses" : 8,
            "type" : "day",
            "pct" : ".529"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 9,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".529"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 5,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 6,
            "losses" : 5,
            "pct" : ".545",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 123,
        "runsScored" : 125,
        "divisionLeader" : false,
        "wins" : 9,
        "losses" : 8,
        "runDifferential" : 2,
        "winningPercentage" : ".529"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566763,
                "link" : "/api/v1/game/566763/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 13,
                  "name" : "Globe Life Park in Arlington",
                  "link" : "/api/v1/venues/13"
                },
                "content" : {
                  "link" : "/api/v1/game/566763/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566763-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rangers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 3,
          "streakCode" : "L3"
        },
        "divisionRank" : "5",
        "leagueRank" : "15",
        "springLeagueRank" : "15",
        "wildCardRank" : "15",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "4.5",
        "springLeagueGamesBack" : "5.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 4,
          "losses" : 9,
          "pct" : ".308"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 2,
            "losses" : 5,
            "type" : "away",
            "pct" : ".286"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "left",
            "pct" : ".250"
          }, {
            "wins" : 3,
            "losses" : 6,
            "type" : "right",
            "pct" : ".333"
          }, {
            "wins" : 4,
            "losses" : 9,
            "type" : "lastTen",
            "pct" : ".308"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 4,
            "losses" : 9,
            "type" : "day",
            "pct" : ".308"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 4,
            "losses" : 9,
            "type" : "grass",
            "pct" : ".308"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 3,
            "pct" : ".250",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 2,
            "losses" : 5,
            "type" : "away",
            "pct" : ".286"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "pct" : ".333",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 5,
            "pct" : ".286",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".438"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 107,
        "runsScored" : 88,
        "divisionLeader" : false,
        "wins" : 4,
        "losses" : 9,
        "runDifferential" : -19,
        "winningPercentage" : ".308"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566664,
                "link" : "/api/v1/game/566664/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:00:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 12,
                  "name" : "Tropicana Field",
                  "link" : "/api/v1/venues/12"
                },
                "content" : {
                  "link" : "/api/v1/game/566664/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566664-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "1",
        "leagueRank" : "3",
        "springLeagueRank" : "3",
        "wildCardRank" : "3",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.0",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 6,
          "pct" : ".571"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 2,
            "type" : "home",
            "pct" : ".600"
          }, {
            "wins" : 5,
            "losses" : 4,
            "type" : "away",
            "pct" : ".556"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "right",
            "pct" : ".571"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 4,
            "type" : "day",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 2,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 2,
            "type" : "home",
            "pct" : ".600"
          }, {
            "wins" : 5,
            "losses" : 4,
            "type" : "away",
            "pct" : ".556"
          } ],
          "leagueRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 8,
            "losses" : 6,
            "pct" : ".571",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 7,
            "type" : "xWinLoss",
            "pct" : ".563"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 75,
        "runsScored" : 88,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 6,
        "runDifferential" : 13,
        "winningPercentage" : ".571"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 201,
        "name" : "American League East",
        "nameShort" : "AL East",
        "link" : "/api/v1/divisions/201",
        "abbreviation" : "ALE",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:44.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566664,
                "link" : "/api/v1/game/566664/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:00:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 12,
                  "name" : "Tropicana Field",
                  "link" : "/api/v1/venues/12"
                },
                "content" : {
                  "link" : "/api/v1/game/566664/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566664-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 4,
          "streakCode" : "L4"
        },
        "divisionRank" : "5",
        "leagueRank" : "14",
        "springLeagueRank" : "14",
        "wildCardRank" : "14",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.5",
        "springLeagueGamesBack" : "3.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 9,
          "pct" : ".400"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 7,
            "type" : "home",
            "pct" : ".222"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "away",
            "pct" : ".667"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "left",
            "pct" : ".250"
          }, {
            "wins" : 5,
            "losses" : 6,
            "type" : "right",
            "pct" : ".455"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "lastTen",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".750"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 5,
            "losses" : 8,
            "type" : "day",
            "pct" : ".385"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "night",
            "pct" : ".500"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "grass",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 4,
            "losses" : 4,
            "pct" : ".500",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 7,
            "type" : "home",
            "pct" : ".222"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "away",
            "pct" : ".667"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 6,
            "pct" : ".455",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 1,
            "losses" : 3,
            "pct" : ".250",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 10,
            "type" : "xWinLoss",
            "pct" : ".375"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 111,
        "runsScored" : 90,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 9,
        "runDifferential" : -21,
        "winningPercentage" : ".400"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566864,
                "link" : "/api/v1/game/566864/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:37:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 14,
                  "name" : "Rogers Centre",
                  "link" : "/api/v1/venues/14"
                },
                "content" : {
                  "link" : "/api/v1/game/566864/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566864-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Blue Jays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 7,
          "streakCode" : "W7"
        },
        "divisionRank" : "2",
        "leagueRank" : "5",
        "springLeagueRank" : "6",
        "wildCardRank" : "5",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.0",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 6,
          "pct" : ".571"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "away",
            "pct" : ".625"
          }, {
            "wins" : 1,
            "losses" : 2,
            "type" : "left",
            "pct" : ".333"
          }, {
            "wins" : 7,
            "losses" : 4,
            "type" : "right",
            "pct" : ".636"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "day",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "away",
            "pct" : ".625"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "pct" : ".429",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 5,
            "losses" : 2,
            "pct" : ".714",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 61,
        "runsScored" : 78,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 6,
        "runDifferential" : 17,
        "winningPercentage" : ".571"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567456,
                "link" : "/api/v1/game/567456/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3313,
                  "name" : "Yankee Stadium",
                  "link" : "/api/v1/venues/3313"
                },
                "content" : {
                  "link" : "/api/v1/game/567456/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567456-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Yankees home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "1",
        "leagueRank" : "2",
        "springLeagueRank" : "2",
        "wildCardRank" : "2",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "0.5",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 9,
          "losses" : 6,
          "pct" : ".600"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 5,
            "losses" : 2,
            "type" : "away",
            "pct" : ".714"
          }, {
            "wins" : 3,
            "losses" : 0,
            "type" : "left",
            "pct" : "1.000"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 9,
            "losses" : 5,
            "type" : "day",
            "pct" : ".643"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 9,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 6,
            "losses" : 3,
            "pct" : ".667",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 3,
            "losses" : 1,
            "pct" : ".750",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 5,
            "losses" : 2,
            "type" : "away",
            "pct" : ".714"
          } ],
          "leagueRecords" : [ {
            "wins" : 9,
            "losses" : 4,
            "pct" : ".692",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 0,
            "losses" : 2,
            "pct" : ".000",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".529"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 105,
        "runsScored" : 105,
        "divisionLeader" : false,
        "wins" : 9,
        "losses" : 6,
        "runDifferential" : 0,
        "winningPercentage" : ".600"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566372,
                "link" : "/api/v1/game/566372/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T23:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 2,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 680,
                  "name" : "T-Mobile Park",
                  "link" : "/api/v1/venues/680"
                },
                "content" : {
                  "link" : "/api/v1/game/566372/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566372-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Mariners home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 4,
          "streakCode" : "L4"
        },
        "divisionRank" : "4",
        "leagueRank" : "13",
        "springLeagueRank" : "13",
        "wildCardRank" : "13",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.5",
        "springLeagueGamesBack" : "3.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 9,
          "pct" : ".400"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 5,
            "type" : "home",
            "pct" : ".444"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "away",
            "pct" : ".333"
          }, {
            "wins" : 4,
            "losses" : 0,
            "type" : "left",
            "pct" : "1.000"
          }, {
            "wins" : 2,
            "losses" : 9,
            "type" : "right",
            "pct" : ".182"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "lastTen",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 4,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "day",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "grass",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 1,
            "losses" : 4,
            "pct" : ".200",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 5,
            "type" : "home",
            "pct" : ".444"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "away",
            "pct" : ".333"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 6,
            "pct" : ".333",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 3,
            "losses" : 3,
            "pct" : ".500",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 90,
        "runsScored" : 78,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 9,
        "runDifferential" : -12,
        "winningPercentage" : ".400"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567456,
                "link" : "/api/v1/game/567456/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3313,
                  "name" : "Yankee Stadium",
                  "link" : "/api/v1/venues/3313"
                },
                "content" : {
                  "link" : "/api/v1/game/567456/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567456-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Yankees home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "3",
        "leagueRank" : "6",
        "springLeagueRank" : "7",
        "wildCardRank" : "6",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "1.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 6,
          "pct" : ".538"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 2,
            "type" : "home",
            "pct" : ".667"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "left",
            "pct" : ".667"
          }, {
            "wins" : 5,
            "losses" : 5,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 7,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".538"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 5,
            "type" : "day",
            "pct" : ".545"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "night",
            "pct" : ".500"
          }, {
            "wins" : 7,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".538"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 3,
            "losses" : 2,
            "pct" : ".600",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 2,
            "type" : "home",
            "pct" : ".667"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          } ],
          "leagueRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 3,
            "losses" : 2,
            "pct" : ".600",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 62,
        "runsScored" : 73,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 6,
        "runDifferential" : 11,
        "winningPercentage" : ".538"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 103,
        "name" : "American League",
        "link" : "/api/v1/league/103",
        "abbreviation" : "AL",
        "nameShort" : "American",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-20",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-21",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "AL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 202,
        "name" : "American League Central",
        "nameShort" : "AL Central",
        "link" : "/api/v1/divisions/202",
        "abbreviation" : "ALC",
        "league" : {
          "id" : 103,
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:44.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566962,
                "link" : "/api/v1/game/566962/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 114,
                      "name" : "Cleveland Indians",
                      "link" : "/api/v1/teams/114",
                      "season" : 2019,
                      "venue" : {
                        "id" : 5,
                        "name" : "Progressive Field",
                        "link" : "/api/v1/venues/5"
                      },
                      "teamCode" : "cle",
                      "fileCode" : "cle",
                      "abbreviation" : "CLE",
                      "teamName" : "Indians",
                      "locationName" : "Cleveland",
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
                      "shortName" : "Cleveland",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3312,
                  "name" : "Target Field",
                  "link" : "/api/v1/venues/3312"
                },
                "content" : {
                  "link" : "/api/v1/game/566962/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566962-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Twins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 3,
          "streakCode" : "W3"
        },
        "divisionRank" : "2",
        "leagueRank" : "4",
        "springLeagueRank" : "4",
        "wildCardRank" : "4",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.0",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 6,
          "pct" : ".571"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 1,
            "type" : "home",
            "pct" : ".833"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "left",
            "pct" : ".625"
          }, {
            "wins" : 3,
            "losses" : 3,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 5,
            "type" : "day",
            "pct" : ".583"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "night",
            "pct" : ".500"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 5,
            "losses" : 5,
            "pct" : ".500",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 1,
            "type" : "home",
            "pct" : ".833"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 5,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 3,
            "losses" : 1,
            "pct" : ".750",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 10,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".625"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 72,
        "runsScored" : 94,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 6,
        "runDifferential" : 22,
        "winningPercentage" : ".571"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565702,
                "link" : "/api/v1/game/565702/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:15:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 7,
                  "name" : "Kauffman Stadium",
                  "link" : "/api/v1/venues/7"
                },
                "content" : {
                  "link" : "/api/v1/game/565702/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565702-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Royals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 3,
          "streakCode" : "W3"
        },
        "divisionRank" : "5",
        "leagueRank" : "12",
        "springLeagueRank" : "11",
        "wildCardRank" : "12",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.0",
        "springLeagueGamesBack" : "3.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 8,
          "pct" : ".429"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          }, {
            "wins" : 2,
            "losses" : 2,
            "type" : "left",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 6,
            "type" : "right",
            "pct" : ".400"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "day",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 3,
            "losses" : 2,
            "pct" : ".600",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          } ],
          "leagueRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "pct" : ".571",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 5,
            "pct" : ".286",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".438"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 111,
        "runsScored" : 103,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 8,
        "runDifferential" : -8,
        "winningPercentage" : ".429"
      }, {
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114",
          "season" : 2019,
          "venue" : {
            "id" : 5,
            "name" : "Progressive Field",
            "link" : "/api/v1/venues/5"
          },
          "teamCode" : "cle",
          "fileCode" : "cle",
          "abbreviation" : "CLE",
          "teamName" : "Indians",
          "locationName" : "Cleveland",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566962,
                "link" : "/api/v1/game/566962/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 114,
                      "name" : "Cleveland Indians",
                      "link" : "/api/v1/teams/114",
                      "season" : 2019,
                      "venue" : {
                        "id" : 5,
                        "name" : "Progressive Field",
                        "link" : "/api/v1/venues/5"
                      },
                      "teamCode" : "cle",
                      "fileCode" : "cle",
                      "abbreviation" : "CLE",
                      "teamName" : "Indians",
                      "locationName" : "Cleveland",
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
                      "shortName" : "Cleveland",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3312,
                  "name" : "Target Field",
                  "link" : "/api/v1/venues/3312"
                },
                "content" : {
                  "link" : "/api/v1/game/566962/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566962-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Twins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Cleveland",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "3",
        "leagueRank" : "8",
        "springLeagueRank" : "6",
        "wildCardRank" : "8",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 7,
          "pct" : ".533"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "left",
            "pct" : ".333"
          }, {
            "wins" : 6,
            "losses" : 3,
            "type" : "right",
            "pct" : ".667"
          }, {
            "wins" : 8,
            "losses" : 7,
            "type" : "lastTen",
            "pct" : ".533"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "day",
            "pct" : ".500"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "night",
            "pct" : ".667"
          }, {
            "wins" : 8,
            "losses" : 7,
            "type" : "grass",
            "pct" : ".533"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 6,
            "losses" : 4,
            "pct" : ".600",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 78,
        "runsScored" : 78,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 7,
        "runDifferential" : 0,
        "winningPercentage" : ".533"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566864,
                "link" : "/api/v1/game/566864/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:37:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 14,
                  "name" : "Rogers Centre",
                  "link" : "/api/v1/venues/14"
                },
                "content" : {
                  "link" : "/api/v1/game/566864/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566864-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Blue Jays home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "4",
        "leagueRank" : "11",
        "springLeagueRank" : "12",
        "wildCardRank" : "11",
        "gamesPlayed" : 16,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.0",
        "springLeagueGamesBack" : "2.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 9,
          "pct" : ".438"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 5,
            "type" : "home",
            "pct" : ".375"
          }, {
            "wins" : 4,
            "losses" : 4,
            "type" : "away",
            "pct" : ".500"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "left",
            "pct" : ".333"
          }, {
            "wins" : 5,
            "losses" : 5,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "lastTen",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : "1.000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 9,
            "type" : "day",
            "pct" : ".400"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 7,
            "losses" : 9,
            "type" : "grass",
            "pct" : ".438"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 3,
            "losses" : 3,
            "pct" : ".500",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 5,
            "type" : "home",
            "pct" : ".375"
          }, {
            "wins" : 4,
            "losses" : 4,
            "type" : "away",
            "pct" : ".500"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 3,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 6,
            "pct" : ".400",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".471"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 96,
        "runsScored" : 89,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 9,
        "runDifferential" : -7,
        "winningPercentage" : ".438"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565702,
                "link" : "/api/v1/game/565702/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:15:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 7,
                  "name" : "Kauffman Stadium",
                  "link" : "/api/v1/venues/7"
                },
                "content" : {
                  "link" : "/api/v1/game/565702/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565702-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Royals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "1",
        "leagueRank" : "1",
        "springLeagueRank" : "3",
        "wildCardRank" : "1",
        "gamesPlayed" : 16,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 10,
          "losses" : 6,
          "pct" : ".625"
        },
        "lastUpdated" : "2019-03-10T07:30:44Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 7,
            "losses" : 1,
            "type" : "home",
            "pct" : ".875"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          }, {
            "wins" : 4,
            "losses" : 1,
            "type" : "left",
            "pct" : ".800"
          }, {
            "wins" : 6,
            "losses" : 5,
            "type" : "right",
            "pct" : ".545"
          }, {
            "wins" : 10,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".625"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 0,
            "type" : "oneRun",
            "pct" : "1.000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "day",
            "pct" : ".571"
          }, {
            "wins" : 2,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 10,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".625"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 4,
            "losses" : 1,
            "pct" : ".800",
            "division" : {
              "id" : 200,
              "name" : "American League West",
              "link" : "/api/v1/divisions/200"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 201,
              "name" : "American League East",
              "link" : "/api/v1/divisions/201"
            }
          }, {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 202,
              "name" : "American League Central",
              "link" : "/api/v1/divisions/202"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 7,
            "losses" : 1,
            "type" : "home",
            "pct" : ".875"
          }, {
            "wins" : 3,
            "losses" : 5,
            "type" : "away",
            "pct" : ".375"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 2,
            "pct" : ".714",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 5,
            "losses" : 4,
            "pct" : ".556",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 7,
            "type" : "xWinLoss",
            "pct" : ".563"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 97,
        "runsScored" : 110,
        "divisionLeader" : false,
        "wins" : 10,
        "losses" : 6,
        "runDifferential" : 13,
        "winningPercentage" : ".625"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 205,
        "name" : "National League Central",
        "nameShort" : "NL Central",
        "link" : "/api/v1/divisions/205",
        "abbreviation" : "NLC",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565220,
                "link" : "/api/v1/game/565220/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2602,
                  "name" : "Great American Ball Park",
                  "link" : "/api/v1/venues/2602"
                },
                "content" : {
                  "link" : "/api/v1/game/565220/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565220-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Reds home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 3,
          "streakCode" : "L3"
        },
        "divisionRank" : "3",
        "leagueRank" : "9",
        "springLeagueRank" : "10",
        "wildCardRank" : "9",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.0",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 8,
          "pct" : ".467"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          }, {
            "wins" : 1,
            "losses" : 2,
            "type" : "left",
            "pct" : ".333"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "day",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 4,
            "type" : "home",
            "pct" : ".500"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 7,
            "pct" : ".417",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 10,
            "type" : "xWinLoss",
            "pct" : ".375"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 87,
        "runsScored" : 69,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 8,
        "runDifferential" : -18,
        "winningPercentage" : ".467"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567552,
                "link" : "/api/v1/game/567552/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T18:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 32,
                  "name" : "Miller Park",
                  "link" : "/api/v1/venues/32"
                },
                "content" : {
                  "link" : "/api/v1/game/567552/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567552-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Brewers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "4",
        "leagueRank" : "10",
        "springLeagueRank" : "11",
        "wildCardRank" : "10",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.0",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 7,
          "pct" : ".462"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 5,
            "type" : "home",
            "pct" : ".286"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "away",
            "pct" : ".667"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "left",
            "pct" : ".500"
          }, {
            "wins" : 5,
            "losses" : 6,
            "type" : "right",
            "pct" : ".455"
          }, {
            "wins" : 6,
            "losses" : 7,
            "type" : "lastTen",
            "pct" : ".462"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 5,
            "losses" : 7,
            "type" : "day",
            "pct" : ".417"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 6,
            "losses" : 7,
            "type" : "grass",
            "pct" : ".462"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 4,
            "losses" : 5,
            "pct" : ".444",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 5,
            "type" : "home",
            "pct" : ".286"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "away",
            "pct" : ".667"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 5,
            "pct" : ".444",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 71,
        "runsScored" : 67,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 7,
        "runDifferential" : -4,
        "winningPercentage" : ".462"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566763,
                "link" : "/api/v1/game/566763/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 13,
                  "name" : "Globe Life Park in Arlington",
                  "link" : "/api/v1/venues/13"
                },
                "content" : {
                  "link" : "/api/v1/game/566763/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566763-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Rangers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 2,
          "streakCode" : "W2"
        },
        "divisionRank" : "1",
        "leagueRank" : "1",
        "springLeagueRank" : "1",
        "wildCardRank" : "1",
        "gamesPlayed" : 17,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "-",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 11,
          "losses" : 6,
          "pct" : ".647"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 4,
            "type" : "home",
            "pct" : ".556"
          }, {
            "wins" : 6,
            "losses" : 2,
            "type" : "away",
            "pct" : ".750"
          }, {
            "wins" : 5,
            "losses" : 2,
            "type" : "left",
            "pct" : ".714"
          }, {
            "wins" : 6,
            "losses" : 4,
            "type" : "right",
            "pct" : ".600"
          }, {
            "wins" : 11,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".647"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 10,
            "losses" : 6,
            "type" : "day",
            "pct" : ".625"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 11,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".647"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "pct" : ".571",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 4,
            "type" : "home",
            "pct" : ".556"
          }, {
            "wins" : 6,
            "losses" : 2,
            "type" : "away",
            "pct" : ".750"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 2,
            "pct" : ".714",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 6,
            "losses" : 4,
            "pct" : ".600",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 11,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".647"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 82,
        "runsScored" : 116,
        "divisionLeader" : false,
        "wins" : 11,
        "losses" : 6,
        "runDifferential" : 34,
        "winningPercentage" : ".647"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565220,
                "link" : "/api/v1/game/565220/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2602,
                  "name" : "Great American Ball Park",
                  "link" : "/api/v1/venues/2602"
                },
                "content" : {
                  "link" : "/api/v1/game/565220/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565220-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Reds home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 3,
          "streakCode" : "L3"
        },
        "divisionRank" : "5",
        "leagueRank" : "15",
        "springLeagueRank" : "14",
        "wildCardRank" : "15",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "5.0",
        "springLeagueGamesBack" : "5.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 4,
          "losses" : 9,
          "pct" : ".308"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 1,
            "losses" : 5,
            "type" : "home",
            "pct" : ".167"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 4,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 4,
            "losses" : 5,
            "type" : "right",
            "pct" : ".444"
          }, {
            "wins" : 4,
            "losses" : 9,
            "type" : "lastTen",
            "pct" : ".308"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".000"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 6,
            "type" : "day",
            "pct" : ".333"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "night",
            "pct" : ".250"
          }, {
            "wins" : 4,
            "losses" : 9,
            "type" : "grass",
            "pct" : ".308"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 3,
            "pct" : ".250",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 1,
            "losses" : 5,
            "type" : "home",
            "pct" : ".167"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "pct" : ".333",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 5,
            "pct" : ".286",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 96,
        "runsScored" : 76,
        "divisionLeader" : false,
        "wins" : 4,
        "losses" : 9,
        "runDifferential" : -20,
        "winningPercentage" : ".308"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567552,
                "link" : "/api/v1/game/567552/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T18:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 32,
                  "name" : "Miller Park",
                  "link" : "/api/v1/venues/32"
                },
                "content" : {
                  "link" : "/api/v1/game/567552/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567552-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Brewers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 2,
          "streakCode" : "W2"
        },
        "divisionRank" : "2",
        "leagueRank" : "6",
        "springLeagueRank" : "9",
        "wildCardRank" : "6",
        "gamesPlayed" : 16,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "2.5",
        "springLeagueGamesBack" : "2.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 8,
          "pct" : ".500"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 6,
            "losses" : 4,
            "type" : "away",
            "pct" : ".600"
          }, {
            "wins" : 3,
            "losses" : 2,
            "type" : "left",
            "pct" : ".600"
          }, {
            "wins" : 5,
            "losses" : 6,
            "type" : "right",
            "pct" : ".455"
          }, {
            "wins" : 8,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".667"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 8,
            "type" : "day",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 3,
            "losses" : 2,
            "pct" : ".600",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 6,
            "losses" : 4,
            "type" : "away",
            "pct" : ".600"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "pct" : ".429",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 5,
            "losses" : 4,
            "pct" : ".556",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 77,
        "runsScored" : 79,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 8,
        "runDifferential" : 2,
        "winningPercentage" : ".500"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 203,
        "name" : "National League West",
        "nameShort" : "NL West",
        "link" : "/api/v1/divisions/203",
        "abbreviation" : "NLW",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566275,
                "link" : "/api/v1/game/566275/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2680,
                  "name" : "Petco Park",
                  "link" : "/api/v1/venues/2680"
                },
                "content" : {
                  "link" : "/api/v1/game/566275/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566275-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Padres home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "1",
        "leagueRank" : "2",
        "springLeagueRank" : "2",
        "wildCardRank" : "2",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "0.5",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 9,
          "losses" : 5,
          "pct" : ".643"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 0,
            "type" : "home",
            "pct" : "1.000"
          }, {
            "wins" : 4,
            "losses" : 5,
            "type" : "away",
            "pct" : ".444"
          }, {
            "wins" : 4,
            "losses" : 2,
            "type" : "left",
            "pct" : ".667"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "right",
            "pct" : ".625"
          }, {
            "wins" : 9,
            "losses" : 5,
            "type" : "lastTen",
            "pct" : ".643"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 4,
            "type" : "day",
            "pct" : ".636"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "night",
            "pct" : ".667"
          }, {
            "wins" : 9,
            "losses" : 5,
            "type" : "grass",
            "pct" : ".643"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 2,
            "losses" : 0,
            "pct" : "1.000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 0,
            "type" : "home",
            "pct" : "1.000"
          }, {
            "wins" : 4,
            "losses" : 5,
            "type" : "away",
            "pct" : ".444"
          } ],
          "leagueRecords" : [ {
            "wins" : 5,
            "losses" : 3,
            "pct" : ".625",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 2,
            "pct" : ".667",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 7,
            "type" : "xWinLoss",
            "pct" : ".563"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 77,
        "runsScored" : 88,
        "divisionLeader" : false,
        "wins" : 9,
        "losses" : 5,
        "runDifferential" : 11,
        "winningPercentage" : ".643"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 566275,
                "link" : "/api/v1/game/566275/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2680,
                  "name" : "Petco Park",
                  "link" : "/api/v1/venues/2680"
                },
                "content" : {
                  "link" : "/api/v1/game/566275/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-566275-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Padres home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "5",
        "leagueRank" : "13",
        "springLeagueRank" : "13",
        "wildCardRank" : "13",
        "gamesPlayed" : 13,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "4.0",
        "springLeagueGamesBack" : "4.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 5,
          "losses" : 8,
          "pct" : ".385"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          }, {
            "wins" : 1,
            "losses" : 5,
            "type" : "left",
            "pct" : ".167"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "right",
            "pct" : ".571"
          }, {
            "wins" : 5,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".385"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "oneRun",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 7,
            "type" : "day",
            "pct" : ".300"
          }, {
            "wins" : 2,
            "losses" : 1,
            "type" : "night",
            "pct" : ".667"
          }, {
            "wins" : 5,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".385"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 3,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 3,
            "losses" : 2,
            "pct" : ".600",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 4,
            "type" : "home",
            "pct" : ".333"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 3,
            "losses" : 5,
            "pct" : ".375",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 82,
        "runsScored" : 61,
        "divisionLeader" : false,
        "wins" : 5,
        "losses" : 8,
        "runDifferential" : -21,
        "winningPercentage" : ".385"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565799,
                "link" : "/api/v1/game/565799/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 119,
                      "name" : "Los Angeles Dodgers",
                      "link" : "/api/v1/teams/119",
                      "season" : 2019,
                      "venue" : {
                        "id" : 22,
                        "name" : "Dodger Stadium",
                        "link" : "/api/v1/venues/22"
                      },
                      "teamCode" : "lan",
                      "fileCode" : "la",
                      "abbreviation" : "LAD",
                      "teamName" : "Dodgers",
                      "locationName" : "Los Angeles",
                      "firstYearOfPlay" : "1884",
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
                      "shortName" : "LA Dodgers",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 22,
                  "name" : "Dodger Stadium",
                  "link" : "/api/v1/venues/22"
                },
                "content" : {
                  "link" : "/api/v1/game/565799/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565799-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Dodgers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 1,
          "streakCode" : "L1"
        },
        "divisionRank" : "3",
        "leagueRank" : "11",
        "springLeagueRank" : "10",
        "wildCardRank" : "11",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.5",
        "springLeagueGamesBack" : "3.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 8,
          "pct" : ".429"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "type" : "home",
            "pct" : ".571"
          }, {
            "wins" : 2,
            "losses" : 5,
            "type" : "away",
            "pct" : ".286"
          }, {
            "wins" : 0,
            "losses" : 2,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 3,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "day",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 2,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 3,
            "pct" : ".250",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "type" : "home",
            "pct" : ".571"
          }, {
            "wins" : 2,
            "losses" : 5,
            "type" : "away",
            "pct" : ".286"
          } ],
          "leagueRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "pct" : ".571",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 5,
            "pct" : ".286",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 84,
        "runsScored" : 80,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 8,
        "runDifferential" : -4,
        "winningPercentage" : ".429"
      }, {
        "team" : {
          "id" : 115,
          "name" : "Colorado Rockies",
          "link" : "/api/v1/teams/115",
          "season" : 2019,
          "venue" : {
            "id" : 19,
            "name" : "Coors Field",
            "link" : "/api/v1/venues/19"
          },
          "teamCode" : "col",
          "fileCode" : "col",
          "abbreviation" : "COL",
          "teamName" : "Rockies",
          "locationName" : "Denver",
          "firstYearOfPlay" : "1992",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567359,
                "link" : "/api/v1/game/567359/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 115,
                      "name" : "Colorado Rockies",
                      "link" : "/api/v1/teams/115",
                      "season" : 2019,
                      "venue" : {
                        "id" : 19,
                        "name" : "Coors Field",
                        "link" : "/api/v1/venues/19"
                      },
                      "teamCode" : "col",
                      "fileCode" : "col",
                      "abbreviation" : "COL",
                      "teamName" : "Rockies",
                      "locationName" : "Denver",
                      "firstYearOfPlay" : "1992",
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
                      "shortName" : "Colorado",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 4169,
                  "name" : "Marlins Park",
                  "link" : "/api/v1/venues/4169"
                },
                "content" : {
                  "link" : "/api/v1/game/567359/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567359-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Marlins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Colorado",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "4",
        "leagueRank" : "12",
        "springLeagueRank" : "12",
        "wildCardRank" : "12",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.5",
        "springLeagueGamesBack" : "3.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 8,
          "pct" : ".429"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 5,
            "type" : "home",
            "pct" : ".375"
          }, {
            "wins" : 3,
            "losses" : 3,
            "type" : "away",
            "pct" : ".500"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "left",
            "pct" : ".250"
          }, {
            "wins" : 5,
            "losses" : 5,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 1,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".333"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 5,
            "losses" : 8,
            "type" : "day",
            "pct" : ".385"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 6,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".429"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 3,
            "losses" : 0,
            "pct" : "1.000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 1,
            "pct" : ".500",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 5,
            "type" : "home",
            "pct" : ".375"
          }, {
            "wins" : 3,
            "losses" : 3,
            "type" : "away",
            "pct" : ".500"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 7,
            "pct" : ".222",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 1,
            "pct" : ".800",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 8,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 86,
        "runsScored" : 89,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 8,
        "runDifferential" : 3,
        "winningPercentage" : ".429"
      }, {
        "team" : {
          "id" : 119,
          "name" : "Los Angeles Dodgers",
          "link" : "/api/v1/teams/119",
          "season" : 2019,
          "venue" : {
            "id" : 22,
            "name" : "Dodger Stadium",
            "link" : "/api/v1/venues/22"
          },
          "teamCode" : "lan",
          "fileCode" : "la",
          "abbreviation" : "LAD",
          "teamName" : "Dodgers",
          "locationName" : "Los Angeles",
          "firstYearOfPlay" : "1884",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565799,
                "link" : "/api/v1/game/565799/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 119,
                      "name" : "Los Angeles Dodgers",
                      "link" : "/api/v1/teams/119",
                      "season" : 2019,
                      "venue" : {
                        "id" : 22,
                        "name" : "Dodger Stadium",
                        "link" : "/api/v1/venues/22"
                      },
                      "teamCode" : "lan",
                      "fileCode" : "la",
                      "abbreviation" : "LAD",
                      "teamName" : "Dodgers",
                      "locationName" : "Los Angeles",
                      "firstYearOfPlay" : "1884",
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
                      "shortName" : "LA Dodgers",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  }
                },
                "venue" : {
                  "id" : 22,
                  "name" : "Dodger Stadium",
                  "link" : "/api/v1/venues/22"
                },
                "content" : {
                  "link" : "/api/v1/game/565799/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565799-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Dodgers home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "LA Dodgers",
          "springLeague" : {
            "id" : 114,
            "name" : "Cactus League",
            "link" : "/api/v1/league/114",
            "abbreviation" : "CL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "2",
        "leagueRank" : "4",
        "springLeagueRank" : "4",
        "wildCardRank" : "4",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "1.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 6,
          "pct" : ".571"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "type" : "home",
            "pct" : ".571"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "right",
            "pct" : ".571"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 1,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".333"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 2,
            "type" : "day",
            "pct" : ".800"
          }, {
            "wins" : 0,
            "losses" : 4,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 0,
            "pct" : "1.000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 4,
            "losses" : 3,
            "type" : "home",
            "pct" : ".571"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "away",
            "pct" : ".571"
          } ],
          "leagueRecords" : [ {
            "wins" : 6,
            "losses" : 4,
            "pct" : ".600",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 8,
            "losses" : 7,
            "type" : "xWinLoss",
            "pct" : ".533"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 74,
        "runsScored" : 85,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 6,
        "runDifferential" : 11,
        "winningPercentage" : ".571"
      } ]
    }, {
      "standingsType" : "springTraining",
      "league" : {
        "id" : 104,
        "name" : "National League",
        "link" : "/api/v1/league/104",
        "abbreviation" : "NL",
        "nameShort" : "National",
        "seasonState" : "spring training",
        "hasWildCard" : true,
        "hasSplitSeason" : false,
        "numGames" : 162,
        "hasPlayoffPoints" : false,
        "numTeams" : 15,
        "numWildcardTeams" : 2,
        "seasonDateInfo" : {
          "regularSeasonStartDate" : "2019-03-28",
          "regularSeasonEndDate" : "2019-09-29",
          "preSeasonStartDate" : "2019-02-23",
          "preSeasonEndDate" : "2019-03-26",
          "lastDate1stHalf" : "2019-07-07",
          "firstDate2ndHalf" : "2019-07-11",
          "allStarDate" : "2019-07-09"
        },
        "season" : "2019",
        "orgCode" : "NL",
        "conferencesInUse" : false,
        "divisionsInUse" : true,
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        }
      },
      "division" : {
        "id" : 204,
        "name" : "National League East",
        "nameShort" : "NL East",
        "link" : "/api/v1/divisions/204",
        "abbreviation" : "NLE",
        "league" : {
          "id" : 104,
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1"
        },
        "hasWildcard" : false
      },
      "sport" : {
        "id" : 1,
        "code" : "mlb",
        "link" : "/api/v1/sports/1",
        "name" : "Major League Baseball",
        "abbreviation" : "MLB"
      },
      "lastUpdated" : "2019-03-10T07:30:45.000Z",
      "teamRecords" : [ {
        "team" : {
          "id" : 143,
          "name" : "Philadelphia Phillies",
          "link" : "/api/v1/teams/143",
          "season" : 2019,
          "venue" : {
            "id" : 2681,
            "name" : "Citizens Bank Park",
            "link" : "/api/v1/venues/2681"
          },
          "teamCode" : "phi",
          "fileCode" : "phi",
          "abbreviation" : "PHI",
          "teamName" : "Phillies",
          "locationName" : "Philadelphia",
          "firstYearOfPlay" : "1883",
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567059,
                "link" : "/api/v1/game/567059/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 143,
                      "name" : "Philadelphia Phillies",
                      "link" : "/api/v1/teams/143",
                      "season" : 2019,
                      "venue" : {
                        "id" : 2681,
                        "name" : "Citizens Bank Park",
                        "link" : "/api/v1/venues/2681"
                      },
                      "teamCode" : "phi",
                      "fileCode" : "phi",
                      "abbreviation" : "PHI",
                      "teamName" : "Phillies",
                      "locationName" : "Philadelphia",
                      "firstYearOfPlay" : "1883",
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
                      "shortName" : "Philadelphia",
                      "springLeague" : {
                        "id" : 115,
                        "name" : "Grapefruit League",
                        "link" : "/api/v1/league/115",
                        "abbreviation" : "GL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2681,
                  "name" : "Citizens Bank Park",
                  "link" : "/api/v1/venues/2681"
                },
                "content" : {
                  "link" : "/api/v1/game/567059/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567059-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Phillies home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
          },
          "shortName" : "Philadelphia",
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 2,
          "streakCode" : "L2"
        },
        "divisionRank" : "2",
        "leagueRank" : "5",
        "springLeagueRank" : "5",
        "wildCardRank" : "5",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.5",
        "springLeagueGamesBack" : "0.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 8,
          "losses" : 6,
          "pct" : ".571"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "type" : "home",
            "pct" : ".429"
          }, {
            "wins" : 5,
            "losses" : 2,
            "type" : "away",
            "pct" : ".714"
          }, {
            "wins" : 1,
            "losses" : 3,
            "type" : "left",
            "pct" : ".250"
          }, {
            "wins" : 7,
            "losses" : 3,
            "type" : "right",
            "pct" : ".700"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 5,
            "type" : "day",
            "pct" : ".615"
          }, {
            "wins" : 0,
            "losses" : 1,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 0,
            "losses" : 1,
            "pct" : ".000",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 2,
            "losses" : 1,
            "pct" : ".667",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "type" : "home",
            "pct" : ".429"
          }, {
            "wins" : 5,
            "losses" : 2,
            "type" : "away",
            "pct" : ".714"
          } ],
          "leagueRecords" : [ {
            "wins" : 6,
            "losses" : 4,
            "pct" : ".600",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 2,
            "losses" : 2,
            "pct" : ".500",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 10,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".625"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 71,
        "runsScored" : 89,
        "divisionLeader" : false,
        "wins" : 8,
        "losses" : 6,
        "runDifferential" : 18,
        "winningPercentage" : ".571"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567059,
                "link" : "/api/v1/game/567059/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T19:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 143,
                      "name" : "Philadelphia Phillies",
                      "link" : "/api/v1/teams/143",
                      "season" : 2019,
                      "venue" : {
                        "id" : 2681,
                        "name" : "Citizens Bank Park",
                        "link" : "/api/v1/venues/2681"
                      },
                      "teamCode" : "phi",
                      "fileCode" : "phi",
                      "abbreviation" : "PHI",
                      "teamName" : "Phillies",
                      "locationName" : "Philadelphia",
                      "firstYearOfPlay" : "1883",
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
                      "shortName" : "Philadelphia",
                      "springLeague" : {
                        "id" : 115,
                        "name" : "Grapefruit League",
                        "link" : "/api/v1/league/115",
                        "abbreviation" : "GL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 2681,
                  "name" : "Citizens Bank Park",
                  "link" : "/api/v1/venues/2681"
                },
                "content" : {
                  "link" : "/api/v1/game/567059/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567059-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Phillies home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 4,
          "streakCode" : "W4"
        },
        "divisionRank" : "1",
        "leagueRank" : "3",
        "springLeagueRank" : "1",
        "wildCardRank" : "3",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "1.0",
        "springLeagueGamesBack" : "-",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 9,
          "losses" : 6,
          "pct" : ".600"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 6,
            "losses" : 2,
            "type" : "home",
            "pct" : ".750"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          }, {
            "wins" : 1,
            "losses" : 4,
            "type" : "left",
            "pct" : ".200"
          }, {
            "wins" : 8,
            "losses" : 2,
            "type" : "right",
            "pct" : ".800"
          }, {
            "wins" : 9,
            "losses" : 6,
            "type" : "lastTen",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 4,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".571"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 8,
            "losses" : 6,
            "type" : "day",
            "pct" : ".571"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 9,
            "losses" : 6,
            "type" : "grass",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 5,
            "losses" : 1,
            "pct" : ".833",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 0,
            "pct" : "1.000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 6,
            "losses" : 2,
            "type" : "home",
            "pct" : ".750"
          }, {
            "wins" : 3,
            "losses" : 4,
            "type" : "away",
            "pct" : ".429"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 5,
            "pct" : ".375",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 6,
            "losses" : 1,
            "pct" : ".857",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 9,
            "losses" : 6,
            "type" : "xWinLoss",
            "pct" : ".600"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 57,
        "runsScored" : 69,
        "divisionLeader" : false,
        "wins" : 9,
        "losses" : 6,
        "runDifferential" : 12,
        "winningPercentage" : ".600"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 567359,
                "link" : "/api/v1/game/567359/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T20:10:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
                    "team" : {
                      "id" : 115,
                      "name" : "Colorado Rockies",
                      "link" : "/api/v1/teams/115",
                      "season" : 2019,
                      "venue" : {
                        "id" : 19,
                        "name" : "Coors Field",
                        "link" : "/api/v1/venues/19"
                      },
                      "teamCode" : "col",
                      "fileCode" : "col",
                      "abbreviation" : "COL",
                      "teamName" : "Rockies",
                      "locationName" : "Denver",
                      "firstYearOfPlay" : "1992",
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
                      "shortName" : "Colorado",
                      "springLeague" : {
                        "id" : 114,
                        "name" : "Cactus League",
                        "link" : "/api/v1/league/114",
                        "abbreviation" : "CL"
                      },
                      "allStarStatus" : "N",
                      "active" : true
                    },
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 114,
                      "name" : "Cactus League",
                      "link" : "/api/v1/league/114",
                      "abbreviation" : "CL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 4169,
                  "name" : "Marlins Park",
                  "link" : "/api/v1/venues/4169"
                },
                "content" : {
                  "link" : "/api/v1/game/567359/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-567359-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Marlins home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 4,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 2,
          "streakCode" : "W2"
        },
        "divisionRank" : "5",
        "leagueRank" : "14",
        "springLeagueRank" : "15",
        "wildCardRank" : "14",
        "gamesPlayed" : 16,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "4.5",
        "springLeagueGamesBack" : "3.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 6,
          "losses" : 10,
          "pct" : ".375"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "type" : "home",
            "pct" : ".429"
          }, {
            "wins" : 3,
            "losses" : 6,
            "type" : "away",
            "pct" : ".333"
          }, {
            "wins" : 2,
            "losses" : 2,
            "type" : "left",
            "pct" : ".500"
          }, {
            "wins" : 4,
            "losses" : 8,
            "type" : "right",
            "pct" : ".333"
          }, {
            "wins" : 6,
            "losses" : 10,
            "type" : "lastTen",
            "pct" : ".375"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 5,
            "losses" : 10,
            "type" : "day",
            "pct" : ".333"
          }, {
            "wins" : 1,
            "losses" : 0,
            "type" : "night",
            "pct" : "1.000"
          }, {
            "wins" : 6,
            "losses" : 10,
            "type" : "grass",
            "pct" : ".375"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 4,
            "losses" : 4,
            "pct" : ".500",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 0,
            "losses" : 3,
            "pct" : ".000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "type" : "home",
            "pct" : ".429"
          }, {
            "wins" : 3,
            "losses" : 6,
            "type" : "away",
            "pct" : ".333"
          } ],
          "leagueRecords" : [ {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 7,
            "pct" : ".364",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 6,
            "losses" : 10,
            "type" : "xWinLoss",
            "pct" : ".375"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 91,
        "runsScored" : 68,
        "divisionLeader" : false,
        "wins" : 6,
        "losses" : 10,
        "runDifferential" : -23,
        "winningPercentage" : ".375"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565895,
                "link" : "/api/v1/game/565895/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3309,
                  "name" : "Nationals Park",
                  "link" : "/api/v1/venues/3309"
                },
                "content" : {
                  "link" : "/api/v1/game/565895/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565895-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Nationals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "losses",
          "streakNumber" : 2,
          "streakCode" : "L2"
        },
        "divisionRank" : "3",
        "leagueRank" : "7",
        "springLeagueRank" : "8",
        "wildCardRank" : "7",
        "gamesPlayed" : 14,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "2.5",
        "springLeagueGamesBack" : "1.5",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 7,
          "pct" : ".500"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 5,
            "losses" : 3,
            "type" : "home",
            "pct" : ".625"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "away",
            "pct" : ".333"
          }, {
            "wins" : 0,
            "losses" : 2,
            "type" : "left",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 5,
            "type" : "right",
            "pct" : ".583"
          }, {
            "wins" : 7,
            "losses" : 7,
            "type" : "lastTen",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "oneRun",
            "pct" : ".400"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 6,
            "losses" : 6,
            "type" : "day",
            "pct" : ".500"
          }, {
            "wins" : 1,
            "losses" : 1,
            "type" : "night",
            "pct" : ".500"
          }, {
            "wins" : 7,
            "losses" : 7,
            "type" : "grass",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 2,
            "losses" : 3,
            "pct" : ".400",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 1,
            "losses" : 2,
            "pct" : ".333",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 5,
            "losses" : 3,
            "type" : "home",
            "pct" : ".625"
          }, {
            "wins" : 2,
            "losses" : 4,
            "type" : "away",
            "pct" : ".333"
          } ],
          "leagueRecords" : [ {
            "wins" : 4,
            "losses" : 2,
            "pct" : ".667",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 3,
            "losses" : 5,
            "pct" : ".375",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 7,
            "type" : "xWinLoss",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 82,
        "runsScored" : 83,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 7,
        "runDifferential" : 1,
        "winningPercentage" : ".500"
      }, {
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
          "nextGameSchedule" : {
            "totalItems" : 1,
            "totalEvents" : 0,
            "totalGames" : 1,
            "totalGamesInProgress" : 0,
            "dates" : [ {
              "date" : "2019-03-28",
              "totalItems" : 1,
              "totalEvents" : 0,
              "totalGames" : 1,
              "totalGamesInProgress" : 0,
              "games" : [ {
                "gamePk" : 565895,
                "link" : "/api/v1/game/565895/feed/live",
                "gameType" : "R",
                "season" : "2019",
                "gameDate" : "2019-03-28T17:05:00Z",
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
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  },
                  "home" : {
                    "leagueRecord" : {
                      "wins" : 0,
                      "losses" : 0,
                      "pct" : ".000"
                    },
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
                    "splitSquad" : false,
                    "seriesNumber" : 1,
                    "springLeague" : {
                      "id" : 115,
                      "name" : "Grapefruit League",
                      "link" : "/api/v1/league/115",
                      "abbreviation" : "GL"
                    }
                  }
                },
                "venue" : {
                  "id" : 3309,
                  "name" : "Nationals Park",
                  "link" : "/api/v1/venues/3309"
                },
                "content" : {
                  "link" : "/api/v1/game/565895/content"
                },
                "gameNumber" : 1,
                "publicFacing" : true,
                "doubleHeader" : "N",
                "gamedayType" : "P",
                "tiebreaker" : "N",
                "calendarEventID" : "14-565895-2019-03-28",
                "seasonDisplay" : "2019",
                "dayNight" : "day",
                "description" : "Nationals home opener",
                "scheduledInnings" : 9,
                "gamesInSeries" : 3,
                "seriesGameNumber" : 1,
                "seriesDescription" : "Regular Season",
                "recordSource" : "S",
                "ifNecessary" : "N",
                "ifNecessaryDescription" : "Normal Game"
              } ],
              "events" : [ ]
            } ]
          },
          "previousGameSchedule" : {
            "totalItems" : 0,
            "totalEvents" : 0,
            "totalGames" : 0,
            "totalGamesInProgress" : 0,
            "dates" : [ ]
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
        "season" : "2019",
        "streak" : {
          "streakType" : "wins",
          "streakNumber" : 1,
          "streakCode" : "W1"
        },
        "divisionRank" : "4",
        "leagueRank" : "8",
        "springLeagueRank" : "9",
        "wildCardRank" : "8",
        "gamesPlayed" : 15,
        "wildCardGamesBack" : "-",
        "leagueGamesBack" : "3.0",
        "springLeagueGamesBack" : "2.0",
        "sportGamesBack" : "-",
        "divisionGamesBack" : "-",
        "conferenceGamesBack" : "-",
        "leagueRecord" : {
          "wins" : 7,
          "losses" : 8,
          "pct" : ".467"
        },
        "lastUpdated" : "2019-03-10T07:30:45Z",
        "records" : {
          "splitRecords" : [ {
            "wins" : 2,
            "losses" : 5,
            "type" : "home",
            "pct" : ".286"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "away",
            "pct" : ".625"
          }, {
            "wins" : 2,
            "losses" : 3,
            "type" : "left",
            "pct" : ".400"
          }, {
            "wins" : 5,
            "losses" : 5,
            "type" : "right",
            "pct" : ".500"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "lastTen",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "extraInning",
            "pct" : ".000"
          }, {
            "wins" : 2,
            "losses" : 2,
            "type" : "oneRun",
            "pct" : ".500"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "winners",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "day",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "night",
            "pct" : ".000"
          }, {
            "wins" : 7,
            "losses" : 8,
            "type" : "grass",
            "pct" : ".467"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "turf",
            "pct" : ".000"
          } ],
          "divisionRecords" : [ {
            "wins" : 0,
            "losses" : 0,
            "pct" : ".000",
            "division" : {
              "id" : 203,
              "name" : "National League West",
              "link" : "/api/v1/divisions/203"
            }
          }, {
            "wins" : 2,
            "losses" : 4,
            "pct" : ".333",
            "division" : {
              "id" : 204,
              "name" : "National League East",
              "link" : "/api/v1/divisions/204"
            }
          }, {
            "wins" : 2,
            "losses" : 0,
            "pct" : "1.000",
            "division" : {
              "id" : 205,
              "name" : "National League Central",
              "link" : "/api/v1/divisions/205"
            }
          } ],
          "overallRecords" : [ {
            "wins" : 2,
            "losses" : 5,
            "type" : "home",
            "pct" : ".286"
          }, {
            "wins" : 5,
            "losses" : 3,
            "type" : "away",
            "pct" : ".625"
          } ],
          "leagueRecords" : [ {
            "wins" : 3,
            "losses" : 4,
            "pct" : ".429",
            "league" : {
              "id" : 103,
              "name" : "American League",
              "link" : "/api/v1/league/103"
            }
          }, {
            "wins" : 4,
            "losses" : 4,
            "pct" : ".500",
            "league" : {
              "id" : 104,
              "name" : "National League",
              "link" : "/api/v1/league/104"
            }
          } ],
          "expectedRecords" : [ {
            "wins" : 7,
            "losses" : 9,
            "type" : "xWinLoss",
            "pct" : ".438"
          }, {
            "wins" : 0,
            "losses" : 0,
            "type" : "xWinLossSeason",
            "pct" : ".000"
          } ]
        },
        "runsAllowed" : 93,
        "runsScored" : 84,
        "divisionLeader" : false,
        "wins" : 7,
        "losses" : 8,
        "runDifferential" : -9,
        "winningPercentage" : ".467"
      } ]
    } ]
  }`);
  export default CALEND2;
