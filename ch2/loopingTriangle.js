/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (i = 1; i < 8; i++){
    let output = "#";
    console.log(output.repeat(i));
}