function PartyController($scope, $http) {
    $scope.warriors = [];
    $scope.archers = [];
    $scope.mages = [];
    $scope.healers = [];

    $scope.addMember = function (name, weapon, job) {
        console.log(name + " " + weapon);
        if (name !== undefined && weapon !== undefined) {
            if (name !== "" && weapon !== "") {
                if (job === "Warrior") {
                    var warrior = { name: name, weapon: weapon };
                    $scope.warriors.push({ name: name, weapon: weapon });
                    $scope.name = "";
                    $scope.weapon = "";
                    $scope.sendWarrior(warrior);
                }
                if (job === "Archer") {
                    var archer = { name: name, weapon: weapon };
                    $scope.archers.push({ name: name, weapon: weapon });
                    $scope.name = "";
                    $scope.weapon = "";
                    $scope.sendArcher(archer);
                }
                if (job === "Mage") {
                    var mage = { name: name, weapon: weapon };
                    $scope.mages.push({ name: name, weapon: weapon });
                    $scope.name = "";
                    $scope.weapon = "";
                    $scope.sendMage(mage);
                }
                if (job === "Healer") {
                    var healer = { name: name, weapon: weapon };
                    $scope.healers.push({ name: name, weapon: weapon });
                    $scope.name = "";
                    $scope.weapon = "";
                    $scope.sendHealer(healer);
                } if (job === undefined) {
                    alert("Please choose a class for this party member.");
                }
            } else {
                alert("Please fill out both fields.");
            }
        } else {
            alert("Please fill out both fields.");
        }
    };

    $scope.updateWarrior = function (warrior) {
        $http.delete("https://partymembers.firebaseio.com/warriors/" + warrior.key + "/.json")
        .success(function () {
            $http.post("https://partymembers.firebaseio.com/warriors/.json", warrior)
            .success(function () {
                alert("How does it feel?");
            })
            .error(function () {
                alert("Eh heheh... :/");
            });
        })
        .error(function () {
            alert("Eh heheh... :/");
        });
    }

    $scope.deleteWarrior = function (warrior) {
        $http.delete("https://partymembers.firebaseio.com/warriors/" + warrior.key + "/.json")
        .success(function () {
            var w = $scope.warriors.indexOf(warrior);
            $scope.warriors.splice(w, 1);
        })
        .error(function () {
            alert("Watch where you're swinging that thing!");
        });
    }
    $scope.sendWarrior = function (warrior) {
        $http.post("https://partymembers.firebaseio.com/warriors/.json", warrior)
        .success(function (data) {
            alert("Welcome!")
        })
        .error(function (data) {
            alert("Sorry, I couldn't add you.");
        });
    }
    $http.get("https://partymembers.firebaseio.com/warriors/.json")
    .success(function (data) {
        if (data !== null) {
            for (var w in data) {
                data[w].key = w;
                $scope.warriors.push(data[w]);
            }
        }
    })
    .error(function () {
        alert("I couldn't find the warriors!");
    });

    $scope.updateArcher = function (archer) {
        $http.delete("https://partymembers.firebaseio.com/archers/" + archer.key + "/.json")
        .success(function () {
            $http.post("https://partymembers.firebaseio.com/archers/.json", archer)
            .success(function () {
                alert("How does it feel?");
            })
            .error(function () {
                alert("Eh heheh... :/");
            });
        })
        .error(function () {
            alert("Eh heheh... :/");
        });
    }

    $scope.deleteArcher = function (archer) {
        $http.delete("https://partymembers.firebaseio.com/archers/" + archer.key + "/.json")
        .success(function () {
            var a = $scope.archers.indexOf(archer);
            $scope.archers.splice(a, 1);
        })
        .error(function () {
            alert("Watch out!");
        });
    }
    $scope.sendArcher = function (archer) {
        $http.post("https://partymembers.firebaseio.com/archers/.json", archer)
        .success(function (data) {
            alert("Welcome!")
        })
        .error(function (data) {
            alert("Sorry, I couldn't add you.");
        });
    }
    $http.get("https://partymembers.firebaseio.com/archers/.json")
    .success(function (data) {
        if (data !== null) {
            for (var a in data) {
                data[a].key = a;
                $scope.archers.push(data[a]);
            }
        }
    })
    .error(function () {
        alert("I couldn't find the archers!");
    });

    $scope.updateMage = function (mage) {
        $http.delete("https://partymembers.firebaseio.com/mages/" + mage.key + "/.json")
        .success(function () {
            $http.post("https://partymembers.firebaseio.com/mages/.json", mage)
            .success(function () {
                alert("How does it feel?");
            })
            .error(function () {
                alert("Eh heheh... :/");
            });
        })
        .error(function () {
            alert("Eh heheh... :/");
        });
    }

    $scope.deleteMage = function (mage) {
        $http.delete("https://partymembers.firebaseio.com/mages/" + mage.key + "/.json")
        .success(function () {
            var m = $scope.mages.indexOf(mage);
            $scope.mages.splice(m, 1);
        })
        .error(function () {
            alert("Ahh!");
        });
    }
    $scope.sendMage = function (mage) {
        $http.post("https://partymembers.firebaseio.com/mages/.json", mage)
        .success(function (data) {
            alert("Welcome!")
        })
        .error(function (data) {
            alert("Sorry, I couldn't add you.");
        });
    }
    $http.get("https://partymembers.firebaseio.com/mages/.json")
    .success(function (data) {
        if (data !== null) {
            for (var m in data) {
                data[m].key = m;
                $scope.mages.push(data[m]);
            }
        }
    })
    .error(function () {
        alert("I couldn't find the mages!");
    });

    $scope.updateHealer = function (healer) {
        $http.delete("https://partymembers.firebaseio.com/healers/" + healer.key + "/.json")
        .success(function () {
            $http.post("https://partymembers.firebaseio.com/healers/.json", healer)
            .success(function () {
                alert("How does it feel?");
            })
            .error(function () {
                alert("Eh heheh... :/");
            });
        })
        .error(function () {
            alert("Eh heheh... :/");
        });
    }

    $scope.deleteHealer = function (healer) {
        $http.delete("https://partymembers.firebaseio.com/healers/" + healer.key + "/.json")
        .success(function () {
            var h = $scope.healers.indexOf(healer);
            $scope.healers.splice(h, 1);
        })
        .error(function () {
            alert("Oh no!");
        });
    }
    $scope.sendHealer = function (healer) {
        $http.post("https://partymembers.firebaseio.com/healers/.json", healer)
        .success(function (data) {
            alert("Welcome!")
        })
        .error(function (data) {
            alert("Sorry, I couldn't add you.");
        });
    }
    $http.get("https://partymembers.firebaseio.com/healers/.json")
    .success(function (data) {
        if (data !== null) {
            for (var h in data) {
                data[h].key = h;
                $scope.healers.push(data[h]);
            }
        }
    })
    .error(function () {
        alert("I couldn't find the healers!");
    });
}