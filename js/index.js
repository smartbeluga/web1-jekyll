/*---FIlter



$( function() {

  // init Isotope
  var $container = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: function() {
      var $this = $(this); 
      var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
      return buttonResult;
      
      }
  });

   // store filter for each group
  var filters = {};
var buttonFilter = '';
  
  $('#filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    
    buttonFilter = filterValue;
    
    
    
    
    // set filter for Isotope
    $container.isotope();
  });

  
  
  

  
    // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
       
  
});



Filter Ends---*/




/*---


$( ".category" ).change(function() {
  var selectedEventType = this.options[this.selectedIndex].value;
  if (selectedEventType == "all") {
    $('.container div').removeClass('hidden');
  } else {
    $('.container div').addClass('hidden');
    $('.container div[data-eventtype="' + selectedEventType + '"]').removeClass('hidden');
  }
});

--*/




function _toArray(arr) { 
  return Array.isArray(arr) ? arr : Array.from(arr)
}

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)
  
  return elements.map(function (element) {
    var text = element.innerText.split('')
    var spans = text.map(function (letter) {
      return '<span>' + letter + '</span>'
    }).join('')
    return element.innerHTML = spans
  })
}

makeSpans('h1')



