function Line(){
  var ss = SpreadsheetApp.getActive().getActiveSheet();
  var prompt = "Enter a concept.  Preferably only one word.  If it is a verb, use the infinite/basic conjugation.  Use the singular form.";
  var before = Browser.inputBox(prompt, Browser.Buttons.OK_CANCEL);
  before = before.toUpperCase().trim(); 
 
  var bRow = findSoma(before);
  bRow = "A" + bRow + ":" + bRow;
  ss.setActiveSelection(bRow).activate();
  var Orow = ss.getActiveRange();
  Orow.getCell(1, 1).setValue(before);
  Orow.getCell(1,2).setValue(/*Orow.getCell(1,2).getValue() + */1);
  Orow.getCell(1,3).setValue(bRow);

  var after = Browser.inputBox(before, Browser.Buttons.OK_CANCEL).toUpperCase().trim();  //would return "cancel" 
  toilet();
  while(before != "CANCEL" && after != "CANCEL"){
    var aRow = findSoma(after);
    aRow = "A" + aRow + ":" + aRow;
    ss.setActiveSelection(aRow).activate();
    
    var Nrow = ss.getActiveRange();
    Nrow.getCell(1, 1).setValue(after);
    Nrow.getCell(1,2).setValue(/*Orow.getCell(1,2).getValue() + */1);
    Nrow.getCell(1,3).setValue(aRow);
    
    toilet();
    
    var TCol = findNeurPointer(Orow.getRow(), after);
    Orow.getCell(1,TCol).setValue(after);
    TCol++;
    Orow.getCell(1,TCol).setValue(Orow.getCell(1,TCol).getValue() + 1);
    TCol++;
    Orow.getCell(1,TCol).setValue(aRow);
    
    toilet();
    
    before = after;
    Orow = Nrow;
    
    after = Browser.inputBox(before, Browser.Buttons.OK_CANCEL).toUpperCase().trim();  //would return "cancel" 
    
  }
}