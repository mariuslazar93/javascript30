var typeAheadComponent = function(){
    var form,
        searchInput,
        suggestionsList,
        cities = [];

    function fetchData(){
        var endpoint =    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        fetch(endpoint)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                cities.push(...data);
            })
            .catch(function(err){
                console.log(err);
            });
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function findMatches(filterText, arrayToFilter) {
        var regex = new RegExp(filterText,"gi");

        return arrayToFilter.filter(function(elem) {
            return elem.city.match(regex) || elem.state.match(regex);
        });
    }

    function updateSuggestionList(array, textToHighlight) {
        var regex = new RegExp(textToHighlight, 'gi');

        var innerHTML = array.map(function(elem){
            var city = elem.city.replace(regex, '<span class=\'hl\'>' + textToHighlight + '</span>');
            var state = elem.state.replace(regex, '<span class=\'hl\'>' + textToHighlight + '</span>');
            return '<li><span>' + city + ', ' + state + '</span><span>' + numberWithCommas(elem.population) + '</span></li>';
        }).join('');

        suggestionsList.innerHTML = innerHTML;
    }

    function bindEvents() {
        searchInput.addEventListener('focus', function(e){
            suggestionsList.style.display = 'block';
        });
        searchInput.addEventListener('blur', function(e){
            suggestionsList.style.display = 'none';
        });
        searchInput.addEventListener('keyup', function(e){
            filteredArray = findMatches(searchInput.value, cities);
            updateSuggestionList(filteredArray, searchInput.value);
        });
    }

    function init(formClass){
        form = document.querySelector(formClass);
        if(form){
            suggestionsList = document.querySelector('.suggestions');
            searchInput = document.querySelector('.search');
            bindEvents();
            fetchData();
        }
    }
    return {
        init: init
    }
}();

typeAheadComponent.init('.search-form');
