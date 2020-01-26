type OuterStruct {
	attribute string
	Private struct {
		 attribute2 string
	}
}

o := OuterStruct {
	attribute: "foo",
	Private: struct {
		attribute2 string
	} {
		 "bar",
	},
}
