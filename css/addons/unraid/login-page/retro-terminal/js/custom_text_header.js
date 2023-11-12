
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
    ____                 _        __       _____                               
   / __ \ ____ _ ____   (_)___   / /      / ___/ ___   _____ _   __ ___   _____
  / / / // __ `// __ \ / // _ \ / /______ \__ \ / _ \ / ___/| | / // _ \ / ___/
 / /_/ // /_/ // / / // //  __// //_____/___/ //  __// /    | |/ //  __// /    
/_____/ \__,_//_/ /_//_/ \___//_/       /____/ \___//_/     |___/ \___//_/     
                                                                               
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
