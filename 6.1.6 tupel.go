package main

import "fmt"

type Pair struct {
	 a, b interface{}
}

func main() {
	 p1 := Pair{"finished", 42}
	 p2 := Pair{6.1, "hello"}
	 fmt.Println("p1=", p1, "p2=", p2)
	 fmt.Println("p1.b", p1.b)
	 s := p1.a.(string) + " now"
	 fmt.Println("p1.a", s)
}
