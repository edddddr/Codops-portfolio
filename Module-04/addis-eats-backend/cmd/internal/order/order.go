package order


import "fmt"


func ServiceFeeSantim(subtotal int) int {
    return int(float64(subtotal) * 0.05)
}
 
// shared type: written once, not twice
func LineTotal(priceSantim, qty int) int {
    return priceSantim * qty
}
 
// exported: capital letter, visible outside the package
func TotalSantim(subtotal, fee, delivery int) int {
    return subtotal + fee + delivery
}


func DeliveryFeeSantim(area string) (int, error){
	switch area {
    case "Bole":
        return 3000, nil
    case "Kazanchis":
        return 3500, nil
    }
    return 0, fmt.Errorf("unserved area %q", area)

}