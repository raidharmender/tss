/*
 * Complete the 'logicalColors' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. BOOLEAN x
 *  2. BOOLEAN y
 */
/*
Truth Table
X Y
T T
T F
F T
F F
*/

function logicalColors(x, y) {
    if (x) {
        if (y) { return "Red";}
        else {return "Blue";}
    }
    /* x is now false */ 
    else if (!y) {
      return "Yellow";
    } 
    else {
      return "Purple";
    }
  }