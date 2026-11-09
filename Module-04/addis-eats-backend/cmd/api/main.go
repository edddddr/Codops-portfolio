package main

import (
	"fmt"
	"github.com/edddddr/addis-eats-backend/internal/order"
	// "strconv"
)

	// type int 


func caller(i *int) int{
	return *i
}


func main(){

	// fmt.Println("hello")
// 	var restaurant string = "Yod abyssinia"
// 	var city  = "Bole"
// 	subcity := city
// 	orders, revenue := "hola", 3


// 	fmt.Println(restaurant, orders, revenue, subcity)

// 	var (
// 		country = "africa"
// 		currency = 90
// 	)

// 	fmt.Println(country, currency)

// 	const santimPerBirr = 100
// 	const serviceRatePCT float64 = 3.23


// 	var someNum int = 92
// 	var withFloat = float64(someNum)

// 	fmt.Println(withFloat)
// 	if 0 < 1 {
// 		fmt.Println("true")
// 	}else{
// 		fmt.Println("false")
// 	}

//    input := "string"

// 	if _, err := strconv.Atoi(input); err == nil {
// 		fmt.Println("faild")
// 	}


// 	for i:=0; i<=9; i++{
// 		fmt.Println(i)
// 	}



	dish:= make(map[string]int)
	var santim float64
	
	dish["Doro wat"] = 18500
	dish["Shiro"] = 12000
	dish["Tibs"] = 2400
	dish["Ingera basket"] = 2400


	var sum int
	for i, d := range dish{
		fmt.Println(i, d)
		sum += d
		santim = float64(sum)
	}


	total := santim * 1.05
	 

	area := "Bole"
	feeSantim := 0
	

	switch area {
		case "Bole":
			feeSantim = 3000
		case "Kazanchis":
			feeSantim = 3500
		case "Piassa", "Megenagna":   // multiple values
			feeSantim = 0
		default:
			feeSantim = 5000          // outside the served areas
	}
	fmt.Printf("Total: %.2f\n", total)
	fmt.Println("The fee in santim is:", feeSantim, )

	b := 100
	// var a *int
	a := &b
	
	fmt.Println(caller(a))

	order.


}