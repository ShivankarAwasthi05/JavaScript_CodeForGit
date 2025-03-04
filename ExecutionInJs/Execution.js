// JavaScript Execution Context 

/*
1) {}-> Global Execution Context.
2) Function / Functional / Local Execution Contect.
3) Eval Execution Indext.

-> Phases in Which the pragram in javascript Executed:
1)Memory Creation Phase / Creation Phase.
2)Execution Phase.

                                                let val1 = 10;
                                                let val2 = 20;
                                                function addNum(num1,num2){
                                                let total =num1+num2;
                                                return total
                                                }
                                                let result1=addNum(val1,val2);
                                                let result2=addNum(1,2);
 
Proceed With This Code :

1)Global Execution / Global Environment:
 In this the global execution  define with all the scope with the (this) keyword.

2)Memory Creation Phase: 
In this all the variables get the location or memory where these variable stores the data.

Example:
val1 = undefined
val2 = undefined
addNum = function Definition
result1 = undefined
result2 = undefined

3)Execution Phase
val1 <- 10
val2 <- 20

addNum: Now for addNum a new Variable Environment is created to Execute the Opeartion define in the addNum along with the Execution Thread.

Now the Two Stages for Program Execution in javascript i.e Memory Creation Phase and Execution Phase will be created for the function addNum.

Memory Creation for addNum:
val1 = undefined
val2 = undefined
total = undefined

Excution Phase for addNum:
num1 <- 10
num2 <- 20
total <- 30 : This total will reflect in the global execution context of the code

Note: After returning the total to global execution context this variable environment and Execution thread will automaticaly deleted and corresponding value will reflect in the Parent or global execution environment.

Returning to Execution Phase of global Execution context :
val1 <- 10
val2 <- 20 
result1 <- 30

As we can see in the code the addNum called again so the variable environment and execution thread will be created again.

Memory Creation for addNum:
val1 = undefined
val2 = undefined
total = undefined

Execution Phase for addNum:
num1 <- 1
num2 <- 2
total <- 3

Note: After returning the total to global execution context this variable environment and Execution thread will automaticaly deleted and corresponding value will reflect in the Parent or global execution environment.


Returning to Execution Phase of global Execution context :
val1 <- 10
val2 <- 20 
result1 <- 30
result2 <-3




 */