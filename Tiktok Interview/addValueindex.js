function getPrintedStrings(commands) {
    // Write your code here
    let currString = "";
    let currCursor = 0;
    const res = [];
    
    for(const [action, value] of commands){
        const x = parseInt(value, 10);
        
        switch(action){
            case "Insert":
                currString = currString.substring(0, currCursor) + value + currString.substring(currCursor);
                currCursor += value.length;
                break;
            case "Print":
                const start = Math.max(currCursor - x, 0);
                const end = Math.min(currCursor + x, currString.length);
                res.push(currString.substring(start, end));
                break;
            case "Left":
                currCursor = Math.max(0, currCursor - x);
                break;
            case "Right":
                currCursor = Math.min(currString.length, currCursor + x);
                break;
            case "Backspace":
               currCursor = Math.max(0, currCursor - x);
               currString = currString.substring(0, currCursor) + currString.substring(currCursor + x);             
               break;
            case "Delete":
                currString = currString.substring(0, currCursor) + currString.substring(currCursor + x);
                break;
            default:
                break;
        }
    }
    
    return res;
}
