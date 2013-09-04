console.log("Section numbering...")

function number_sections(threshold) {

  var h1_number = 0;
  var h2_number = 0;

  if (threshold === undefined) {
    threshold = 4;
  }

  var cells = IPython.notebook.get_cells();
  
  for (var i=0; i < cells.length; i++) {
    var cell = cells[i];
    
    if (cell.cell_type !== 'heading') continue;
    
    var level = cell.level;
        
    if (level > threshold) continue;
    
    if (level === 1) {
        
        h1_number ++;
        var h1_element = cell.element.find('h1');
        var h1_html = h1_element.html();
        
        console.log("h1_html: " + h1_html);

        pattern = /^[0-9]+./;  // section number at start of string
        var result = pattern.exec(h1_html);
        
        h1_html = h1_html.replace(result, "");
        h1_element.html(h1_number + ". " + h1_html);
        
        h2_number = 0;
        
    }
    
    if (level === 2) {
    
        h2_number ++;
        
        var h2_element = cell.element.find('h2');
        var h2_html = h2_element.html();
        
        pattern = /^[0-9]+.[0-9]+./;  // subsection number at start of string
        var result = pattern.exec(h2_html);
       
        h2_html = h2_html.replace(result, "");
        h2_element.html(h1_number + "." + h2_number + ". " + h2_html);
        
    }
    
  }
  
}


number_sections();
