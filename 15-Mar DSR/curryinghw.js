function mul(a) {
        return function(b)
        {
    
            if(b) {
                return mul(a*b);
            }
            else {
    
                return a
            }
        }
    }
    
    console.log(mul(10)(20)(30)());