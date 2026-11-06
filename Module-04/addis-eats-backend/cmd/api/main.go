package main

import (
	"fmt"
	"strconv"
)

	// type int 

func main(){

	// fmt.Println("hello")
	var restaurant string = "Yod abyssinia"
	var city  = "Bole"
	subcity := city
	orders, revenue := "hola", 3


	fmt.Println(restaurant, orders, revenue)

	var (
		country = "africa"
		currency = 90
	)

	fmt.Println(country, currency)

	const santimPerBirr = 100
	const serviceRatePCT float64 = 3.23


	var someNum int = 92
	var withFloat = float64(someNum)

	if 0 < 1 {
		fmt.Println("true")
	}else{
		fmt.Println("false")
	}

   input := "string"

	if _, err := strconv.Atoi(input); err == nil {
		fmt.Println("faild")
	}


	for i:=0; i<=9; i++{
		fmt.Println(i)
	}


	
}