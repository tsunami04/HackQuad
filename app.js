const restaurantsNearVIT = [
  {
      id: 1,
      name: "Darling Residency",
      cuisine: "Multi-cuisine",
      priceRange: 2,
      rating: 4.2,
      address: "Katpadi Rd, VIT University",
      distance: 0.2,
      coordinates: { lat: 12.9718, lng: 79.1589 },
      recommendedFood: ["Biryani", "North Indian Thali", "Chinese Noodles"]
  },
  {
      id: 2,
      name: "Zaitoon",
      cuisine: "Arabic",
      priceRange: 4,
      rating: 4.4,
      address: "VIT Main Rd, Katpadi",
      distance: 0.5,
      coordinates: { lat: 12.9710, lng: 79.1565 },
      recommendedFood: ["Hummus", "Falafel", "Shawarma"]
  },
  {
      id: 3,
      name: "Momo Nation Cafe",
      cuisine: "Fast Food",
      priceRange: 1,
      rating: 4.0,
      address: "Near VIT Back Gate",
      distance: 0.3,
      coordinates: { lat: 12.9731, lng: 79.1577 },
      recommendedFood: ["Burgers", "Fries", "Momos"]
  },
  {
      id: 4,
      name: "Pandian Restaurant",
      cuisine: "South Indian",
      priceRange: 1,
      rating: 3.9,
      address: "Katpadi Rd, opposite VIT",
      distance: 0.4,
      coordinates: { lat: 12.9705, lng: 79.1596 },
      recommendedFood: ["Idli", "Dosa", "Vada"]
  },
  {
      id: 5,
      name: "Cafe Coffee Day",
      cuisine: "Cafe",
      priceRange: 2,
      rating: 4.1,
      address: "VIT Main Rd, Katpadi",
      distance: 0.6,
      coordinates: { lat: 12.9698, lng: 79.1558 },
      recommendedFood: ["Coffee", "Pastries", "Sandwiches"]
  },
  {
      id: 6,
      name: "Barbeque Nation",
      cuisine: "BBQ",
      priceRange: 4,
      rating: 4.5,
      address: "Fortune Park, Katpadi Rd",
      distance: 1.2,
      coordinates: { lat: 12.9785, lng: 79.1613 },
      recommendedFood: ["Chicken Tikka", "Veg Kebabs", "Prawns"]
  },
  {
      id: 7,
      name: "Hotel Srinidhi",
      cuisine: "North Indian",
      priceRange: 2,
      rating: 4.0,
      address: "Gandhi Rd, Katpadi",
      distance: 0.8,
      coordinates: { lat: 12.9692, lng: 79.1545 },
      recommendedFood: ["Butter Chicken", "Naan", "Dal Makhani"]
  },
  {
      id: 8,
      name: "Pizza Hut",
      cuisine: "Pizza",
      priceRange: 3,
      rating: 4.2,
      address: "VIT Main Rd, Katpadi",
      distance: 0.7,
      coordinates: { lat: 12.9725, lng: 79.1602 },
      recommendedFood: ["Margherita Pizza", "Pepperoni Pizza", "Garlic Bread"]
  },
  {
      id: 9,
      name: "Lassi Shop",
      cuisine: "Beverages",
      priceRange: 1,
      rating: 4.3,
      address: "Near VIT Main Gate",
      distance: 0.1,
      coordinates: { lat: 12.9720, lng: 79.1585 },
      recommendedFood: ["Lassi", "Falooda", "Juice"]
  },
  {
      id: 10,
      name: "Chilli's Grill & Bar",
      cuisine: "American",
      priceRange: 4,
      rating: 4.4,
      address: "VIT Main Rd, Katpadi",
      distance: 1.0,
      coordinates: { lat: 12.9738, lng: 79.1618 },
      recommendedFood: ["Burgers", "Steaks", "Nachos"]
  },
  {
      id: 11,
      name: "New Dhaba",
      cuisine: "North Indian",
      priceRange: 2,
      rating: 4.1,
      address: "Katpadi Rd, near VIT",
      distance: 2.5,
      coordinates: { lat: 12.9750, lng: 79.1620 },
      recommendedFood: ["Butter Chicken", "Naan", "Dal Makhani"]
  },
  {
      id: 12,
      name: "South Indian Spice",
      cuisine: "South Indian",
      priceRange: 1,
      rating: 4.3,
      address: "Vellore Main Road",
      distance: 3.2,
      coordinates: { lat: 12.9685, lng: 79.1525 },
      recommendedFood: ["Idli", "Dosa", "Vada"]
  },
  {
      id: 13,
      name: "The Italian Corner",
      cuisine: "Italian",
      priceRange: 3,
      rating: 4.0,
      address: "Near CMC Hospital",
      distance: 4.5,
      coordinates: { lat: 12.9820, lng: 79.1480 },
      recommendedFood: ["Pizza", "Pasta", "Risotto"]
  },
  {
      id: 14,
      name: "Earth Plate",
      cuisine: "Vegetarian",
      priceRange: 2,
      rating: 4.2,
      address: "opposite CMC hospital",
      distance: 5.8,
      coordinates: { lat: 12.9582, lng: 79.1725 },
      recommendedFood: ["Paneer Tikka", "Vegetable Biryani", "Crispy corn"]
  },
  {
      id: 15,
      name: "Pastel Poetry",
      cuisine: "Cafe",
      priceRange: 3,
      rating: 4.5,
      address: "Chitoor road, Gandhi Nagar",
      distance: 3.1,
      coordinates: { lat: 12.9738, lng: 79.1568 },
      recommendedFood: ["Coffee", "Pastries", "Sandwiches"]
  },
  {
      id: 16,
      name: "Hundreds Heritage",
      cuisine: "Multi-cuisine",
      priceRange: 4,
      rating: 4.0,
      address: "East Cross road, Gandhi Nagar",
      distance: 7.2,
      coordinates: { lat: 12.9456, lng: 79.1812 },
      recommendedFood: ["Biryani", "North Indian Thali", "Chinese Noodles"]
  }
];

