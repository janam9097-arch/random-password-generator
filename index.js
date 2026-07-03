
function generatePassword(length,includeNumber,includeLowercase,includeUppercase,includeSymbols){
      
      const LowercaseChar = "abcdefghijklmnopqrstuvwxyz";
      const UppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const NumberChar = "0123456789";
      const SymboolChar = "!@#$%&*()_+:<>?/"

      let allowedChar = "";
      let password = "";

      allowedChar += includeNumber ?  NumberChar : "";
      allowedChar += includeLowercase ?  LowercaseChar : "";
      allowedChar += includeUppercase ?  UppercaseChar : "";
      allowedChar += includeSymbols ?  SymboolChar : "";

      if(length <= 0){
        return "Password must be least 1";
      }
      if(allowedChar.length === 0){
        return "least select one Characters"
      }
      for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex];
      }


      
      return password;
    } 
function btn(){
const passwordLength = 12;
const includenumber = true;
const includeLowercase = true;
const includeUppercase = true;
const includesymbols = true;


const password = generatePassword(passwordLength,
                                  includenumber,
                                  includeLowercase,
                                  includeUppercase,
                                  includesymbols);

    document.getElementById("result").textContent=password;
} 