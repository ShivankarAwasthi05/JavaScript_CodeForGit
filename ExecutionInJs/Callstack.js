/* Call Stack Working for Program Execution in Javascript 
1) In Javascript in CallStack Program Execution :
        !         !
        !         !
        !         !
        !         !
        !         !
        !_________!         
    In this callStack first the global execution stack will activate for the code and then after all the other methods will run one by one.

    Suppose we have four methods 1)one() 2)two() 3)three() 4)four()

    In this case the first thing happen is that the global execution context / environment will activate and then after if well call the function one() and two() and three() and four().
    one after execution after the completion of the first one.
    
    Means if we call one() methods first the it will undergo the stack and executed and after that the method comes out of the stack.

    then two() ,three()and four() similarly.


2) Now in case if we call nested function in javascript the in which order the function will executed the go in the stack for execution let's discuss.

If we have function one() and inside this function we have another function two() and inside this we have another function three() and inside this we have another function four().

Call Stack look like this :

                       four()
                       three()
                       two()
                       one()
                       global execution context

 Now this in this case the call stack will call the global execution context will call first and then one () and then two() and then three() and then four().

 Now in this case the method four() will completely execute first then return to function three() and then function will execute and then return to function two() and then the function two will execute and return to function one() and then at last function one will executed and return to the global execution context and then after the execution  of all the methods in the call stack the global execution context will execute and free the call stack and program execution completed and return out the result of the progam.
*/