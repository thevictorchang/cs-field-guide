$(document).ready(function(){
  // Create the grid on load
  setup_grid();
});

function setup_grid(){
  // Get grid size and set it globably
  this.$base = $('#interactive-base-calculator-base').val();
  num_rows = 3;
  num_columns = 8;

  if ($base > 21 || $base < 1 || isNaN($base)) {
    // Error message
    alert('Please use a base between 2 and 20');
    // Reset grid
    $('#interactive-base-calculator-base').val(6);
  } else {
    // Create divs and set initial run length text
    var $grid = $('#interactive-base-calculator-grid');
    $grid.empty();
    for(col = 0; col < num_columns; col++) {
        var $gridRow = $('<div class="flex-container flex-container-column"></div>');
        $grid.append($gridRow);
        for(row = 0; row < num_rows; row++) {
            $gridRow.append($('<div class="flex-item">' + row + ':' + col + '</div>'));
        }
    }
  }
}