// Function to get food recommendations based on budget
function getFoodRecommendations(budget, latitude, longitude) {
    // Convert budget to price range (1-4)
    const maxPriceRange = Math.min(Math.ceil(budget / 250), 4);
    // Filter and sort restaurants
    const recommendations = restaurantsNearVIT
        .filter(restaurant => restaurant.priceRange <= maxPriceRange)
        .sort((a, b) => {
            // Sort by a combination of rating and distance
            const scoreA = a.rating - (a.distance * 0.1);
            const scoreB = b.rating - (b.distance * 0.1);
            return scoreB - scoreA;
        })
        .slice(0, 5)  // Get top 5 restaurants
        .map(({ name, cuisine, priceRange, rating, address, distance,recommendedFood}) => ({
            name,
            cuisine,
            price: '₹'.repeat(priceRange),
            rating,
            address,
            distance: `${distance.toFixed(1)} km`,
            recommendedFood
        }));
    if (recommendations.length === 0) {
        throw new Error('No restaurants found within your budget.');
    }
    return recommendations;
}
//budgetcontroller
BudgetController = (function () {
    //some code
    var expense = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };
    expense.prototype.calcpercentage = function (totalincome) {
      if (totalincome > 0) {
        this.percentage = Math.round((this.value / totalincome) * 100);
      } else {
        this.percentage = -1;
      }
    };
    expense.prototype.getpercentage = function () {
      return this.percentage;
    };
    var income = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
    var calculatetotal = function (type) {
      var sum = 0;
      data.allitems[type].forEach(function (curr) {
        sum += curr.value;
      });
      data.totals[type] = sum;
    };
    var data = {
      allitems: {
        exp: [],
        inc: [],
      },
      totals: {
        exp: 0,
        inc: 0,
      },
      budget: 0,
      percentage: -1,
    };

  
    return {
      addItem: function (type, des, val) {
        var ID, newitem;
        if (data.allitems[type].length > 0) {
          ID = data.allitems[type][data.allitems[type].length - 1].id + 1;
        } else {
          ID = 0;
        }
        if (type === "exp") {
          newitem = new expense(ID, des, val);
        } else if (type === "inc") {
          newitem = new income(ID, des, val);
        }
        data.allitems[type].push(newitem);
        return newitem;
      },
      deleteitem: function (type, id) {
        var ids;
        ids = data.allitems[type].map(function (curr) {
          return curr.id;
        });
        index = ids.indexOf(id);
        if (index !== -1) {
          data.allitems[type].splice(index, 1);
        }
      },
      
      calculatebudget: function () {
        calculatetotal("exp");
        calculatetotal("inc");
        data.budget = data.totals.inc - data.totals.exp;
        console.log("Calculated budget:", data.budget);
        if (data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
            data.percentage = -1;
        }
    },
      getbudget: function () {
        return {
          budget: data.budget,
          percentage: data.percentage,
          totalinc: data.totals.inc,
          totalexp: data.totals.exp,
        };
      },
      calculatepercentages: function () {
        data.allitems.exp.forEach(function (curr) {
          curr.calcpercentage(data.totals.inc);
        });
      },
      getpercentagesfun: function () {
        var allperc = data.allitems.exp.map(function (curr) {
          return curr.getpercentage();
        });
        return allperc;
      },
      testing: function () {
        console.log(data);
      },
    };
  })();
  
  //UIcontroller
  UIController = (function () {
    //write code
    var DOMstrings = {
      inputtype: ".add__type",
      inputdescription: ".add__description",
      inputvalue: ".add__value",
      inputbtn: ".add__btn",
      incomecontainer: ".income__list",
      expensecontainer: ".expenses__list",
      budgetlabel: ".budget__value",
      incomelabel: ".budget__income--value",
      expenselabel: ".budget__expenses--value",
      expensepercentage: ".budget__expenses--percentage",
      container: ".container",
      exppercent: ".item__percentage",
      datelabel: ".budget__title--month",
    };
    
    var displayRestaurants = function(restaurants) {
        var html = '<h2>Recommended Restaurants:</h2><div class="restaurant-cards">';
        restaurants.forEach(function(restaurant) {
            html += '<div class="restaurant-card" onclick="window.open(\'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(restaurant.name + ' ' + restaurant.address) + '\', \'_blank\')">' +
                '<h3>' + restaurant.name + '</h3>' +
                '<p>' + restaurant.cuisine + '</p>' +
                '<p>Price: ' + restaurant.price + '</p>' +
                '<p>Rating: ' + restaurant.rating + '</p>' +
                '<p>Distance: ' + restaurant.distance + '</p>' +
                '<p>Address: ' + restaurant.address + '</p>' +
                '<p>Recommended: ' + restaurant.recommendedFood + '</p>' +


                '</div>';
        });
        html += '</div>';

        document.querySelector('.restaurant-recommendations').innerHTML = html;
    };

    return {
      getInput: function () {
        return {
          type: document.querySelector(DOMstrings.inputtype).value,
          description: document.querySelector(DOMstrings.inputdescription).value,
          value: parseFloat(document.querySelector(DOMstrings.inputvalue).value),
        };
      },
      deleteitemUI: function (selectorid) {
        var temp = document.getElementById(selectorid);
        temp.parentNode.removeChild(temp);
      },
      addListItem: function (obj, type) {
        //1.create html string with placeholder text
        var html, newHTML, element;
        if (type === "inc") {
          element = DOMstrings.incomecontainer;
          html =
            '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">Rs %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type === "exp") {
          element = DOMstrings.expensecontainer;
          html =
            '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">Rs %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        
        //2.replace placeholder with actual data
        newHTML = html.replace("%id%", obj.id);
        newHTML = newHTML.replace("%description%", obj.description);
        newHTML = newHTML.replace("%value%", obj.value);
        //3.insert html to the DOM
        document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
      },
      clearField: function () {
        var field, fieldarr;
        field = document.querySelectorAll(
          DOMstrings.inputdescription + "," + DOMstrings.inputvalue
        );
        fieldarr = Array.prototype.slice.call(field);
        fieldarr.forEach(function (current, index, array) {
          current.value = "";
        });
        fieldarr[0].focus();
      },
      updatebudgetUI: function (obj) {
        document.querySelector(DOMstrings.budgetlabel).textContent = `Rs ${obj.budget}`;
        document.querySelector(DOMstrings.incomelabel).textContent = `Rs ${obj.totalinc}`;
        document.querySelector(DOMstrings.expenselabel).textContent = `Rs ${obj.totalexp}`;

        document.querySelector(
          DOMstrings.budgetlabel
        ).textContent = `Rs ${obj.budget}`;
        document.querySelector(
          DOMstrings.incomelabel
        ).textContent = `Rs ${obj.totalinc}`;
        document.querySelector(
          DOMstrings.expenselabel
        ).textContent = `Rs ${obj.totalexp}`;
  
        if (obj.percentage > 0) {
          document.querySelector(DOMstrings.expensepercentage).textContent =
            obj.percentage + "%";
        } else {
          document.querySelector(DOMstrings.expensepercentage).textContent =
            "---";
        }
      },
      displaypercentages: function (perc) {
        var fileds = document.querySelectorAll(DOMstrings.exppercent);
        var nodelistforeach = function (list, callback) {
          for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
          }
        };
        nodelistforeach(fileds, function (current, index) {
          if (perc[index] > 0) {
            current.textContent = perc[index] + "%";
          } else {
            current.textContent = "---";
          }
        });
      },
      displaymonth: function () {
        var now, year, mon, monlist;
        now = new Date();
        monlist = [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JULY",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ];
        mon = now.getMonth();
        year = now.getFullYear();
        var name = prompt("Enter your Name");
        document.querySelector(DOMstrings.datelabel).textContent =
          "Hello, " + name + " Available Budget in " + monlist[mon] + " " + year;
      },
      displayRestaurants: displayRestaurants,
      getdomstrings: function () {
        return DOMstrings;
      },
    };
  })();
  
  //controller
 //controller
controller = (function (budgetcntrl, uicntrl) {
  //write code
  var setupeventlisterner = function () {
    var DOM = uicntrl.getdomstrings();
    document
      .querySelector(DOM.inputbtn)
      .addEventListener("click", cntrladditem);

    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        cntrladditem();
      }
    });
    document
      .querySelector(DOM.container)
      .addEventListener("click", cntrldeleteitem);
  };

  var updateRestaurantRecommendations = function() {
    var budget = budgetcntrl.getbudget().budget;
    if (budget > 0) {
      try {
        // Assuming user's location is VIT (you might want to get actual user location)
        var recommendations = getFoodRecommendations(budget, 12.9718, 79.1589);
        uicntrl.displayRestaurants(recommendations);
      } catch (error) {
        console.error(error.message);
        // Display error message to user
        document.querySelector('.restaurant-recommendations').innerHTML = '<p>' + error.message + '</p>';
      }
    } else {
      document.querySelector('.restaurant-recommendations').innerHTML = '<p>Increase your budget to see restaurant recommendations.</p>';
    }
  };

  var updatebudget = function () {
    budgetcntrl.calculatebudget();
    var budget = budgetcntrl.getbudget();
    uicntrl.updatebudgetUI(budget);
    updateRestaurantRecommendations(); // Add this line
  };

  var updatepercentages = function () {
    // body...
    budgetcntrl.calculatepercentages();
    var p = budgetcntrl.getpercentagesfun();
    uicntrl.displaypercentages(p);
    console.log(p);
  };

  cntrladditem = function () {
    // 1.getinput
    var input = uicntrl.getInput();
    var newitem;
    //2.adding items to budgetlist
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      var budget = budgetcntrl.getbudget().budget;
      if (input.type === "exp" && budget - input.value < 0) {
        alert("No sufficient balance");
        return;
      }
      newitem = BudgetController.addItem(
        input.type,
        input.description,
        input.value
      );
      //3.add newitem to UI
      uicntrl.addListItem(newitem, input.type);
      //4.clear the inputs in UI
      uicntrl.clearField();

      updatebudget();
      updatepercentages();
    } else {
      alert("Enter Correct inputs");
    }
  };

  cntrldeleteitem = function (e) {
    var Itemid, splitid, type, id;
    Itemid = e.target.parentNode.parentNode.parentNode.parentNode.id;
    if (Itemid) {
      splitid = Itemid.split("-");
      type = splitid[0];
      id = parseInt(splitid[1]);
      budgetcntrl.deleteitem(type, id);
      uicntrl.deleteitemUI(Itemid);
      updatebudget();
    }
  };

  return {
    init: function () {
      console.log("Application Started");
      uicntrl.displaymonth();
      uicntrl.updatebudgetUI({
        budget: 0,
        totalinc: 0,
        totalexp: 0,
        percentage: -1,
      });
      setupeventlisterner();
      updateRestaurantRecommendations(); // Add this line
    },
  };
})(BudgetController, UIController);

controller.init();
  
 
